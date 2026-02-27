import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import React, { useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

function HelpFeedback() {
  const router = useRouter();
  const [reflection, setReflection] = useState("");

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
            Help & Feedback
          </h2>
          <p className="text-[#4E6E5D] mt-2 ml-2">
            Have a question about the portal? Something unclear? An idea to
            improve it?
          </p>
          <p className="text-[#4E6E5D] mt-2 ml-2">
            We’d love to hear from you.
          </p>
        </div>
      </div>

      {/* Invite Members */}
      <div className="bg-[#F6E3BB] rounded-3xl p-10">
        <div className="max-w-[1000px] space-y-6 mt-6">
          {/* First Name */}
          <div className="flex items-center gap-8">
            <label className="w-[160px] text-[#567F55] text-[18px] font-[Roboto]">
              Name
            </label>

            <input
              type="text"
              className="flex-1 max-w-[720px] h-[48px] bg-[#EDEBE6] 
      rounded-[12px] px-6 text-[#0F4F58] outline-none"
            />
          </div>

          <div className="flex items-center gap-8">
            <label className="w-[160px] text-[#567F55] text-[18px] font-[Roboto]">
              Type of request{" "}
            </label>

            <div className="relative flex-1 max-w-[720px]">
              <select
                className="appearance-none w-full h-[48px] bg-[#EDEBE6]
        rounded-[12px] px-6 pr-12 text-[#4E6E5D] outline-none"
              ></select>

              {/* Custom dropdown icon */}
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <Image src={images.dropdownImg} alt="dropdown" width={18} />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <label className="w-[160px] text-[#567F55] text-[18px] font-[Roboto]">
              Message
            </label>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Write your reflection here…"
              className="
              w-full
              min-h-[180px]
              resize-none
              rounded-[18px]
              border border-[#A7D3CB]
              bg-transparent
              px-4 py-3
              text-[15px]
              text-[#0F4F58]
              placeholder:text-[#8FA8A4]
              focus:outline-none
              focus:ring-2
             ` focus:ring-[#A7D3CB]
            "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpFeedback;
