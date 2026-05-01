"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import useGetTeamsQuery from "../../Hooks/useGetTeamsQuery";
import { useRouter } from "next/navigation";

const EVENT = "OPEN_CHAMPION_MODAL";

export const openChampionModal = () => {
  emitEvent(EVENT);
};

type PROPS = {
  onSubmit: (teamId: string) => void;
};

function ChampionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("");
  const router = useRouter();

  useEventEmitter(EVENT, () => {
    setIsOpen(true);
  });

  const { data: teamsData } = useGetTeamsQuery();
  const teams = teamsData?.data?.teams || [];

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-[9999]"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[520px] rounded-[28px] bg-[#FBE6BF] p-8 space-y-6">
          {/* Title */}
          <DialogTitle className="text-[26px] font-[700] text-[#567F55]">
            Step in as a Champion
          </DialogTitle>

          {/* Description */}
          <p className="text-[16px] text-[#567F55]">
            Champions help their team focus, build better habits and keep work
            moving with clarity.
          </p>

          {/* What this means */}
          <div className="text-[15px] text-[#567F55] space-y-2">
            <p className="font-semibold">What this means</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>You’ll guide one team through their cycles</li>
              <li>You’ll choose focus areas and team rituals</li>
              <li>You’ll help keep momentum going</li>
            </ul>
          </div>

          <p className="text-[14px] text-[#567F55]">
            You can support one team at a time, to keep focus and impact strong.
          </p>

          {/* Dropdown */}
          <div>
            <label className="block text-[14px] mb-2 text-[#567F55]">
              Choose your team
            </label>

            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="w-full rounded-[12px] px-4 py-3 text-[14px] border outline-none text-[#567F55]"
            >
              <option value="">Select team</option>

              {teams.map((team: any) => (
                <option key={team.id} value={team.id}>
                  {team.team_name}
                </option>
              ))}
            </select>
            <div className="mt-4 text-[#567F55] font-bold">OR</div>
            <div
              onClick={() => {
                setIsOpen(false);
                router.push("/organisation-setting");
              }}
              className="mt-3 text-[14px] text-[#567F55] cursor-pointer hover:underline flex items-center gap-2"
            >
              <span className="text-[18px]">+</span>
              Create a new team
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <button
              disabled={!selectedTeam}
              className="bg-[#567F55] text-white px-6 py-3 rounded-full disabled:opacity-50"
              onClick={() => {
                // only real team now
                console.log(selectedTeam);

                setSelectedTeam("");
                setIsOpen(false);
              }}
            >
              Start as Champion
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedTeam("");
              }}
              className="border border-[#567F55] text-[#567F55] px-6 py-3 rounded-full"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default ChampionModal;
