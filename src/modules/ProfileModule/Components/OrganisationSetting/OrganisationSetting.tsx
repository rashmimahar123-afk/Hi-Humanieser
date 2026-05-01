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
import { useCreateTeamMutation } from "../../Hooks/useCreateTeamMutation";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import useGetTeamsQuery from "../../Hooks/useGetTeamsQuery";
import { useDeleteTeamMutation } from "../../Hooks/useDeleteTeamMutation";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateUserMutation } from "../../Hooks/useCreateUserMutation";
import useOrganisationDetailsQuery from "../../Hooks/useOrganisationDetailsQuery";
import SuccessAddTeamModal, {
  openSuccessAddTeamModal,
} from "../SuccessAddTeamModal/SuccessAddTeamModal";
import { useEditTeamMutation } from "../../Hooks/useEditTeamMutation";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";

function OrganisationSetting() {
  const router = useRouter();
  const { user } = useAuthValue();
  const [enter, setEnter] = useState(false);
  const [teamAction, setTeamAction] = useState("create");
  const [teamName, setTeamName] = useState("");
  const [selectedTeamId, setSelectedTeamId] = useState("");
  const [editTeamId, setEditTeamId] = useState("");
  const [editTeamName, setEditTeamName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [teamId, setTeamId] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isAddUserDisabled =
    !firstName.trim() ||
    !lastName.trim() ||
    !isValidEmail ||
    !role ||
    (role !== "Partner" && !teamId);

  useEffect(() => {
    setEnter(true);
  }, []);

  const getUserTypeFromRole = (role: string) => {
    switch (role) {
      case "Member":
        return 1;
      case "Champion":
        return 2;
      case "Partner":
        return 3;
      default:
        return 1;
    }
  };

  const { mutate: createTeam, isPending } = useCreateTeamMutation();

  const handleCreateTeam = () => {
    if (!teamName.trim()) {
      SnackbarHandler.errorToast("Please enter team name");
      return;
    }

    createTeam(
      { team_name: teamName },
      {
        onSuccess: () => {
          setTeamName("");
          openSuccessAddTeamModal();
          queryClient.invalidateQueries({
            queryKey: ["getTeamsQueryKey"],
          });
        },
      },
    );
  };
  const { data, isLoading } = useGetTeamsQuery();

  const teamsData = data?.data?.teams || [];
  const { mutate: deleteTeam, isPending: isDeleting } = useDeleteTeamMutation();

  const queryClient = useQueryClient();
  const selectedTeam = teamsData.find(
    (team: any) => team.id === selectedTeamId,
  );
  const selectedEditTeam = teamsData.find(
    (team: any) => team.id === editTeamId,
  );
  const hasTeams = teamsData.length > 0;

  const handleDeleteTeam = () => {
    if (!selectedTeamId) {
      SnackbarHandler.errorToast("Please select a team");
      return;
    }

    deleteTeam(
      { team_id: selectedTeamId },
      {
        onSuccess: () => {
          SnackbarHandler.successToast("Team deleted successfully");
          setSelectedTeamId("");
          queryClient.invalidateQueries({
            queryKey: ["getTeamsQueryKey"],
          });
        },
        onError: () => {
          SnackbarHandler.errorToast("Failed to delete team");
        },
      },
    );
  };

  const orgId = user?.org_id;
  const { data: orgData, isLoading: orgLoading } =
    useOrganisationDetailsQuery(orgId);
  const organisation = orgData?.data?.organization;

  useEffect(() => {
    if (selectedEditTeam) {
      setEditTeamName(selectedEditTeam.team_name);
    } else {
      setEditTeamName("");
    }
  }, [editTeamId]);

  const { mutate: editTeam, isPending: isEditing } = useEditTeamMutation();
  const handleEditTeam = () => {
    if (!editTeamId) {
      SnackbarHandler.errorToast("Please select a team");
      return;
    }

    if (!editTeamName.trim()) {
      SnackbarHandler.errorToast("Please enter team name");
      return;
    }

    editTeam(
      {
        team_id: editTeamId,
        new_team_name: editTeamName,
      },
      {
        onSuccess: () => {
          SnackbarHandler.successToast("Team updated successfully");
          setEditTeamId("");
          setEditTeamName("");
          queryClient.invalidateQueries({
            queryKey: ["getTeamsQueryKey"],
          });
        },
        onError: () => {
          SnackbarHandler.errorToast("Failed to update team");
        },
      },
    );
  };

  const { mutate: createUser } = useCreateUserMutation();
  const handleAddUser = () => {
    const selectedUserType = getUserTypeFromRole(role);

    let payload: any = {
      email_address: email,
      first_name: firstName,
      last_name: lastName,
    };

    if (role !== "Partner") {
      payload.team_id = teamId;
    }

    createUser(
      {
        payload,
        userType: selectedUserType,
      },
      {
        onSuccess: () => {
          openAddMemberModal();
          setFirstName("");
          setLastName("");
          setEmail("");
          setRole("");
          setTeamId("");
        },
      },
    );
  };

  return (
    <>
      <div
        className={`relative min-h-screen bg-[#F8F4EE] px-4 sm:px-6 lg:px-8 py-6 sm:py-10 font-serif z-10 page ${
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

        {/* Polygon decoration — hidden on small screens to avoid overflow */}
        <Image
          src={images.quizPolygon}
          alt="quiz-polygon"
          width={630}
          height={630}
          className="absolute top-0 right-0 -z-10 pointer-events-none hidden sm:block"
        />

        {/* Header */}
        <div className="flex justify-between items-start mb-6 sm:mb-10">
          <div className="ml-0 sm:ml-[37px]">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[45px] font-bold text-[#0F3D3E] font-[RocaTwo]">
              Organisation Settings
            </h2>
            <div className="font-bold text-[16px] sm:text-[18px] lg:text-[22px] font-[Roboto] text-[#0f4f58] ml-0 sm:ml-4 mt-1">
              Shape how Hi Humaniser!™ works across your organisation.
            </div>
            <p className="text-[#0f4f58] mt-2 ml-0 sm:ml-4 font-[Roboto] text-[16px] sm:text-[18px] lg:text-[22px]">
              Configure teams, assign Champions, and manage access so progress,
              clarity, and performance can scale.
            </p>
          </div>
        </div>

        {/* Organisation Detail Section */}
        <div className="bg-[#F6E3BB] rounded-3xl p-5 sm:p-8 lg:p-10">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[RocaTwo] text-[#567F55]">
            Organisation Details
          </h2>

          <div className="space-y-5 mt-4">
            {/* Organisation Name */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
              <label className="text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] sm:min-w-[200px]">
                Organisation Name
              </label>
              <input
                type="text"
                value={organisation?.company_name || ""}
                disabled
                className="w-full sm:flex-1 bg-[#ffffff] text-[#567F55] italic text-[15px] sm:text-[16px] lg:text-[18px]
                  px-6 pr-10 h-[41px] rounded-[12px] outline-none font-[Roboto] "
              />
            </div>

            {/* Number of Seats */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0">
              <label className="text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] sm:min-w-[200px]">
                Number of Seats
              </label>
              <div className="flex items-center gap-4 sm:gap-6 w-full sm:flex-1">
                <input
                  type="text"
                  value={organisation?.combined_member_count ?? ""}
                  readOnly
                  className="flex-1 bg-[#ffffff] text-[#0F4F58] text-[15px] sm:text-[16px] lg:text-[18px]
                    px-6 pr-10 h-[41px] rounded-[12px] outline-none font-[Roboto] "
                />
                <button className="text-[#567F55] text-[15px] sm:text-[17px] font-[Roboto] whitespace-nowrap">
                  Edit
                </button>
              </div>
            </div>

            {/* Plan */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mt-4">
              <label className="text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] sm:w-[200px]">
                Plan
              </label>
              <div className="flex items-center gap-4 sm:gap-6 flex-1">
                <div className="relative flex-1">
                  <select
                    value="Exploration"
                    onChange={(e) => e.preventDefault()}
                    className="appearance-none bg-[#ffffff] rounded-[12px]
                      px-6 pr-10 h-[41px] w-full
                      text-[15px] sm:text-[16px] lg:text-[18px] text-[#4E6E5D]
                      outline-none font-[Roboto]"
                  >
                    <option value="Exploration">Exploration</option>
                    <option value="Starter">Starter</option>
                    <option value="Growth">Growth</option>
                    <option value="Scale">Scale</option>
                    <option value="Organisation">Organisation</option>
                    <option value="Enterprise">Enterprise</option>
                  </select>
                  <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2">
                    <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[22px] border-t-[#0F4F58]" />
                  </div>
                </div>
                <button
                  className="bg-[#ffffff] px-4 sm:px-6 h-[41px] rounded-[12px]
                    text-[14px] sm:text-[16px] lg:text-[17px] text-[#567F55] font-[Roboto] whitespace-nowrap"
                  onClick={() => router.push("/plans")}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Manage Team Heading */}
        <div className="mt-8 sm:mt-10">
          <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] font-[RocaTwo] text-[#1D5C63]">
            Manage Team
          </h1>
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#1D5C63] mt-3 sm:mt-4 max-w-[900px] font-[Roboto]">
            Create your teams so people can be invited into the right place.
            Teams are where rituals happen, progress is tracked, and people are
            grouped for shared activity.
          </p>
        </div>

        {/* What would you like to do */}
        <div className="bg-[#F6E3BB] rounded-2xl px-5 sm:px-8 py-5 sm:py-6 mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <p className="text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] sm:w-[260px] leading-snug shrink-0">
            What would you like to do?
          </p>
          <div className="relative w-full sm:flex-1">
            <select
              value={teamAction}
              onChange={(e) => setTeamAction(e.target.value)}
              className="appearance-none bg-[#ffffff] rounded-[12px]
                px-6 pr-10 h-[41px] w-full text-[15px] sm:text-[16px] lg:text-[18px]
                text-[#4E6E5D] outline-none font-[Roboto]"
            >
              <option value="create">Create Team</option>
              <option value="edit">Edit Team</option>
              <option value="delete">Delete Team</option>
            </select>
            <div className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2">
              <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[18px] border-t-[#0F4F58]" />
            </div>
          </div>
        </div>

        {/* Create Team */}
        {teamAction === "create" && (
          <div className="bg-[#F6E3BB] rounded-3xl p-5 sm:p-8 lg:p-10 mt-8 sm:mt-10">
            <div className="flex items-center gap-4 sm:gap-6 mt-4">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[RocaTwo] text-[#567F55]">
                Create Teams
              </h2>
              <div className="relative inline-block">
                <div className="group w-[40px] h-[40px] rounded-full border-2 border-[#1D5C63] flex items-center justify-center cursor-pointer">
                  <span className="text-[#1D5C63] text-[30px] font-semibold">
                    i
                  </span>
                  <div className="absolute top-[50px] left-0 w-[280px] sm:w-[420px] bg-white text-[#567F55] text-[14px] sm:text-[16px] font-[Roboto] p-4 sm:p-5 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 leading-relaxed pointer-events-none">
                    <p className="mb-3">
                      Teams help you organise people into smaller working groups
                      so they can take part in rituals, track progress, and
                      build shared habits over time.
                    </p>
                    <p className="mb-3">
                      Create your teams here before inviting users. Each team
                      must have a unique name.
                    </p>
                    <p>Organisations can have up to 30 teams.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Name Row */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-12 mt-4">
              <label className="text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] sm:pt-2">
                Name
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-8 flex-1 sm:ml-[105px]">
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="flex-1 bg-[#ffffff] rounded-[12px]
                    px-6 pr-10 h-[41px]
                    text-[15px] sm:text-[16px] lg:text-[18px] text-[#0F4F58] outline-none font-[Roboto]"
                />
                <button
                  onClick={handleCreateTeam}
                  disabled={isPending}
                  className="px-6 h-[41px] w-full sm:w-[200px] bg-[#ffffff] rounded-[12px]
                    text-[15px] sm:text-[16px] lg:text-[18px] text-[#567F55] font-[Roboto]"
                >
                  {isPending ? "Adding..." : "Add Team"}
                </button>
              </div>
            </div>

            {/* Helper Text */}
            <p className="sm:ml-[192px] text-[15px] sm:text-[17px] lg:text-[20px] text-[#567F55] leading-[30px] sm:leading-[40px] font-[Roboto] mt-2">
              Teams help you run rituals and track progress. Add as many as you
              like. Each team must have a unique name so they're easy to find
              and track.
            </p>

            {/* List of Teams */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-12 mt-4">
              <label className="sm:w-[150px] text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] leading-tight">
                List of teams created
              </label>
              <div className="relative flex-1">
                <select
                  className="appearance-none bg-[#ffffff] rounded-[12px]
                    px-6 pr-10 h-[41px] w-full
                    text-[15px] sm:text-[16px] lg:text-[18px] text-[#4E6E5D]
                    outline-none font-[Roboto]"
                >
                  {isLoading ? (
                    <option>Loading teams...</option>
                  ) : teamsData.length === 0 ? (
                    <option>No teams found</option>
                  ) : (
                    teamsData.map((team: any) => (
                      <option key={team.id} value={team.id}>
                        {team.team_name}
                      </option>
                    ))
                  )}
                </select>
                <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[22px] border-t-[#0F4F58]" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Team */}
        {teamAction === "edit" && (
          <div className="bg-[#F6E3BB] rounded-3xl p-5 sm:p-8 lg:p-10 mt-8 sm:mt-10">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[RocaTwo] text-[#567F55]">
              Edit Team
            </h2>

            {/* List of Teams */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-12 mt-4">
              <label className="sm:w-[150px] text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] leading-tight">
                List of all Teams
              </label>
              <div className="relative flex-1">
                <select
                  value={editTeamId}
                  onChange={(e) => setEditTeamId(e.target.value)}
                  className="appearance-none bg-[#ffffff] rounded-[12px] px-6 pr-10 h-[41px] w-full text-[15px] sm:text-[16px] lg:text-[18px] text-[#4E6E5D] outline-none font-[Roboto]"
                >
                  <option value="">Select Team</option>
                  {teamsData.map((team: any) => (
                    <option key={team.id} value={team.id}>
                      {team.team_name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[22px] border-t-[#0F4F58]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-0 mt-4">
              <label className="text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] sm:pt-2">
                Edit Team Name
              </label>
              <div className="flex items-center flex-1">
                <input
                  type="text"
                  value={editTeamName}
                  onChange={(e) => setEditTeamName(e.target.value)}
                  disabled={!editTeamId}
                  className="flex-1 rounded-[12px]
                    px-6 pr-10 h-[41px] w-full
                    text-[15px] sm:text-[16px] lg:text-[18px] outline-none font-[Roboto] sm:ml-[58px] bg-[#ffffff] text-[#0F4F58]"
                />
              </div>
            </div>

            <p className="sm:ml-[192px] text-[15px] sm:text-[17px] lg:text-[20px] text-[#567F55] leading-[30px] sm:leading-[40px] font-[Roboto] mt-2">
              Teams help you run rituals and track progress. Add as many as you
              like. Each team must have a unique name so they're easy to find
              and track.
            </p>

            <div className="mt-8 sm:mt-10 flex justify-end">
              <div
                className={`${
                  !editTeamId || !editTeamName.trim()
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
                onClick={() => {
                  if (!editTeamId || !editTeamName.trim()) return;
                  handleEditTeam();
                }}
              >
                <PolygonButton
                  width="120px"
                  height="109px"
                  bgColor="#86c9c9"
                  radius={14}
                  clipPath={`polygon(17% 17px, 77% 11%, 100% 81%, 0% calc(100% - 15px))`}
                  decorationImg={{
                    src: images.arrowImg,
                    width: 48,
                    height: 48,
                  }}
                  decorationPosition={{
                    className: "-left-[20px] -top-[28px]",
                  }}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span className="text-[#0F4F58] max-w-[100px] text-[20px] font-[RocaTwo] font-bold">
                      Save Changes
                    </span>
                  </div>
                </PolygonButton>
              </div>
            </div>
          </div>
        )}

        {/* Delete Team */}
        {teamAction === "delete" && (
          <div className="bg-[#F6E3BB] rounded-3xl p-5 sm:p-8 lg:p-10 mt-8 sm:mt-10">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[RocaTwo] text-[#567F55]">
              Delete Team
            </h2>

            {/* List of Teams */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-12 mt-4">
              <label className="sm:w-[150px] text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] leading-tight">
                List of all Teams
              </label>
              <div className="relative flex-1">
                <select
                  value={selectedTeamId}
                  onChange={(e) => setSelectedTeamId(e.target.value)}
                  disabled={!hasTeams}
                  className="appearance-none bg-[#ffffff] rounded-[12px] px-6 pr-10 h-[41px] w-full text-[15px] sm:text-[16px] lg:text-[18px] text-[#4E6E5D] outline-none font-[Roboto]"
                >
                  <option value="">
                    {hasTeams ? "Select Team" : "No teams available"}
                  </option>
                  {teamsData.map((team: any) => (
                    <option key={team.id} value={team.id}>
                      {team.team_name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2">
                  <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[22px] border-t-[#0F4F58]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-12 mt-4">
              <label className="text-[#567F55] text-[16px] sm:text-[18px] lg:text-[20px] font-[Roboto] sm:pt-2">
                Team Name
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-8 flex-1 sm:ml-[50px]">
                <input
                  type="text"
                  value={selectedTeam?.team_name || ""}
                  readOnly
                  disabled={!hasTeams}
                  className={`flex-1 rounded-[12px]
                    px-6 pr-10 h-[41px]
                    text-[15px] sm:text-[16px] lg:text-[18px] outline-none font-[Roboto]
                    ${
                      !hasTeams
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#ffffff] text-[#0F4F58]"
                    }`}
                />
                <button
                  onClick={handleDeleteTeam}
                  disabled={isDeleting || !hasTeams}
                  className={`px-6 h-[41px] w-full sm:w-[200px] rounded-[12px]
                    text-[15px] sm:text-[16px] lg:text-[18px] font-[Roboto]
                    ${
                      isDeleting || !hasTeams
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-[#ffffff] text-[#567F55]"
                    }`}
                >
                  {isDeleting ? "Deleting..." : "Delete Team"}
                </button>
              </div>
            </div>

            <p className="sm:ml-[192px] text-[15px] sm:text-[17px] lg:text-[20px] text-[#567F55] leading-[30px] sm:leading-[40px] font-[Roboto] mt-2">
              To protect people and their journey, teams with active members
              can't be deleted. Simply transfer members to another team first;
              once the team is empty, you'll be able to remove it.
            </p>
          </div>
        )}

        {/* Invite Members */}
        {hasTeams && (
          <>
            <div className="bg-[#F6E3BB] rounded-3xl p-5 sm:p-8 lg:p-10 mt-8 sm:mt-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 sm:gap-0">
                <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-[RocaTwo] text-[#567F55]">
                  Invite Users
                </h2>
                <div className="flex items-center gap-4 sm:gap-6">
                  <p className="text-[15px] sm:text-[17px] lg:text-[20px] text-[#567F55] text-right leading-snug max-w-[200px]">
                    Number of seats left in your company
                  </p>
                  <div className="px-6 pr-10 h-[41px] w-[100px] bg-[#ffffff] rounded-[12px]" />
                </div>
              </div>

              <div className="space-y-5 mt-4">
                {/* First Name */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-16">
                  <label className="sm:w-[220px] text-[16px] sm:text-[18px] lg:text-[22px] text-[#567F55] font-[Roboto]">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full sm:flex-1 bg-[#ffffff] rounded-[12px]
                      px-6 pr-10 h-[41px]
                      text-[15px] sm:text-[16px] lg:text-[18px] text-[#0F4F58] outline-none font-[Roboto]"
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-16">
                  <label className="sm:w-[220px] text-[16px] sm:text-[18px] lg:text-[22px] text-[#567F55] font-[Roboto]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full sm:flex-1 bg-[#ffffff] rounded-[12px]
                      px-6 pr-10 h-[41px]
                      text-[15px] sm:text-[16px] lg:text-[18px] text-[#0F4F58] outline-none font-[Roboto]"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-16">
                  <label className="sm:w-[220px] text-[16px] sm:text-[18px] lg:text-[22px] text-[#567F55] font-[Roboto]">
                    email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:flex-1 bg-[#ffffff] rounded-[12px]
                      px-6 pr-10 h-[41px]
                      text-[15px] sm:text-[18px] lg:text-[20px] text-[#0F4F58] outline-none font-[Roboto]"
                  />
                </div>

                {/* Role Section */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-16">
                  <label className="sm:w-[220px] text-[16px] sm:text-[18px] lg:text-[22px] text-[#567F55] font-[Roboto]">
                    Role
                  </label>
                  <div className="flex items-start gap-4 sm:gap-8">
                    <div
                      className="bg-[#ffffff] rounded-[16px] px-5 sm:px-6 py-5 sm:py-6 w-full sm:w-[416px]
                        flex flex-col gap-4 sm:gap-6"
                    >
                      {["Member", "Champion", "Partner"].map((r) => (
                        <label
                          key={r}
                          className="flex items-center gap-4 sm:gap-6 text-[18px] sm:text-[20px] lg:text-[22px] text-[#3F8A8A] font-[Roboto] cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="role"
                            value={r}
                            checked={role === r}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-[20px] h-[20px] accent-[#3F8A8A] cursor-pointer"
                          />
                          {r}
                        </label>
                      ))}
                    </div>

                    {/* Info Icon */}
                    <div className="mt-4 sm:mt-6 relative inline-block">
                      <div className="group w-[40px] h-[40px] rounded-full border-2 border-[#1D5C63] flex items-center justify-center cursor-pointer">
                        <span className="text-[#1D5C63] text-[28px] font-semibold">
                          i
                        </span>
                        <div className="absolute left-[50px] top-0 w-[260px] sm:w-[360px] bg-white text-[#567F55] text-[14px] sm:text-[16px] font-[Roboto] p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none">
                          <p className="mb-2">
                            Each person needs a role to define how they take
                            part in Hi Humaniser!™.
                          </p>
                          <p>
                            <strong>Member:</strong> takes part in pathways,
                            rituals, and personal progress
                          </p>
                          <p>
                            <strong>Champion:</strong> leads a team, selects
                            focus areas, and supports team rituals
                          </p>
                          <p>
                            <strong>Partner:</strong> sets up the organisation,
                            manages teams and users, and supports progress
                            across the system
                          </p>
                          <p className="mt-2">
                            You can change roles later if needed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Dropdown */}
                {role !== "Partner" && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-16">
                    <label className="sm:w-[220px] text-[16px] sm:text-[18px] lg:text-[22px] text-[#567F55] font-[Roboto]">
                      Team
                    </label>
                    <div className="relative w-full sm:flex-1">
                      <select
                        value={teamId}
                        onChange={(e) => setTeamId(e.target.value)}
                        className="appearance-none bg-[#ffffff] rounded-[12px]
                          px-6 pr-10 h-[41px] w-full text-[16px] sm:text-[18px] lg:text-[20px]
                          text-[#4E6E5D] outline-none font-[Roboto]"
                      >
                        <option value="">Select Team</option>
                        {teamsData.map((team: any) => (
                          <option key={team.id} value={team.id}>
                            {team.team_name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2">
                        <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[22px] border-t-[#0F4F58]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mt-10 sm:mt-20">
                <div className="flex items-start gap-4 sm:gap-6 max-w-full sm:max-w-[700px]">
                  <Image
                    src={images.screwImg}
                    alt="info"
                    width={40}
                    height={40}
                    className="shrink-0"
                  />
                  <div className="text-[14px] sm:text-[16px] lg:text-[18px] text-[#567F55] leading-[20px] font-[Roboto]">
                    <p>Teams thrive when kept between 8–12 people.</p>
                    <p>
                      You can add up to 20 members per team for meaningful
                      connection.
                    </p>
                  </div>
                </div>
                <button
                  className="bg-[#ffffff] px-8 pr-12 h-[41px] w-full sm:w-[200px] rounded-[14px]
                    text-[16px] sm:text-[18px] lg:text-[20px] text-[#567F55] font-[Roboto]"
                >
                  Upload CSV
                </button>
              </div>

              <div className="flex justify-end mt-10 sm:mt-[53px]">
                <div
                  className={`${
                    isAddUserDisabled
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer"
                  }`}
                  onClick={() => {
                    if (isAddUserDisabled) return;
                    handleAddUser();
                  }}
                >
                  <PolygonButton
                    width="106px"
                    height="83px"
                    bgColor={isAddUserDisabled ? "#d3d3d3" : "#86C9C9"}
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
          </>
        )}
      </div>
      <AddMemberModal />
      <SuccessAddTeamModal />
      <LogoutModal />
    </>
  );
}

export default OrganisationSetting;
