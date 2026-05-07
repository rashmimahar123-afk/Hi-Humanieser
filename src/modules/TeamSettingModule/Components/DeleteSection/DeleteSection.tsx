import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import SnackbarHandler from "@/src/lib/SnackbarHandler";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useDeleteUserMutation } from "@/src/modules/ProfileModule/Hooks/useDeleteUserMutation";
import useGetAllListUsersQuery from "@/src/modules/ProfileModule/Hooks/useGetAllListUsersQuery";
import { Fragment, useState } from "react";

type DELETE_SECTION_PROPS_TYPE = {
  type: string | any;
};

function DeleteSection(props: DELETE_SECTION_PROPS_TYPE) {
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
    const filteredUsers = allUsersData.data.users.filter(
      (u) => u.user_type === user?.user_type,
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
      SnackbarHandler.errorToast("No user found");
    }
  };

  const isUserLoaded = !!firstName || !!lastName;
  const { mutate: deleteUser, isPending } = useDeleteUserMutation();
  const handleConfirm = () => {
    const trimmed = emailInput.trim();

    if (!trimmed) {
      SnackbarHandler.errorToast("Please enter email");
      return;
    }

    deleteUser(
      { email: trimmed },
      {
        onSuccess: (res) => {
          SnackbarHandler.successToast("User deleted successfully");

          // reset fields
          setEmailInput("");
          setFirstName("");
          setLastName("");
        },
        onError: (err: any) => {
          SnackbarHandler.errorToast(
            err?.response?.data?.message || "Something went wrong",
          );
        },
      },
    );
  };

  return (
    <>
      <div className="bg-[#F6E3BB] rounded-3xl p-14 ml-[37px] max-w-[1100px]">
        <h3 className="text-[35px] text-[#567F55]  font-[RocaTwo]">
          Delete {type === "partner" ? "Partner" : "Member"} {""} from HH!
          Portal
        </h3>
        <div className="ml-10 mb-10 text-[#567F55] font-[Roboto] text-[23px] ">
          Delete {type === "partner" ? "Partner" : "Member"} {""} and all the
          associated data.{" "}
        </div>

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

        {type !== "partner" ? (
          <div className="flex items-center mb-8">
            <label className="w-[200px] text-[#567F55] text-[20px]">Team</label>
            <input
              readOnly
              type="text"
              placeholder="add pre stablished profile details"
              className="bg-[#ffffff] italic px-6 h-[56px] w-[700px] rounded-[16px]"
            />
          </div>
        ) : (
          <Fragment />
        )}

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
                {isPending ? "Updating..." : "Confirm"}
              </span>
            </PolygonButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default DeleteSection;
