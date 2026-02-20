import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

function ConversationFirstDescription() {
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
        <p>
          This Focus Area is not about getting it right straight away. It’s
          designed to be experienced, reflected on, and shaped over time.
        </p>

        <p>Here’s how it usually unfolds:</p>

        {/* Sections */}
        <div>
          <p className="font-[700] text-[#0F4A4E] mb-1 text-[22px]">
            1. Try it
          </p>
          <p>
            After the team poll, your Champion selects one ritual to try. You’ll
            notice how it shows up in everyday work — meetings, conversations,
            decisions — without needing to change everything at once. The aim is
          </p>
          <p>
            simple:{" "}
            <span className="font-bold">experience it, not perfect it.</span>
          </p>
        </div>

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
        <div>
          <p className="font-[700] text-[#0F4A4E] mb-1">2. Keep it alive</p>
          <p>
            As the ritual is being practised, anyone can use short HH! Moments
            to keep it present. These are quick, optional check-ins (usually
            under 5 minutes) that might:
          </p>
          <ul className="list-disc pl-[18px] space-y-[10px] text-[#0F4A4E] text-[20px] leading-[1.6] max-w-[820px] ml-4">
            <li>
              “I realise I may have rushed my point — here’s the honest version”
            </li>
            <li>surface a shared insight from the Reflection Wall</li>
            <li>help the team sense how things are feeling</li>
          </ul>
        </div>

        <div>
          <p className="font-[700] text-[#0F4A4E] mb-1">3. Decide what stays</p>
          <p>
            Over time, teams pause to reflect on what’s actually helping. Some
            rituals fade. Some become habits. Some point to bigger system
            changes.
          </p>
          <p className="mt-2">
            HH! supports this step with simple workshop materials, so teams can
            decide what’s worth keeping and embed it intentionally (e.g., in
            meetings or handovers).
          </p>
        </div>
      </div>

      {/* Button stays above bg */}
      <div className="relative z-10 flex justify-end mt-[53px] mb-[7px]">
        <div className="mt-6 flex items-center mr-[20px] max-w-[453px] flex text-end mt-[43px]">
          <p className="text-[17px] text-[#0F4F58] font-[Roboto] ">
            Want a simple way to keep team rituals present in everyday work?
            Check Hi Humanser! Moments
          </p>
        </div>
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
            HH! Moments
          </span>
        </PolygonButton>
      </div>
    </div>
  );
}
export default ConversationFirstDescription;
