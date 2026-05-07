import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useEffect, useState } from "react";
import useFindUserQuery from "../../Hooks/useFindUserQuery";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import useGetAllListUsersQuery from "@/src/modules/ProfileModule/Hooks/useGetAllListUsersQuery";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useEditUserMutation } from "@/src/modules/ProfileModule/Hooks/useEditUserMutation";

type EDIT_SECTION_PROPS_TYPE = {
  type: string | any;
};
function EditSection(props: EDIT_SECTION_PROPS_TYPE) {
  const { type } = props;
  const [emailInput, setEmailInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { user } = useAuthValue();
  const { data: allUsersData, isLoading } = useGetAllListUsersQuery();

  const handleSearch = () => {
    const trimmed = emailInput.trim();
    if (!trimmed) return;

    if (!allUsersData?.data?.users) return;

    // Step 1: filter by user_type
    const filteredUsers = allUsersData.data.users.filter((u) =>
      type === "partner"
        ? u.user_type === 3
        : type === "champion"
          ? u.user_type === 2
          : u.user_type === 1,
    );

    // Step 2: match email
    const foundUser = filteredUsers.find(
      (u) => u.email.toLowerCase() === trimmed.toLowerCase(),
    );

    if (foundUser) {
      setFirstName(foundUser.first_name || "");
      setLastName(foundUser.last_name || "");
    } else {
      setFirstName("");
      setLastName("");
      SnackbarHandler.errorToast(
        type === "partner"
          ? "No partner found"
          : type === "champion"
            ? "No Champion Found"
            : "No Member Found",
      );
    }
  };

  const isUserLoaded = !!firstName || !!lastName;

  const { mutate, isPending } = useEditUserMutation();
  const handleConfirm = () => {
    const trimmedEmail = emailInput.trim();

    if (!trimmedEmail) {
      SnackbarHandler.errorToast("Email is required");
      return;
    }

    const payload = {
      target_email: trimmedEmail,
      first_name: firstName,
      last_name: lastName,
      team_id: user?.team_id || "",
      user_type: type === "partner" ? 3 : type === "champion" ? 2 : 1,
      deactivated: false,
      profile_picture_base64: "",
    };

    mutate(payload, {
      onSuccess: () => {
        SnackbarHandler.successToast("User updated successfully");
      },
      onError: (error: any) => {
        SnackbarHandler.errorToast(error?.message || "Something went wrong");
      },
    });
  };
  return (
    <div className="bg-[#F6E3BB] rounded-3xl p-14 ml-[37px] max-w-[1100px]">
      <h3 className="text-[35px] text-[#567F55] mb-10 font-[RocaTwo]">
        Edit{" "}
        {type === "partner"
          ? "Partner"
          : type === "champion"
            ? "Champion"
            : "Member"}{" "}
        {""} profile
        {/* For Edit User Profile based on condition
      Edit User Profile */}
      </h3>

      {/* Email */}
      <div className="flex items-center ">
        <label className="w-[200px] text-[#567F55] text-[20px]">email</label>
        <input
          type="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder="add email address"
          className="bg-[#ffffff] italic px-6 h-[56px] w-[520px] rounded-[16px]"
        />
      </div>
      <div className="flex justify-end mb-10">
        <button
          className="ml-6 bg-[#c2e2e2] px-8 py-2 rounded-[16px] text-[#567f55]"
          onClick={handleSearch}
        >
          {isLoading ? "Searching..." : "Search →"}{" "}
        </button>
      </div>
      {/* First Name */}
      <div className="flex items-center mb-10">
        <label className="w-[200px] text-[#567F55] text-[20px]">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="add pre stablished profile details AND Editable box"
          className="bg-[#ffffff] italic px-6 h-[56px] w-[700px] rounded-[16px]"
        />
      </div>

      {/* Last Name */}
      <div className="flex items-center mb-10">
        <label className="w-[200px] text-[#567F55] text-[20px]">
          Last Name
        </label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="add pre stablished profile details AND Editable box"
          className="bg-[#ffffff] italic px-6 h-[56px] w-[700px] rounded-[16px]"
        />
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
          {" "}
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
              {isPending ? "Updating..." : "Confirm"}
            </span>
          </PolygonButton>
        </div>
      </div>
    </div>
  );
}
export default EditSection;
