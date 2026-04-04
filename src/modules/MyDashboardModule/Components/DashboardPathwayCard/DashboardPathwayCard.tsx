import { useState } from "react";

type DASHBOARD_PATHWAY_CARD_PROPS = {
  title: string;
  description: string;
  reflections?: Array<any>;
};
function DashboardPathwayCard(props: DASHBOARD_PATHWAY_CARD_PROPS) {
  const { title, description, reflections } = props;

  const safeReflections = reflections || [];
  function renderBoldQuotes(text: string) {
    const parts = text.split(/(“[^”]+”)/g);

    return parts.map((part, index) => {
      if (part.startsWith("“") && part.endsWith("”")) {
        return (
          <strong key={index} className="font-bold">
            {part}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Left Card */}
      <div className="bg-[#F5F0EB] rounded-[16px] p-4">
        <h4 className="text-[#567F55] font-bold text-[20px] mb-3 font-[Roboto]">
          {title}
        </h4>

        <p className="text-[#567F55] text-[18px] whitespace-pre-line leading-relaxed font-[Roboto] font-[400] ml-[10px]">
          {renderBoldQuotes(description)}
        </p>
      </div>

      {/* Right Practice Box */}
      <div className="grid grid-cols-2 gap-6">
        {[0, 1].map((_item: any, idx: any) => {
          const data = safeReflections[idx]; // 👈 key line

          return (
            <div
              className="bg-[#F5F0EB] rounded-[16px] p-4 relative overflow-hidden"
              key={`_item${idx}`}
            >
              {/* Reflection Text */}
              {data?.reflection ? (
                <p
                  className="text-[#0F4F58] text-[14px] font-[Roboto] whitespace-pre-wrap break-words"
                  style={{
                    lineHeight: "28px",
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent, transparent 27px, #000 28px)",
                    backgroundSize: "100% 28px",
                    paddingTop: "2px",
                  }}
                >
                  {data.reflection}
                </p>
              ) : (
                <div className="space-y-4 mt-2">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="border-b border-dotted border-[#000000]"
                    />
                  ))}
                </div>
              )}

              {/* Share Text */}
              {data?.share && (
                <div className="flex justify-end mt-[12px]">
                  <span className="text-[12px] font-[RocaTwo] font-bold text-[#0F4F58]">
                    (Shared in reflection Wall)
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DashboardPathwayCard;
