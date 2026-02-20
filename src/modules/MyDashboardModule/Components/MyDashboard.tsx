/* eslint-disable @typescript-eslint/no-explicit-any */
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "../../UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./MyDashboard.module.css";
import MyQuizResults from "./MyQuizResults/MyQuizResults";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import MyPersonalProgress from "./MyPersonalProgress/MyPersonalProgress";
import MyActivePractice from "./MyActivePractice/MyActivePractice";
import MyTeamProgress from "./MyTeamProgress/MyTeamProgress";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";

function MyDashboard() {
  const router = useRouter();
  const progressList = [
    {
      id: 1,
      title: "Practice Perspective",
      status: "Completed",
      date: "15/01/2026",
      icon: images.perspectiveImg,
    },
    {
      id: 2,
      title: "Wellbeing is Performance Infrastructure",
      status: "Completed",
      date: "29/01/2026",
      icon: images.wellbeingSmallPoly,
    },
    {
      id: 3,
      title: "Speak with Clarity",
      status: "Completed",
      date: "25/02/2026",
      icon: images.clarityImg,
    },
    {
      id: 4,
      title: "Stay Curious",
      status: "Completed",
      date: "19/03/2026",
      icon: images.curiousImg,
    },
    {
      id: 5,
      title: "Listen to Understand",
      status: "In Progress",
      icon: images.listenImg,
    },
  ];

  const pathways = [
    {
      id: 1,
      title: "Notice Your Ripple Effect",
      description:
        "Your actions create ripples in the workplace. This pathway helps you make them intentional and constructive.",
    },
    {
      id: 2,
      title: "Build Everyday Safety",
      description:
        "Even with good intent, people don’t always speak up — this pathway helps you create small signals of safety in daily moments.",
    },
    {
      id: 3,
      title: "Fuel Performance with Wellbeing",
      description:
        "When workloads rise, wellbeing often drops — this pathway helps you see how balance fuels stronger performance.",
    },
  ];

  const practiceList = [
    {
      id: 1,
      title: "Ask yourself: “What else could be true?”",
      description:
        "Next time you feel sure about what’s going on, take a breath and imagine 2–3 other possibilities. You might uncover something that shifts the conversation — and the outcome.",
      pathway: "Practice Perspective Pathway",
    },
    {
      id: 2,
      title: "Borrow someone else’s lens",
      description:
        "In your next meeting, try seeing the situation through another person’s priorities or pressures. Notice how it changes your take — sometimes the biggest performance boost comes from truly understanding the players.",
      pathway: "Wellbeing is Performance Infrastructure Pathway",
    },
    {
      id: 3,
      title:
        "Before acting, ask: “How will this land for people — and performance?”",
      description:
        "If the answer tilts too far in one direction, make one tweak to balance it. This might mean clarifying context, looping someone in, or slowing the pace.",
      pathway: "Build Care & Belonging Pathway",
    },
  ];

  const teamProgressList = [
    {
      id: 1,
      title: "Ritual 1",
      status: "Completed",
      date: "15/01/2026",
      icon: images.perspectiveImg,
    },
    {
      id: 2,
      title: "Ritual 2",
      status: "Completed",
      date: "29/01/2026",
      icon: images.wellbeingSmallPoly,
    },
    {
      id: 3,
      title: "Ritual 3",
      status: "Completed",
      date: "25/02/2026",
      icon: images.clarityImg,
    },
    {
      id: 4,
      title: "Ritual 4",
      status: "Completed",
      date: "19/03/2026",
      icon: images.curiousImg,
    },
    {
      id: 5,
      title: "Ritual 5",
      status: "In Progress",
      icon: images.listenImg,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-[#4BA6A6] relative font-sans">
        <Image
          src={images.myDashGreenPoly}
          alt="dash-green-rectangle"
          width={330}
          height={330}
          className="absolute top-0 left-0 z-0"
        />

        <Image
          src={images.myDashBluePoly}
          alt="dash-rectangle"
          width={530}
          height={530}
          className="absolute top-45 right-0 z-0"
        />

        <div className="px-10 py-8 absolute">
          <UserProfileHeader greetingColor="#0F4F58" nameColor="#0F4F58" />{" "}
          <SuccessMessage
            text="Great to see you again — ready to explore?"
            fontSize="text-[28px]"
            fontColor="#0F4F58"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            left="412px"
            top="135px"
            rightImgRight="407px"
          />
          <h1 className="text-center text-[42px] font-semibold text-[#254C4C] mt-14">
            My Dashboard
          </h1>
          {/* Description + Download */}
          <div className="flex justify-between items-center max-w-[1000px] mx-auto mt-10">
            <p className=" text-[#0F4F58] text-[20px] leading-7 max-w-[800px]">
              This is your hub — a snapshot of your journey so far. Explore your
              quiz results, see your progress, track what you’re practising, and
              notice your impact in the team.
            </p>

            <button className="flex flex-col items-center gap-2">
              <Image src={images.downloadImg} alt="download" />

              <span className="text-sm text-[#3E5F5F]">Download in PDF</span>
            </button>
          </div>
          {/* Cards */}
          <div
            className={`flex justify-between items-center mx-auto mt-[90px]`}
          >
            <div className={`${styles.card} bg-[#F5F0EB]`}>
              {/* Image layer */}
              <div className={styles.imageWrapper}>
                <Image
                  src={images.quizPoly}
                  alt="home icon"
                  fill
                  className={styles.cardImage}
                />
              </div>

              {/* Text on top of image */}
              <div className={styles.cardContent}>
                <h3>My Quiz Results</h3>
              </div>
            </div>

            <div className={`${styles.card} bg-[#F5F0EB]`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={images.personalPoly}
                  alt="green-icon"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>My Personal Progress</h3>
              </div>
            </div>

            <div className={`${styles.card} bg-[#F5F0EB]`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={images.activePoly}
                  alt="green-icon"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>My Active Practice List</h3>
              </div>
            </div>

            <div className={`${styles.card} bg-[#F5F0EB]`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={images.progressPoly}
                  alt="green-icon"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3>My Team Progress</h3>
              </div>
            </div>
          </div>
          <div className={`items-center mx-auto mt-14`}>
            {/* ---------------------My Quiz Results--------------- */}
            <div className="mx-auto mt-14">
              <MyQuizResults pathways={pathways} />
            </div>
            {/* ------------------------------------------------------ */}

            {/* ----------------------My Personal Progress--------------- */}
            <div className="mx-auto mt-14">
              <MyPersonalProgress progressList={progressList} />
            </div>
            {/* ----------------------------------------------------------- */}

            {/* ----------------------My Personal Progress--------------- */}
            <div className="mx-auto mt-14">
              <MyActivePractice practiceList={practiceList} />
            </div>
            {/* ----------------------------------------------------------- */}

            {/* ------------------------My Team Progress-------------------- */}
            <div className="mx-auto mt-14">
              <MyTeamProgress teamProgressList={teamProgressList} />
            </div>
            {/* ------------------------------------------------------------- */}
          </div>
          <div className="flex justify-between mt-[50px]">
            {/* -------------------------------Download PDF------------ */}
            <div className="flex justify-end">
              <button className="flex flex-col items-center gap-2">
                <Image src={images.downloadImg} alt="download" />

                <span className="text-sm text-[#3E5F5F]">Download in PDF</span>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-10">
              {/* -------slant Left Btn-------- */}
              <div></div>
              {/* -------slant Right Btn-------- */}
              <div>
                <PolygonButton
                  width="137px"
                  height="129px"
                  bgColor="#f8e1b8"
                  radius={14}
                  clipPath={`polygon(17% 17px, 77% 11%, 100% 81%, 0% calc(100% - 15px))`}
                  decorationImg={{
                    src: images.rightArrow,
                    width: 48,
                    height: 48,
                  }}
                  decorationPosition={{
                    className: "-right-[20px] -top-[28px]",
                  }}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span className="text-[#0F4F58] text-[22px] font-[RocaTwo] font-bold leading-[32px]">
                      See all Ritual Reflections
                    </span>
                  </div>
                </PolygonButton>
              </div>
            </div>
          </div>
          {/* --------------------Success Message------------ */}
          <div className="mt-14 mx-auto">
            <SuccessMessage
              text="Performance shifts when we practice, reflect, and connect — and you’re doing that here"
              fontSize="text-[23px]"
              leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
              rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
              fontColor="#0F4F58"
              left="374px"
              bottom="317px"
              rightImgRight="360px"
              rightImgBottom="299px"
            />
          </div>
          {/* ----------------------------Footer-------------------- */}
          <div className="flex justify-between ">
            <div className="mt-[160px] flex">
              <div className="max-w-[200px] text-[#0F4F58] font-[Aptos] text-[17px]">
                Love what Hi Humaniser!™ brings? Share it with a friend who’d
                enjoy it too.
              </div>
              <div className="ml-[26px]">
                <PolygonButton
                  width="85px"
                  height="95px"
                  bgColor="#F7C3BE"
                  radius={14}
                  clipPath={`polygon(0% 0%, 100% 18px,100% calc(100% - 14px),0% 100%)`}
                >
                  <div className="h-full flex items-center justify-center text-center">
                    <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[21px]">
                      Invite a Humaniser
                    </span>
                  </div>
                </PolygonButton>
              </div>
            </div>
            <div className="mt-[60px] flex flex-col items-center gap-[14px] ">
              <CommonButtons
                label="Change my Pathway"
                bgColor="#F5F0EB"
                onClick={() => router.push("/choose-pathway")}
              />

              <CommonButtons
                label="Return to
My Personal Pathway"
                bgColor="#F5F0EB"
                onClick={() => router.push("/dashboard")}
              />
              <CommonButtons
                label="Return to My Team
Journey"
                bgColor="#F5F0EB"
                onClick={() => router.push("/dashboard")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyDashboard;
