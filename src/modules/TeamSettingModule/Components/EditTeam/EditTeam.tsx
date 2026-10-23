import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import useGetTeamsQuery, {
  GET_TEAMS_QUERY_KEY,
} from "@/src/modules/ProfileModule/Hooks/useGetTeamsQuery";
import { useEditTeamMutation } from "@/src/modules/ProfileModule/Hooks/useEditTeamMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { useQueryClient } from "@tanstack/react-query";

const MAX_TEAM_NAME_LENGTH = 35;

function EditTeam() {
  const router = useRouter();
  const { user } = useAuthValue();
  const queryClient = useQueryClient();
  const { data: teamsData, isLoading } = useGetTeamsQuery();
  const teams = teamsData?.data?.teams || [];

  const championTeam =
    teams.find((team) => team.champion_id === user?.user_id) ||
    teams.find((team) => team.id === user?.team_id);

  const [teamName, setTeamName] = useState("");

  useEffect(() => {
    if (championTeam) {
      setTeamName(championTeam.team_name);
    }
  }, [championTeam?.id, championTeam?.team_name]);

  const { mutate: editTeam, isPending } = useEditTeamMutation();

  const trimmedName = teamName.trim();
  const isSaveDisabled =
    isPending ||
    !championTeam?.id ||
    !trimmedName ||
    trimmedName === championTeam?.team_name;

  const handleSave = () => {
    if (!championTeam?.id) {
      SnackbarHandler.errorToast("No team found");
      return;
    }

    if (!trimmedName) {
      SnackbarHandler.errorToast("Please enter team name");
      return;
    }

    if (trimmedName.length > MAX_TEAM_NAME_LENGTH) {
      SnackbarHandler.errorToast(
        `Team name cannot exceed ${MAX_TEAM_NAME_LENGTH} characters`,
      );
      return;
    }

    editTeam(
      {
        team_id: championTeam.id,
        new_team_name: trimmedName,
      },
      {
        onSuccess: () => {
          SnackbarHandler.successToast("Team updated successfully");
          queryClient.invalidateQueries({ queryKey: GET_TEAMS_QUERY_KEY });
          router.push("/team-setting");
        },
        onError: () => {
          SnackbarHandler.errorToast("Failed to update team");
        },
      },
    );
  };

  return (
    <div className=" relative z-10 min-h-screen bg-[#F8F4EE] px-8 py-10 font-serif">
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
      <div className="flex justify-between items-start mb-10">
        <div className="ml-[37px]">
          <h2 className="text-[44px] font-bold text-[#0f4f58] font-[RocaTwo] ">
            Edit Team
          </h2>
          <p className="text-[#4E6E5D] mt-2 ml-8 text-[22px]">
            Modify your team name here{" "}
          </p>
        </div>
      </div>
      {/* Header */}
      <div className="bg-[#F6E3BB] rounded-3xl p-12 mb-12">
        <h3 className="text-[35px] text-[#567F55] mb-10 font-[RocaTwo]">
          Edit Team
        </h3>

        <div className="space-y-10">
          {/* Champion (Read Only) */}
          <div className="flex items-center">
            <label className="w-[260px] text-[#567F55] text-[20px] font-[Roboto] leading-snug">
              You are the <br /> Champion of
            </label>

            <input
              type="text"
              value={
                championTeam?.team_name ||
                (isLoading ? "Loading..." : "No team found")
              }
              readOnly
              className="bg-[#ffffff]
          text-[#4E6E5D]
          italic
          text-[18px]
          px-6
          h-[56px]
          w-[600px]
          rounded-[16px]
          outline-none
          font-[Roboto]"
            />
          </div>

          {/* Edit Team Name (Editable) */}
          <div className="flex items-center">
            <label className="w-[260px] text-[#567F55] text-[20px] font-[Roboto]">
              Edit Team Name
            </label>

            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              maxLength={MAX_TEAM_NAME_LENGTH}
              disabled={!championTeam}
              placeholder="Enter new team name"
              className="bg-[#ffffff]
          text-[#4E6E5D]
          italic
          text-[18px]
          px-6
          h-[56px]
          w-[600px]
          rounded-[16px]
          outline-none
          font-[Roboto]"
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-24">
            <div
              className={
                isSaveDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }
              onClick={() => {
                if (isSaveDisabled) return;
                handleSave();
              }}
            >
              <PolygonButton
                width="140px"
                height="95px"
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
                childTop={3}
              >
                <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                  Save <br /> Changes
                </span>
              </PolygonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTeam;
