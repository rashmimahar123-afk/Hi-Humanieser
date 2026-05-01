import ProfilePathwayCard from "../ProfilePathwayCard/ProfilePathwayCard";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";

export default function ProfilePathway() {
  const router = useRouter();
  const [enter, setEnter] = useState(false);
  const { user } = useAuthValue();

  useEffect(() => {
    setEnter(true);
  }, []);

  return (
    <>
      <div
        className={`min-h-screen bg-[#F5F0EB] px-3 min-[400px]:px-4 sm:px-8 md:px-12 lg:px-[64px] py-6 sm:py-8 md:py-[40px] page ${
          enter ? "enterActive" : "enter"
        }`}
      >
        <UserProfileHeader
          greetingColor="#567F55"
          nameColor="#0F4F58"
          userInfo={user}
        />

        {/* Header */}
        <div className="ml-0 sm:ml-4 md:ml-[37px] mt-4 sm:mt-6">
          <h2 className="text-[#0F4F58] text-[22px] min-[400px]:text-[26px] sm:text-[34px] md:text-[42px] font-[RocaTwo] font-bold mt-3 sm:mt-4 md:mt-[20px]">
            My Pathways
          </h2>
          <p className="text-[#0F4F58] text-[12px] min-[400px]:text-[13px] sm:text-[17px] md:text-[20px] mt-2 sm:mt-3 md:mt-[16px] leading-[18px] sm:leading-[26px] md:leading-[30px] max-w-2xl">
            Your Pathway is where your growth begins. Choose how you'd like to
            explore or adjust it.
          </p>
        </div>

        {/* Cards — always 3 cols at every screen size */}
        <div className="grid grid-cols-1 min-[600px]:grid-cols-3 gap-8 min-[600px]:gap-4 md:gap-0 mt-10 min-[600px]:mt-16 md:mt-[120px]">
          <ProfilePathwayCard
            title="Retake the Check-In"
            description="Find your best Pathway in a few questions"
            shapeImg={images.profileQuiz}
            arrowImg={images.arrowImg}
            arrowPosition="-left-[20px] -top-[14px] sm:-left-[28px] sm:-top-[20px]"
            // ← removed width="30px"
            onClick={() => router.push("/start-quiz")}
          />
          <ProfilePathwayCard
            title="Choose a Pathway"
            description="Browse all available Pathways and start your journey"
            shapeImg={images.profilePathway}
            arrowImg={images.leftArrowImg}
            arrowPosition="-right-[28px] -top-[18px] sm:-right-[40px] sm:-top-[27px]"
            rotate="-21deg"
            onClick={() => router.push("/choose-myself")}
          />
          <ProfilePathwayCard
            title="Manage My Pathway"
            description="Switch to a different focus whenever you're ready"
            shapeImg={images.profileChange}
            arrowImg={images.leftArrowImg}
            arrowPosition="-right-[28px] -top-[18px] sm:-right-[40px] sm:-top-[27px]"
            rotate="-21deg"
            onClick={() => router.push("/manage-pathway")}
          />
        </div>

        {/* Bottom Button */}
        <div className="mt-8 min-[400px]:mt-10 sm:mt-12 md:mt-[60px] flex justify-center sm:justify-end items-center">
          <CommonButtons
            label="Return to My Dashboard"
            bgColor="#FBE1DE"
            onClick={() => router.push("/dashboard")}
          />
        </div>
      </div>
      <LogoutModal />
    </>
  );
}
