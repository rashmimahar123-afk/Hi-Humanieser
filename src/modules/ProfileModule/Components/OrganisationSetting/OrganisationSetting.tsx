import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import AddMemberModal, {
  openAddMemberModal,
} from "../AddMemberModal/AddMemberModal";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function OrganisationSetting() {
  const router = useRouter();
  const { user } = useAuthValue();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);
  return (
    <>
      <div
        className={`relative min-h-screen bg-[#F8F4EE] px-8 py-10 font-serif  z-10 page ${
          enter ? "enterActive" : "enter"
        }`}
      >
        <div>
          <UserProfileHeader
            greetingColor="#0f4f58"
            nameColor="#0F4F58"
            userInfo={user}
          />
        </div>
        <Image
          src={images.quizPolygon}
          alt="quiz-polygon"
          width={630}
          height={630}
          className="absolute top-0 right-0 -z-10 pointer-events-none"
        />
        {/* Header */}
        <div className="flex justify-between items-start mb-10">
          <div className="ml-[37px]">
            <h2 className="text-[45px] font-bold text-[#0F3D3E] font-[RocaTwo] ">
              Organisation Settings
            </h2>
            <div className="font-bold text-[22px] font-[Roboto] text-[#0f4f58] ml-4">
              Shape how Hi Humaniser!™ works across your organisation.
            </div>
            <p className="text-[#0f4f58] mt-2 ml-4 font-[Roboto] text-[22px]">
              Configure teams, assign Champions, and manage access so progress,
              clarity, and performance can scale.
            </p>
          </div>
        </div>

        {/* Organisation Detail Section */}
        <div className="bg-[#F6E3BB] rounded-3xl p-10 ">
          <h2 className="text-[32px] font-[RocaTwo] text-[#567F55] ">
            Organisation Details
          </h2>

          <div className="space-y-6 mt-4">
            {/* Organisation Name */}
            <div className="flex items-center">
              <label className=" text-[#567F55] text-[20px] font-[Roboto]">
                Organisation Name
              </label>

              <input
                type="text"
                placeholder="Can not be changed"
                disabled
                className="flex-1 bg-[#ffffff] text-[#567F55] italic text-[18px] 
             px-6
          pr-10
          h-[41px]
          w-[416px] rounded-[12px] outline-none font-[Roboto] ml-[50px]"
              />
            </div>

            {/* Number of Seats */}
            <div className="flex items-center">
              <label className=" text-[#567F55] text-[20px] font-[Roboto]">
                Number of Seats
              </label>

              <div className="flex items-center gap-6">
                <input
                  type="text"
                  className="bg-[#ffffff] text-[#0F4F58] text-[18px]
                px-6
          pr-10
          h-[41px]
          w-[416px] rounded-[12px] outline-none font-[Roboto] ml-[70px]"
                />

                <button className="text-[#567F55] text-[17px] font-[Roboto]">
                  Edit
                </button>
              </div>
            </div>

            {/* Tier */}
            <div className="flex items-center">
              <label className="text-[#567F55] text-[20px] font-[Roboto]">
                Tier
              </label>

              <div className="flex items-center gap-6 flex-1">
                <input
                  type="text"
                  placeholder="Explore / Core / Launch / Partnership"
                  className="flex-1 bg-[#ffffff] text-[#567F55] text-[18px]
              px-6
          pr-10
          h-[41px]
          w-[416px] rounded-[12px] outline-none font-[Roboto] ml-[170px]"
                />

                {/* Info Icon */}
                <div
                  className="w-[40px] h-[40px] rounded-full border-2 border-[#1D5C63] 
            flex items-center justify-center"
                >
                  <span className="text-[#1D5C63] text-[28px] font-semibold">
                    i
                  </span>
                </div>

                <button className="text-[#567F55] text-[17px] font-[Roboto]">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F6E3BB] rounded-3xl p-10 mt-10">
          <div className="flex items-center gap-6 mt-4">
            <h2 className="text-[32px] font-[RocaTwo] text-[#567F55]">
              Create Teams
            </h2>

            {/* Info Icon */}
            <div className="w-[40px] h-[40px] rounded-full border-2 border-[#1D5C63] flex items-center justify-center">
              <span className="text-[#1D5C63] text-[30px] font-semibold">
                i
              </span>
            </div>
          </div>

          {/* Name Row */}
          <div className="flex items-start gap-12 mt-4">
            <label className="text-[#567F55] text-[20px] font-[Roboto]">
              Name
            </label>

            <div className="flex items-center gap-8 flex-1">
              <input
                type="text"
                className="flex-1 bg-[#ffffff] rounded-[12px]
             px-6
          pr-10
          h-[41px]
          w-[416px] text-[18px] text-[#0F4F58] outline-none font-[Roboto] ml-[105px]"
              />

              <button
                className="px-6
          pr-10
          h-[41px]
          w-[200px] bg-[#ffffff] rounded-[12px]
            text-[18px] text-[#567F55] font-[Roboto]"
              >
                Add Team
              </button>
            </div>
          </div>

          {/* Helper Text */}
          <p className="ml-[192px] max-w-[900px] text-[20px] text-[#567F55] leading-[40px] font-[Roboto] mt-2">
            Teams help you run rituals and track progress. Add as many as you
            like. Each team must have a unique name so they’re easy to find and
            track.
          </p>

          {/* List of Teams */}
          <div className="flex items-center gap-12 mt-4">
            <label className="w-[150px] text-[#567F55] text-[20px] font-[Roboto] leading-tight">
              List of teams created
            </label>

            <div className="relative flex-1">
              <select
                className="appearance-none
            bg-[#ffffff] rounded-[12px]
            px-6
          pr-10
          h-[41px]
          w-full
            text-[18px] text-[#4E6E5D]
            outline-none font-[Roboto]"
              >
                <option>it can only show the Champion’s teams (max 2)</option>
              </select>

              {/* Custom Dropdown Arrow */}
              <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2">
                <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[22px] border-t-[#0F4F58]" />
              </div>
            </div>
          </div>
        </div>
        {/* Invite Members */}
        <div className="bg-[#F6E3BB] rounded-3xl p-10 mt-10">
          <div className="flex justify-between items-start ">
            <h2 className="text-[32px] font-[RocaTwo] text-[#567F55]">
              Invite Users
            </h2>

            <div className="flex items-center gap-6">
              <p className="text-[20px] text-[#567F55] text-right leading-snug max-w-[200px]">
                Number of seats left in your company
              </p>

              <div
                className=" px-6
          pr-10
          h-[41px]
          w-[100px] bg-[#ffffff] rounded-[12px]"
              />
            </div>
          </div>

          <div className="space-y-6 mt-4">
            {/* Full Name */}
            <div className="flex items-center gap-16">
              <label className="w-[220px] text-[22px] text-[#567F55] font-[Roboto]">
                Full Name
              </label>

              <input
                type="text"
                className="flex-1 bg-[#ffffff] rounded-[12px]
           px-6
          pr-10
          h-[41px]
          w-[416px]  text-[18px] text-[#0F4F58] outline-none font-[Roboto]"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-16">
              <label className="w-[220px] text-[22px] text-[#567F55] font-[Roboto]">
                email
              </label>

              <input
                type="email"
                className="flex-1  bg-[#ffffff] rounded-[12px]
              px-6
          pr-10
          h-[41px]
          w-[416px] text-[20px] text-[#0F4F58] outline-none font-[Roboto]"
              />
            </div>

            {/* Role Section */}
            <div className="flex items-start gap-16">
              <label className="w-[220px] text-[22px] text-[#567F55] font-[Roboto]">
                Role
              </label>

              <div className="flex items-start gap-8">
                {/* Role Card */}
                <div
                  className="
        bg-[#ffffff]
        rounded-[16px]
        px-6
        py-6
        w-[416px]
        flex
        flex-col
        gap-6
      "
                >
                  {["Member", "Champion", "Overseer"].map((role) => (
                    <label
                      key={role}
                      className="flex items-center gap-6 text-[22px] text-[#3F8A8A] font-[Roboto] cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="role"
                        className="w-[20px] h-[20px] accent-[#3F8A8A] cursor-pointer"
                      />
                      {role}
                    </label>
                  ))}
                </div>

                {/* Info Icon */}
                <div className="mt-6">
                  <div className="w-[40px] h-[40px] rounded-full border-2 border-[#1D5C63] flex items-center justify-center">
                    <span className="text-[#1D5C63] text-[28px] font-semibold">
                      i
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Dropdown */}
            <div className="flex items-center gap-16">
              <label className="w-[220px] text-[22px] text-[#567F55] font-[Roboto]">
                Team
              </label>

              <div className="relative flex-1">
                <select
                  className="appearance-none 
              bg-[#ffffff] rounded-[12px]
               px-6
          pr-10
          h-[41px]
          w-full text-[20px]
              text-[#4E6E5D] outline-none font-[Roboto]"
                >
                  <option>Block if adding an Overseer</option>
                </select>

                {/* Custom Arrow */}
                <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[22px] border-t-[#0F4F58]" />
                </div>
              </div>

              {/* Info Icon */}
              <div className="w-[40px] h-[40px] rounded-full border-2 border-[#1D5C63] flex items-center justify-center">
                <span className="text-[#1D5C63] text-[30px] font-semibold">
                  i
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-center mt-20">
            {/* Helper Text */}
            <div className="flex items-start gap-6 max-w-[700px]">
              <Image src={images.screwImg} alt="info" width={40} height={40} />

              <div className="text-[18px] text-[#567F55] leading-[20px] font-[Roboto]">
                <p>Teams thrive when kept between 8–12 people.</p>
                <p>
                  You can add up to 20 members per team for meaningful
                  connection.
                </p>
              </div>
            </div>

            {/* Upload Button */}
            <button
              className="bg-[#ffffff] px-8
          pr-12
          h-[41px]
          w-[200px] rounded-[14px]
          text-[20px] text-[#567F55] font-[Roboto]"
            >
              Upload CSV
            </button>
          </div>

          <div className="flex justify-end mt-[53px] ">
            <div className="cursor-pointer" onClick={openAddMemberModal}>
              <PolygonButton
                width="106px"
                height="83px"
                bgColor="#86C9C9"
                radius={14}
                clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
                decorationImg={{
                  src: images.arrowImg,
                  width: 48,
                  height: 48,
                }}
                decorationPosition={{
                  className: "-left-[31px] -top-[25px]",
                }}
                childTop={5}
              >
                <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                  Add
                  <br />
                  Users
                </span>
              </PolygonButton>
            </div>
          </div>
        </div>
      </div>
      <AddMemberModal />
    </>
  );
}

export default OrganisationSetting;
