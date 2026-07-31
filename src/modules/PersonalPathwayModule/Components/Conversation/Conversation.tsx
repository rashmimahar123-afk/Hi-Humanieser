import AmplifierAccordian from "../AmplifierAccordian/AmplifierAccordian";
import Image from "next/image";
import images from "@/src/assets/images";

import ConversationFirstDescription from "../ConversationFirstDescription/ConversationFirstDescription";
import ConversationSecondDescription from "../ConversationSecondDescription/ConversationSecondDescription";
import ConversationThirdDescription from "../ConversationThirdDescription/ConversationThirdDescription";
import ConversationForthDescription from "../ConversationForthDescription/ConversationForthDescription";
import useHhFrameworkMtjQuery from "@/src/modules/MyTeamJourneyModule/Hooks/useHhFrameworkMtjQuery";
import { useRouter, useSearchParams } from "next/navigation";

function Amplifier() {
  const { data } = useHhFrameworkMtjQuery();
  const searchParams = useSearchParams();

  const focusAreaId = searchParams.get("focusArea");

  const focusAreaData = data?.data?.focus_areas ?? [];

  // MATCH DATA
  const selectedFocusArea = focusAreaData.find(
    (item: any) => item.focus_area_id === focusAreaId,
  );

  const router = useRouter();
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
        <h1
          className="inline-block text-[#567F55] text-[46px] font-[700] font-[Aptos] mb-10 mr-[50px] cursor-pointer"
          onClick={() => router.push("/home")}
        >
          Hi Humaniser!™
        </h1>

        {/* Main Content */}
        <div className=" ml-[38px] mx-auto">
          <h2 className="text-[#0F4F58] text-[42px] font-[700] font-[RocaTwo] mb-6">
            Focus Area: {selectedFocusArea?.title}
          </h2>

          {/* Description Card */}
          <div className="bg-white rounded-[14px] px-8 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] max-w-[1000px]">
            <p className="text-[#567F55] text-[21px] font-bold font-[Roboto]">
              {selectedFocusArea?.description_long}
            </p>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto mt-14 space-y-6">
          <AmplifierAccordian title="What to Expect">
            <ConversationFirstDescription
              selectedFocusAreaExpect={selectedFocusArea?.what_to_expect}
            />
          </AmplifierAccordian>
          <AmplifierAccordian title="Team Rituals">
            <ConversationSecondDescription
              selectedFocusAreaTeamRituals={selectedFocusArea?.team_rituals}
            />
          </AmplifierAccordian>
          <AmplifierAccordian title="Why This Works">
            <ConversationThirdDescription
              selectedFocusAreaWorks={selectedFocusArea?.why_it_works}
            />
          </AmplifierAccordian>
          <AmplifierAccordian title="Common Traps">
            <ConversationForthDescription
              selectedFocusAreaTraps={selectedFocusArea?.common_traps}
            />
          </AmplifierAccordian>
        </div>
      </div>
    </div>
  );
}
export default Amplifier;
