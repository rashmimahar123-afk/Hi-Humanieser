"use client";

import Image from "next/image";
import images from "@/src/assets/images";
import { USER_INFO_TYPE } from "../AuthModule/Types/CommonTypes";
import { usePathname, useRouter } from "next/navigation";
import { openLogoutModal } from "../WelcomeModule/Components/LogoutModal/LogoutModal";

type PROFILE_DROPDOWN_PROPS = {
  userInfo?: USER_INFO_TYPE;
};

function ProfileDropdown({ userInfo }: PROFILE_DROPDOWN_PROPS) {
  const pathname = usePathname();

  if (userInfo?.user_type !== 3) return null;
  const router = useRouter();

  const getClass = (path: string) =>
    `cursor-pointer  rounded transition-all ${
      pathname === path ? "bg-[#4ba6a6] text-white" : "hover:underline"
    }`;
  const isActive = [
    "/profile",
    "/account-setting",
    "/organisation-setting",
    "/my-pathways",
    "/champion-hub",
    "/overseer-hub",
    "/notification",
    "/spread-ripple",
  ].includes(pathname);
  return (
    <div
      className={`absolute right-0 top-[150px] w-[320px] bg-[#E9E6E2] rounded-xl shadow-xl p-6 z-50 ${
        isActive ? "top-[188px]" : "top-[150px]"
      }`}
    >
      {/* Menu */}
      <ul
        className="space-y-4 text-[20px]"
        style={{ fontFamily: "Aptos", color: "#0F4F58" }}
      >
        <li
          className={getClass("/profile")}
          onClick={() => router.push("/profile")}
        >
          Profile
        </li>
        <li
          className={getClass("/account-setting")}
          onClick={() => router.push("/account-setting")}
        >
          My Account Settings
        </li>
        <li
          className={getClass("/organisation-setting")}
          onClick={() => router.push("/organisation-setting")}
        >
          Organisation Settings
        </li>
        <li
          className={getClass("/my-pathways")}
          onClick={() => router.push("/my-pathways")}
        >
          My Pathways
        </li>
        <li
          className={getClass("/champion-hub")}
          onClick={() => router.push("/champion-hub")}
        >
          Champion Hub
        </li>
        <li
          className={getClass("/overseer-hub")}
          onClick={() => router.push("/overseer-hub")}
        >
          Partner Hub
        </li>
        <li
          className={getClass("/notification")}
          onClick={() => router.push("/notification")}
        >
          Notifications
        </li>
        <li
          className={getClass("/spread-ripple")}
          onClick={() => router.push("/spread-ripple")}
        >
          Spread the Ripple
        </li>
        <li
          className="cursor-pointer hover:underline"
          onClick={() => openLogoutModal()}
        >
          Logout
        </li>
      </ul>
    </div>
  );
}

export default ProfileDropdown;
