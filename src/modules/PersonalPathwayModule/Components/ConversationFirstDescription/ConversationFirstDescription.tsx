import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { FOCUS_AREA_STEP_DATA } from "@/src/modules/MyTeamJourneyModule/Types/ResponseTypes";

type CONVERSATION_FIRST_DESCRIPTION_PROPS = {
  selectedFocusAreaExpect?: {
    intro: string;
    steps: Array<FOCUS_AREA_STEP_DATA>;
    designed_for_real_work: string;
  };
};
function ConversationFirstDescription(
  props: CONVERSATION_FIRST_DESCRIPTION_PROPS,
) {
  const { selectedFocusAreaExpect } = props;

  return (
    <div className="relative space-y-5 overflow-hidden">
      {/* Background Illustration */}
      <Image
        src={images.ConversationFirstImg}
        alt=""
        className="absolute right-0 bottom-75 z-0 pointer-events-none"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 space-y-5 font-[Roboto] text-[20px]">
        {/* Intro */}
        <p>{selectedFocusAreaExpect?.intro}</p>

        <p>Here’s how it usually unfolds:</p>

        {/* Sections */}
        {selectedFocusAreaExpect?.steps?.map(
          (step: FOCUS_AREA_STEP_DATA, index: number) => (
            <div key={index}>
              <p className="font-[700] text-[#0F4A4E] mb-1 text-[22px]">
                {step.step}. {step.title}
              </p>

              <p>{step.body}</p>

              {/* Examples */}
              {step.examples && step.examples.length > 0 && (
                <ul className="list-disc pl-[18px] space-y-[10px] text-[#0F4A4E] text-[20px] leading-[1.6] max-w-[820px] ml-4 mt-3">
                  {step.examples.map(
                    (example: string, exampleIndex: number) => (
                      <li key={exampleIndex}>{example}</li>
                    ),
                  )}
                </ul>
              )}
            </div>
          ),
        )}

        {/* Designed for real work box */}
        <div className="flex justify-end">
          <div className="mt-6 max-w-[640px] bg-white rounded-[12px] px-6 py-5 shadow-sm">
            <p className="text-[#5A8F66] font-[700] text-[16px] mb-2">
              Designed for real work
            </p>

            <p className="text-[#5A8F66] text-[16px] leading-[1.6] font-[Roboto]">
              These rituals and moments are designed to work whether your team
              sits together, works across projects, or collaborates with people
              who aren’t using HH!. You don’t need everyone to participate for
              them to make a difference — one person practising them can shift
              how work feels and flows.
            </p>
          </div>
        </div>
      </div>

      {/* Button stays above bg */}
      <div className="relative z-10 flex justify-end mt-[53px] mb-[7px]">
        <div className=" flex items-center mr-[30px] max-w-[453px] flex text-end mt-[53px]">
          <p className="text-[17px] text-[#0F4F58] font-[Roboto] ">
            Want a simple way to keep team rituals present in everyday work?
            Check Hi Humanser! Moments
          </p>
        </div>
        <div className="mt-10">
          <PolygonButton
            width="106px"
            height="107px"
            bgColor="#86C9C9"
            radius={14}
            clipPath={`polygon(
        0% 30%,
        92% 0%,
        100% 87%,
        3% calc(100% - 15px)
      )`}
            decorationImg={{
              src: images.arrowImg,
              width: 48,
              height: 48,
            }}
            decorationPosition={{
              className: "-left-[56px] -top-[40px] rotate-[20deg]",
            }}
          >
            <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
              HH! Moments
            </span>
          </PolygonButton>
        </div>
      </div>
    </div>
  );
}
export default ConversationFirstDescription;
