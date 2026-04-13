import Image from "next/image";
import ProfilePathwayCard from "../ProfilePathwayCard/ProfilePathwayCard";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

export default function ProfilePathway() {
  const router = useRouter();
  const [enter, setEnter] = useState(false);
  const { user } = useAuthValue();

  useEffect(() => {
    setEnter(true);
  }, []);
  return (
    <div
      className={`min-h-screen bg-[#F5F0EB] px-[64px] py-[40px] page ${
        enter ? "enterActive" : "enter"
      }`}
    >
      <div>
        <UserProfileHeader
          greetingColor="#567F55"
          nameColor="#0F4F58"
          userInfo={user}
        />
      </div>
      {/* Header */}

      <div className="ml-[37px] mt-6 ">
        <h2 className="text-[#0F4F58] text-[42px] font-[RocaTwo] font-bold mt-[20px]">
          My Pathways
        </h2>

        <p className="text-[#0F4F58] text-[20px]  mt-[16px] leading-[30px]">
          Your Pathway is where your growth begins. Choose how you’d like to
          explore or adjust it.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 mt-[120px]">
        {/* Card 1 */}
        <ProfilePathwayCard
          title="
          Retake the Check-In "
          description="Find your best Pathway in a few questions"
          shapeImg={images.profileQuiz}
          arrowImg={images.arrowImg}
          arrowPosition="-left-[28px] -top-[20px]"
          width="44px"
          onClick={() => router.push("/start-quiz")}
        />

        {/* Card 2 */}
        <ProfilePathwayCard
          title="Choose a Pathway"
          description="Browse all available Pathways and start your journey"
          shapeImg={images.profilePathway}
          arrowImg={images.leftArrowImg}
          arrowPosition="-right-[40px] -top-[27px]"
          rotate="-21deg"
          onClick={() => router.push("/choose-myself")}
        />

        {/* Card 3 */}
        <ProfilePathwayCard
          title="Manage My Pathway"
          description="Switch to a different focus whenever you’re ready"
          shapeImg={images.profileChange}
          arrowImg={images.leftArrowImg}
          arrowPosition="-right-[40px] -top-[27px]"
          rotate="-21deg"
          onClick={() => router.push("/manage-pathway")}
        />
      </div>

      {/* Bottom Button */}
      <div className="mt-[60px] flex justify-end items-center  ">
        <CommonButtons
          label="Return to
My Dashboard"
          bgColor="#FBE1DE"
          onClick={() => router.push("/dashboard")}
        />
      </div>
    </div>
  );
}
