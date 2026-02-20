import Image from "next/image";
import EvidenceLenses from "../EvidenceLenses/EvidenceLenses";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";

function ResearchRoom() {
  const router = useRouter();
  return (
    <section className="min-h-screen bg-[#f5f0eb]">
      <div className="relative">
        <Image
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-10"
        />
      </div>
      <div className="relative z-[10] px-8 py-6 ">
        {/* ================= Top Header ================= */}
        <UserProfileHeader greetingColor="#0f4f58" nameColor="#0F4F58" />

        {/* ================= Title ================= */}
        <div className="mt-10 flex flex-col items-center text-center">
          <h2 className="text-[45px] font-[RocaTwo] font-bold text-[#194E4E]">
            The Research Room
          </h2>
          <p className="text-[#0F4F58] text-[25px] font-[Roboto] max-w-[900px]">
            This space brings together the research and thinking that inform Hi
            Humaniser!™.
          </p>
        </div>

        {/* ================= Teal Note ================= */}
        <div className="mt-18 relative ">
          <Image src={images.researchPoly} alt="" width={1100} height={230} />

          <div className="absolute inset-0 p-4 text-white text-[23px] leading-relaxed text-center">
            <div className="max-w-[1060px] mt-[33px]">
              <p>
                The framework draws on decades of work across neuroscience,
                psychology, organisational behaviour, and social and cultural
                science – reflecting the reality that work is shaped by brains,
                people, teams, and systems.
              </p>

              <p>
                This isn’t a reading requirement. It’s here for transparency,
                curiosity, and depth – for those who want to explore the
                thinking behind the practice.
              </p>
            </div>
          </div>
        </div>
        {/* ================= Evidence Lenses ================= */}
        <div className="mt-20 ">
          <h3 className="text-[45px] font-[RocaTwo] font-bold text-[#0F4F58]">
            The Evidence Lenses
          </h3>
          <div className="ml-[65px]">
            <p className="mt-2 text-[#194E4E] text-[23px]">
              Hi Humaniser! has been developed through four complementary
              lenses:
            </p>

            <div className="mt-8 space-y-6">
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
        {/* ================= Pink Note ================= */}
        <div className="relative flex justify-end ">
          <Image src={images.researchImg} alt="" width={460} height={200} />
          <p className="absolute p-6 text-[#F5F0EB] bottom-[3%] -right-[3%] max-w-[500px] font-[Roboto] text-[22px]">
            Together, these lenses ensure the framework reflects how people
            actually experience work – individually and collectively.
          </p>
        </div>
        {/* ================= Bottom Notes ================= */}
        <div className="flex ml-[69PX]">
          {/* -------slant Left Btn-------- */}
          <div>
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
                className: "-left-[44px] -top-[12px]",
              }}
            >
              <div className="h-full flex items-center justify-center text-center">
                <span className="text-[#0F4F58] text-[24px] font-[RocaTwo] font-bold leading-[28px]">
                  Research Index
                </span>
              </div>
            </PolygonButton>
          </div>
          {/* -------slant Right Btn-------- */}
          <div className="ml-[30px]">
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
                className: "-right-[27px] -top-[20px]",
              }}
            >
              <div className="h-full flex items-center justify-center text-center">
                <span
                  className="
      text-[#0F4F58]
      text-[24px]
      font-[RocaTwo]
      font-bold
      leading-[28px]
      text-center
      whitespace-normal
    "
                >
                  Recommended Reading
                </span>
              </div>
            </PolygonButton>
          </div>
        </div>

        {/* ================= Footer Buttons ================= */}
        <div className="flex flex-row-reverse ">
          <div>
            <div>
              <CommonButtons
                label="Return to Home"
                bgColor="#C2E2E2"
                onClick={() => router.push("/choose-pathway")}
              />
            </div>
            <div className="mt-2">
              <CommonButtons
                label="Return to My Personal Pathway"
                bgColor="#F8E1B8"
                onClick={() => router.push("/dashboard")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchRoom;
