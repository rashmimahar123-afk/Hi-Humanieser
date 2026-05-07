import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import { useEditUserMutation } from "@/src/modules/ProfileModule/Hooks/useEditUserMutation";
import useGetAllListUsersQuery from "@/src/modules/ProfileModule/Hooks/useGetAllListUsersQuery";
import useGetTeamsQuery from "@/src/modules/ProfileModule/Hooks/useGetTeamsQuery";
import { useState } from "react";

type TRANSFER_SECTION_PROPS_TYPE = {
  type: string | any;
};

function TransferSection(props: TRANSFER_SECTION_PROPS_TYPE) {
  const { type } = props;
  const [emailInput, setEmailInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedTeamId, setSelectedTeamId] = useState("");
  const [teamName, setTeamName] = useState("");
  const { data: allUsersData, isLoading } = useGetAllListUsersQuery();
  const { data } = useGetTeamsQuery();

  const teamsData = data?.data?.teams || [];

  const handleSearch = () => {
    const trimmed = emailInput.trim();
    if (!trimmed) return;

    if (!allUsersData?.data?.users) return;

    // Step 1: filter by user_type
    const filteredUsers = allUsersData.data.users.filter((u: any) =>
      type === "champion" ? u.user_type === 2 : u.user_type === 1,
    );

    // Step 2: match email
    const foundUser = filteredUsers.find(
      (u) => u.email.toLowerCase() === trimmed.toLowerCase(),
    );

    if (foundUser) {
      setFirstName(foundUser.first_name || "");
      setLastName(foundUser.last_name || "");
      if (foundUser.team_id && teamsData.length) {
        const matchedTeam = teamsData.find(
          (team: any) => team.id === foundUser.team_id,
        );

        if (matchedTeam) {
          setTeamName(matchedTeam.team_name);
        } else {
          setTeamName("");
        }
      }
    } else {
      setFirstName("");
      setLastName("");
      setTeamName("");

      SnackbarHandler.errorToast(
        type === "champion" ? "No Champion Found" : "No Member Found",
      );
    }
  };

  const resetForm = () => {
    setEmailInput("");
    setFirstName("");
    setLastName("");
    setSelectedTeamId("");
    setTeamName("");
  };

  const isUserLoaded = !!firstName || !!lastName || !!teamName;
  const { mutate, isPending } = useEditUserMutation();

  const handleConfirm = () => {
    const trimmedEmail = emailInput.trim();

    if (!trimmedEmail) {
      SnackbarHandler.errorToast("Email is required");
      return;
    }
    if (!selectedTeamId) {
      SnackbarHandler.errorToast("Please select a team to transfer");
      return;
    }

    const payload = {
      target_email: trimmedEmail,
      first_name: firstName,
      last_name: lastName,
      team_id: selectedTeamId,
      user_type: type === "champion" ? 2 : 1,
      deactivated: false,
      profile_picture_base64: "",
    };

    mutate(payload, {
      onSuccess: () => {
        SnackbarHandler.successToast(
          type === "champion"
            ? "Champion transfer to another team"
            : "Member transfer to another team",
        );
        resetForm();
      },
      onError: (error: any) => {
        SnackbarHandler.errorToast(error?.message || "Something went wrong");
      },
    });
  };
  return (
    <>
      <div className="bg-[#F6E3BB] rounded-3xl p-14 ml-[37px] max-w-[1100px]">
        <h3 className="text-[35px] text-[#567F55] mb-12 font-[RocaTwo]">
          Transfer {type === "champion" ? "Champion" : "Member"}
          {""} to another team
        </h3>

        {/* Email */}
        <div className="flex items-center mb-6">
          <label className="w-[200px] text-[#567F55] text-[20px]">email</label>

          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="add email address"
            className="bg-[#ffffff] italic px-6 h-[56px] w-[700px] rounded-[16px]"
          />
        </div>
        <div className="flex justify-end mb-6">
          <button
            className="ml-6 bg-[#c2e2e2] px-8 py-2 rounded-[16px] text-[#567f55]"
            onClick={handleSearch}
          >
            {isLoading ? "Searching..." : "Search →"}{" "}
          </button>
        </div>
        {/* First Name */}
        <div className="flex items-center mb-8">
          <label className="w-[200px] text-[#567F55] text-[20px]">
            First Name
          </label>
          <input
            readOnly
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="add pre stablished profile details"
            className="bg-[#ffffff] italic px-6 h-[56px] w-[700px] rounded-[16px]"
          />
        </div>

        {/* Last Name */}
        <div className="flex items-center mb-8">
          <label className="w-[200px] text-[#567F55] text-[20px]">
            Last Name
          </label>
          <input
            readOnly
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="add pre stablished profile details"
            className="bg-[#ffffff] italic px-6 h-[56px] w-[700px] rounded-[16px]"
          />
        </div>

        {/* Team */}
        <div className="flex items-center mb-8">
          <label className="w-[200px] text-[#567F55] text-[20px]">Team</label>
          <input
            readOnly
            type="text"
            value={teamName}
            placeholder="add pre stablished profile details"
            className="bg-[#ffffff] italic px-6 h-[56px] w-[700px] rounded-[16px]"
          />
        </div>

        {/* Transfer To Dropdown */}
        <div className="flex items-center">
          <label className="w-[200px] text-[#567F55] text-[20px]">
            Transfer to
          </label>

          <div className="relative w-[700px]">
            <select
              value={selectedTeamId}
              onChange={(e) => setSelectedTeamId(e.target.value)}
              className="w-full bg-[#ffffff] italic px-6 h-[56px] rounded-[16px] appearance-none"
            >
              <option>
                Champions can transfer members to other teams within the
                organisation Select Team
              </option>
              {teamsData.map((team: any) => (
                <option key={team.id} value={team.id}>
                  {team.team_name}
                </option>
              ))}
            </select>

            <div className="absolute right-6 top-1/2 -translate-y-1/2">▼</div>
          </div>
        </div>

        <div className="flex justify-end mt-16">
          <div
            className="cursor-pointer"
            style={{
              pointerEvents: isUserLoaded ? "auto" : "none",
              opacity: isUserLoaded ? 1 : 0.6,
            }}
            onClick={handleConfirm}
          >
            <PolygonButton
              width="150px"
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
              childTop={20}
            >
              <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center mt-[54px]">
                Confirm
              </span>
            </PolygonButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default TransferSection;
