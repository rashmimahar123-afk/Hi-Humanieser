"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { useUpdateMppMilestoneMutation } from "../../Hooks/useUpdateMppMilestoneMutation";
import { useQueryClient } from "@tanstack/react-query";
import { GET_PERSONAL_PATHWAY_QUERY_KEY } from "../../Hooks/usePersonalPathwayQuery";

const EVENT = "FILL_UP_FORM_MODAL_EVENT";

export const openFillupModal = (
  microActionType: string,
  uuid: string,
  selectedPulse?: number,
) => {
  emitEvent(EVENT, { microActionType, uuid, selectedPulse });
};

function FillUpFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [reflection, setReflection] = useState("");
  const [share, setShare] = useState(false);
  const [actionKey, setActionKey] = useState<string>("");
  const [pulseCheck, setPulseCheck] = useState<number>();
  const [id, setId] = useState("");
  const charCount = reflection.length;
  useEventEmitter(EVENT, ({ microActionType, uuid, selectedPulse }) => {
    setTimeout(() => {
      setActionKey(microActionType);
      setId(uuid);
      setPulseCheck(selectedPulse);

      setReflection("");
      setShare(false);

      setIsOpen(true);
    }, 0);
  });
  const queryClient = useQueryClient();
  const { mutate, isPending } = useUpdateMppMilestoneMutation();

  const handleSave = async () => {
    const newReflection = { reflection, share };

    // ✅ ===== MILESTONE 3 =====
    if (actionKey === "milestone3") {
      const payload = {
        uuid: id,
        milestone_key: "m3",
        data: {
          kind: "m3",
          reflection: newReflection,
          pulse_check: pulseCheck,
          pin_to_dash: true,
        },
      };

      mutate(payload, {
        onSuccess: async () => {
          setReflection("");
          setShare(false);
          setIsOpen(false);

          await queryClient.refetchQueries({
            queryKey: GET_PERSONAL_PATHWAY_QUERY_KEY,
            type: "active",
          });
        },
      });

      return; //  IMPORTANT (stop m2 execution)
    }
    // STEP 1: Always get fresh data
    await queryClient.refetchQueries({
      queryKey: GET_PERSONAL_PATHWAY_QUERY_KEY,
      type: "active",
    });

    const freshData = queryClient.getQueryData<any>(
      GET_PERSONAL_PATHWAY_QUERY_KEY,
    );

    const pathways = freshData?.data?.pathways || [];
    const currentPathway = pathways.find((p: any) => p.uuid === id);

    const firstKey = Object.keys(currentPathway || {}).find(
      (k) => !["uuid", "created", "active"].includes(k),
    );

    const existingM2 = currentPathway?.[firstKey]?.m2 || {};

    const { micro_actions, ...cleanM2 } = existingM2 || {};

    // STEP 2: Merge properly
    const finalPayload = {
      uuid: id,
      milestone_key: "m2",
      data: {
        kind: "m2",
        ...cleanM2, //  ALL previous micro_actions preserved
        [actionKey]: [...(existingM2[actionKey] || []), newReflection],
      },
    };

    mutate(finalPayload, {
      onSuccess: async () => {
        setReflection("");
        setShare(false);
        setIsOpen(false);

        // optional but recommended
        await queryClient.refetchQueries({
          queryKey: GET_PERSONAL_PATHWAY_QUERY_KEY,
        });
      },
    });
  };
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
            Take a moment to reflect
          </DialogTitle>

          {/* ===== Textarea ===== */}
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            maxLength={400}
            placeholder="Write your reflection here…"
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
            disabled={isPending || reflection.trim().length === 0}
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
            "
          >
            {isPending ? "Saving..." : "Save reflection"}
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default FillUpFormModal;
