import { useState } from "react";
import Milestone1 from "../Milestone1/Milestone1";
import { useSearchParams } from "next/navigation";
import MilestoneTwo from "../MilestoneTwo/MilestoneTwo";
import MilestoneThree from "../MilestoneThree/MilestoneThree";

type PRACTICE_PERSPECTIVE_PROPS = {
  ClosePracticePerspective: () => void;
};
function PracticePerspective(props: PRACTICE_PERSPECTIVE_PROPS) {
  const { ClosePracticePerspective } = props;
  type PracticeStep = "milestone1" | "milestone2" | "milestone3";

  const [step, setStep] = useState<PracticeStep>("milestone1");
  const searchParams = useSearchParams();
  const pathname = searchParams.get("step");

  return (
    <div className=" bg-[#D6ECEB] flex justify-center">
      <div className="w-full  px-12 py-4 relative">
        {step === "milestone1" && pathname === "1" && (
          <Milestone1 onNext={() => setStep("milestone2")} />
        )}

        {step === "milestone2" && pathname === "2" && (
          <MilestoneTwo onNext={() => setStep("milestone3")} />
        )}

        {step === "milestone3" && pathname === "3" && (
          <MilestoneThree ClosePracticePerspective={ClosePracticePerspective} />
        )}
      </div>
    </div>
  );
}
export default PracticePerspective;
