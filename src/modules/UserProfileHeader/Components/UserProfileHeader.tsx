import Image from "next/image";
import images from "@/src/assets/images";
import { useState } from "react";
import ProfileDropdown from "../../ProfileDropdown/ProfileDropdown";
import { USER_INFO_TYPE } from "../../AuthModule/Types/CommonTypes";
import { useRouter } from "next/navigation";
import useMyProfileQuery from "../../ProfileModule/Hooks/useMyProfileQuery";

type USER_PROFILE_HEADER_PROPS = {
  greetingColor?: string;
  nameColor?: string;
  hideUserProfile?: boolean;
  userInfo?: USER_INFO_TYPE;
};

function UserProfileHeader(props: USER_PROFILE_HEADER_PROPS) {
  const { greetingColor, nameColor, hideUserProfile, userInfo } = props;
  const [openDropdown, setOpenDropdown] = useState(false);
  const router = useRouter();
  const { data, isLoading } = useMyProfileQuery();
  const profileData = data?.data;
  return (
    <>
      <div className="flex justify-between items-start gap-2">
        {/* Left */}
        <div className="min-w-0 flex-1">
          <div
            onClick={() => router.push("/home")}
            className="cursor-pointer inline-block"
          >
            <div
              style={{
                fontFamily: "Aptos",
                fontSize: "22px",
                color: greetingColor,
                whiteSpace: "nowrap",
              }}
            >
              Hi Humaniser!{" "}
              <span
                style={{
                  fontSize: "0.55em",
                  verticalAlign: "super",
                  lineHeight: 0,
                }}
              >
                ™
              </span>
            </div>

            <h1
              className="mt-2 font-bold leading-none"
              style={{
                fontFamily: "RocaTwo-Bold",
                color: nameColor,
                fontSize: "clamp(32px, 8vw, 56px)",
              }}
            >
              Hi {profileData?.first_name || ""}!
            </h1>
          </div>
        </div>

        {/* Right profile */}
        {!hideUserProfile && (
          <div
            className="flex items-start gap-2 cursor-pointer flex-shrink-0"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <div
              className="text-right font-semibold mt-[28px]"
              style={{
                fontFamily: "Aptos",
                color: nameColor,
                fontSize: "clamp(12px, 3vw, 16px)",
              }}
            >
              {profileData?.first_name || ""}
              <br />
              {profileData?.last_name || ""}
            </div>
            <div className="relative w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] flex-shrink-0">
              {/* Green shape */}
              <Image
                src={images.greenRec}
                alt="Decorative Rectangle"
                fill
                className="object-contain"
              />
              {/* Circular profile image */}
              <div className="absolute inset-0 flex items-center justify-center mr-[8px] sm:mr-[11px]">
                <div className="w-[52px] h-[52px] sm:w-[80px] sm:h-[80px] rounded-full overflow-hidden bg-white">
                  <Image
                    src={images.dummyUser}
                    alt="Profile Picture"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {openDropdown && <ProfileDropdown userInfo={userInfo} />}
    </>
  );
}

export default UserProfileHeader;
