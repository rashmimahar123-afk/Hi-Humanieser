import Image from "next/image";
import EvidenceLenses from "../EvidenceLenses/EvidenceLenses";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import styles from "./ResearchRoom.module.css";

function ResearchRoom() {
  const router = useRouter();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/researchRoom/ResearchIndex.pdf";
    link.download = "ResearchIndex.pdf";
    link.click();
  };

  const handleRecommendedDownload = () => {
    const link = document.createElement("a");
    link.href = "/researchRoom/RecommendedReading.pdf";
    link.download = "RecommendedReading.pdf";
    link.click();
  };
  const { user } = useAuthValue();

  return (
    <section className={styles.page}>
      <div className={styles.decorWrap}>
        <Image
          src={images.quizPolygon}
          alt=""
          width={630}
          height={542}
          className={styles.decorImage}
          priority
        />
      </div>

      <div className={styles.content}>
        <UserProfileHeader
          greetingColor="#0f4f58"
          nameColor="#0F4F58"
          userInfo={user}
        />

        <div className={styles.hero}>
          <h2 className={styles.heroTitle}>The Research Room</h2>
          <p className={styles.heroSubtitle}>
            This space brings together the research and thinking that inform Hi
            Humaniser!™.
          </p>
        </div>

        <div className={styles.tealNote}>
          <div className={styles.tealNoteInner}>
            <Image
              src={images.researchPoly}
              alt=""
              width={1100}
              height={197}
              className={styles.tealNoteImage}
            />
            <div className={styles.tealNoteTextWrap}>
              <div className={styles.tealNoteTextInner}>
                <p>
                  The framework draws on decades of work across neuroscience,
                  psychology, organisational behaviour, and social and cultural
                  science – reflecting the reality that work is shaped by brains,
                  people, teams, and systems.
                </p>
                <p>
                  This isn&apos;t a reading requirement. It&apos;s here for
                  transparency, curiosity, and depth – for those who want to
                  explore the thinking behind the practice.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.evidenceSection}>
          <h3 className={styles.evidenceTitle}>The Evidence Lenses</h3>
          <div className={styles.evidenceIndent}>
            <p className={styles.evidenceIntro}>
              Hi Humaniser! has been developed through four complementary
              lenses:
            </p>

            <div className={styles.evidenceList}>
              <EvidenceLenses
                title="The Brain"
                text="Neuroscience research on attention, stress, safety, learning, decision-making, and social connection."
              />
              <EvidenceLenses
                title="The Person"
                text="Psychology and behavioural science exploring motivation, identity, habits, bias, emotion, and growth."
              />
              <EvidenceLenses
                title="The Workplace"
                text="Organisational behaviour and team research on leadership, trust, collaboration, performance, and culture."
              />
              <EvidenceLenses
                title="The Wider System"
                text="Social and cultural science examining power, norms, belonging, inequality, and systemic change."
              />
            </div>
          </div>
        </div>

        <div className={styles.pinkNote}>
          <div className={styles.pinkNoteInner}>
            <Image
              src={images.researchImg}
              alt=""
              width={460}
              height={211}
              className={styles.pinkNoteImage}
            />
            <div className={styles.pinkNoteTextWrap}>
              <p className={styles.pinkNoteText}>
                Together, these lenses ensure the framework reflects how people
                actually experience work – individually and collectively.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.downloadRow}>
          <div className={styles.downloadBtn}>
            <PolygonButton
              height="129px"
              bgColor="#F6E3BF"
              clipPath={`polygon(
    0% 29px,
    100% 7%,
    87% 89%,
    20% calc(100% - 13px)
  )`}
              decorationImg={{
                src: images.arrowImg,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: styles.downloadArrowFirst,
              }}
            >
              <div className="h-full flex items-center justify-center text-center pointer-events-none">
                <span
                  className={styles.downloadLabel}
                  onClick={handleDownload}
                >
                  Research Index
                </span>
              </div>
            </PolygonButton>
          </div>

          <div className={`${styles.downloadBtn} ${styles.downloadBtnSecond}`}>
            <PolygonButton
              height="129px"
              bgColor="#acd5ab"
              radius={14}
              topTilt={18}
              slantSide="right"
              clipPath={`polygon(17% 17px, 77% 11%, 100% 81%, 0% calc(100% - 15px))`}
              decorationImg={{
                src: images.rightArrow,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: styles.downloadArrowSecond,
              }}
            >
              <div className="h-full flex items-center justify-center text-center pointer-events-none">
                <span
                  className={styles.downloadLabel}
                  onClick={handleRecommendedDownload}
                >
                  Recommended Reading
                </span>
              </div>
            </PolygonButton>
          </div>
        </div>

        <div className={styles.footerActions}>
          <div>
            <CommonButtons
              label="Return to Home"
              bgColor="#C2E2E2"
              onClick={() => router.push("/home")}
            />
            <div className={styles.footerBtnSpaced}>
              <CommonButtons
                label="Return to My Personal Pathway"
                bgColor="#F8E1B8"
                onClick={() => router.push("/personal-pathway")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchRoom;
