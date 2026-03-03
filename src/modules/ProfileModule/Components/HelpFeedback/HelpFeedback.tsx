"use client";

import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import React, { useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import { useRouter } from "next/navigation";
import ProfileCommonDropdown from "@/src/components/ProfileCommonDropdown/ProfileCommonDropdown";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";

function HelpFeedback() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  return (
    <div className="relative min-h-screen bg-[#F7F2EA] px-12 pt-10 pb-20">
      {/* Header */}
      <UserProfileHeader greetingColor="#567F55" nameColor="#0F4F58" />

      <Image
        src={images.feedbackBg}
        alt="feedback-shape"
        width={350}
        height={350}
        className="absolute top-45 right-0 z-0  pointer-events-none"
      />
      {/* Page Title Section */}
      <div className="mt-10 ml-[40px] max-w-[900px]">
        <h2 className="text-[44px] font-[RocaTwo] text-[#0F4F58] font-bold">
          Help & Feedback
        </h2>

        <p className="text-[18px] text-[#4E6E5D] mt-6 leading-[30px]">
          Have a question about the portal? Something unclear? An idea to
          improve it?
        </p>

        <p className="text-[18px] text-[#4E6E5D] mt-3">
          We’d love to hear from you.
        </p>
      </div>

      {/* Form Card */}
      <div className="mt-14 ml-[40px] bg-[#F4D9A9] rounded-[28px] px-14 py-10 w-[1120px] relative z-10">
        <div className="space-y-4">
          {/* Name */}
          <div className="flex items-center gap-10">
            <label className="w-[200px] text-[#567F55] text-[20px] font-[Roboto]">
              Name
            </label>

            <input
              type="text"
              placeholder="auto-filled"
              className="flex-1 h-[56px] bg-[#ffffff] rounded-[14px] px-6 text-[#0F4F58] outline-none"
            />
          </div>

          {/* Type of Request */}
          <div className="flex items-center gap-10">
            <div>
              <ProfileCommonDropdown
                label="Type of request"
                options={[
                  "Question",
                  " Technical Issue",
                  "Suggestion",
                  "Feedback",
                ]}
                placeholder="Male / Female / Non-binary / Prefer not to say / Self-describe"
                textColor="#567F55"
                placeholderColor="#9BB89A"
                gap="38px"
                width="200px"
                textSize="20px"
                fieldWidth="770px"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex items-start gap-10">
            <label className="w-[200px] text-[#567F55] text-[20px] font-[Roboto] mt-4">
              Message
            </label>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 h-[420px] bg-[#ffffff] rounded-[20px] px-6 py-6 text-[#0F4F58] resize-none outline-none"
            />
          </div>

          <div className="flex justify-end ">
            <PolygonButton
              width="106px"
              height="75px"
              bgColor="#86c9c9"
              radius={14}
              clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
              childTop={11}
            >
              <span className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold leading-tight text-center">
                Send
              </span>
            </PolygonButton>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-10">
        {/* Bottom Buttons */}
        <CommonButtons
          label="Return to  Homepage"
          bgColor="#cde3cc"
          onClick={() => router.push("/dashboard")}
        />
      </div>
    </div>
  );
}

export default HelpFeedback;
