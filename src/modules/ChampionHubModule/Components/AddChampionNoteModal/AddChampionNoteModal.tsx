"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useUpdateMppMilestoneMutation } from "@/src/modules/PersonalPathwayModule/Hooks/useUpdateMppMilestoneMutation";
import { useAddReflectionMutation } from "@/src/modules/PersonalPathwayModule/Hooks/useAddReflectionMutation";
import { useAddMyNotesMutation } from "../../Hooks/useAddMyNotesMutation";
import { GET_MY_NOTES_QUERY_KEY } from "../../Hooks/useMyNotesQuery";
import { useEditMyNotesMutation } from "../../Hooks/useEditMyNotesMutation";
import { MY_NOTES_DATA } from "../../Types/ResponseTypes";

type NOTE_DATA = {
  id: string;
  reflection: string;
  created_at: string;
  shared_anonymously: boolean;
};
const EVENT = "ADD_CHAMPION_NOTE_MODAL_EVENT";

export const openChampionNotes = (
  microActionType: string,
  uuid: string,
  selectedPulse?: number,
  pinToDash?: string[],
  selectedTeam?: string,
  note?: NOTE_DATA,
) => {
  emitEvent(EVENT, {
    microActionType,
    uuid,
    selectedPulse,
    pinToDash,
    selectedTeam,
    note,
  });
};

function AddChampionNoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [reflection, setReflection] = useState("");
  const [share, setShare] = useState(false);
  const [actionKey, setActionKey] = useState<string>("");
  const [pulseCheck, setPulseCheck] = useState<number>();
  const [id, setId] = useState("");
  const [selectedTeamId, setSelectedTeamId] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [noteId, setNoteId] = useState("");

  const charCount = reflection.length;
  const pathname = usePathname();
  const { mutate: addReflectionMutate, isPending: isAdding } =
    useAddReflectionMutation();
  const [pinToDash, setPinToDash] = useState<string[]>([]);

  // useEventEmitter(
  //   EVENT,
  //   ({ microActionType, uuid, selectedPulse, pinToDash, selectedTeam }) => {
  //     setTimeout(() => {
  //       setActionKey(microActionType);
  //       setId(uuid);
  //       setPulseCheck(selectedPulse);
  //       setPinToDash(pinToDash || []);
  //       setReflection("");
  //       setShare(false);
  //       setSelectedTeamId(selectedTeam || "");
  //       setIsOpen(true);
  //     }, 0);
  //   },
  // );
  const queryClient = useQueryClient();
  const { mutate, isPending } = useUpdateMppMilestoneMutation();
  const { user } = useAuthValue();

  const { mutate: addMyNotesMutate, isPending: isAddingMyNote } =
    useAddMyNotesMutation();

  const { mutate: editMyNotesMutate, isPending: isEditingMyNote } =
    useEditMyNotesMutation();

  const handleSave = async () => {
    if (pathname === "/champion-hub/champion-notes") {
      // ================================
      // EDIT MY NOTE
      // ================================
      if (isEditMode) {
        const payload = {
          note_id: noteId,
          note: reflection.trim(),
          shared_anonymously: share,
        };

        editMyNotesMutate(payload, {
          onSuccess: async () => {
            setReflection("");
            setShare(false);
            setIsEditMode(false);
            setNoteId("");
            setIsOpen(false);

            await queryClient.invalidateQueries({
              queryKey: GET_MY_NOTES_QUERY_KEY,
            });
          },
        });

        return;
      }

      // ================================
      // ADD MY NOTE
      // ================================
      const payload = {
        shared_anonymously: share,
        note: reflection.trim(),
      };

      addMyNotesMutate(payload, {
        onSuccess: async () => {
          setReflection("");
          setShare(false);
          setIsOpen(false);

          await queryClient.invalidateQueries({
            queryKey: GET_MY_NOTES_QUERY_KEY,
          });
        },
      });

      return;
    }
  };

  useEventEmitter(
    EVENT,
    ({
      microActionType,
      uuid,
      selectedPulse,
      pinToDash,
      selectedTeam,
      note,
    }) => {
      setTimeout(() => {
        setActionKey(microActionType);
        setId(uuid);
        setPulseCheck(selectedPulse);
        setPinToDash(pinToDash || []);
        setSelectedTeamId(selectedTeam || "");

        if (microActionType === "edit_champion_note") {
          setIsEditMode(true);
          setNoteId(uuid);

          setReflection(note?.reflection || "");
          setShare(note?.shared_anonymously ?? false);
        } else {
          setIsEditMode(false);
          setNoteId("");
          setReflection("");
          setShare(false);
        }

        setIsOpen(true);
      }, 0);
    },
  );
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[9999]"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-[520px] rounded-[28px] bg-[#FBE6BF] p-8 space-y-6">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 text-[18px] font-bold cursor-pointer"
          >
            ✕
          </button>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src={images.signupTimer}
              alt="timer"
              width={70}
              height={70}
            />
          </div>

          {/* Title */}
          <DialogTitle className="text-[26px] font-bold text-[#567F55] text-center">
            {isEditMode
              ? "Take a moment to edit note"
              : "Take a moment to add note "}
          </DialogTitle>

          {/* ===== Textarea ===== */}
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            maxLength={400}
            placeholder="Write your notes here…"
            className="
              w-full
              min-h-[180px]
              resize-none
              rounded-[18px]
              border border-[#A7D3CB]
              bg-transparent
              px-4 py-3
              text-[15px]
              text-[#0F4F58]
              placeholder:text-[#8FA8A4]
              focus:outline-none
              focus:ring-2
              focus:ring-[#A7D3CB]
            "
          />
          <p className="text-[12px] text-right text-[#567F55]">
            {charCount}/400 characters
          </p>

          {/* ===== Checkbox Section ===== */}
          {/* <div className="mt-[10px] flex items-start justify-between gap-3">
            <div>
              <p className="text-[14px] text-[#0F4F58]">
                Share your insights with your team?
              </p>
              <p className="text-[11px] text-[#0F4F58] leading-[1.4]">
                If yes, your reflection will be shared anonymously on Ritual
                Walls
              </p>
            </div>

            <input
              type="checkbox"
              checked={share}
              onChange={(e) => setShare(e.target.checked)}
              className="
                mt-1
                w-5 h-5
                rounded
                border-2
                border-[#0F4F58]
                accent-[#0F4F58]
                cursor-pointer
              "
            />
          </div> */}

          {/* ===== Save Button ===== */}
          <button
            onClick={handleSave}
            disabled={
              isPending ||
              isAdding ||
              isAddingMyNote ||
              reflection.trim().length === 0
            }
            className="
    mt-4
    w-full
    rounded-xl
    bg-[#0F4F58]
    py-3
    text-white
    text-[15px]
    font-medium
    hover:opacity-90
    transition
    disabled:opacity-50
    disabled:cursor-not-allowed
  "
          >
            {isPending || isAdding || isAddingMyNote || isEditingMyNote
              ? "Saving..."
              : isEditMode
                ? "Edit Note"
                : "Save Notes"}
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default AddChampionNoteModal;
