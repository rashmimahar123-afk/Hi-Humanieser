import { useEffect, useState } from "react";
import Milestone1 from "../Milestone1/Milestone1";
import { useSearchParams } from "next/navigation";
import MilestoneTwo from "../MilestoneTwo/MilestoneTwo";
import MilestoneThree from "../MilestoneThree/MilestoneThree";
import { PILLAR_PRINCIPLE_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";

type PRACTICE_PERSPECTIVE_PROPS = {
  ClosePracticePerspective: () => void;
  pathwayDetails: PILLAR_PRINCIPLE_TYPE;
  pillarNumber: number;
  id: string;
  pathwayData: any;
  formattedActivePathways: any;
};
type ActivePathwayType = {
  m1: any;
  m2: any;
  m3: any;
};
function PracticePerspective(props: PRACTICE_PERSPECTIVE_PROPS) {
  const {
    ClosePracticePerspective,
    pathwayDetails,
    pillarNumber,
    id,
    pathwayData,
    formattedActivePathways,
  } = props;
  type PracticeStep = "milestone1" | "milestone2" | "milestone3";

  const [step, setStep] = useState<PracticeStep>("milestone1");
  const [activePathway, setActivePathway] = useState<ActivePathwayType | null>(
    null,
  );

  const searchParams = useSearchParams();
  const pathname = searchParams.get("step");
  useEffect(() => {
    const active = pathwayData?.find((p: any) => p.active && p.uuid === id);

    if (active) {
      const firstKey = Object.keys(active).find(
        (k) => !["uuid", "active", "created"].includes(k),
      );

      if (firstKey) {
        setActivePathway({
          m1: active[firstKey]?.m1,
          m2: active[firstKey]?.m2,
          m3: active[firstKey]?.m3,
        });
      }
    }
  }, [pathwayData, id]);

  return (
    <div className=" bg-[#D6ECEB] flex justify-center">
      <div className="w-full  px-12 py-4 relative">
        {step === "milestone1" && pathname === "1" && (
          <Milestone1
            onNext={() => setStep("milestone2")}
            pathwayDetails={pathwayDetails}
            pillarNumber={pillarNumber}
            id={id}
            m1Data={activePathway?.m1}
          />
        )}

        {step === "milestone2" && pathname === "2" && (
          <MilestoneTwo
            onNext={() => setStep("milestone3")}
            pathwayDetails={pathwayDetails}
            pillarNumber={pillarNumber}
            id={id}
            m2Data={activePathway?.m2}
          />
        )}

        {step === "milestone3" && pathname === "3" && (
          <MilestoneThree
            ClosePracticePerspective={ClosePracticePerspective}
            pathwayDetails={pathwayDetails}
            pillarNumber={pillarNumber}
            id={id}
            m3Data={activePathway?.m3}
            m1Pulse={activePathway?.m1?.pulse_check}
          />
        )}
      </div>
    </div>
  );
}
export default PracticePerspective;
