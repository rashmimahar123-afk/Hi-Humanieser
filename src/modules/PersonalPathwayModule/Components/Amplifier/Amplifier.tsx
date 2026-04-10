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
  const pillarsData = data?.data?.[1]?.pillars;

  const flatPillars = pillarsData?.map((item: any) => {
    return item;
  });

  const selectedPrincipleData: PILLAR_PRINCIPLE_TYPE = flatPillars
    ?.find((pillar: any) => pillar.pillar_number === Number(pillarNumber))
    ?.principles?.find(
      (principle: any) =>
        principle.principle_number === Number(principleNumber),
    );

  return (
    <div
      className={`bg-[#F5F0EB] min-h-screen  ${styles.page}
   ${styles.enterRight}
  ${enter ? styles.enterActive : ""}`}
    >
      <div className="relative">
        <Image
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0"
        />
      </div>
      <div className="relative z-10 px-10 py-8">
        <div onClick={() => router.push("/home")} className="cursor-pointer">
          <h1 className="text-[#567F55] text-[46px] font-[700] font-[Aptos] mb-10 mr-[50px]">
            Hi Humaniser!™
          </h1>
        </div>

        {/* Main Content */}
        <div className=" ml-[38px] mx-auto">
          <h2 className="text-[#0F4F58] text-[42px] font-[700] font-[RocaTwo] mb-6">
            Pathway: {selectedPrincipleData?.pathway_title}
          </h2>

          {/* Description Card */}
          <div className="bg-white rounded-[14px] px-8 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-[1000px]">
            <p className="text-[#567F55] text-[21px] font-bold font-[Roboto] text-center">
              {selectedPrincipleData?.definition}
            </p>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto mt-14 space-y-6">
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
