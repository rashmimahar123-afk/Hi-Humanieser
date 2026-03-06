import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./SharedCard.module.css";
import { useRouter } from "next/navigation";
import { openSendInvitationModal } from "../SendInvitationModal/SendInvitationModal";

export default function SharedCard() {
  const router = useRouter();
  return (
    <section className="mt-[50px] bg-[#F8E1B8] rounded-[24px] px-[48px] py-[40px] relative overflow-hidden">
      <h3 className="text-[35px] font-[RocaTwo] font-bold text-[#567F55]">
        Share Hi Humaniser
      </h3>
      <Image
        src={images.spreadImg}
        alt="arrow"
        width={350}
        height={50}
        className={`absolute -top-[33px] left-[1000px]`}
      />
      {/* Form */}
      <div className="mt-[32px] max-w-[800px]">
        <div className="flex items-center mb-[20px]">
          <label className="text-[22px] text-[#567F55]">Name</label>
          <input
            type="text"
            className="
    flex-1
    h-[44px]
    ml-[194px]
    bg-white
    rounded-[12px]
    px-[16px]
    outline-none
    border
    border-[#E6E1D8]
    shadow-inner
    focus:border-[#7EC9C6]
    focus:ring-2
    focus:ring-[#7EC9C6]/30
  "
          />
        </div>

        <div className="flex items-center ">
          <label className="text-[22px] text-[#567F55]">email</label>
          <input
            type="email"
            className="
    flex-1
    h-[44px]
    bg-white
    ml-[194px]
    rounded-[12px]
    px-[16px]
    outline-none
    border
    border-[#E6E1D8]
    shadow-inner
    focus:border-[#7EC9C6]
    focus:ring-2
    focus:ring-[#7EC9C6]/30
  "
          />
        </div>
      </div>

      <div className="flex mt-[50px] ml-[900px]">
        <div className="cursor-pointer" onClick={openSendInvitationModal}>
          <PolygonButton
            width="106px"
            height="75px"
            bgColor="#86c9c9"
            radius={14}
            slantSide="right"
            clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
            childTop={5}
            decorationImg={{
              src: images.arrowImg,
              width: 48,
              height: 48,
            }}
            decorationPosition={{
              className: "-left-[32px] -top-[35px]",
            }}
          >
            <span className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold leading-tight text-center ">
              Send Invitation
            </span>
          </PolygonButton>
        </div>
      </div>
      {/* Decorative scribbles */}
      <div className="absolute top-[24px] right-[24px] w-[160px] h-[160px] opacity-40 bg-[url('/scribble.svg')] bg-contain bg-no-repeat" />
    </section>
  );
}
