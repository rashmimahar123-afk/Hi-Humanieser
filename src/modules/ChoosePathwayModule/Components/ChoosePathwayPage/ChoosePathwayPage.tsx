import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./ChoosePathwayPage.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    min-h-screen bg-[#8BBE8A]
    ${styles.page}
    ${enter ? styles.enterActive : styles.enterFromLeft}
  `}
      >
        <Image
          src={images.pathwayPolygon}
          alt="sky-rec"
          width={620}
          height={340}
          priority
          className="absolute top-0 right-0 z-0"
        />
        <div className="flex">
          {" "}
          {/* Overlay content */}
          <div className="absolute inset-0 px-12 py-10 flex justify-between">
            {/* Left */}
            <div>
              <div
                className="text-[#FFFFFF]"
                style={{ fontFamily: "Aptos", fontSize: "22px" }}
              >
                Hi Humaniser!{" "}
                <span className="align-super text-[0.7em]">™</span>
              </div>

              <h1
                className="mt-4 text-[56px] text-[#0F4F58] font-bold "
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Hi Maria!
              </h1>
            </div>

            {/* Right profile */}
            <div className="flex items-start gap-3">
              <div
                className="text-right text-[#0F4F58] font-semibold mt-[28px] "
                style={{ fontFamily: "Aptos" }}
              >
                Maria
                <br />
                Palacios
              </div>
              <div className="relative w-[120px] h-[120px]">
                {/* Green shape */}
                <Image
                  src={images.greenRec}
                  alt="Decorative Rectangle"
                  fill
                  className="object-contain"
                />

                {/* Circular profile image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-white">
                    <Image
                      src={images.userProfile}
                      alt="Profile Picture"
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`relative flex justify-center ${styles.borderFrame}`}>
          {/* Left decoration */}
          <Image
            src={images.pathwayArrowLeft}
            alt="Arrow Right"
            width={40}
            height={40}
          />

          {/* Banner text */}
          <h2
            className="text-white text-center font-bold"
            style={{
              fontFamily: "League Spartan",
              fontSize: "24px",
              color: "#FFFFFF",
              marginTop: "62px",
            }}
          >
            Reflection is not time wasted - it’s
            <br />
            performance fuel
          </h2>
          {/* Right decoration */}

          <Image
            src={images.pathwayArrowRight}
            alt="Arrow Right"
            width={40}
            height={40}
          />
        </div>
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
                      onClick={() => router.push("/myself")}
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
