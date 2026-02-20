import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./ChoosePathwayPage.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";

function ChoosePathwayPage() {
  const router = useRouter();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  return (
    <>
      <div
        className={`
    min-h-screen bg-[#4ba6a6] px-8 py-6 z-10 relative
    ${styles.page}
    ${enter ? styles.enterActive : styles.enterFromLeft}
  `}
      >
        <Image
          src={images.quizPolygon}
          alt="quiz-polygon"
          width={830}
          height={830}
          className="absolute top-0 right-0 -z-10 pointer-events-none"
        />
        <UserProfileHeader greetingColor="#FFFFFF" nameColor="#FFFFFF" />
        <SuccessMessage
          text="Your presence is one of your strongest tools
"
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

        <div className={`flex justify-center mt-[40px]`}>
          <div className="relative mb-[50px]">
            {/* Background shape */}

            <Image
              src={images.pathwayRec}
              alt="Pathway Background"
              style={{ width: "1031px", height: "600px" }}
            />

            <div className="absolute top-[40px] left-[60px] ">
              <h2
                className={`text-[50px] font-bold text-[#0F4F58] flex justify-center `}
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                My Personal Pathway
              </h2>
              <h3
                className="text-[#0F4F58] text-[32px] font-bold mt-[35px]"
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Ready To Choose A Pathway?
              </h3>

              <p
                className="mt-3 text-[#0F4F58] text-[20px] leading-relaxed"
                style={{ fontFamily: "Roboto" }}
              >
                This is your space to grow with intention. Whether you follow
                our guidance or choose your own
                <br />
                focus, your Pathway will help you make real, human change – in a
                way that fits you.
              </p>
              <div className={styles.cardRow}>
                {/* LEFT CARD */}
                <div className={styles.cardWrapper}>
                  <Image
                    src={images.pathwayArrowLeft}
                    alt="arrow"
                    width={50}
                    height={50}
                    className={styles.arrowLeft}
                  />

                  <div
                    className={`${styles.card} ${styles.leftCard} cursor-pointer`}
                    onClick={() => router.push("/start-quiz")}
                  >
                    <Image
                      src={images.quizRec}
                      alt="card shape"
                      width={113}
                      style={{ height: "151px" }}
                    />

                    <div className={styles.cardText}>
                      Take a
                      <br />
                      Quiz
                    </div>
                  </div>
                </div>

                {/* RIGHT CARD */}
                <div className={styles.cardWrapper}>
                  <Image
                    src={images.pathwayArrowRight}
                    alt="arrow"
                    width={50}
                    height={50}
                    className={styles.arrowRight}
                  />

                  <div className={`${styles.card} ${styles.rightCard}`}>
                    <Image
                      src={images.selfRec}
                      alt="card shape"
                      width={113}
                      style={{ height: "151px" }}
                    />

                    <div
                      className={`${styles.cardText} cursor-pointer`}
                      onClick={() => router.push("/choose-myself")}
                    >
                      Choose
                      <br />
                      Myself
                    </div>
                  </div>
                </div>
              </div>
              {/* INFO BAR INSIDE PATH REC */}
              <div className={styles.infoBarInside}>
                <div className={styles.infoBar}>
                  Not sure yet? No problem — you can switch your Pathway later
                  if something else fits better
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ChoosePathwayPage;
