import Image from "next/image";
import SharedCard from "../SharedCard/SharedCard";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import SendInvitationModal from "../SendInvitationModal/SendInvitationModal";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useEffect, useState } from "react";

function SpreadRipple() {
  const { user } = useAuthValue();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);
  return (
    <>
      <main
        className={`min-h-screen bg-[#F5F0EB]  page ${
          enter ? "enterActive" : "enter"
        }`}
      >
        <div className="px-8 py-6">
          {/* Header */}
          <div>
            <UserProfileHeader
              greetingColor="#567F55"
              nameColor="#0F4F58"
              userInfo={user}
            />
          </div>

          {/* Title */}
          <section className="ml-[45px]">
            <h2 className="text-[45px] font-[RocaTwo] font-bold text-[#0F4F58]">
              Spread The Ripple
            </h2>
            <div className="ml-[28px]">
              <p className="mt-[24px] text-[22px] text-[#0F4F58] leading-relaxed font-[Roboto]">
                Hi Humaniser!™ is for organisations that understand people
                flourish when the environment around them does — when there’s
                space for connection, honesty and real collaboration to take
                root.
              </p>

              <p className="mt-[20px] text-[22px] text-[#0F4F58] leading-relaxed font-[Roboto]">
                If exploring this space has sparked something in you, share it
                with someone who’d love the idea of making work feel a little
                more human too.
              </p>
            </div>
          </section>

          {/* Share Card */}
          <SharedCard />
        </div>
      </main>
      <SendInvitationModal />
    </>
  );
}
export default SpreadRipple;
