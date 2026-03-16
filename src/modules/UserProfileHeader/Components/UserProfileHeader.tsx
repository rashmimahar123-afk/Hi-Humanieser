import Image from "next/image";
import images from "@/src/assets/images";
import { useState } from "react";
import ProfileDropdown from "../../ProfileDropdown/ProfileDropdown";
import { AUTH_STATE, USER_INFO_TYPE } from "../../AuthModule/Types/CommonTypes";

type USER_PROFILE_HEADER_PROPS = {
  greetingColor?: string;
  nameColor?: string;
  hideUserProfile?: boolean;
  userInfo?: USER_INFO_TYPE;
};

function UserProfileHeader(props: USER_PROFILE_HEADER_PROPS) {
  const { greetingColor, nameColor, hideUserProfile, userInfo } = props;

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
      {/* Overlay content */}
      <div className="flex justify-between">
        {" "}
        {/* Left */}
        <div>
          <div
            style={{
              fontFamily: "Aptos",
              fontSize: "22px",
              color: greetingColor,
            }}
          >
            Hi Humaniser! <span className="align-super text-[0.7em]">™</span>
          </div>

          <h1
            className="mt-4 text-[56px]  font-bold leading-[40%]"
            style={{ fontFamily: "RocaTwo-Bold", color: nameColor }}
          >
            Hi Maria!
          </h1>
        </div>
        {/* Right profile */}
        {!hideUserProfile && (
          <div
            className="flex items-start gap-3 cursor-pointer"
            onClick={() => setOpenDropdown(!openDropdown)}
          >
            <div
              className={"text-right font-semibold mt-[28px] "}
              style={{ fontFamily: "Aptos", color: nameColor }}
            >
              Maria
              <br />
              Palacios
            </div>
            <div className="relative w-[120px] h-[120px]">
              {/* Green shape */}
              <Image
                src={images.greenRec}
                alt="Decorative Rectangle"
                fill
                className="object-contain"
              />

              {/* Circular profile image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-white">
                  <Image
                    src={images.userProfile}
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
