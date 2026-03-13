import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import styles from "./Home.module.css";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
      description:
        "Reflection, actions, and personal growth — at your own pace.",
      bgColor: "#F8E1B8",
      imageSrc: images.pathwayPoly,
    },
    {
      id: 3,
      title: "MY TEAM JOURNEY",
      description: "See what your team is focusing on — and join the ritual.",
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

  const handleDashboardRouting = (id: number) => {
    if (id === 1) router.push("/start-here");
    if (id === 2) router.push("/choose-pathway");
    if (id === 3) router.push("/start-team-journey");
  };
  return (
    <>
      <div
        className={`min-h-screen bg-[#4BA6A6] px-8 py-6
  ${styles.page}
  ${styles.enterRight}
  ${enter ? styles.enterActive : ""}`}
      >
        <UserProfileHeader greetingColor="#0F4F58" nameColor="#0F4F58" />

        <SuccessMessage
          text="Great to see you again — ready to explore?"
          fontSize="text-[30px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0F4F58"
          left="403px"
          top="126px"
          rightImgRight="390px"
          rotate="-35deg"
          rightImgTop="123px"
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
                  <div
                    className="absolute inset-0 flex items-center"
                    style={{
                      paddingLeft: "110px",
                    }}
                  >
                    <div style={{ maxWidth: "80%" }}>
                      <span
                        style={{
                          fontFamily: "RocaTwo-Bold",
                          fontSize: "34px",
                          lineHeight: "100%",
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

                {/* BADGE (optional) */}
                {/* {box.badge && (
                  <div
                    className="absolute z-20"
                    style={{
                      bottom: box.id === 5 ? "79px" : "107px",
                      right: box.id === 5 ? "-11px" : "3px",
                    }}
                  >
                    <Image
                      src={images.whiteArrow}
                      alt="white-arrow"
                      style={{
                        width: "28px",
                        height: "28px",
                        transform: "rotate(0deg)",
                        position: "absolute",
                        bottom: "6px",
                        right: box.id === 5 ? "45px" : "30px",
                      }}
                    />

                    <div
                      style={{
                        transform: "rotate(-26deg)",
                        textAlign: "center",
                        marginTop: "-4px",
                      }}
                    >
                      <span className="text-[#0F4F58] text-[14px] font-bold block leading-3">
                        {box.badge.split(" ")[0]}
                      </span>
                      <span className="text-[#0F4F58] text-[14px] font-bold block leading-3">
                        {box.badge.split(" ")[1]}
                      </span>
                    </div>
                  </div>
                )} */}
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
    </>
  );
}

export default Home;
