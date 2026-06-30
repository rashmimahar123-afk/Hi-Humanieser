"use client";

import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProgressPill from "../../../ChampionHubModule/Components/ProgressPill/ProgressPill";
import { createPatternRows } from "@/src/lib/Helpers";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import PreviewQuestionsModal, {
  openPreviewQuestionsModal,
} from "../PreviewQuestionModal/PreviewQuestionModal";
import RunSurveyModal, {
  openRunSurveyModal,
} from "../RunSurveyModal/RunSurveyModal";
import PreviewContentModal from "../PreviewContentModal/PreviewContentModal";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import styles from "./OrganisationDiagnostic.module.css";

function OrganisationDiagnostic() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const router = useRouter();
  const { user } = useAuthValue();
  const data = [
    { name: "Own Your Impact", value: 32 },
    { name: "Stay Curious", value: 21 },
    { name: "Be Real, Not Right", value: 18 },
    { name: "Recognise the Person", value: 11 },
    { name: "Make it Safe", value: 9 },
    { name: "Wellbeing is Infrastructure", value: 7 },
  ];

  const reflectionTexts = [
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",

    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
    "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
  ];

  const reflections = Array.from({ length: 5 }).map((_, i) => ({
    id: i + 1,
    text: reflectionTexts[i % reflectionTexts.length],
    rotate: i % 2 === 0 ? "-rotate-2" : "rotate-1",
    imageKey: images[`reflectionWall${(i % 5) + 1}` as keyof typeof images],
  }));

  const rows = createPatternRows(reflections, [3, 2]);

  const comparisonData = [
    { label: "Clarity", percent: 20, change: 8 },
    { label: "Alignment", percent: 40, change: -3 },
    { label: "Load", percent: 54, change: 6 },
    { label: "Safety", percent: 31, change: 0 },
    { label: "Ownership", percent: 62, change: 4 },
  ];
  const getArrow = (change: number) => {
    if (change > 0) return { symbol: "↑", color: "text-green-600" };
    if (change < 0) return { symbol: "↓", color: "text-red-600" };
    return { symbol: "↔", color: "text-[#E6A85C]" };
  };
  return (
    <>
      <div className={styles.page}>
        <Image
          src={images.notificationPolygon}
          alt=""
          width={330}
          height={330}
          className={styles.bgLeft}
        />

        <Image
          src={images.profileNotification}
          alt=""
          width={630}
          height={630}
          className={styles.bgRight}
        />

        <div className={styles.headerWrap}>
          <UserProfileHeader
            greetingColor="#567F55"
            nameColor="#0F4F58"
            userInfo={user}
          />
        </div>
        <div className={styles.pageTitle}>Partner Hub</div>

        <div className={styles.introSection}>
          <h3 className={styles.introTitle}>Organisation Diagnostic </h3>
          <div className={styles.introIndent}>
            <p className={styles.introText}>
              Understand how work is really experienced across your
              organisation, from clarity to ownership.
            </p>
            <p className={`${styles.introText} ${styles.introTextSpaced}`}>
              A simple, repeatable survey that helps you see where the system is
              supporting performance and where it’s getting in the way.
            </p>
          </div>
        </div>

        <div className={styles.actionRow}>
          <div className={styles.actionBtnCol}>
            <div
              onClick={() => openRunSurveyModal()}
              className={styles.clickable}
            >
              <PolygonButton
                width="120px"
                height="100px"
                bgColor="#f8e1b8"
                radius={14}
                clipPath={`polygon(15% 20%, 81% 2%, 99% 76%, 5% calc(100% - 11px))`}
                contentClassName={styles.polygonBtnContent}
                decorationImg={{
                  src: images.arrowImg,
                  width: 48,
                  height: 48,
                }}
                decorationPosition={{
                  className: styles.actionArrow,
                }}
              >
                <span className={styles.polygonLabel}>
                  Run Organisation Survey{" "}
                </span>
              </PolygonButton>
            </div>
            <button
              className={styles.previewBtn}
              onClick={openPreviewQuestionsModal}
            >
              Preview Questions
            </button>
          </div>

          <div className={styles.actionTextCol}>
            <p className={styles.bodyText}>
              Start this survey to understand how work is really experienced
              across your organisation. Results are shown as five simple
              metrics, helping you see where things are working and where
              support may be needed.
            </p>

            <p className={`${styles.bodyText} ${styles.bodyTextSpaced}`}>
              It’s 10 short questions, takes less than 2 minutes, and responses
              are anonymous.
            </p>
          </div>
        </div>

        <div className={styles.surveySection}>
          <h2 className={styles.sectionHeading}>Survey Status</h2>
          <div className={styles.surveyCardWrap}>
            <PolygonButton
              width="100%"
              height="190px"
              bgColor="#fbe1de"
              radius={24}
              clipPath={`polygon(0% 0%, 94% 13%, 84% 80%, -4% 87%)`}
              childTop={8}
            ></PolygonButton>
            <div className={styles.surveyCardOverlay}>
              <p className={styles.surveyCardLine}>
                <span className="font-bold">Sent:</span> Today, 10:32
              </p>
              <p
                className={`${styles.surveyCardLine} ${styles.surveyCardLineSpaced}`}
              >
                <span className="font-bold">Responses:</span> 0 out of x (or X
                as they come in)
              </p>
              <p
                className={`${styles.surveyCardLine} ${styles.surveyCardLineSpaced}`}
              >
                <span className="font-bold">Participation:</span> 0%
              </p>
            </div>
          </div>
        </div>

        <div className={styles.resultsSection}>
          <h1 className={styles.sectionHeading}>Organisation Diagnostic</h1>
          <div className={styles.resultsPanel}>
            <Image
              src={images.dottedCurve}
              alt=""
              width={500}
              height={270}
              className={styles.dottedCurve}
            />

            <div className={styles.resultsGrid}>
              <div className={styles.resultsCol}>
                <h3 className={styles.resultsColTitle}>
                  How work is currently experienced{" "}
                </h3>

                <div className={styles.metricBox}>
                  <ProgressPill label="Clarity" percent={70} />
                  <ProgressPill label="Alignment" percent={60} />
                  <ProgressPill label="Load" percent={65} />
                  <ProgressPill label="Safety" percent={45} />
                  <ProgressPill label="Ownership" percent={25} />
                </div>
              </div>

              <div className={styles.resultsCol}>
                <h3 className={styles.resultsColTitle}>
                  What this means for your organisation{" "}
                </h3>

                <div className={styles.metricBoxMeaning}>
                  <p>
                    Earlier issue-raising, better judgement in decisions, and
                    fewer surprises later.
                  </p>

                  <p>
                    Clear priorities, faster decision-making, and less rework
                    across the team.
                  </p>

                  <p>
                    Better coordination across teams, reducing silos, friction,
                    and delays in delivery.
                  </p>

                  <p>
                    Stronger ownership, more discretionary effort, and better
                    retention of key people.
                  </p>

                  <p>
                    More sustainable pace, fewer energy crashes, and steadier
                    delivery over time.
                  </p>
                </div>
              </div>
            </div>

            <p className={styles.participation}>
              Participation: 8 of 12 team members responded (67%)
            </p>
          </div>

          <div className={styles.reminderRow}>
            <Image
              src={images.email}
              alt=""
              width={30}
              height={16}
              style={{ flexShrink: 0 }}
            />
            <div>Send a quick reminder</div>
          </div>
        </div>

        <div className={styles.actionRow}>
          <div className={styles.actionBtnCol}>
            <PolygonButton
              width="120px"
              height="100px"
              bgColor="#f8e1b8"
              radius={14}
              clipPath={`polygon(15% 20%, 81% 2%, 99% 76%, 5% calc(100% - 11px))`}
              contentClassName={styles.polygonBtnContent}
              decorationImg={{
                src: images.arrowImg,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: styles.actionArrow,
              }}
            >
              <span className={styles.polygonLabel}>Run Survey Again</span>
            </PolygonButton>
            <button
              className={styles.previewBtn}
              onClick={openPreviewQuestionsModal}
            >
              Preview Questions
            </button>
          </div>

          <div className={styles.actionTextCol}>
            <p className={styles.bodyText}>
              Run this survey again to track how things are evolving over time.
            </p>

            <p className={`${styles.bodyText} ${styles.bodyTextSpaced}`}>
              Most organisations run this every 4–6 months, once changes have
              had time to take effect.
            </p>
          </div>
        </div>

        <div className={styles.baselineRow}>
          <Image
            src={images.baseLineImg}
            alt=""
            width={30}
            height={16}
            style={{ flexShrink: 0 }}
          />
          <div>
            <span className="font-bold">Start a new baseline. </span>Choose this
            if you want to reset and measure from a new starting point.
          </div>
        </div>

        <div className={styles.footerBtnsWrap}>
          <div className={styles.footerBtns}>
            <CommonButtons
              label={`Return to 
Partner Hub`}
              bgColor="#fbe1de"
              onClick={() => router.push("/partner-hub")}
            />

            <CommonButtons
              label="Back to Homepage"
              bgColor="#fbe1de"
              onClick={() => router.push("/home")}
            />
          </div>
        </div>

        <div className={styles.resultsSection}>
          <h1 className={styles.sectionHeading}>Organisation Diagnostic</h1>
          <div className={styles.resultsPanel}>
            <Image
              src={images.dottedCurve}
              alt=""
              width={500}
              height={270}
              className={styles.dottedCurve}
            />

            <div className={styles.resultsGrid}>
              <div className={styles.resultsCol}>
                <h3 className={styles.resultsColTitle}>
                  How work is currently experienced{" "}
                </h3>

                <div className={styles.metricBoxComparison}>
                  <div className={styles.comparisonHeader}>
                    <div className={styles.comparisonHeaderText}>
                      Comparison <br /> Data
                    </div>
                  </div>

                  {comparisonData.map((item, index) => {
                    const arrow = getArrow(item.change);

                    return (
                      <div key={index} className={styles.comparisonRow}>
                        <ProgressPill
                          label={item.label}
                          percent={item.percent}
                        />

                        <div className={styles.comparisonArrow}>
                          <span className={arrow.color}>{arrow.symbol}</span>
                        </div>

                        <div className={styles.comparisonChange}>
                          {item.change}%
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className={styles.resultsCol}>
                <h3 className={styles.resultsColTitle}>
                  What this means for your organisation{" "}
                </h3>

                <div className={styles.metricBoxMeaning}>
                  <p>
                    People have a clear sense of what good looks like and how
                    their work connects
                  </p>

                  <p>
                    People have a clear sense of what good looks like and how
                    their work connects
                  </p>

                  <p>
                    People have the time and space needed to do their work well
                  </p>

                  <p>
                    People raise concerns and see them handled constructively
                  </p>

                  <p>
                    People take initiative and are able to make decisions within
                    their role
                  </p>
                </div>
              </div>
            </div>

            <p className={styles.participation}>
              Participation: 8 of 12 team members responded (67%)
            </p>
          </div>

          <div className={styles.reminderRow}>
            <Image
              src={images.email}
              alt=""
              width={30}
              height={16}
              style={{ flexShrink: 0 }}
            />
            <div>Send a quick reminder</div>
          </div>
        </div>

        <div className={styles.actionRow}>
          <div className={styles.actionBtnCol}>
            <PolygonButton
              width="120px"
              height="100px"
              bgColor="#f8e1b8"
              radius={14}
              clipPath={`polygon(15% 20%, 81% 2%, 99% 76%, 5% calc(100% - 11px))`}
              contentClassName={styles.polygonBtnContent}
              decorationImg={{
                src: images.arrowImg,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: styles.actionArrow,
              }}
            >
              <span className={styles.polygonLabel}>Run Survey Again</span>
            </PolygonButton>
            <button
              className={styles.previewBtn}
              onClick={openPreviewQuestionsModal}
            >
              Preview Questions
            </button>
          </div>

          <div className={styles.actionTextCol}>
            <p className={styles.bodyText}>
              Run this survey again to track how things are evolving over time.
            </p>

            <p className={`${styles.bodyText} ${styles.bodyTextSpaced}`}>
              Most organisations run this every 4–6 months, once changes have
              had time to take effect.
            </p>
          </div>
        </div>

        <div className={styles.baselineRow}>
          <Image
            src={images.baseLineImg}
            alt=""
            width={30}
            height={16}
            style={{ flexShrink: 0 }}
          />
          <div>
            <span className="font-bold">Start a new baseline. </span>Choose this
            if you want to reset and measure from a new starting point.
          </div>
        </div>

        <div className={styles.footerBtnsWrap}>
          <div className={styles.footerBtns}>
            <CommonButtons
              label={`Return to 
Partner Hub`}
              bgColor="#fbe1de"
              onClick={() => router.push("/overseer-hub")}
            />

            <CommonButtons
              label="Back to Homepage"
              bgColor="#fbe1de"
              onClick={() => router.push("/home")}
            />
          </div>
        </div>
        <PreviewQuestionsModal />
        <RunSurveyModal />
        <PreviewContentModal />
      </div>
    </>
  );
}

export default OrganisationDiagnostic;
