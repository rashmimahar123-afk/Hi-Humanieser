/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./FromIdeas.module.css";
import { useRouter } from "next/navigation";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import FromIdeasPathwayCard from "../FromIdeasPathwayCards/FromIdeasPathwayCards";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import Link from "next/link";
import useChooseMyselfQuery from "@/src/modules/ChoosePathwayModule/Hooks/useChooseMyselfQuery";
import { CHOOSE_MYSELF_PILLAR_TYPE } from "@/src/modules/ChoosePathwayModule/Types/ResponseTypes";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function FromIdeas() {
  const [enter, setEnter] = useState(false);

  useEffect(() => {
    setEnter(true);
  }, []);

  const router = useRouter();
  const { data } = useChooseMyselfQuery();
  const pillarsData = data?.data?.[1];

  const pillarsList =
    pillarsData && "pillars" in pillarsData ? pillarsData.pillars : [];

  const { user } = useAuthValue();

  const focusAreaCards = [
    {
      sectionTitle: "The Mindset We Bring",
      bgColor: "#4ba6a6",
      cards: [
        {
          title: "Own Your Impact",
          description:
            "Transform your messages into clear direction that people can actually act on.",
          learnMoreColor: "#4ba6a6",
          onLearnMore: () => router.push(`/conversation`),
        },
        {
          title: "Be Real, Not Right",
          description:
            "Use honesty to build trust, unlock collaboration, and strengthen performance — even when certainty is missing.",
          learnMoreColor: "#4ba6a6",
          onLearnMore: () => router.push(`/conversation`),
        },
      ],
    },
    {
      sectionTitle: "The Way We Connect",
      bgColor: "#f5c882",
      cards: [
        {
          title: "Make it Safe",
          description:
            "Create everyday safety as the root of high performance, so people speak up, share ideas, and contribute fully.",
          learnMoreColor: "#f5c882",
          onLearnMore: () => router.push(`/conversation`),
        },
        {
          title: "Be Real, Not Right",
          description:
            "Transform your messages into clear direction that people can actually act on.",
          learnMoreColor: "#f5c882",
          onLearnMore: () => router.push(`/conversation`),
        },
      ],
    },
    {
      sectionTitle: "The Culture We Shape",
      bgColor: "#acd5ab",
      cards: [
        {
          title: "Culture by Design",
          description:
            "Move from inherited habits to intentional culture that supports clarity, accountability, and performance.",
          learnMoreColor: "#acd5ab",
          onLearnMore: () => router.push(`/conversation`),
        },
        {
          title: "Wellbeing is Performance Infrastructure",
          description:
            "Learn how energy, recovery, and care directly strengthen performance.",
          learnMoreColor: "#acd5ab",
          onLearnMore: () => router.push(`/conversation`),
        },
      ],
    },
    {
      sectionTitle: "The Culture We Shape",
      bgColor: "#f7c3be",
      cards: [
        {
          title: "Culture by Design",
          description:
            "Move from inherited habits to intentional culture that supports clarity, accountability, and performance.",
          learnMoreColor: "#f7c3be",
          onLearnMore: () => router.push(`/conversation`),
        },
        {
          title: "Wellbeing is Performance Infrastructure",
          description:
            "Learn how energy, recovery, and care directly strengthen performance.",
          learnMoreColor: "#f7c3be",
          onLearnMore: () => router.push(`/conversation`),
        },
      ],
    },
    {
      sectionTitle: "The Culture We Shape",
      bgColor: "#4ba6a6",
      cards: [
        {
          title: "Culture by Design",
          description:
            "Move from inherited habits to intentional culture that supports clarity, accountability, and performance.",
          learnMoreColor: "#4ba6a6",
          onLearnMore: () => router.push(`/conversation`),
        },
        {
          title: "Wellbeing is Performance Infrastructure",
          description:
            "Learn how energy, recovery, and care directly strengthen performance.",
          learnMoreColor: "#4ba6a6",
          onLearnMore: () => router.push(`/conversation`),
        },
      ],
    },
  ];

  return (
    <div
      className={`bg-[#F5F0EB] min-h-screen ${styles.page} ${
        enter ? styles.enterActive : styles.enter
      }`}
    >
      <div className={styles.decorWrap}>
        <Image
          src={images.quizPolygon}
          alt=""
          width={630}
          height={542}
          className={styles.decorImage}
        />
      </div>

      <div className={styles.headerSection}>
        <UserProfileHeader
          greetingColor="#0F4F58"
          nameColor="#0F4F58"
          userInfo={user}
        />
      </div>

      <div className={styles.hero}>
        <h2 className={styles.heroTitle}>From Ideas To Everyday</h2>
        <p className={styles.heroSubtitle}>
          This Is Where Hi Humaniser! Moves From Understanding To Doing
        </p>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.highlightSection}>
          <div className={styles.highlightInner}>
            <Image
              src={images.ideaPolygon}
              alt=""
              width={516}
              height={228}
              className={styles.highlightPolygon}
            />
            <div className={styles.highlightTextWrap}>
              <p className={styles.highlightText}>
                Pathways and Team Rituals help turn human-centred principles into
                everyday behaviours — through small actions, shared moments and
                consistent practice.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sectionBlock}>
          <h2 className={styles.sectionHeading}>
            Pathways — Building Personal Practice
          </h2>
          <div className={styles.sectionIndent}>
            <p
              className={`${styles.sectionBodyText} ${styles.sectionBodyTextSpaced}`}
            >
              Pathways support individuals to grow human habits that make
              performance sustainable.
            </p>

            <div className={styles.bulletBlock}>
              <p className="mb-2">Each Pathway offers:</p>
              <ul className={styles.bulletList}>
                <li>A clear focus</li>
                <li>Moments for reflection</li>
                <li>
                  Practical actions you can apply in real meetings,
                  conversations, and decisions
                </li>
              </ul>
            </div>

            <p
              className={`${styles.sectionBodyText} ${styles.sectionBodyTextBottom}`}
            >
              The aim is not change all at once — it&apos;s steady practice that
              compounds over time.
            </p>
          </div>

          <div className={styles.pathwayCardsSection}>
            {pillarsList?.map(
              (item: CHOOSE_MYSELF_PILLAR_TYPE, index: number) => (
                <div
                  className={styles.pathwayCardWrap}
                  key={`pillar-${item?.pillar_number ?? index}`}
                >
                  <FromIdeasPathwayCard
                    sectionTitle={item?.pillar_name}
                    bgColor={
                      item?.pillar_number === 1
                        ? "#4ba6a6"
                        : item?.pillar_number === 2
                          ? "#8BBE8A"
                          : "#F5C882"
                    }
                    cards={item?.principles?.map((principleItem) => ({
                      title: principleItem?.principle_name,
                      description: principleItem?.definition,
                      learnMoreColor:
                        item?.pillar_number === 1
                          ? "#4ba6a6"
                          : item?.pillar_number === 2
                            ? "#8BBE8A"
                            : "#F5C882",
                      onLearnMore: () =>
                        router.push(
                          `/pathway-card?pillar=${item?.pillar_number}&principle=${principleItem?.principle_number}`,
                        ),
                    }))}
                  />
                </div>
              ),
            )}
          </div>

          <div className={styles.sectionBlock}>
            <h2 className={styles.sectionHeading}>
              Team Rituals — Practising Together
            </h2>
            <div className={styles.sectionIndent}>
              <p className={styles.sectionBodyText}>
                Some shifts can&apos;t happen alone.
              </p>
              <p className={styles.sectionBodyText}>
                Team Rituals help groups strengthen trust, clarity and
                collaboration through small, shared practices woven into
                everyday work.
              </p>
              <p className={styles.sectionBodyText}>
                Rituals sit within Focus Areas — themes your team chooses to
                develop — each linked back to the Hi Humaniser! pillars and
                principles.
              </p>
            </div>
          </div>

          <div className={styles.pathwayCardsSection}>
            {focusAreaCards.map((card, index) => (
              <div className={styles.pathwayCardWrap} key={`focus-${index}`}>
                <FromIdeasPathwayCard
                  sectionTitle={card.sectionTitle}
                  bgColor={card.bgColor}
                  cards={card.cards}
                  type="focus-area"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ritualVisualSection}>
          <Image
            src={images.ritualArrow}
            alt=""
            width={625}
            height={400}
            className={styles.ritualArrow}
          />
          <Image
            src={images.ritualLens}
            alt=""
            width={360}
            height={360}
            className={styles.ritualLens}
          />

          <div className={styles.ritualContent}>
            <h2 className={styles.ritualHeading}>
              Team Rituals – What to expect
            </h2>

            <p className={styles.ritualIntro}>
              Most teams move through a simple rhythm:
            </p>

            <div className={styles.ritualList}>
              <div>
                <p className="font-semibold">Try it</p>
                <p>
                  Experience one ritual in everyday work (meetings,
                  conversations, decisions) without changing everything at once.
                </p>
              </div>

              <div>
                <p className="font-semibold">Keep it alive</p>
                <p>
                  As the ritual is being practiced, teams can use short{" "}
                  <Link href="/moments" className="font-bold mr-1 underline">
                    HH! Moments
                  </Link>{" "}
                  to pause, reflect, and notice how it&apos;s landing.
                </p>
              </div>

              <div>
                <p className="font-semibold">Decide what stays</p>
                <p>
                  Over time, teams reflect on what&apos;s genuinely helping.
                  <br />
                  Some rituals fade. Others become habits. Some reveal bigger
                  system shifts.
                </p>
              </div>
            </div>

            <p className={styles.ritualHighlight}>
              Small steps. Shared moments. Real change.
            </p>

            <h3 className={styles.progressHeading}>Making Progress Visible</h3>

            <div className={styles.progressText}>
              <p>
                As you complete Pathways, try micro-actions, and take part in
                Team Rituals, your practice is captured automatically in your
                Dashboard. Over time, this creates a living record of how
                you&apos;ve shown up — what you&apos;ve tried, reflected on, and
                shaped with others.
              </p>
              <p>
                It means when it comes to PDRs, annual reviews, or development
                conversations, you&apos;re not starting from scratch or relying
                on memory.
              </p>
              <p>
                The story of your contribution is already there — grounded in
                real moments, not last-minute summaries.
              </p>
            </div>
          </div>

          <div className={styles.bottomActions}>
            <div className={styles.shareBlock}>
              <div className={styles.shareText}>
                Enjoying Hi Humaniser!™ ? Share it with someone who&apos;d love
                it too.
              </div>
              <div className={styles.shareBtnWrap}>
                <PolygonButton
                  width="85px"
                  height="95px"
                  bgColor="#F7C3BE"
                  radius={14}
                  clipPath={`polygon(0% 0%, 100% 18px,100% calc(100% - 14px),0% 100%)`}
                />
                <div className={styles.shareBtnLabel}>
                  Share Hi <br /> Humaniser!
                </div>
              </div>
            </div>

            <div className={styles.buttonsCol}>
              <CommonButtons
                label="Go to Dashboard"
                bgColor="#4BA6A6"
                onClick={() => router.push("/my-dashboard")}
              />
              <CommonButtons
                label="Explore
Reflection Walls"
                bgColor="#4BA6A6"
                onClick={() => router.push("/reflection-walls")}
              />
            </div>
          </div>
        </div>

        <div className={styles.successWrap}>
          <SuccessMessage
            text="Connection builds culture. Performance follows."
            fontSize="text-[23px] max-lg:text-[18px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            left="438px"
            bottom="24px"
            rightImgBottom="16px"
            rightImgRight="426px"
            rotate="-35deg"
            fontColor="#0F4F58"
            wrapperClassName="px-2 lg:px-0"
          />
        </div>
      </div>
    </div>
  );
}

export default FromIdeas;
