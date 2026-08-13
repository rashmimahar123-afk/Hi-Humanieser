import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import {
  ALL_USERS_DATA,
  MY_PROFILE_RESPONSE,
  ORGANISATION_DATA,
} from "../../Types/ResponseTypes";
import { formatJoinedDate } from "@/src/lib/Helpers";
import { useEffect, useRef, useState } from "react";
import { useEditUserMutation } from "../../Hooks/useEditUserMutation";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { openChampionModal } from "../ChampionModal/ChampionModal";
import { useTogglePartnerRoleMutation } from "../../Hooks/useTogglePartnerRoleMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";

type PROFILE_DATA_PROPS = {
  profileData?: MY_PROFILE_RESPONSE;
  // organizationData: ORGANISATION_DATA;
  loggedInUserDetails?: ALL_USERS_DATA;
  teamName?: string;
  handleBecomePartner: () => void;
};

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const COMPRESSION_QUALITY = 0.8; // 80% quality for JPEG
const MAX_DIMENSIONS = { width: 1000, height: 1000 };

const compressImage = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let { width, height } = img;

        // Resize if dimensions are too large
        if (width > MAX_DIMENSIONS.width || height > MAX_DIMENSIONS.height) {
          const aspectRatio = width / height;
          if (width > height) {
            width = MAX_DIMENSIONS.width;
            height = Math.round(width / aspectRatio);
          } else {
            height = MAX_DIMENSIONS.height;
            width = Math.round(height * aspectRatio);
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Failed to get canvas context"));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);

        // Convert to blob with quality compression
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error("Failed to compress image"));
            }
          },
          "image/jpeg",
          COMPRESSION_QUALITY,
        );
      };

      img.onerror = () => {
        reject(new Error("Failed to load image"));
      };

      img.src = event.target?.result as string;
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file"));
    };

    reader.readAsDataURL(file);
  });
};

