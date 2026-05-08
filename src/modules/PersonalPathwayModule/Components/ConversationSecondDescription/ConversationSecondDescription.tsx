import Image from "next/image";
import images from "@/src/assets/images";
import { MY_TEAM_RITUALS_DATA } from "@/src/modules/MyTeamJourneyModule/Types/ResponseTypes";

type CONVERSATION_SECOND_DESC_PROPS = {
  selectedFocusAreaTeamRituals?: Array<MY_TEAM_RITUALS_DATA>;
};
function ConversationSecondDescription(props: CONVERSATION_SECOND_DESC_PROPS) {
  const { selectedFocusAreaTeamRituals } = props;

  return (
    <div className="relative rounded-[28px] px-[48px] overflow-hidden">
      {selectedFocusAreaTeamRituals?.map(
        (ritual: MY_TEAM_RITUALS_DATA, index: number) => (
          <div key={ritual.team_ritual_id}>
            <div className="flex gap-[16px] max-w-[820px]">
              <div className="w-[36px] h-[36px] rounded-full bg-[#7EC6C3] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="#0F4A4E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <h3 className="text-[#0F4A4E] text-[20px] font-bold mb-[4px]">
                  {ritual.title}
                </h3>

                <p className="text-[#0F4A4E] text-[16px] leading-[1.6]">
                  {ritual.long_description}
                </p>

                {/* Try Saying */}
                {ritual.try_saying && ritual.try_saying.length > 0 && (
                  <div className="mt-3">
                    <div className="font-bold mb-1">Try Saying</div>

                    {ritual.try_saying.map((item: string, tryIndex: number) => (
                      <div key={tryIndex}>“{item}”</div>
                    ))}
                  </div>
                )}

                {/* Common Traps */}
                {ritual.common_traps && ritual.common_traps.length > 0 && (
                  <div className="mt-4">
                    <div className="font-bold mb-2">Common Traps</div>

                    <ul className="list-disc pl-5 space-y-2 text-[#0F4A4E] text-[16px]">
                      {ritual.common_traps.map(
                        (trap: string, trapIndex: number) => (
                          <li key={trapIndex}>{trap}</li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            {index !== selectedFocusAreaTeamRituals.length - 1 && (
              <Image
                src={images.waveImg}
                alt=""
                className="my-[36px] pointer-events-none"
              />
            )}
          </div>
        ),
      )}
    </div>
  );
}

export default ConversationSecondDescription;
