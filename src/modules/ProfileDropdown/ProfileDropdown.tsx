"use client";

import Image from "next/image";
import images from "@/src/assets/images";
import { USER_INFO_TYPE } from "../AuthModule/Types/CommonTypes";
import { usePathname, useRouter } from "next/navigation";
import { openLogoutModal } from "../WelcomeModule/Components/LogoutModal/LogoutModal";
import useGetMtjPollQuery from "../ChampionHubModule/Hooks/useGetMtjPollQuery";

type PROFILE_DROPDOWN_PROPS = {
  userInfo?: USER_INFO_TYPE;
};
type UserType = 1 | 2 | 3;

type MenuItem = {
  label: string;
  path: string;
};

function ProfileDropdown({ userInfo }: PROFILE_DROPDOWN_PROPS) {
  const pathname = usePathname();
  const menuByUserType: Record<UserType, MenuItem[]> = {
    1: [
      { label: "Profile", path: "/profile" },
      { label: "My Account Settings", path: "/account-setting" },
      { label: "My Pathways", path: "/my-pathways" },
      { label: "Notifications", path: "/notification" },
      { label: "Help & Feedback", path: "/help-feedback" },
      { label: "Spread The Ripple", path: "/spread-ripple" },
    ],
    2: [
      { label: "Profile", path: "/profile" },
      { label: "My Account Settings", path: "/account-setting" },
      { label: "My Team Settings", path: "/team-setting" },
      { label: "My Pathways", path: "/my-pathways" },
      { label: "Champion Hub", path: "/champion-hub" },
      { label: "Notifications", path: "/notification" },
      { label: "Spread The Ripple", path: "/spread-ripple" },
    ],
    3: [
      { label: "Profile", path: "/profile" },
      { label: "My Account Settings", path: "/account-setting" },
      { label: "Organisation Settings", path: "/organisation-setting" },
      { label: "My Pathways", path: "/my-pathways" },
      // { label: "Champion Hub", path: "/champion-hub" },
      { label: "Partner Hub", path: "/overseer-hub" },
      { label: "Notifications", path: "/notification" },
      { label: "Spread The Ripple", path: "/spread-ripple" },
    ],
  };
  if (!userInfo?.user_type) return null;

  const userType = userInfo.user_type as UserType;
  const menuItems = menuByUserType[userType] || [];
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

  const { data, isLoading } = useGetMtjPollQuery();

  const pollData = data?.data;
  const cycleStarted = pollData?.cycle_started;

  const handleChampionHubClick = () => {
    if (isLoading) return;

    if (cycleStarted) {
      router.push("/pressure-point-record");
    } else {
      router.push("/champion-hub");
    }
  };

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
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={getClass(item.path)}
            onClick={() => {
              if (item.path === "/champion-hub") {
                handleChampionHubClick();
              } else {
                router.push(item.path);
              }
            }}
          >
            {item.label}
          </li>
        ))}
        {/* Logout */}
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
