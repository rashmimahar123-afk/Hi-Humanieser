import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

function AmplifierFirstDescription() {
  return (
    <div className="relative space-y-5 overflow-hidden">
      {/* Background Illustration */}
      <Image
        src={images.labImg}
        alt=""
        className="absolute left-4 bottom-0 z-0 pointer-events-none"
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 space-y-5 font-[Roboto] text-[20px]">
        {/* Intro */}
        <p>
          Because lasting performance doesn’t come from pushing harder – it
          comes from designing work that people can keep doing, day after day,
          without depletion.
        </p>

        {/* Sections */}
        <div>
          <p className="font-[700] text-[#0F4A4E] mb-1 text-[22px]">
            The Brain (Neuroscience):
          </p>
          <p>
            Our brains are wired to conserve energy and stabilise patterns. When
            work is full of constant change, friction and decisions, cognitive
            energy drains quickly (thank you Friston; Baumeister). Repeated
            behaviours, on the other hand, become automatic over time — which is
            why small, consistent habits are far more sustainable than bursts of
            effort (this gem from Graybiel).{" "}
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
            Wrosch). Letting go is part of sustainability.{" "}
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
            disengage. Sustainable workplaces don’t rely on heroics — they rely
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
            common rhythm, agree the “rules of the game”, and feel some
            ownership over how work happens, the system holds (Shove; Ostrom).
            Short-term pressure might create speed, but it rarely creates
            stability. Sustainable work grows when decisions consider tomorrow
            as much as today — and when people feel they are part of something
            built to last (thank you Barton & Wiseman).
          </p>
        </div>

        {/* Quote */}
        <div className="flex justify-end">
          <p className="text-[#4BA6A6] text-[20px]  max-w-[500px]">
            When work is designed to repeat, reinforce and renew itself —
            through rhythms, habits, shared ownership and sensible pacing —
            performance stops relying on effort and starts relying on structure.
            Sustainability becomes the quiet strength that allows good work to
            continue without burning people out
          </p>
        </div>
        {/* Footer */}
      </div>

      {/* Button stays above bg */}
      <div className="relative z-10 flex justify-end mt-[53px] mb-[7px]">
        <div className="mt-6 flex items-center mr-[78px]">
          <p className="text-[17px] text-[#0F4F58] font-[Roboto] ">
            Curious about the science? Step into the Research Room
          </p>
        </div>
        <PolygonButton
          width="106px"
          height="107px"
          bgColor="#86C9C9"
          radius={14}
          clipPath={`polygon(
        0% 30%,
        92% 0%,
        100% 87%,
        3% calc(100% - 15px)
      )`}
          decorationImg={{
            src: images.arrowImg,
            width: 48,
            height: 48,
          }}
          decorationPosition={{
            className: "-left-[49px] -top-[9px]",
          }}
        >
          <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
            Research Room
          </span>
        </PolygonButton>
      </div>
    </div>
  );
}
export default AmplifierFirstDescription;
