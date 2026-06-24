import Image from "next/image";
import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useEffect, useState } from "react";
import styles from "./BehindScene.module.css";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function BehindScene() {
  const column1Data = [
    { num: "01", title: "Own Your Impact" },
    { num: "02", title: "Stay Curious" },
    { num: "03", title: "Be Real, Not Right" },
    { num: "04", title: "Practice Perspective" },
  ];

  const column2Data = [
    { num: "05", title: "Recognise the Person" },
    { num: "06", title: "Make it Safe" },
    { num: "07", title: "Speak with Clarity" },
    { num: "08", title: "Listen to Understand" },
  ];

  const column3Data = [
    { num: "09", title: "Culture by Design" },
    { num: "10", title: "Build Care & Belonging In" },
    {
      num: "11",
      title: "Wellbeing is Performance Infrastructure",
    },
    { num: "12", title: "Make it Sustainable" },
  ];

  const router = useRouter();
  const { user } = useAuthValue();
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const renderPrinciplesColumn = (
    data: { num: string; title: string }[],
    isFirst = false
  ) => (
    <div
      className={`${styles.principlesCol} ${
        isFirst ? styles.principlesColFirst : ""
      }`}
    >
      {data.map(({ num, title }) => (
        <div key={num} className={styles.principleRow}>
          <div className={styles.principleInner}>
            <div className={styles.principleNum}>
              <span className={styles.principleNumText}>{num}</span>
            </div>
            <p className={styles.principleTitle}>{title}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      className={`min-h-screen bg-[#F5F0EB] font-sans ${styles.page} ${
        enter ? styles.enterActive : styles.enter
      }`}
    >
      <div className={styles.bgImageWrap} aria-hidden="true">
        <Image
          src={images.behindSceneImg}
          alt=""
          width={images.behindSceneImg.width}
          height={images.behindSceneImg.height}
          className={styles.bgImage}
          sizes="100vw"
          priority
        />
      </div>
      <div className={styles.content}>
        <UserProfileHeader
          greetingColor="#0F4F58"
          nameColor="#0F4F58"
          userInfo={user}
        />
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Behind The Scenes Of
            <br />
            Hi Humaniser!
          </h1>

          <p className={styles.heroParagraph}>
            Hi Humaniser! is built around one simple truth: work feels better —
            and delivers better — when we centre people, clarity, and
            connection.
          </p>

          <p className={styles.heroParagraph}>
            Every part of Hi Humaniser! works like a living system. The Pillars
            define what we stand for. The Principles turn those ideas into ways
            of working. And the Pathways and Team Rituals bring it all to life —
            through small, consistent actions that shape how people think,
            connect, and perform.
          </p>

          <p className={`${styles.heroParagraph} ${styles.heroParagraphLast}`}>
            It&apos;s a framework designed to make human habits visible — and
            performance sustainable.
          </p>
        </div>

        {/* Heart & Structure Section */}
        <div className={styles.heartSection}>
          <h2 className={styles.sectionHeading}>
            The Heart And Structure Of Hi Humaniser!
          </h2>
          <div className={styles.sectionIndent}>
            <p className={`${styles.bodyText} ${styles.bodyTextSpaced}`}>
              At the foundation of Hi Humaniser! are three pillars — The Mindset
              We Bring, The Way We Connect, and The Culture We Shape.
            </p>

            <p className={styles.bodyText}>
              Together, they hold 12 guiding principles that show what
              human-centred performance looks like in action — from owning our
              impact to making work sustainable.
            </p>
          </div>

          {/* Tilted Highlight Box */}
          <div className={styles.highlightBox}>
            <div className={styles.highlightInner}>
              <Image
                src={images.screenPolygon}
                alt="shape"
                className="w-full h-auto"
              />
              <p className={styles.highlightText}>
                These pillars and principles give every team a shared language
                for how we think, communicate, and build trust — turning good
                intentions into everyday habits that make work feel better and
                deliver stronger results.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarShape}>
                <Image
                  src={images.scenePolygon1}
                  alt="polygon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={styles.pillarTextWrap}>
                <h3 className={styles.pillarTitle}>
                  THE MINDSET
                  <br />
                  WE
                  <br />
                  BRING
                </h3>
              </div>
            </div>

            <div className={`${styles.pillarCard} ${styles.pillarCardGreen}`}>
              <div className={styles.pillarShape}>
                <Image
                  src={images.scenePolygon1}
                  alt="polygon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={styles.pillarTextWrap}>
                <h3 className={styles.pillarTitle}>
                  THE
                  <br />
                  WAY
                  <br />
                  WE
                  <br />
                  CONNECT
                </h3>
              </div>
            </div>

            <div className={`${styles.pillarCard} ${styles.pillarCardGold}`}>
              <div className={styles.pillarShape}>
                <Image
                  src={images.scenePolygon1}
                  alt="polygon"
                  fill
                  className="object-contain"
                />
              </div>
              <div className={styles.pillarTextWrap}>
                <h3 className={styles.pillarTitle}>
                  THE
                  <br />
                  CULTURE
                  <br />
                  WE
                  <br />
                  SHAPE
                </h3>
              </div>
            </div>
          </div>

          {/* Principles Section */}
          <div className={styles.principlesSection}>
            <div className={styles.principlesGrid}>
              {renderPrinciplesColumn(column1Data, true)}
              {renderPrinciplesColumn(column2Data)}
              {renderPrinciplesColumn(column3Data)}
            </div>
          </div>

          <div className={styles.downloadRow}>
            <div className={styles.downloadText}>
              Download the Hi Humaniser! Framework — a one-page view of the
              pillars and principles that shape how we think, connect and
              perform together.
            </div>
            <div>
              <Image src={images.downloadImg} alt="download" />
            </div>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            Designed To Work As A System
          </h2>
          <div className={styles.sectionIndent}>
            <p
              className={`${styles.sectionBodyText} ${styles.sectionBodyTextSpaced}`}
            >
              These pillars and principles give teams a shared language for how
              they think, communicate, and build trust — turning good intentions
              into everyday behaviours.
            </p>

            <div className={styles.bulletBlock}>
              <p className="mb-2">HH! is designed to work:</p>
              <ul className={styles.bulletList}>
                <li>within teams</li>
                <li>across teams</li>
                <li>and even alongside teams who aren&apos;t using the platform</li>
              </ul>
            </div>

            <p
              className={`${styles.sectionBodyText} ${styles.sectionBodyTextWide}`}
            >
              You don&apos;t need perfect adoption for impact.
              <br />
              When a few people start working differently, the system begins to
              shift.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <CommonButtons
              label="Explore Pathways &
Team Rituals"
              bgColor="#4BA6A6"
              onClick={() => router.push("/")}
            />
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            An Evidence-Led Framework
          </h2>
          <div className={styles.sectionIndent}>
            <p
              className={`${styles.sectionBodyText} ${styles.sectionBodyTextSpaced}`}
            >
              Hi Humaniser! is underpinned by a strong evidence base.
            </p>

            <div className={styles.bulletBlock}>
              <p className="mb-2">
                Every element of the framework — from guiding principles and
                behaviours to practical tools and shared practices — has been
                shaped through four complementary lenses:
              </p>
              <ul className={styles.bulletList}>
                <li>The brain — neuroscience</li>
                <li>The person — psychology and human behaviour</li>
                <li>
                  The workplace — organisational behaviour and team dynamics
                </li>
                <li>The wider system — social and cultural science</li>
              </ul>
            </div>

            <p
              className={`${styles.sectionBodyText} ${styles.sectionBodyTextBottom}`}
            >
              Together, these lenses form the intellectual backbone of Hi
              Humaniser! — ensuring the framework is robust enough to support
              meaningful, human-centred performance in complex, real-world
              systems.
            </p>
          </div>
          <div className={styles.ctaRow}>
            <CommonButtons
              label="Explore the
Research Room"
              bgColor="#4BA6A6"
              onClick={() => router.push("/research-room")}
            />
          </div>
        </div>

        <div className={styles.successWrap}>
          <SuccessMessage
            text="You've seen what shapes Hi Humaniser!
 Now go experience it in motion."
            fontSize="text-[23px] max-lg:text-[18px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            bottom="3px"
            rightImgBottom="3px"
            rotate="-35deg"
            wrapperClassName="px-2 lg:px-0"
          />
        </div>

        <div className={styles.inviteOuter}>
          <div className={styles.inviteRow}>
            <div className={styles.inviteText}>
              Feeling inspired?
              <br />
              Invite someone to explore Hi Humaniser!™
            </div>
            <div
              className={styles.inviteBtn}
              onClick={() => router.push("/spread-ripple")}
            >
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
        </div>
      </div>
    </div>
  );
}

export default BehindScene;
