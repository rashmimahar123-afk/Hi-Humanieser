import Image from "next/image";
import images from "@/src/assets/images";
import { useRouter } from "next/navigation";

type MILESTONE_FOOTER_PROPS = {
  onNext?: () => void;
  nextLabel?: string;
  helperText?: any;
  nextRoute?: string;
  openInNewTab?: boolean;
};

function MilestoneFooter(props: MILESTONE_FOOTER_PROPS) {
  const {
    onNext,
    nextLabel,
    helperText,
    nextRoute,
    openInNewTab = false,
  } = props;
  const router = useRouter();

  const handleClick = () => {
    if (onNext) {
      onNext();
      return;
    }

    if (nextRoute) {
      if (openInNewTab) {
        window.open(nextRoute, "_blank", "noopener,noreferrer");
      } else {
        router.push(nextRoute);
      }
    }
  };

  return (
    <div className="mt-16 flex items-center justify-end">
      {/* Left: Bulb + helper text */}
      <div className="flex items-center gap-4 max-w-[650px]">
        <Image
          src={images.milestoneBulb}
          alt="milestone-bulb"
          width={60}
          height={60}
        />

        <p className="text-[#0F4F58] text-[16px] leading-snug font-[Aptos] font-[400]">
          {helperText}
        </p>
      </div>

      {/* Right: CTA */}
      <button
        onClick={handleClick}
        className="bg-[#F5F0EB] px-6 py-3 rounded-xl text-[#0F4F58] font-[400] text-[16px] flex items-center gap-4 font-[Aptos] cursor-pointer "
      >
        {nextLabel}

        <Image src={images.milestoneArrow} alt="arrow" width={51} height={51} />
      </button>
    </div>
  );
}

export default MilestoneFooter;
