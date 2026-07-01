"use client";

import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import EasePressureList from "../EasePressureList/EasePressureList";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import Link from "next/link";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function ThingsTricky() {
  const router = useRouter();
  const { user } = useAuthValue();
  return (
    <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif">
      {/* TOP LEFT SHAPE */}

      <div>
        <UserProfileHeader
          greetingColor="#4ba6a6"
          nameColor="#0F4F58"
          userInfo={user}
        />
      </div>

      <Image
        src={images.homeRec}
        alt="left-bg"
        width={421}
        height={414}
        className="absolute top-0 left-0 -z-10"
        priority
      />
      <Image
        src={images.profileNotification}
        alt="left-bg"
        width={630}
        height={630}
        className="absolute top-40 right-0 -z-10"
        priority
      />
      {/* WELCOME TEXT */}
      <div className="relative z-10 mt-8 ml-[85px]">
        <h3 className="text-[#0f4f58] text-[45px] font-bold font-[RocaTwo] font-[#0f4f58]">
          When things get tricky...
        </h3>
        <div className="text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto]">
          <div className="mb-2">
            Every leader encounters moments that feel tricky.
          </div>
          <div>
            Lower engagement, mixed reactions, or awkward conversations are part
            of working with real people. This space offers gentle guidance to
            help you stay grounded and move forward with care.
          </div>
        </div>
      </div>
      <div className=" mt-10 ml-10">
        <h3 className="text-[#0f4f58] text-[45px] font-[400] font-[RocaTwo] font-[#0f4f58]">
          Normalise the Wobble
        </h3>
        <div className="text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto] ml-4">
          <div>Not every cycle will feel the same.</div>
          <div className="mb-4">
            Some weeks feel energised and open; others feel quieter or slower.
          </div>

          <div className="mb-4">
            That doesn’t mean something has gone wrong. It often means people
            are taking things in, testing the space or deciding how safe it
            feels to engage. These quieter moments are not a sign to push harder
            or change course too quickly. They’re often part of how trust forms
            — slowly, and in the background.
          </div>
          <div className="mb-4">
            Change rarely moves in a straight line. And when we try to force
            smoothness, we can create more tension than progress.
          </div>
          <div>
            Staying present, consistent, and calm through the wobble is already
            <span className="font-bold ml-1">meaningful leadership.</span>
          </div>
        </div>
      </div>
      <div className=" mt-10 ml-10">
        <h3 className="text-[#0f4f58] text-[45px] font-[400] font-[RocaTwo] font-[#0f4f58]">
          What you might be noticing{" "}
        </h3>
        <div className="text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto] ml-4">
          <div className="mb-4">
            When things feel tricky, it often shows up in subtle ways. You might
            notice fewer voices than you expected, shorter reflections, mixed
            reactions, or a sense that the energy isn’t quite there yet.
            Sometimes it looks like hesitation. Sometimes like indifference.
            Sometimes like people watching quietly from the edges.
          </div>
          <div className="mb-4">
            These signals don’t mean the work is not landing. They simply tell
            you that people are engaging in different ways — and often at
            different speeds.
          </div>

          <div>
            Not everything needs a response straight away. Noticing what’s
            emerging is already part of holding the space well.
          </div>
        </div>
      </div>
      <div className=" mt-10 ml-10">
        <h3 className="text-[#0f4f58] text-[45px] font-[400] font-[RocaTwo] font-[#0f4f58]">
          A few things that usually help
        </h3>
        <div className="text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto] ml-4">
          <div className="mb-4">
            When things feel uncertain, the most helpful moves are often quieter
            than we expect. Research on trust, behaviour change, and group
            dynamics consistently shows that people engage more when they feel
            safe, not rushed — and when they’re given time to make sense of
            things in their own way.
          </div>
          <div className="mb-4">
            In practice, that means staying curious rather than persuasive.
            Letting questions do more of the work than explanations.
          </div>

          <div className="mb-4">
            It means valuing consistency over intensity. Small, repeated moments
            build confidence far more reliably than one strong push.
          </div>
          <div>
            It also means resisting the urge to fill every silence. Pauses give
            people space to think, test the environment, and decide how they
            want to show up.
          </div>
        </div>
      </div>
      {/* RIGHT PINK POLYGON */}
      <div className="flex justify-end mt-10">
        <PolygonButton
          width="476px"
          height="190px"
          bgColor="#fbe1de"
          radius={24}
          clipPath={`polygon(0% 0%, 94% 13%, 84% 80%, -4% 87%)`}
          childTop={8}
        >
          <div className="px-8 text-left text-[#0F4F58] text-[18px] leading-relaxed font-bold font-[Roboto]">
            If you’re holding the space with care - even when it feels slow or
            uncertain - you’re already doing something important. This kind of
            leadership often works quietly, but its impact runs deep.
          </div>
        </PolygonButton>
      </div>
      <div className=" mt-10 ml-10">
        <h3 className="text-[#0f4f58] text-[45px] font-[400] font-[RocaTwo] font-[#0f4f58]">
          Where to go next
        </h3>
        <div className="text-[#0F4F58] text-[22px] leading-relaxed font-[Roboto] ml-4">
          <div className="mb-4">
            If it feels helpful to shift the energy or create a fresh moment of
            connection, you don’t have to start from scratch.
          </div>
          <div className="mb-4">
            You can draw on{" "}
            <Link href="/moments" className="font-bold mr-1 ">
              HH! Moments
            </Link>
            to gently re-ground a meeting or open up a different kind of
            conversation.
          </div>

          <div className="mb-4">
            If patterns feel bigger than one team or keep repeating,{" "}
            <Link href="/team-workshops" className="font-bold mr-1 ">
              Cross-Team Workshops
            </Link>{" "}
            can help surface shared themes and build understanding across
            boundaries.
          </div>
          <div className="mb-4">
            If the pressure feels structural - recurring bottlenecks, constant
            urgency, or decision loops -{" "}
            <Link href="/ease-pressure" className="font-bold mr-1 ">
              Ease the Pressure{" "}
            </Link>
            offers small, practical shifts that can lighten the load without
            adding more work.
          </div>
          <div>
            And sometimes, the best next step is simply to pause, notice what’s
            emerging, and let the work breathe before deciding what comes next.
          </div>
        </div>
      </div>

      <div className="mt-20 relative">
        <SuccessMessage
          text="There’s no single right move here. Trust your judgement — and remember that creating the conditions is already a powerful step forward."
          fontSize="text-[22px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
          fontColor="#0F4F58"
          left="341px"
          bottom="32px"
          rightImgRight="319px"
          rightImgBottom="25px"
          rotate="-35deg"
          maxWidth="700px"
        />
      </div>

      <div className="flex justify-end mt-20">
        {/* Bottom Buttons */}
        <div className="flex flex-col gap-4 items-center">
          <CommonButtons
            label={
              user?.user_type === 3
                ? `Return to Partner Hub`
                : `Return to Champion Hub`
            }
            bgColor="#fbe1de"
            onClick={() =>
              router.push(
                user?.user_type === 3 ? "/overseer-hub" : "/champion-hub",
              )
            }
          />

          <CommonButtons
            label="Go to Homepage"
            bgColor="#fbe1de"
            onClick={() => router.push("/home")}
          />
        </div>
      </div>
    </div>
  );
}

export default ThingsTricky;
