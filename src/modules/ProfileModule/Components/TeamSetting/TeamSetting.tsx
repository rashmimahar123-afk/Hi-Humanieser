import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import AddMemberModal, {
  openAddMemberModal,
} from "../AddMemberModal/AddMemberModal";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import useGetTeamsQuery from "../../Hooks/useGetTeamsQuery";
import { useEditTeamMutation } from "../../Hooks/useEditTeamMutation";
import { useCreateUserMutation } from "../../Hooks/useCreateUserMutation";
import useGetAllListUsersQuery from "../../Hooks/useGetAllListUsersQuery";

function TeamSetting() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedTeamId, setSelectedTeamId] = useState("");
  const router = useRouter();
  const { user } = useAuthValue();
  const { data: teamsData } = useGetTeamsQuery();
  const teams = teamsData?.data?.teams || [];
  const hasTeams = teams.length > 0;
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isAddMemberDisabled =
    !firstName.trim() || !lastName.trim() || !isValidEmail || !selectedTeamId;

  const myTeam = teams.find((team) => team.id === user?.team_id);

  const [isEditingTeam, setIsEditingTeam] = useState(false);
  const [isEditingMembers, setIsEditingMembers] = useState(false);

  const [teamName, setTeamName] = useState("");
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    if (myTeam) {
      setTeamName(myTeam.team_name);
      setMemberCount(myTeam.member_count);
    }
  }, [myTeam]);
  const { mutate: editTeamMutation, isPending } = useEditTeamMutation();
  const myEditTeam = teams.find((team) => team.id === user?.team_id);

  const championTeams = teams.filter((team) => team.id === user?.team_id);
  const { mutate: createUser } = useCreateUserMutation();

  const handleAddMember = () => {
    let payload: any = {
      email_address: email,
      first_name: firstName,
      last_name: lastName,
      team_id: selectedTeamId || myTeam?.id,
    };

    createUser(
      {
        payload,
        userType: 1,
      },
      {
        onSuccess: () => {
          openAddMemberModal();
          setFirstName("");
          setLastName("");
          setEmail("");
        },
      },
    );
  };

  useEffect(() => {
    if (championTeams.length > 0) {
      setSelectedTeamId(championTeams[0].id);
    }
  }, [championTeams]);

  return (
    <>
      <div className=" relative min-h-screen bg-[#F8F4EE] px-8 py-10 font-serif  z-10">
        <div>
          <UserProfileHeader
            greetingColor="#567F55"
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
            <h2 className="text-[45px] font-bold text-[#0f4f58] font-[RocaTwo] ">
              My Team Settings
            </h2>
            <p className="text-[#0f4f58] ml-2 font-[Roboto] text-[22px]">
              Manage your teams, members and preferences here.
            </p>
          </div>
        </div>

        {/* Teams Section */}
        <div className="bg-[#F6E3BB] rounded-3xl p-10 mb-12">
          <h3 className="text-[35px] font-bold text-[#567F55] mb-8 font-[400] font-[RocaTwo]">
            Teams
          </h3>

          <div className="space-y-4 w-full">
            {/* Champion */}

            <div className="flex items-center gap-4">
              <label className="w-[103px] text-[#567F55] text-[19px] font-[Roboto]">
                You are the Champion of
              </label>
              <div className="ml-[100px]">
                <input
                  type="text"
                  value={teamName}
                  disabled={!isEditingTeam}
                  onChange={(e) => setTeamName(e.target.value)}
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
                  label={isEditingTeam ? "Save" : "Edit Team"}
                  bgColor="#C2E2E2"
                  onClick={() => {
                    if (isEditingTeam) {
                      if (!myEditTeam?.id) return;

                      editTeamMutation(
                        {
                          team_id: myEditTeam.id,
                          new_team_name: teamName,
                        },
                        {
                          onSuccess: (res) => {
                            console.log("Team updated:", res);
                            setIsEditingTeam(false);
                          },
                          onError: (err) => {
                            console.error("Error updating team:", err);
                          },
                        },
                      );
                    } else {
                      setIsEditingTeam(true);
                    }
                  }}
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
                  value={memberCount}
                  disabled={!isEditingMembers}
                  onChange={(e) => setMemberCount(Number(e.target.value))}
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
                  label={isEditingMembers ? "Save" : "Edit Members"}
                  bgColor="#C2E2E2"
                  onClick={() => {
                    if (isEditingMembers) {
                      // 👉 CALL UPDATE API HERE
                      console.log("Saving members:", memberCount);

                      setIsEditingMembers(false);
                    } else {
                      setIsEditingMembers(true);
                    }
                  }}
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
        {hasTeams && (
          <>
            <div className="bg-[#F6E3BB] rounded-3xl p-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-[35px] font-bold text-[#567F55] font-[RocaTwo]">
                  Invite Members
                </h3>
                <div className="text-[19px] text-[#567F55] flex items-center gap-2 max-w-[406px]">
                  Number of seats left in your company
                  <input className="w-18 bg-white rounded-full px-2 py-1 text-center" />
                </div>
              </div>

              <div className="max-w-[1000px] space-y-4 mt-6">
                {/* First Name */}
                <div className="flex items-center gap-8">
                  <label className="w-[160px] text-[#567F55] text-[18px] font-[Roboto]">
                    First Name
                  </label>

                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="flex-1 max-w-[720px] h-[48px] bg-[#ffffff] 
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
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="flex-1 max-w-[720px] h-[48px] bg-[#ffffff] 
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 max-w-[720px] h-[48px] bg-[#ffffff] 
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
                      value={selectedTeamId}
                      onChange={(e) => setSelectedTeamId(e.target.value)}
                      className="appearance-none w-full h-[48px] bg-[#ffffff]
  rounded-[12px] px-6 pr-12 text-[#4E6E5D] outline-none"
                    >
                      {championTeams.length > 0 ? (
                        championTeams.map((team) => (
                          <option key={team.id} value={team.id}>
                            {team.team_name}
                          </option>
                        ))
                      ) : (
                        <option value="">No team found</option>
                      )}
                    </select>

                    {/* Custom dropdown icon */}
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                      <Image
                        src={images.dropdownImg}
                        alt="dropdown"
                        width={18}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-10">
                <div className="text-[18px] text-[#567F55] ">
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
                      <p>Teams thrive when kept between 8–12 people.</p>
                      <p>
                        You can add up to 20 members per team for meaningful
                        connection.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-6 py-2 rounded-full text-[18px] font-[Roboto] text-[#567f55]">
                  Upload CSV
                </div>
              </div>

              <div className="flex justify-end mt-[53px]  ">
                <div
                  className={`${
                    isAddMemberDisabled
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  }`}
                  onClick={() => {
                    if (isAddMemberDisabled) return;
                    handleAddMember();
                  }}
                >
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
                      Add Members
                    </span>
                  </PolygonButton>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <AddMemberModal />
    </>
  );
}

export default TeamSetting;
