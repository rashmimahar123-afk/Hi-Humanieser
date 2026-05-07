import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import React, { useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import { useRouter, useSearchParams } from "next/navigation";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import TransferSection from "../TransferSection/TransferSection";
import DeactivateSection from "../DeactivateSection/DeactivateSection";
import ActivateSection from "../ActivateSection/ActivateSection";
import DeleteSection from "../DeleteSection/DeleteSection";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import EditSection from "../EditSection/EditSection";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";

function EditMembers() {
  const router = useRouter();
  const [action, setAction] = useState("edit");
  const { user } = useAuthValue();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  return (
    <>
      <div className="relative z-10 min-h-screen bg-[#F8F4EE] px-8 py-10 font-serif">
        <UserProfileHeader
          greetingColor="#0f4f58"
          nameColor="#0F4F58"
          userInfo={user}
        />

        {/* Background Shape */}
        <Image
          src={images.quizPolygon}
          alt="quiz-polygon"
          width={630}
          height={630}
          className="absolute top-0 right-0 -z-10 pointer-events-none"
        />

        {/* Page Heading */}
        <div className="ml-[37px] mt-6 mb-10">
          <h2 className="text-[44px] font-bold text-[#0f4f58] font-[RocaTwo]">
            Edit{" "}
            {type === "partner"
              ? "Partner"
              : type === "champion"
                ? "Champion"
                : "Member"}
          </h2>

          <p className="text-[#4E6E5D] mt-3 ml-6 text-[22px] max-w-[850px] leading-relaxed">
            Need to make a change for one of your team members? Pick an option
            below, everything you need is right here.
          </p>
        </div>

        {/* Dropdown Strip */}
        <div className="bg-[#F6E3BB] rounded-2xl px-12 py-6 mb-10 flex items-center gap-6 max-w-[1100px] ml-[37px]">
          <label className="text-[#567F55] text-[20px] font-[Roboto] whitespace-nowrap">
            What would you like to do?
          </label>

          <div className="flex-1 relative">
            <select
              value={action}
              onChange={(e) => setAction(e.target.value)}
              className="w-full bg-[#ffffff] text-[#4E6E5D] text-[18px] px-6 h-[56px] rounded-[16px] outline-none font-[Roboto] appearance-none"
            >
              <option value="edit">
                Edit{" "}
                {type === "partner"
                  ? "Partner"
                  : type === "champion"
                    ? "Champion"
                    : "Member"}{" "}
                {""}
                profile
              </option>
              {type !== "partner" && (
                <option value="transfer">
                  Transfer{" "}
                  {type === "partner"
                    ? "Partner"
                    : type === "champion"
                      ? "Champion"
                      : "Member"}{" "}
                  {""}
                  to another team
                </option>
              )}

              <option value="deactivate">
                Deactivate{" "}
                {type === "partner"
                  ? "Partner"
                  : type === "champion"
                    ? "Champion"
                    : "Member"}{" "}
                {""}
              </option>
              <option value="activate">
                Activate{" "}
                {type === "partner"
                  ? "Partner"
                  : type === "champion"
                    ? "Champion"
                    : "Member"}{" "}
                {""}
              </option>
              <option value="delete">
                Delete{" "}
                {type === "partner"
                  ? "Partner"
                  : type === "champion"
                    ? "Champion"
                    : "Member"}{" "}
                {""}
              </option>
            </select>

            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#0F4F58] text-[22px]">
              ▼
            </div>
          </div>
        </div>

        {action === "edit" && <EditSection type={type} />}

        {type !== "partner" && action === "transfer" && (
          <TransferSection type={type} />
        )}

        {action === "deactivate" && <DeactivateSection type={type} />}

        {action === "activate" && <ActivateSection type={type} />}

        {action === "delete" && <DeleteSection type={type} />}
      </div>
      <LogoutModal />
    </>
  );
}

export default EditMembers;
