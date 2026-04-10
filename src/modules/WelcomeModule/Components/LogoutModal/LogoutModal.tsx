"use client";

import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Image from "next/image";
import images from "@/src/assets/images";
import useEventEmitter, {
  emitEvent,
} from "@/src/components/Hooks/useEventEmitter";
import { useRouter } from "next/navigation";
import { useLogoutMutation } from "../../Hooks/useLogoutMutation";

const EVENT = "LOGOUT_MODAL_EVENT";

export const openLogoutModal = () => {
  emitEvent(EVENT);
};

function LogoutModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEventEmitter(EVENT, () => {
    setIsOpen(true);
  });

  const { mutateAsync, isPending } = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await mutateAsync(); //  correct

      localStorage.clear();
      sessionStorage.clear();

      router.replace("/login"); //  better than push
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => {}} className="relative z-[9999]">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Modal wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-[520px] rounded-[28px] bg-[#FBE6BF] p-8 text-center space-y-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute left-[65%] font-bold cursor-pointer"
          >
            ✕
          </button>

          {/* Timer Image */}
          <div className="flex justify-center">
            <Image
              src={images.signupTimer} // hourglass / timer image
              alt="timer"
              width={80}
              height={80}
            />
          </div>

          {/* Title */}
          <DialogTitle className="text-[28px] font-[700] text-[#567F55]">
            Are You Sure You Want to Logout?
          </DialogTitle>

          {/* Resend */}

          {/* Resend */}
          <div className="flex gap-4 justify-center ">
            {" "}
            <button
              onClick={handleLogout}
              className="bg-[#567F55] text-white px-6 py-3 rounded-full cursor-pointer"
            >
              Logout
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="border border-[#567F55] text-[#567F55] px-6 py-3 rounded-full cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default LogoutModal;
