import Image from "next/image";
import NotificationItems from "../NotificationItems/NotificationItems";
import NotificationSection from "../NotificationSection/NotificationSection";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";

function ProfileNotification() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#F5F0EB] px-10 py-8">
      {/* Left Green Shape */}
      <Image
        src={images.notificationPolygon}
        alt="dash-green-rectangle"
        width={330}
        height={330}
        className="absolute top-0 left-0 z-0 pointer-events-none"
      />

      <Image
        src={images.profileNotification}
        alt="dash-rectangle"
        width={630}
        height={630}
        className="absolute top-44 right-25 z-0"
      />

      <div className="relative z-20 ">
        <UserProfileHeader greetingColor="#567F55" nameColor="#0F4F58" />
      </div>

      {/* Header */}
      <div className="relative z-10 ml-[42px]">
        <h2 className="text-[#0F4F58] text-[45px] font-[RocaTwo] font-bold ml-[40px]">
          Notifications
        </h2>

        <p className="text-[#0F4F58] text-[20px] mt-[20px] leading-[30px]">
          <span className="font-bold">Your space, your rhythm.</span>
          <br />
          Choose the reminders that help you stay connected — and silence the
          ones that don’t.
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-[80px] ml-[42px]">
        {/* Notification Type */}
        <NotificationSection
          title="Notification Type"
          subtitle="Choose how you’d like to be reminded:"
          icon={images.notificationImg}
        >
          <NotificationItems text="Email notifications — occasional reminders sent to your inbox." />
          <NotificationItems text="In-app notifications — appear within Hi Humaniser! when you log in." />
        </NotificationSection>

        {/* What to be Reminded About */}
        <NotificationSection
          title="What to be Reminded About"
          className="mt-[48px]"
          icon={images.nutImg}
        >
          <NotificationItems text="Team Rituals — Stay in sync when your team starts, updates, or completes a ritual — never miss the collective moments that build culture." />
          <NotificationItems text="Reflection Prompts — Get notified when new reflections open, so you can see what others are sharing and join the conversation on your team’s wall." />
          <NotificationItems text="Micro-Actions — Receive gentle nudges to keep small, meaningful habits alive — one ripple at a time." />
        </NotificationSection>
      </div>

      {/* Bottom CTA */}
      <div className="mt-[60px] flex justify-end items-center  ">
        <CommonButtons
          label="Return to Home"
          bgColor="#FBE1DE"
          onClick={() => router.push("/dashboard")}
        />
      </div>
    </div>
  );
}

export default ProfileNotification;
