import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import React from "react";

function TeamSetting() {
  return (
    <div className="min-h-screen bg-[#F8F4EE] px-8 py-10 font-serif">
      <div>
        <UserProfileHeader greetingColor="#567F55" nameColor="#0F4F58" />
      </div>
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
        <h3 className="text-2xl font-bold text-[#567F55] mb-8">Teams</h3>

        <div className="space-y-6 max-w-3xl">
          {/* Champion */}
          <div className="flex items-center gap-4">
            <label className="w-48 text-[#567F55] text-sm">
              You are the Champion of
            </label>
            <select className="flex-1 bg-white rounded-full px-4 py-2 outline-none">
              <option>Select team</option>
            </select>
            <button className="bg-[#CFE8E5] text-[#0F3D3E] px-6 py-2 rounded-full flex items-center gap-2">
              Edit Team <span>→</span>
            </button>
          </div>

          {/* Members */}
          <div className="flex items-center gap-4">
            <label className="w-48 text-[#5F8F78] text-sm">
              Number of Members
            </label>
            <input
              type="text"
              className="flex-1 bg-white rounded-full px-4 py-2 outline-none"
            />
            <button className="bg-[#CFE8E5] text-[#0F3D3E] px-6 py-2 rounded-full flex items-center gap-2">
              Edit Members <span>→</span>
            </button>
          </div>

          {/* Focus */}
          <div className="flex items-center gap-4">
            <label className="w-48 text-[#5F8F78] text-sm">
              Current Focus Area
            </label>
            <input
              type="text"
              className="flex-1 bg-white rounded-full px-4 py-2 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Invite Members */}
      <div className="bg-[#F6E3BB] rounded-3xl p-10">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-[#5F8F78]">Invite Members</h3>
          <div className="text-sm text-[#5F8F78] flex items-center gap-2">
            Number of seats left in your company
            <input className="w-14 bg-white rounded-full px-2 py-1 text-center" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-4xl">
          <input
            placeholder="First Name"
            className="bg-white rounded-full px-4 py-2 outline-none"
          />
          <input
            placeholder="Last Name"
            className="bg-white rounded-full px-4 py-2 outline-none"
          />
          <input
            placeholder="email"
            className="bg-white rounded-full px-4 py-2 outline-none col-span-2"
          />

          <select className="bg-white rounded-full px-4 py-2 outline-none col-span-2">
            <option>it can only show the Champion’s teams (max 2)</option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-10">
          <div className="text-sm text-[#5F8F78] max-w-md">
            <p className="font-medium mb-1">
              Teams thrive when kept between 8–12 people.
            </p>
            <p>
              You can add up to 20 members per team for meaningful connection.
            </p>

            <button className="mt-6 text-[#5F8F78] underline">
              💬 Suggest a Champion
            </button>
          </div>

          <div className="flex flex-col items-end gap-4">
            <button className="bg-white px-6 py-2 rounded-full text-sm">
              Upload CSV
            </button>
            <button className="bg-[#7EC9C6] text-[#0F3D3E] px-8 py-3 rounded-2xl font-semibold">
              Add Members
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSetting;
