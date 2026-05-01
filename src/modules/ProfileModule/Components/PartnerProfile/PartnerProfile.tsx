import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import {
  MY_PROFILE_RESPONSE,
  ORGANISATION_DATA,
} from "../../Types/ResponseTypes";
import { formatJoinedDate } from "@/src/lib/Helpers";
import { useRef, useState } from "react";
import { useEditUserMutation } from "../../Hooks/useEditUserMutation";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { openChampionModal } from "../ChampionModal/ChampionModal";

type PROFILE_DATA_PROPS = {
  profileData: MY_PROFILE_RESPONSE;
  organizationData: ORGANISATION_DATA;
};

function PartnerProfile(props: PROFILE_DATA_PROPS) {
  const { profileData, organizationData } = props;
  const [profileImage, setProfileImage] = useState<string | StaticImageData>(
    images.dummyUser,
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { user } = useAuthValue();
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const { mutate: editUser, isPending } = useEditUserMutation();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPending) return;

    const file = e.target.files?.[0];
    if (!file) return;

    const base64 = await convertToBase64(file);

    editUser(
      {
        target_email: profileData?.email || "",
        profile_picture_base64: base64,
      },
      {
        onSuccess: () => {
          const imageUrl = URL.createObjectURL(file);
          setProfileImage(imageUrl);
        },
      },
    );
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
            Joined {formatJoinedDate(organizationData?.date_created)}
          </p>

          <p className="text-[13px] sm:text-[15px] md:text-[16px] text-[#0F4F58]">
            Active Partner in Hi Humaniser!
          </p>

          <p className="text-[16px] sm:text-[18px] md:text-[22px] text-[#0F4F58] mt-3 sm:mt-4">
            Company: {profileData?.company_name || ""}
          </p>
        </div>
      </div>

      {/*
        FIX: "Switch to Champion" button had mr-[300px] — a fixed right margin
        that pushed it completely off-screen on mobile.
        Now it's full-width on mobile, auto-width + right-aligned on sm+.
      */}
      <div className="mt-5 sm:mt-6 flex justify-start sm:justify-end">
        <button
          className="w-full sm:w-auto md:mr-[350px] bg-[#86c9c9] px-6 py-3 rounded-full text-[#0F4F58] font-medium text-[14px] sm:text-[15px] md:text-[16px]"
          onClick={openChampionModal}
        >
          Become a Champion
        </button>
      </div>

      {/* <div className="mt-5 sm:mt-6 flex justify-start sm:justify-end">
        <button className="w-full sm:w-auto md:mr-[350px] bg-[#86c9c9] px-6 py-3 rounded-full text-[#0F4F58] font-medium text-[14px] sm:text-[15px] md:text-[16px]">
          Switch to Champion
        </button>
      </div> */}

      {/* Input fields — FIX: stacked on mobile, inline on sm+ */}
      <div className="mt-8 sm:mt-12 max-w-3xl space-y-3 sm:space-y-6">
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
