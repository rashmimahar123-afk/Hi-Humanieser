"use client";
import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useRouter } from "next/navigation";
import { WHY_THIS_BEHAVIOUR_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";

type WHY_THIS_WORKS_PROPS_TYPE = {
  whyThisWorks?: WHY_THIS_BEHAVIOUR_TYPE;
};

// Domain text comes as "The Brain (Neuroscience): body..." - split into heading + body
const splitDomain = (text: string) => {
  const index = text.indexOf(": ");
  if (index === -1) return { heading: "", body: text };
  return {
    heading: text.slice(0, index + 1),
    body: text.slice(index + 2),
  };
};

function AmplifierFirstDescription(props: WHY_THIS_WORKS_PROPS_TYPE) {
  const { whyThisWorks } = props;
  const router = useRouter();

  const domains = Object.entries(whyThisWorks ?? {})
    .filter(([key, value]) => key.startsWith("domain_") && !!value)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => ({ key, ...splitDomain(value) }));

  return (
    <div className="relative space-y-5 overflow-hidden">
      {/* Background Illustration */}
      <Image
        src={images.labImg}
        alt=""
        className="absolute left-4 bottom-0 z-0 pointer-events-none hidden sm:block sm:opacity-30 lg:opacity-100"
      />

      {/* Main Content */}
      <div className="relative z-10 space-y-4 lg:space-y-5 font-[Roboto] text-[14px] sm:text-[17px] lg:text-[20px]">
        {whyThisWorks?.definition && <p>{whyThisWorks.definition}</p>}

        {domains.map((domain, index) => (
          <div key={domain.key}>
            {domain.heading && (
              <p
                className={`font-[700] text-[#0F4A4E] mb-1 ${
                  index === 0 ? "text-[16px] sm:text-[19px] lg:text-[22px]" : ""
                }`}
              >
                {domain.heading}
              </p>
            )}
            <p>{domain.body}</p>
          </div>
        ))}

        {/* Quote */}
        {whyThisWorks?.summary && (
          <div className="flex justify-end">
            <p className="text-[#4BA6A6] text-[14px] sm:text-[17px] lg:text-[20px] max-w-full sm:max-w-[500px]">
              {whyThisWorks.summary}
            </p>
          </div>
        )}
      </div>

      {/* Footer Button Row */}
      <div className="relative z-10 flex flex-row justify-end items-center mt-6 lg:mt-[53px] mb-[7px]">
        {/* Label */}
        <div className="mr-[12px] sm:mr-[20px] lg:mr-[78px]">
          <p className="text-[11px] sm:text-[14px] lg:text-[17px] text-[#0F4F58] font-[Roboto]">
            Curious about the science? Step into the Research Room
          </p>
        </div>

        {/* Button — scales down on smaller screens */}
        <div
          onClick={() => router.push("/research-room")}
          className="cursor-pointer shrink-0"
        >
          {/* Mobile: small */}
          <div className="block sm:hidden">
            <PolygonButton
              width="62px"
              height="63px"
              bgColor="#86C9C9"
              radius={9}
              clipPath={`polygon(0% 30%, 92% 0%, 100% 87%, 3% calc(100% - 15px))`}
              decorationImg={{ src: images.arrowImg, width: 28, height: 28 }}
              decorationPosition={{ className: "-left-[29px] -top-[5px]" }}
            >
              <span className="text-[#0F4F58] text-[14px] font-[RocaTwo] font-bold leading-tight text-center">
                Research Room
              </span>
            </PolygonButton>
          </div>

          {/* Tablet: medium */}
          <div className="hidden sm:block lg:hidden">
            <PolygonButton
              width="82px"
              height="83px"
              bgColor="#86C9C9"
              radius={11}
              clipPath={`polygon(0% 30%, 92% 0%, 100% 87%, 3% calc(100% - 15px))`}
              decorationImg={{ src: images.arrowImg, width: 36, height: 36 }}
              decorationPosition={{ className: "-left-[37px] -top-[7px]" }}
            >
              <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-tight text-center">
                Research Room
              </span>
            </PolygonButton>
          </div>

          {/* Desktop: full size */}
          <div className="hidden lg:block">
            <PolygonButton
              width="106px"
              height="107px"
              bgColor="#86C9C9"
              radius={14}
              clipPath={`polygon(0% 30%, 92% 0%, 100% 87%, 3% calc(100% - 15px))`}
              decorationImg={{ src: images.arrowImg, width: 48, height: 48 }}
              decorationPosition={{ className: "-left-[49px] -top-[9px]" }}
            >
              <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                Research Room
              </span>
            </PolygonButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmplifierFirstDescription;
