import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

function TeamSetting() {
  const router = useRouter();
  return (
    <div className=" relative min-h-screen bg-[#F8F4EE] px-8 py-10 font-serif  z-10">
      <div>
        <UserProfileHeader greetingColor="#567F55" nameColor="#0F4F58" />
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
          <h2 className="text-3xl font-bold text-[#0F3D3E] font-[RocaTwo] ">
            My Team Settings
          </h2>
          <p className="text-[#4E6E5D] mt-2 ml-2">
            Manage your teams, members and preferences here.
          </p>
        </div>
      </div>

      {/* Teams Section */}
      <div className="bg-[#F6E3BB] rounded-3xl p-10 mb-12">
        <h3 className="text-[35px] font-bold text-[#567F55] mb-8 font-[400] font-[RocaTwo]">
          Teams
        </h3>

        <div className="space-y-6 w-full">
          {/* Champion */}
          <div className="flex items-center gap-4">
            <label className="w-[103px] text-[#567F55] text-[19px] font-[Roboto]">
              You are the Champion of
            </label>

            <div className="relative ml-[100px]">
              <select
                className="
          appearance-none
          bg-white
          text-[#0F4F58]
          text-[18px]
          font-[400]
          px-6
          pr-10
          h-[41px]
          w-[416px]
          rounded-[12px]
          outline-none
          font-[Roboto]
        "
              >
                <option></option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <Image src={images.dropdownImg} alt="dropdown-img" width={25} />
              </div>
            </div>
            <div>
              <CommonButtons
                label="Edit Team"
                bgColor="#C2E2E2"
                onClick={() => router.push("/edit-team")}
                height={"41px"}
              />
            </div>
          </div>

          {/* Members */}
          <div className="flex items-center gap-4">
            <label className="w-[103px] text-[#567F55] text-[19px] font-[Roboto]">
              Number of Members
            </label>
            <div className="ml-[100px]">
              <input
                type="text"
                className="appearance-none
          bg-white
          text-[#0F4F58]
          text-[18px]
          font-[400]
          px-6
          pr-10
          h-[41px]
          w-[416px]
          rounded-[12px]
          outline-none
          font-[Roboto]"
              />
            </div>
            <div>
              <CommonButtons
                label="Edit Members"
                bgColor="#C2E2E2"
                onClick={() => router.push("/edit-members")}
                height={"41px"}
              />
            </div>
          </div>

          {/* Focus */}
          <div className="flex items-center gap-4">
            <label className="w-[103px] text-[#567F55] text-[19px] font-[Roboto]">
              Current Focus Area
            </label>
            <div className="ml-[100px]">
              <input
                type="text"
                className="appearance-none
          bg-white
          text-[#0F4F58]
          text-[18px]
          font-[400]
          px-6
          pr-10
          h-[41px]
          w-[708px]
          rounded-[12px]
          outline-none
          font-[Roboto]
          "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Invite Members */}
      <div className="bg-[#F6E3BB] rounded-3xl p-10">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-[35px] font-bold text-[#567F55] font-[RocaTwo]">
            Invite Members
          </h3>
          <div className="text-[19px] text-[#567F55] flex items-center gap-2 max-w-[290px]">
            Number of seats left in your company
            <input className="w-18 bg-white rounded-full px-2 py-1 text-center" />
          </div>
        </div>

        <div className="max-w-[1000px] space-y-6 mt-6">
          {/* First Name */}
          <div className="flex items-center gap-8">
            <label className="w-[160px] text-[#567F55] text-[18px] font-[Roboto]">
              First Name
            </label>

            <input
              type="text"
              className="flex-1 max-w-[720px] h-[48px] bg-[#EDEBE6] 
      rounded-[12px] px-6 text-[#0F4F58] outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex items-center gap-8">
            <label className="w-[160px] text-[#567F55] text-[18px] font-[Roboto]">
              Last Name
            </label>

            <input
              type="text"
              className="flex-1 max-w-[720px] h-[48px] bg-[#EDEBE6] 
      rounded-[12px] px-6 text-[#0F4F58] outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-8">
            <label className="w-[160px] text-[#567F55] text-[18px] font-[Roboto]">
              Email
            </label>

            <input
              type="email"
              className="flex-1 max-w-[720px] h-[48px] bg-[#EDEBE6] 
      rounded-[12px] px-6 text-[#0F4F58] outline-none"
            />
          </div>

          {/* Team Select */}
          <div className="flex items-center gap-8">
            <label className="w-[160px] text-[#567F55] text-[18px] font-[Roboto]">
              Team
            </label>

            <div className="relative flex-1 max-w-[720px]">
              <select
                className="appearance-none w-full h-[48px] bg-[#EDEBE6]
        rounded-[12px] px-6 pr-12 text-[#4E6E5D] outline-none"
              >
                <option>it can only show the Champion’s teams (max 2)</option>
              </select>

              {/* Custom dropdown icon */}
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <Image src={images.dropdownImg} alt="dropdown" width={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="text-[18px] text-[#567F55] max-w-md">
            <div className="flex items-start gap-2">
              <div>
                <Image
                  src={images.screwImg}
                  alt="info"
                  width={20}
                  className="inline-block mr-2"
                />
              </div>

              <div>
                <p className="font-medium mb-1">
                  Teams thrive when kept between 8–12 people.
                </p>
                <p>
                  You can add up to 20 members per team for meaningful
                  connection.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white px-6 py-2 rounded-full text-sm">
            Upload CSV
          </div>
        </div>

        <div className="flex justify-end mt-[53px] ">
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
            childTop={11}
          >
            <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
              Add Members
            </span>
          </PolygonButton>
        </div>
        <div>
          <div className="text-[#567F55] text-[18px]">
            💬 Suggest a Champion
          </div>
          <div className="text-[18px] text-[#567F55]">
            Want to propose a colleague to become a Champion?
          </div>
          <div className="text-[18px] text-[#567F55]">
            We’ll notify your Overseer.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSetting;
