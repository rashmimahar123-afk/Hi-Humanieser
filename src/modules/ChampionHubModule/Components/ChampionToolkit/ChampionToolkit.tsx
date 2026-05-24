"use client";

import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./ChampionToolkit.module.css";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function ChampionToolkit() {
  const router = useRouter();
  const { user } = useAuthValue();

  return (
    <div className={`${styles.wrapper} relative bg-[#F5F0EB] min-h-screen`}>
      <Image
        src={images.privacyPolygon}
        alt="background shape"
        width={520}
        height={520}
        className="absolute left-0 top-0 z-0"
      />

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="py-6">
          <UserProfileHeader
            greetingColor="#0f4f58"
            nameColor="#0F4F58"
            userInfo={user}
          />
        </div>

        <div className="relative mt-20 px-4 sm:px-6 lg:px-0">
          <Image
            src={images.toolkitImg}
            alt="toolkit"
            width={400}
            height={400}
            className="absolute right-10 top-0 z-0 hidden lg:block"
          />

          <div className="relative z-10 max-w-[1200px] mx-auto">
            <div className="font-bold text-[#0F4F58] text-[40px] sm:text-[46px] md:text-[52px] lg:text-[60px] font-[RocaTwo]">
              Champion Toolkit
            </div>
            <div className="mt-4 lg:ml-8">
              <h3 className="text-[26px] sm:text-[28px] md:text-[30px] font-semibold text-[#0F4F58] mb-4">
                Here’s where things get practical.
              </h3>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[#0F4F58] leading-relaxed mb-6">
                Small-but-mighty tools to help you guide your team’s rhythm —
                embed rituals into everyday work, prompt useful check-ins, and
                strengthen coordination within and across teams.
              </p>
            </div>

            <div className="space-y-10 mt-14">
              <div className="mt-12 w-full max-w-[1200px]">
                <PolygonButton
                  width="100%"
                  height="150px"
                  bgColor="#86C9C9"
                  radius={16}
                  clipPath={`polygon(
      3% 10%,
      97% 0%,
      95% 100%,
      0% 100%
    )`}
                  contentClassName="items-start justify-start text-left w-full"
                >
                  <div className="w-full px-6 py-5">
                    <h4 className="text-[24px] sm:text-[28px] md:text-[32px] font-[RocaTwo] text-[#0F4F58] font-bold">
                      HH! Moments
                    </h4>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0F4F58] max-w-[1000px] text-left">
                      Short, powerful practices to spark humanity in any
                      meeting. No prep needed — just small moments that shift
                      how your team shows up.
                    </p>
                  </div>
                </PolygonButton>
              </div>

              <div className="space-y-8 mt-12 w-full max-w-[1200px]">
                <PolygonButton
                  width="100%"
                  height="150px"
                  bgColor="#cde3cc"
                  radius={16}
                  clipPath={`polygon(
      3% 10%,
      97% 0%,
      95% 100%,
      0% 100%
    )`}
                  contentClassName="items-start justify-start text-left w-full"
                >
                  <div className="w-full px-6 py-5">
                    <h4 className="text-[24px] sm:text-[28px] md:text-[30px] font-[RocaTwo] text-[#0F4F58] font-bold">
                      Cross-Team Workshops
                    </h4>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0F4F58] max-w-[1000px] text-left">
                      Guidance and tools to help teams share learning, surface
                      patterns, and shape how work works — across the
                      organisation.
                    </p>
                  </div>
                </PolygonButton>
              </div>

              <div className="space-y-8 mt-12 w-full max-w-[1200px]">
                <PolygonButton
                  width="100%"
                  height="150px"
                  bgColor="#f8e1b8"
                  radius={16}
                  clipPath={`polygon(
      3% 10%,
      97% 0%,
      100% 90%,
      0% 100%
    )`}
                  contentClassName="items-start justify-start text-left w-full"
                >
                  <div className="w-full px-6 py-5">
                    <h4 className="text-[24px] sm:text-[28px] md:text-[30px] font-[RocaTwo] text-[#0F4F58] font-bold">
                      Ease the Pressure
                    </h4>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0F4F58] max-w-[1000px] text-left">
                      Targeted ideas to ease common leadership pressures — from
                      urgency and bottlenecks to alignment and decision flow.
                    </p>
                  </div>
                </PolygonButton>
              </div>

              <div className="space-y-8 mt-12 w-full max-w-[1200px]">
                <PolygonButton
                  width="100%"
                  height="190px"
                  bgColor="#fbe1de"
                  radius={16}
                  clipPath={`polygon(
      0% 10%,
      97% 0%,
      100% 90%,
      0% 100%
    )`}
                  contentClassName="items-start justify-start text-left w-full"
                >
                  <div className="w-full px-6 py-5">
                    <h4 className="text-[24px] sm:text-[28px] md:text-[30px] font-[RocaTwo] text-[#0F4F58] font-bold">
                      When things get tricky...
                    </h4>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0F4F58] max-w-[1000px] text-left">
                      Gentle guidance for the moments that feel a little harder
                      — from low engagement to tough conversations and
                      everything in between. Because leading is not always
                      smooth, and that’s okay.
                    </p>
                  </div>
                </PolygonButton>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <CommonButtons
            label="Back to Champion Resources"
            bgColor="#cde3cc"
            onClick={() => router.push("/champion-resources")}
          />
          <CommonButtons
            label="Explore other resources"
            bgColor="#86C9C9"
            onClick={() => router.push("/champion-resources")}
          />
        </div>
      </div>
    </div>
  );
}

export default ChampionToolkit;