function PartnerProfile(props: PROFILE_DATA_PROPS) {
  const { profileData, loggedInUserDetails, teamName, handleBecomePartner } =
    props;
  const [profileImage, setProfileImage] = useState<string | StaticImageData>(
    profileData?.profile_picture_path || images.dummyUser,
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { user } = useAuthValue();
  const [uploadError, setUploadError] = useState<string>("");
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (profileData?.profile_picture_path) {
      setProfileImage(profileData.profile_picture_path);
    }
  }, [profileData?.profile_picture_path]);

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const { mutate: editUser, isPending } = useEditUserMutation();

  /**
   * Converts a Blob to base64
   */
  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(blob);
    });
  };

  /**
   * Validates file type and size
   */
  const validateImage = (file: File): { valid: boolean; error?: string } => {
    // Check file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return {
        valid: false,
        error: "Please upload a JPEG, PNG, or WebP image",
      };
    }

    // Check file size (before compression)
    if (file.size > MAX_FILE_SIZE) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);

      SnackbarHandler.errorToast(
        `File is too large (${sizeMB}MB). Maximum allowed size is 2MB.`,
      );

      return {
        valid: false,
        error: `File is too large (${sizeMB}MB). Maximum is 2MB.`,
      };
    }

    return { valid: true };
  };
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("1. Image input changed");
    setUploadError(""); // Clear previous errors

    if (isPending) {
      console.log("2. Mutation already pending");
      return;
    }

    const file = e.target.files?.[0];

    if (!file) {
      console.log("2. No file selected");
      return;
    }

    console.log("3. Selected file:", file.name, file.type, file.size);

    // Validate file before processing
    const validation = validateImage(file);
    if (!validation.valid) {
      console.error("Validation error:", validation.error);
      setUploadError(validation.error || "Invalid file");
      return;
    }

    try {
      console.log("4. Compressing image...");
      const compressedBlob = await compressImage(file);
      const compressedSizeMB = (compressedBlob.size / (1024 * 1024)).toFixed(2);
      console.log(
        `5. Image compressed: ${file.size} → ${compressedBlob.size} bytes (${compressedSizeMB}MB)`,
      );

      const base64 = await blobToBase64(compressedBlob);
      console.log("6. Base64 generated:", base64.substring(0, 100));

      setProfileImage(base64);

      const payload = {
        target_email: profileData?.email || "",
        profile_picture_base64: base64,
      };

      console.log("7. Edit user payload size:", {
        target_email: payload.target_email,
        profile_picture_base64_length: payload.profile_picture_base64.length,
      });

      editUser(payload, {
        onSuccess: (response) => {
          console.log("8. Edit user API SUCCESS:", response);
          setProfileImage(base64);
          setUploadError(""); // Clear error on success
        },
        onError: (error) => {
          console.error("8. Edit user API ERROR:", error);
          setUploadError("Failed to upload image. Please try again.");
          setProfileImage(
            profileData?.profile_picture_path || images.dummyUser,
          );
        },
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Image processing failed:", errorMessage);
      setUploadError(`Error processing image: ${errorMessage}`);
    } finally {
      // Reset input so same image can be selected again
      e.target.value = "";
    }
  };
  return (
    <section className="relative rounded-[18px] sm:rounded-[24px] bg-[#F8E1B8] px-4 sm:px-8 md:px-14 py-8 sm:py-10 md:py-12 overflow-hidden">
      {/* Right Pattern — FIX: hidden on mobile so it doesn't overlap the name */}
      <div className="absolute right-3 sm:right-6 md:right-12 top-3 sm:top-6 md:top-12 pointer-events-none">
        <Image
          src={images.dotsPattern}
          alt="pattern"
          width={270}
          height={270}
          className="w-[80px] sm:w-[170px] md:w-[220px] lg:w-[270px] h-auto opacity-40 sm:opacity-100"
        />
      </div>

      {/*
        FIX: Top row — was flex items-center justify-between with no wrapping.
        On mobile: stack avatar + info vertically. On sm+: go side by side.
        Added min-w-0 + pr on the info side so text doesn't run under the dots pattern.
      */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16 items-start sm:items-center">
        {/* Profile Image */}
        <div className="flex flex-col items-center shrink-0">
          <div className="h-[80px] w-[80px] sm:h-[96px] sm:w-[96px] rounded-full overflow-hidden">
            {isPending ? (
              <span className="text-xs text-[#0F4F58]">Uploading...</span>
            ) : (
              <Image
                src={profileImage}
                alt="Profile"
                width={168}
                height={168}
                unoptimized
                className="object-cover w-full h-full"
              />
            )}
          </div>
          <p
            className="mt-2 text-[13px] sm:text-[15px] md:text-[16px] text-[#0F4F58] font-[Roboto] cursor-pointer"
            onClick={handleImageClick}
          >
            add/edit picture
          </p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* User Info — FIX: min-w-0 prevents flex child overflow, pr avoids dots overlap */}
        <div className="flex-1 min-w-0 pr-[90px] sm:pr-[180px] md:pr-0">
          {/* FIX: text-[48px] was far too large on mobile — truncate prevents overflow */}
          <h2 className="text-[26px] sm:text-[34px] md:text-[48px] font-bold text-[#0F4F58] truncate">
            {profileData?.first_name} {profileData?.last_name}
          </h2>

          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#0F4F58] mt-1 sm:mt-2">
            Joined {formatJoinedDate(loggedInUserDetails?.created)}
          </p>

          <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#0F4F58]">
            Active{" "}
            {user?.user_type === 3
              ? "Partner"
              : user?.user_type === 2
                ? "Champion"
                : "Member"}{" "}
            in Hi Humaniser!
          </p>
          <div className="mt-3 sm:mt-5 text-[16px] sm:text-[19px] md:text-[22px] text-[#0F4F58] font-[Roboto] font-[400] leading-6 space-y-1">
            <p>Company: {profileData?.company_name}</p>
            {user?.user_type === 2 && <p>Team: {teamName}</p>}
          </div>
        </div>
      </div>

      {/*
        FIX: "Switch to Champion" button had mr-[300px] — a fixed right margin
        that pushed it completely off-screen on mobile.
        Now it's full-width on mobile, auto-width + right-aligned on sm+.
      */}
      {typeof window !== "undefined" && user?.user_type !== 1 && (
        <div className="mt-5 sm:mt-6 flex justify-start sm:justify-end">
          <button
            className="w-full sm:w-auto md:mr-[350px] bg-[#86c9c9] px-6 py-3 rounded-full text-[#0F4F58] font-medium text-[14px] sm:text-[15px] md:text-[16px]"
            onClick={() => {
              if (user?.user_type === 3) {
                openChampionModal();
              } else {
                handleBecomePartner();
              }
            }}
          >
            {user?.user_type === 3 ? "Become a Champion" : "Switch to Partner"}
          </button>
        </div>
      )}

      {/* <div className="mt-5 sm:mt-6 flex justify-start sm:justify-end">
        <button className="w-full sm:w-auto md:mr-[350px] bg-[#86c9c9] px-6 py-3 rounded-full text-[#0F4F58] font-medium text-[14px] sm:text-[15px] md:text-[16px]">
          Switch to Champion
        </button>
      </div> */}

      {/* Input fields — FIX: stacked on mobile, inline on sm+ */}
      <div className="mt-8 sm:mt-12 max-w-3xl space-y-3 sm:space-y-6">
        {user?.user_type === 3 ? (
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
            <span className="w-full sm:w-40 text-[13px] sm:text-[16px] md:text-[18px] text-[#567F55] shrink-0">
              Full name
            </span>
            <input
              disabled
              value={`${profileData?.first_name || ""} ${profileData?.last_name || ""}`}
              className="w-full rounded-[10px] sm:rounded-[14px] bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#567F55] outline-none"
            />
          </div>
        ) : (
          <>
            {/* First Name */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
              <span className="w-full sm:w-40 text-[13px] sm:text-[15px] text-[#567F55] shrink-0">
                First Name
              </span>
              <input
                disabled
                value={profileData?.first_name || ""}
                className="w-full rounded-[10px] sm:rounded-[14px] bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#567F55] outline-none"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
              <span className="w-full sm:w-40 text-[13px] sm:text-[15px] text-[#567F55] shrink-0">
                Last Name
              </span>
              <input
                disabled
                value={profileData?.last_name || ""}
                className="w-full rounded-[10px] sm:rounded-[14px] bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#567F55] outline-none"
              />
            </div>
          </>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
          <span className="w-full sm:w-40 text-[13px] sm:text-[16px] md:text-[18px] text-[#567F55] shrink-0">
            email/username
          </span>
          <input
            disabled
            value={profileData?.email || ""}
            className="w-full rounded-[10px] sm:rounded-[14px] bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#567F55] outline-none"
          />
        </div>
      </div>

      {/* Six dots — kept absolute at bottom, just ensure z is above card bg */}
      <div className="absolute -bottom-[20px] z-10 pointer-events-none">
        <Image
          src={images.sixDots}
          alt=""
          width={116}
          height={116}
          className="w-[70px] sm:w-[90px] md:w-[116px] h-auto"
        />
      </div>
    </section>
  );
}

export default PartnerProfile;
