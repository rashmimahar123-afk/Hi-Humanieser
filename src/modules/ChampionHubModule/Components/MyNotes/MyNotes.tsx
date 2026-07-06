import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { openFillupModal } from "@/src/modules/PersonalPathwayModule/Components/FillUpFormModal/FillUpFormModal";
import { useState } from "react";
import { openChampionNotes } from "../AddChampionNoteModal/AddChampionNoteModal";

function MyNotes() {
  const [checked, setChecked] = useState(false);
  const [reflection, setReflection] = useState("");
  const { user } = useAuthValue();
  return (
    <div className="bg-[#f8e1b8] rounded-[28px] px-12 py-12 relative">
      <div className="space-y-6 relative">
        {reflection ? (
          <p className="text-[#567F55] text-[20px] leading-relaxed whitespace-pre-wrap min-h-[260px]">
            {reflection}
          </p>
        ) : (
          <>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="border-b border-dotted border-[#0F4F58] opacity-60"
              />
            ))}

            <div className="absolute top-[59px] left-1/2 -translate-x-1/2 text-[#567F55] text-[20px] font-[Aptos]">
              500 words
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col items-end gap-4 mt-10">
        {!reflection ? (
          <button
            onClick={() =>
              openChampionNotes(
                "champion_notes", // dummy action key
                "", // uuid not needed
                undefined,
                undefined,
                user?.team_id,
              )
            }
            className="px-6 py-1 rounded-full bg-[#E8B86F] text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold"
          >
            Add note or reflection{" "}
          </button>
        ) : (
          <button className="px-6 py-1 rounded-full bg-[#E8B86F] text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold">
            edit
          </button>
        )}
      </div>

      <div className="flex justify-between items-center mt-10">
        <p className="text-[20px] text-[#0F4F58] font-[Aptos]">
          Share your insights with your team?
        </p>

        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="w-5 h-5 rounded border-[#0F4F58]"
        />
      </div>

      <p className="text-[16px] italic text-[#0F4F58] opacity-80 mt-1 font-[Aptos]">
        if yes, your reflection will be shared anonymously on Reflection Walls
      </p>
    </div>
  );
}

export default MyNotes;
