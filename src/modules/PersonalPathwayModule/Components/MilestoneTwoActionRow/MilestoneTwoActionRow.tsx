import { useState } from "react";
import { openFillupModal } from "../FillUpFormModal/FillUpFormModal";

function MilestoneTwoActionRow({
  title,
  description,
  showSaveReflection = true,
  isPinned,
  onPinToggle,
  isPracticeEnabled,
}: {
  title: string;
  description: string;
  showSaveReflection?: boolean;
  isPinned: boolean;
  onPinToggle: () => void;
  isPracticeEnabled: boolean;
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
    // <div className="grid grid-cols-[420px_360px_360px] gap-8">
    <div className="grid grid-cols-[450px_450px] gap-10">
      {/* MICRO-ACTION */}
      {/* <div className="relative bg-[#F5F0EB] rounded-[16px] p-6">
        <h4 className="text-[#567F55] font-bold text-[20px] mb-3 font-[Roboto]">
          {title}
        </h4>

        <p className="text-[#567F55] text-[18px] whitespace-pre-line leading-relaxed font-[Roboto] font-[400]">
          {renderBoldQuotes(description)}
        </p>
      </div> */}

      {/* MICRO-ACTION */}
      <div
        className={`relative bg-[#F5F0EB] rounded-[16px] p-6 pb-14 transition-all duration-300
  ${isPinned ? "bg-[#EAF4F2]" : ""}
`}
      >
        <h4 className="text-[#567F55] font-bold text-[20px] mb-3 font-[Roboto]">
          {title}
        </h4>

        <p className="text-[#567F55] text-[18px] whitespace-pre-line leading-relaxed font-[Roboto] font-[400]">
          {renderBoldQuotes(description)}
        </p>

        <div className="absolute bottom-5 right-6 flex items-center gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <span className="text-[15px] text-[#0F4F58] font-[Aptos]">
              Pin this Micro-Action
            </span>

            <input
              type="checkbox"
              checked={isPinned}
              onChange={onPinToggle}
              className="w-[22px] h-[22px] 
                 rounded-[6px] 
                 border-2 border-[#0F4F58] 
                 accent-[#0F4F58]
                 focus:outline-none 
                 focus:ring-0
                 cursor-pointer"
            />
          </label>
        </div>
      </div>

      {/* REFLECTION 1 */}
      <div
        className={`relative bg-[#F5F0EB] rounded-[16px] p-6 transition-all duration-300
    ${
      isPracticeEnabled
        ? "opacity-100"
        : "opacity-40 pointer-events-none cursor-not-allowed"
    }
  `}
      >
        <div className="space-y-5">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="border-b border-dotted border-[#000000]" />
          ))}
        </div>

        {/* {showSaveReflection && (
          <div className="flex justify-end mt-5">
            <span className="text-[14px] font-[RocaTwo] font-bold text-[#0F4F58]">
              (Shared in reflection Wall)
            </span>
          </div>
        )} */}
        {/* Save Button */}
        <div className="flex justify-end mb-4 mt-4">
          <div>
            <button
              disabled={!isPracticeEnabled}
              onClick={openFillupModal}
              className={`px-6 py-2 rounded-full text-[14px] font-[RocaTwo] font-bold cursor-pointer
    ${
      isPracticeEnabled
        ? "bg-[#F8E1B8] text-[#0F4F58]"
        : "bg-gray-200 text-gray-400 cursor-not-allowed"
    }
  `}
            >
              add reflection
            </button>
          </div>
          <div className="ml-4">
            <button
              disabled={!isPracticeEnabled}
              className={`px-6 py-2 rounded-full text-[14px] font-[RocaTwo] font-bold cursor-pointer
    ${
      isPracticeEnabled
        ? "bg-[#F8E1B8] text-[#0F4F58]"
        : "bg-gray-200 text-gray-400 cursor-not-allowed"
    }
  `}
            >
              add another reflection
            </button>
          </div>
        </div>
        {/* Share Checkbox */}
        <div className="flex justify-between">
          <div className="text-[17px] text-[#0F4F58] font-[Aptos] font-[400]">
            Share your insights with your team?
          </div>
          <div>
            <input
              type="checkbox"
              className="mt-1 w-5 h-5 rounded border-[#0F4F58]"
            />
          </div>
        </div>
        <p className="text-[14px] italic text-[#0F4F58] font-[Aptos] font-[400] ">
          if yes, your reflection will be shared anonymously on Reflection Walls
        </p>
      </div>

      {/* REFLECTION 2 */}
      {/* <div className="bg-[#F5F0EB] rounded-[16px] p-6">
        <div className="space-y-5">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="border-b border-dotted border-[#000000]" />
          ))}
        </div>

        {showSaveReflection && (
          <div className="flex justify-end mt-5">
            <span className="text-[14px] font-[RocaTwo] font-bold text-[#0F4F58]">
              (Shared in reflection Wall)
            </span>
          </div>
        )}
      </div> */}
      {/* <div className="grid grid-cols-[200px_1fr] gap-6 mb-6">
        <p className="text-[18px] text-[#0F4F58] font-[Aptos] font-[400]">
          What’s one small change you’ve noticed in your team since starting
          this ritual?
        </p>

        <div className="space-y-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="border-b border-dotted border-[#000000] h-[10px]"
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
export default MilestoneTwoActionRow;
