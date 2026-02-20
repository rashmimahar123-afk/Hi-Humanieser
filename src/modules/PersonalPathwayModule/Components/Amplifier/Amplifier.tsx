import AmplifierAccordian from "../AmplifierAccordian/AmplifierAccordian";
import Image from "next/image";
import images from "@/src/assets/images";
import AmplifierFirstDescription from "../AmplifierfirstDescription/AmplifierFirstDescription";
import AmplifierSecondDescription from "../AmplifierSecondDescription/AmplifierSecondDescription";
import AmplifierThirdDescription from "../AmplifierThirdDescription/AmplifierThirdDescription";
import AmplifierForthDescription from "../AmplifierForthDescription/AmplifierForthDescription";
import AmplifierFifthDescription from "../AmplifierFifthDescription/AmplifierFifthDescription";
import AmplifierSixDescription from "../AmplifierSixDescription.tsx/AmplifierSixDescription";

function Amplifier() {
  return (
    <div className="bg-[#F5F0EB] min-h-screen ">
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
        <h1 className="text-[#567F55] text-[46px] font-[700] font-[Aptos] mb-10 mr-[50px]">
          Hi Humaniser!™
        </h1>

        {/* Main Content */}
        <div className=" ml-[38px] mx-auto">
          <h2 className="text-[#0F4F58] text-[42px] font-[700] font-[RocaTwo] mb-6">
            Pathway: Wellbeing Is Performance Infrastructure
          </h2>

          {/* Description Card */}
          <div className="bg-white rounded-[14px] px-8 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-[1000px]">
            <p className="text-[#567F55] text-[21px] font-bold font-[Roboto]">
              Make It Sustainable is about ensuring human ways of working don’t
              disappear under pressure. It recognises that care, clarity and
              connection often fade when urgency rises, unless consciously
              protected. This pathway helps you notice when pressure reshapes
              how work gets done and how people show up. It guides you to
              protect repeatable, human behaviours, so performance continues
              without relying on urgency or personal sacrifice.
            </p>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto mt-14 space-y-6">
          <AmplifierAccordian title="Why This Works">
            <AmplifierFirstDescription />
          </AmplifierAccordian>
          <AmplifierAccordian title="Core Behaviours">
            <AmplifierSecondDescription />
          </AmplifierAccordian>
          <AmplifierAccordian title="Amplifier Behaviours">
            <AmplifierThirdDescription />
          </AmplifierAccordian>
          <AmplifierAccordian title="Common Traps">
            <AmplifierForthDescription />
          </AmplifierAccordian>
          <AmplifierAccordian title="Micro-Actions">
            <AmplifierFifthDescription />
          </AmplifierAccordian>
          <AmplifierAccordian title="Conversation Starters">
            <AmplifierSixDescription />
          </AmplifierAccordian>
        </div>
      </div>
    </div>
  );
}
export default Amplifier;
