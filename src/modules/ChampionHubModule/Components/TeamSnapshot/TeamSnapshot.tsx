import images from "@/src/assets/images";
import Image from "next/image";

export default function TeamSnapshot() {
  const Gauge = ({ value }: any) => {
    const rotation = (value - 1) * 45; // maps 1–5 scale

    return (
      <div className="relative w-[280px] h-[160px] mt-8">
        {/* Semi Circle */}
        <div className="absolute bottom-0 w-full h-[140px] bg-[#C9BEA8] rounded-t-full" />

        {/* Needle */}
        <div
          className="absolute bottom-[20px] left-1/2 origin-bottom"
          style={{
            transform: `translateX(-50%) rotate(${rotation}deg)`,
          }}
        >
          <div className="w-[6px] h-[90px] bg-[#E79A93] rounded-full" />
        </div>

        {/* Center Dot */}
        <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 w-[18px] h-[18px] bg-[#E79A93] rounded-full" />

        {/* Scale Numbers */}
        <div className="absolute bottom-[-10px] left-0 text-[#4BA6A6] text-[20px]">
          1
        </div>
        <div className="absolute bottom-[-10px] right-0 text-[#4BA6A6] text-[20px]">
          5
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Title */}
      <h2 className="text-[33px] font-[RocaTwo] text-[#0F4F58] mb-6 font-bold">
        Your Team’s Collective Snapshot
      </h2>

      {/* Subtitle */}
      <p className="text-[20px] text-[#0F4F58] max-w-[1100px] mb-12 font-[Roboto]">
        Based on your team’s Quiz results, this snapshot highlights where they
        feel strongest, and where there may be room to grow across the three
        Humaniser pillars.
      </p>

      {/* Pink Bar */}
      <div className="flex justify-end">
        <div className="bg-[#E6AAA3] rounded-[16px] px-4 py-2 flex items-center mb-4">
          <h3 className="text-[24px] font-[RocaTwo] text-[#0F4F58]">
            Team Quiz Results
          </h3>

          <div className="bg-white rounded-full px-6 py-3 flex items-center gap-6 ml-4">
            <span className="text-[#0F4F58] text-[18px]">
              Jan-Apr 2026 - May-Aug 2026 - Sept-Dec 2026
            </span>
            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#0F4F58]" />
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="mt-[40px]">
        <div className="grid grid-cols-3 gap-[60px] text-center ">
          {/* Pillar 1 */}
          <div className="flex flex-col items-center">
            <h4
              className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
              style={{ fontFamily: "RocaTwo-BI" }}
            >
              The Mindset We Bring
            </h4>

            <p
              className="mt-2 text-[#737373] text-[20px] w-[300px]"
              style={{ fontFamily: "Aptos" }}
            >
              How you show up — your habits, openness, and self-awareness.
            </p>

            <div className="mt-6">
              <Image
                src={images.clockOne}
                alt="mindset-gauge"
                width={220}
                height={120}
              />
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="flex flex-col items-center">
            <h4
              className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
              style={{ fontFamily: "RocaTwo-BI" }}
            >
              The Way We Connect
            </h4>

            <p
              className="mt-2 text-[#737373] text-[20px] w-[300px]"
              style={{ fontFamily: "Aptos" }}
            >
              How you communicate, listen, and build trust with others.
            </p>

            <div className="mt-6">
              <Image
                src={images.clockTwo}
                alt="connect-gauge"
                width={220}
                height={120}
              />
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="flex flex-col items-center">
            <h4
              className="text-[#4BA6A6] text-[22px] leading-[100%] font-[700]"
              style={{ fontFamily: "RocaTwo-BI" }}
            >
              The Culture We Shape
            </h4>

            <p
              className="mt-2 text-[#737373] text-[20px] w-[300px]"
              style={{ fontFamily: "Aptos" }}
            >
              How your actions influence the team environment and wellbeing.
            </p>

            <div className="mt-6">
              <Image
                src={images.clockThree}
                alt="culture-gauge"
                width={220}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Participation Pill */}
      <div className="flex justify-end">
        <div className="bg-[#86c9c9] px-8 py-4 rounded-full">
          <p className="text-[#0F4F58] text-[22px] font-bold">
            Participation: 12/18 have responded to the quiz
          </p>
        </div>
      </div>
    </>
  );
}
