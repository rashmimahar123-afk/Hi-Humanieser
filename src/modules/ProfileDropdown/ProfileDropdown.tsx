"use client";

import Image from "next/image";
import images from "@/src/assets/images";
import { USER_INFO_TYPE } from "../AuthModule/Types/CommonTypes";
import { useRouter } from "next/navigation";

type PROFILE_DROPDOWN_PROPS = {
  userInfo?: USER_INFO_TYPE;
};

function ProfileDropdown({ userInfo }: PROFILE_DROPDOWN_PROPS) {
  if (userInfo?.user_type !== 3) return null;
  const router = useRouter();

  return (
    <div className="absolute right-0 top-[150px] w-[320px] bg-[#E9E6E2] rounded-xl shadow-xl p-6 z-50">
      {/* Menu */}
      <ul
        className="space-y-4 text-[20px]"
        style={{ fontFamily: "Aptos", color: "#0F4F58" }}
      >
        <li className="cursor-pointer hover:underline">Profile</li>
        <li className="cursor-pointer hover:underline">My Account Settings</li>
        <li
          className="cursor-pointer hover:underline"
          onClick={() => router.push("/organisation-setting")}
        >
          Organisation Settings
        </li>
        <li
          className="cursor-pointer hover:underline"
          onClick={() => router.push("/my-pathways")}
        >
          My Pathways
        </li>
        <li className="cursor-pointer hover:underline">
          Champion Hub (if applicable)
        </li>
        <li className="cursor-pointer hover:underline">Overseer Hub</li>
        <li className="cursor-pointer hover:underline">Notifications</li>
        <li className="cursor-pointer hover:underline">Spread the Ripple</li>
        <li className="cursor-pointer hover:underline">Logout</li>
      </ul>
    </div>
  );
}

export default ProfileDropdown;
