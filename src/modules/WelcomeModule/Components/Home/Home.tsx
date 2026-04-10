import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import styles from "./Home.module.css";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import { useGetHomeMessageQuery } from "../../Hooks/useGetHomeMessageQuery";
import usePersonalPathwayQuery from "@/src/modules/PersonalPathwayModule/Hooks/usePersonalPathwayQuery";
import Loader from "@/src/components/Loader/Loader";
import LogoutModal from "../LogoutModal/LogoutModal";

type DASHBOARD_BOX = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  imageSrc: StaticImageData;
  badge?: string;
};
function Home() {
  const [enter, setEnter] = useState(false);
  const { user } = useAuthValue();

  useEffect(() => {
    setEnter(true);
  }, []);

  const boxes: DASHBOARD_BOX[] = [
    {
      id: 1,
      title: "Start Here",
      description: "Get familiar with your portal and journey.",
      bgColor: "#FEF3F2",
      imageSrc: images.startPoly,
    },
    {
      id: 2,
      title: "MY PERSONAL PATHWAY",
      description: "Reflection, actions, and personal growth at your own pace.",
      bgColor: "#F8E1B8",
      imageSrc: images.pathwayPoly,
    },
    {
      id: 3,
      title: "MY TEAM JOURNEY",
      description: "See what your team is focusing on and join the ritual.",
      bgColor: "#FEF3F2",
      imageSrc: images.startPoly,
      // badge: "new ritual",
    },
    {
      id: 4,
      title: "MY DASHBOARD",
      description: "Track your actions, progress, and reflections.",
      bgColor: "#F8E1B8",
      imageSrc: images.pathwayPoly,
    },
    {
      id: 5,
      title: "REFLECTION WALLS",
      description: "Jump into your team's space. Share, read, reflect.",
      bgColor: "#FEF3F2",
      imageSrc: images.startPoly,
      // badge: "new reflection!",
    },
    {
      id: 6,
      title: "RESOURCES & INSPIRATION",
      description: "Tools, ideas, and prompts to fuel your growth.",
      bgColor: "#F8E1B8",
      imageSrc: images.pathwayPoly,
    },
  ];

  const router = useRouter();
  const { data: randomMessage, isLoading: isMessageLoading } =
    useGetHomeMessageQuery();

  const { data, isLoading: isPathwayLoading } = usePersonalPathwayQuery();

  const pathwayData = data?.data?.pathways;
  const activePathways = pathwayData?.filter((item) => item.active);

  const handleDashboardRouting = (id: number) => {
    if (id === 1) router.push("/start-here");
    if (id === 2) {
      if (activePathways?.length === 0) {
        router.push("/choose-pathway");
      } else {
        router.push("/personal-pathway");
      }
    }
    if (id === 3) router.push("/start-team-journey");
    if (id === 4) router.push("/my-dashboard");
    if (id === 5) router.push("/reflection-walls");
    if (id === 6) router.push("/resource-inspiration");
  };
  const isLoading = isMessageLoading || isPathwayLoading;
  return (
    <>
      {isLoading && <Loader />}
      <div
        className={`min-h-screen bg-[#4BA6A6] px-8 py-6
  ${styles.page}
  ${styles.enterRight}
  ${enter ? styles.enterActive : ""}`}
      >
        <UserProfileHeader
          greetingColor="#0F4F58"
          nameColor="#0F4F58"
          userInfo={user}
        />

        <SuccessMessage
          text={randomMessage || ""}
          fontSize="text-[30px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0F4F58"
          rotate="-35deg"
          bottom="3px"
          rightImgBottom="3px"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 py-8">
          {boxes.map((box) => (
            <div
              key={box.id}
              onClick={() => {
                handleDashboardRouting(box.id);
              }}
              className="relative rounded-3xl cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
            >
              {/* IMAGE BOX ONLY */}
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: box.bgColor,
                  height: "220px",
                }}
              >
                <div className="relative w-full h-full">
                  {/* Polygon Image */}
                  <Image
                    src={box.imageSrc}
                    alt={box.title}
                    fill
                    className="object-contain "
                    style={{
                      transform: "scaleX(1.10)",
                    }}
                  />

                  {/* TEXT INSIDE POLYGON */}
                  <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="max-w-[250px]">
                      <span
                        style={{
                          fontFamily: "RocaTwo-Bold",
                          fontSize: "30px", // thoda reduce for better wrapping
                          lineHeight: "110%",
                          color: "#0F4F58",
                          textTransform: "uppercase",
                          display: "block",
                          fontWeight: 700,
                        }}
                      >
                        {box.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TEXT SECTION */}
              <div className="mt-4 flex justify-center text-center">
                <p
                  className="mt-1 font-bold "
                  style={{
                    fontFamily: "Roboto",
                    fontSize: "24px",
                    color: "#0F4F58",
                  }}
                >
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default Home;
