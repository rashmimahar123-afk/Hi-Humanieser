import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import styles from "./SavePathway.module.css";

function SavePathway() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#F5F0EB] p-6 font-sans">
      <Image
        src={images.recGreen}
        alt="login-rectangle"
        className="absolute bottom-0 left-0 z-0"
      />
      {/* Header */}
      <div className="px-12  flex justify-between">
        {" "}
        {/* Left */}
        <div>
          <div
            className="text-[#0F4F58] leading-none"
            style={{ fontFamily: "Aptos", fontSize: "22px" }}
          >
            Hi Humaniser! <span className="align-super text-[0.7em]">™</span>
          </div>

          <h1
            className="mt-1 leading-tight text-[56px] text-[#0F4F58] font-bold"
            style={{ fontFamily: "RocaTwo-Bold" }}
          >
            Hi Maria!
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        {/* Left decoration */}
        <Image
          src={images.arrowImg}
          alt="Left decoration"
          width={40}
          height={40}
          className="shrink-0"
        />

        {/* Banner text */}
        <h2
          className="text-[#0F4F58] text-center font-bold text-[30px] leading-snug -mr-[10px]"
          style={{ fontFamily: "League Spartan" }}
        >
          Great to see you again — ready to explore?
        </h2>

        {/* Right decoration */}
        <Image
          src={images.leftArrowImg}
          alt="Right decoration"
          width={60}
          height={60}
          className="shrink-0"
        />
      </div>
      <div className="flex justify-center">
        <h2 className="text-[51px] font-[RocaTwo-Bold] text-[#0F4F58] font-bold flex justify-center">
          My Personal Pathway
        </h2>
      </div>
      <div className="ml-[40px]">
        {/* Main Section */}
        <div className="mt-20 flex justify-center">
          <div className="max-w-[520px]">
            <p className="text-[#E6A757] font-semibold tracking-wide text-[21px] font-[League Spartan]">
              CHOOSING MY PATHWAY
            </p>

            <p className="mt-3 text-[#567F55] text-[20px] leading-relaxed font-[Roboto] ml-[20px]">
              Ready to explore? You can select your own or take our quiz for
              ideas.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.cardRow}>
            {/* LEFT CARD */}
            <div className={styles.cardWrapper}>
              <Image
                src={images.arrowImg}
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
                  src={images.personalQuiz}
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
                src={images.leftArrowImg}
                alt="arrow"
                width={70}
                height={70}
                className={styles.arrowRight}
              />

              <div className={`${styles.card} ${styles.rightCard}`}>
                <Image
                  src={images.personalMyself}
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
        </div>
      </div>
      <div className="flex justify-end mr-[85px]">
        <div className="mt-[30px] flex flex-col items-center gap-[14px] ">
          <CommonButtons
            label="Return to
My Personal Pathway"
            bgColor="#ACD5AB"
            onClick={() => router.push("/choose-pathway")}
          />
          <CommonButtons
            label="Return to Home"
            bgColor="#C2E2E2"
            onClick={() => router.push("/choose-pathway")}
          />
        </div>
      </div>
    </div>
  );
}
export default SavePathway;
