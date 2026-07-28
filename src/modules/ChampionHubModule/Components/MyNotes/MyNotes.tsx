import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useEffect, useState } from "react";
import { openChampionNotes } from "../AddChampionNoteModal/AddChampionNoteModal";
import { openFillupModal } from "@/src/modules/PersonalPathwayModule/Components/FillUpFormModal/FillUpFormModal";
import { useQueryClient } from "@tanstack/react-query";
import { useEditReflectionMutation } from "@/src/modules/PersonalPathwayModule/Hooks/useEditReflectionMutation";
import { openConfirmShareReflectionModal } from "@/src/modules/PersonalPathwayModule/Components/ConfirmShareReflectionModal/ConfirmShareReflectionModal";
import SnackbarHandler from "@/src/lib/SnackbarHandler";

type Props = {
  reflection?: {
    id: string;
    reflection: string;
    created_at: string;
    shared_anonymously: boolean;
  };
};

function MyNotes({ reflection }: Props) {
  // const [checked, setChecked] = useState(false);
  const { user } = useAuthValue();
  const [checked, setChecked] = useState(
    reflection?.shared_anonymously ?? false,
  );

  useEffect(() => {
    setChecked(reflection?.shared_anonymously ?? false);
  }, [reflection]);

  const queryClient = useQueryClient();

  const { mutate: editReflectionMutate, isPending } =
    useEditReflectionMutation();

  const handleShareChange = (value: boolean) => {
    if (!reflection) return;

    setChecked(value);

    editReflectionMutate(
      {
        reflection_id: reflection.id,
        reflection: reflection.reflection,
        shared_anonymously: value,
        team_ritual_id: "",
      },
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: ["getReflectionWallsQueryKey"],
          });

          if (value) {
            openConfirmShareReflectionModal(reflection.id);
          }
        },
        onError: () => {
          setChecked(!value);
        },
      },
    );
  };
  return (
    <div className="bg-[#f8e1b8] rounded-[28px] px-12 py-12 relative">
      <div className="space-y-6 relative">
        {reflection ? (
          <div className="border-b border-[#D8C39A] pb-4">
            <p className="text-[#567F55] text-[20px] whitespace-pre-wrap">
              {reflection.reflection}
            </p>
          </div>
        ) : (
          <>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="border-b border-dotted border-[#0F4F58] opacity-60"
              />
            ))}

            <div className="absolute top-[59px] left-1/2 -translate-x-1/2 text-[#567F55] text-[20px]">
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
                "champion_notes",
                "",
                undefined,
                undefined,
                user?.team_id,
              )
            }
            className="px-6 py-1 rounded-full bg-[#E8B86F] text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold"
          >
            Add note or reflection
          </button>
        ) : (
          <button
            className="px-6 py-1 rounded-full bg-[#E8B86F] text-[#0F4F58] text-[20px] font-[RocaTwo] font-bold"
            onClick={() =>
              openFillupModal(
                "",
                "",
                undefined,
                undefined,
                user?.team_id,
                undefined,
                reflection?.id,
                reflection?.reflection,
                reflection?.shared_anonymously,
              )
            }
          >
            Edit note or reflection
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
          disabled={isPending}
          onChange={(e) => handleShareChange(e.target.checked)}
          className="w-5 h-5 rounded border-[#0F4F58] cursor-pointer"
        />
      </div>

      <p className="text-[16px] italic text-[#0F4F58] opacity-80 mt-1 font-[Aptos]">
        if yes, your reflection will be shared anonymously on Reflection Walls
      </p>
    </div>
  );
}

export default MyNotes;
