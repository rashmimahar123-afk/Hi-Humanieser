"use client";
import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useRouter } from "next/navigation";

function AmplifierFirstDescription() {
  const router = useRouter();

  return (
    <div className="relative space-y-5 overflow-hidden">
      {/* Background Illustration */}
      <Image
        src={images.labImg}
        alt=""
        className="absolute left-4 bottom-0 z-0 pointer-events-none hidden sm:block sm:opacity-30 lg:opacity-100"
      />

      {/* Main Content */}
      <div className="relative z-10 space-y-4 lg:space-y-5 font-[Roboto] text-[14px] sm:text-[17px] lg:text-[20px]">
        <p>
          Because lasting performance doesn't come from pushing harder – it
          comes from designing work that people can keep doing, day after day,
          without depletion.
        </p>

        <div>
          <p className="font-[700] text-[#0F4A4E] mb-1 text-[16px] sm:text-[19px] lg:text-[22px]">
            The Brain (Neuroscience):
          </p>
          <p>
            Our brains are wired to conserve energy and stabilise patterns. When
            work is full of constant change, friction and decisions, cognitive
            energy drains quickly (thank you Friston; Baumeister). Repeated
            behaviours, on the other hand, become automatic over time — which is
            why small, consistent habits are far more sustainable than bursts of
            effort (this gem from Graybiel).
          </p>
        </div>

        <div>
          <p className="font-[700] text-[#0F4A4E] mb-1">
            The Person (Psychology):
          </p>
          <p>
            People struggle with long-term goals when progress feels distant or
            unclear. Sustainable change works when effort is reinforced through
            short feedback loops and visible wins (Hall & Fong). Just as
            importantly, knowing when to stop, adapt or let go protects
            motivation and prevents quiet exhaustion (a brilliant reminder from
            Wrosch). Letting go is part of sustainability.
          </p>
        </div>

        <div>
          <p className="font-[700] text-[#0F4A4E] mb-1">
            The Workplace (Organisational Behaviour):
          </p>
          <p>
            In real life, work sticks through the small things people do every
            day. When expectations are clear, routines make sense, and knowledge
            is shared instead of trapped in a few heads, work becomes easier to
            sustain (thank you Feldman & Pentland). When everything feels like a
            constant change or a new push, energy drains and people quietly
            disengage. Sustainable workplaces don't rely on heroics — they rely
            on simple, repeatable ways of working that people can trust (a nudge
            we needed from Teece; Walsh & Ungson).
          </p>
        </div>

        <div>
          <p className="font-[700] text-[#0F4A4E] mb-1">
            The Wider System (Social & Cultural Science):
          </p>
          <p>
            What lasts is what people collectively care for. When teams share a
            common rhythm, agree the "rules of the game", and feel some
            ownership over how work happens, the system holds (Shove; Ostrom).
            Short-term pressure might create speed, but it rarely creates
            stability. Sustainable work grows when decisions consider tomorrow
            as much as today — and when people feel they are part of something
            built to last (thank you Barton & Wiseman).
          </p>
        </div>

        {/* Quote */}
        <div className="flex justify-end">
          <p className="text-[#4BA6A6] text-[14px] sm:text-[17px] lg:text-[20px] max-w-full sm:max-w-[500px]">
            When work is designed to repeat, reinforce and renew itself —
            through rhythms, habits, shared ownership and sensible pacing —
            performance stops relying on effort and starts relying on structure.
            Sustainability becomes the quiet strength that allows good work to
            continue without burning people out
          </p>
        </div>
      </div>

      {/* Footer Button Row */}
      <div className="relative z-10 flex flex-row justify-end items-center mt-6 lg:mt-[53px] mb-[7px]">
        {/* Label */}
        <div className="mr-[12px] sm:mr-[20px] lg:mr-[78px]">
          <p className="text-[11px] sm:text-[14px] lg:text-[17px] text-[#0F4F58] font-[Roboto]">
            Curious about the science? Step into the Research Room
          </p>
        </div>

        {/* Button — scales down on smaller screens */}
        <div
          onClick={() => router.push("/research-room")}
          className="cursor-pointer shrink-0"
        >
          {/* Mobile: small */}
          <div className="block sm:hidden">
            <PolygonButton
              width="62px"
              height="63px"
              bgColor="#86C9C9"
              radius={9}
              clipPath={`polygon(0% 30%, 92% 0%, 100% 87%, 3% calc(100% - 15px))`}
              decorationImg={{ src: images.arrowImg, width: 28, height: 28 }}
              decorationPosition={{ className: "-left-[29px] -top-[5px]" }}
            >
              <span className="text-[#0F4F58] text-[14px] font-[RocaTwo] font-bold leading-tight text-center">
                Research Room
              </span>
            </PolygonButton>
          </div>

          {/* Tablet: medium */}
          <div className="hidden sm:block lg:hidden">
            <PolygonButton
              width="82px"
              height="83px"
              bgColor="#86C9C9"
              radius={11}
              clipPath={`polygon(0% 30%, 92% 0%, 100% 87%, 3% calc(100% - 15px))`}
              decorationImg={{ src: images.arrowImg, width: 36, height: 36 }}
              decorationPosition={{ className: "-left-[37px] -top-[7px]" }}
            >
              <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-tight text-center">
                Research Room
              </span>
            </PolygonButton>
          </div>

          {/* Desktop: full size */}
          <div className="hidden lg:block">
            <PolygonButton
              width="106px"
              height="107px"
              bgColor="#86C9C9"
              radius={14}
              clipPath={`polygon(0% 30%, 92% 0%, 100% 87%, 3% calc(100% - 15px))`}
              decorationImg={{ src: images.arrowImg, width: 48, height: 48 }}
              decorationPosition={{ className: "-left-[49px] -top-[9px]" }}
            >
              <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
                Research Room
              </span>
            </PolygonButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmplifierFirstDescription;
