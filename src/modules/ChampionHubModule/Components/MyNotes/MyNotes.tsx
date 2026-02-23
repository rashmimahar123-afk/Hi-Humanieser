import { useState } from "react";

function MyNotes() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-[#f8e1b8] rounded-[28px] px-12 py-12 relative">
      {/* Writing Lines */}
      <div className="space-y-6 relative">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="border-b border-dotted border-[#0F4F58] opacity-60"
          />
        ))}

        {/* 500 Words Text */}
        <div className="absolute top-[59px] left-1/2 -translate-x-1/2 text-[#567F55] text-[20px] font-[Aptos]">
          500 words
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-end gap-4 mt-10">
        <button className="px-6 py-1 rounded-full bg-[#E8B86F] text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold">
          save reflection
        </button>

        <button className="px-6 py-1 rounded-full bg-[#E8B86F] text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold">
          edit
        </button>
      </div>

      {/* Share Section */}
      <div className="flex justify-between items-center mt-10">
        <p className="text-[20px] text-[#0F4F58] font-[Aptos]">
          Share your insights with your team?
        </p>

        <div
          onClick={() => setChecked(!checked)}
          className="w-[28px] h-[28px] rounded-[6px] border-2 border-[#0F4F58] cursor-pointer flex items-center justify-center"
        >
          {checked && (
            <div className="w-[16px] h-[16px] bg-[#0F4F58] rounded-[4px]" />
          )}
        </div>
      </div>

      <p className="text-[16px] italic text-[#0F4F58] opacity-80 mt-1 font-[Aptos]">
        if yes, your reflection will be shared anonymously on Reflection Walls
      </p>
    </div>
  );
}

export default MyNotes;
