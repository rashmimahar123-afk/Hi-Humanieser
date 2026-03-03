import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

function EditTeam() {
  const router = useRouter();
  return (
    <div className=" relative z-10 min-h-screen bg-[#F8F4EE] px-8 py-10 font-serif">
      <div>
        <UserProfileHeader greetingColor="#0f4f58" nameColor="#0F4F58" />
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
              value="Systems Engineering - UK" // <-- fetched value here
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
              placeholder="in here, the team name as before"
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
          <div className="flex justify-end mt-16">
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
              childTop={20}
            >
              <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                Save <br /> Changes
              </span>
            </PolygonButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTeam;
