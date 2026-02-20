import { useState } from "react";

function DashboardPathwayCard({
  title,
  description,
  showSaveReflection = true,
}: {
  title: string;
  description: string;
  showSaveReflection?: boolean;
}) {
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
      <div className="bg-[#F5F0EB] rounded-[16px] p-6">
        {/* Row */}
        <div className="flex gap-6 items-center">
          {/* Left text */}

          {/* Right dotted lines */}
          <div className="w-[100%] relative">
            <div className="space-y-5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="border-b border-dotted border-[#000000]"
                />
              ))}
            </div>
          </div>
        </div>
        {showSaveReflection && (
          <div className="flex justify-end mt-[20px]">
            <button className=" text-[14px] font-[RocaTwo] font-bold text-[#0F4F58]">
              (Shared in reflection Wall)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default DashboardPathwayCard;
