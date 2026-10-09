import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useRouter } from "next/navigation";

type CONVERSATION_THIRD_DESC_PROPS = {
  selectedFocusAreaWorks?: {
    body: string;
    summary: string;
  };
};
function ConversationThirdDescription(props: CONVERSATION_THIRD_DESC_PROPS) {
  const { selectedFocusAreaWorks } = props;
  const router = useRouter();
  return (
    <div className="relative space-y-5 overflow-hidden">
      {/* Background Illustration — the PNG has a solid beige fill baked in,
          so blend it with darken to let the card colour show through */}
      <Image
        src={images.labImg}
        alt=""
        className="absolute left-0 bottom-0 z-0 w-[180px] sm:w-[240px] lg:w-[280px] h-auto opacity-70 mix-blend-darken pointer-events-none select-none"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 space-y-5 font-[Roboto] text-[20px]">
        {/* Intro */}
        <div>{selectedFocusAreaWorks?.body}</div>

        {/* Quote */}
        <div className="flex justify-end">
          <p className="text-[#4BA6A6] text-[20px]  max-w-[500px]">
            {selectedFocusAreaWorks?.summary}
          </p>
        </div>
        {/* Footer */}
      </div>

      {/* Button stays above bg */}
      <div className="relative z-10 flex justify-end mt-[53px] mb-[7px]">
        <div className="mt-6 flex items-center mr-[78px]">
          <p className="text-[17px] text-[#0F4F58] font-[Roboto] ">
            Curious about the science? Step into the Research Room
          </p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => router.push("/research-room")}
        >
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
              className: "-left-[49px] -top-[9px]",
            }}
          >
            <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
              Research Room
            </span>
          </PolygonButton>
        </div>
      </div>
    </div>
  );
}
export default ConversationThirdDescription;
