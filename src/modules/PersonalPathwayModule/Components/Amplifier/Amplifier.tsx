"use client";
import AmplifierAccordian from "../AmplifierAccordian/AmplifierAccordian";
import Image from "next/image";
import images from "@/src/assets/images";
import AmplifierFirstDescription from "../AmplifierfirstDescription/AmplifierFirstDescription";
import AmplifierSecondDescription from "../AmplifierSecondDescription/AmplifierSecondDescription";
import AmplifierThirdDescription from "../AmplifierThirdDescription/AmplifierThirdDescription";
import AmplifierForthDescription from "../AmplifierForthDescription/AmplifierForthDescription";
import AmplifierFifthDescription from "../AmplifierFifthDescription/AmplifierFifthDescription";
import AmplifierSixDescription from "../AmplifierSixDescription.tsx/AmplifierSixDescription";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { PILLAR_PRINCIPLE_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";
import { useEffect, useState } from "react";
import styles from "./Amplifier.module.css";

function Amplifier() {
  const { data } = useChooseMyselfQuery();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const pillarNumber = Number(searchParams.get("pillar"));
  const principleNumber = Number(searchParams.get("principle"));

  // Try both index 0 and index 1 to find pillars
  const pillarsData =
    data?.data?.[0]?.pillars ??
    data?.data?.[1]?.pillars ??
    data?.data?.pillars ??
    data?.pillars ??
    [];

  const selectedPrincipleData: PILLAR_PRINCIPLE_TYPE = pillarsData
    ?.find((pillar: any) => pillar.pillar_number === pillarNumber)
    ?.principles?.find(
      (principle: any) => principle.principle_number === principleNumber,
    );

  return (
    <div
      className={`bg-[#F5F0EB] min-h-screen ${styles.page} ${styles.enterRight} ${enter ? styles.enterActive : ""}`}
    >
      {/* Background polygon */}
      <div className="relative">
        <Image
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0 w-[160px] h-[160px] sm:w-[350px] sm:h-[350px] lg:w-[630px] lg:h-[630px]"
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-10 py-6 lg:py-8">
        {/* Header */}
        <div onClick={() => router.push("/home")} className="cursor-pointer">
          <h1 className="text-[#567F55] text-[28px] sm:text-[36px] lg:text-[46px] font-[700] font-[Aptos] mb-6 lg:mb-10">
            Hi Humaniser!™
          </h1>
        </div>

        {/* Main Content */}
        <div className="ml-0 sm:ml-[20px] lg:ml-[38px]">
          <h2 className="text-[#0F4F58] text-[22px] sm:text-[32px] lg:text-[42px] font-[700] font-[RocaTwo] mb-4 lg:mb-6">
            Pathway: {selectedPrincipleData?.pathway_title ?? "Loading..."}
          </h2>

          {/* Definition Card */}
          {selectedPrincipleData?.definition && (
            <div className="bg-white rounded-[14px] px-4 sm:px-6 lg:px-8 py-4 lg:py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-[1000px]">
              <p className="text-[#567F55] text-[15px] sm:text-[18px] lg:text-[21px] font-bold font-[Roboto] text-center">
                {selectedPrincipleData.definition}
              </p>
            </div>
          )}
        </div>

        {/* Accordions */}
        <div className="max-w-[1100px] mx-auto mt-8 lg:mt-14 space-y-4 lg:space-y-6">
          <AmplifierAccordian title="Why This Works">
            <AmplifierFirstDescription />
          </AmplifierAccordian>

          <AmplifierAccordian title="Core Behaviours">
            <AmplifierSecondDescription
              coreBehaviour={selectedPrincipleData?.core_behaviours}
            />
          </AmplifierAccordian>

          <AmplifierAccordian title="Amplifier Behaviours">
            <AmplifierThirdDescription
              amplifierBehaviour={selectedPrincipleData?.amplifier_behaviours}
            />
          </AmplifierAccordian>

          <AmplifierAccordian title="Common Traps">
            <AmplifierForthDescription
              commonTraps={selectedPrincipleData?.common_traps}
            />
          </AmplifierAccordian>

          <AmplifierAccordian title="Micro-Actions">
            <AmplifierFifthDescription
              microActions={selectedPrincipleData?.micro_actions}
            />
          </AmplifierAccordian>

          <AmplifierAccordian title="Conversation Starters">
            <AmplifierSixDescription
              conversationStarter={selectedPrincipleData?.conversation_starters}
            />
          </AmplifierAccordian>
        </div>
      </div>
    </div>
  );
}

export default Amplifier;
