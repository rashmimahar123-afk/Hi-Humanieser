"use client";

import Image from "next/image";
import images from "@/src/assets/images";

export default function Faq() {
  return (
    <div className="relative bg-[#4F9E9B] min-h-screen overflow-hidden">
      {/* Background Shapes */}
      <Image
        src={images.faqPoly}
        alt="faq-poly"
        width={500}
        height={400}
        className="absolute top-0 right-0 z-0"
      />

      <Image
        src={images.faqQs}
        alt="faq-qs"
        width={700}
        height={400}
        className="absolute top-[170px] left-0 z-0"
      />

      <div className="relative z-10 px-4 py-10 max-w-[1200px] mx-auto">
        {/* Logo + Heading Section */}
        <div className="flex items-start gap-4">
          <Image
            src={images.humaniserLogo}
            alt="logo"
            width={90}
            height={90}
            priority
          />

          <div>
            <h2 className="text-[30px] font-bold text-[#0F4F58] leading-tight">
              <span className="block">HUMANISING OUR</span>
              <span className="block">WORKPLACES</span>
            </h2>
            <p className="text-[#0F4F58] mt-2 text-[16px]">
              People & Performance Thriving Together
            </p>
          </div>
        </div>

        {/* Main Title */}
        <div className="mt-[118px] text-center">
          <h1 className="text-[52px] font-[RocaTwo] text-[#0F4F58] tracking-wide">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>

        {/* FAQ Section */}
        <div className="mt-30">
          <FAQCard
            title="What is Hi Humaniser™ ?"
            content={`Hi Humaniser™ (HH) is a digital platform that helps people and teams work better — by making work feel more human and perform better.

It turns everyday behaviours like communication, trust and clarity into practical habits that improve collaboration and delivery — within and across teams.`}
          />

          <div className="mt-10 text-[#0F4F58] text-[18px] leading-relaxed max-w-[1000px] ml-50 font-bold">
            <p className="mb-6">
              Hi Humaniser™ is a practical, people-centred platform designed for
              modern, knowledge-based workplaces — the kind where work happens
              through conversations, meetings, messages and decisions.
            </p>

            <p className="mb-4">
              Instead of training courses or one-off workshops, HH! works with
              real work. It offers short, guided Pathways that help individuals
              and teams:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Communicate more clearly</li>
              <li>Build trust and psychological safety</li>
              <li>Reduce friction and misunderstandings</li>
              <li>Improve collaboration and performance</li>
            </ul>

            <p className="mt-6">
              HH! supports better ways of working within teams and across teams,
              helping organisations strengthen collaboration beyond individual
              team boundaries.
            </p>

            <p className="mt-6">
              All without adding more pressure, jargon or “another thing to do”.
            </p>

            <p className="mt-4">
              HH! is built on research from psychology, neuroscience and
              organisational science — but it’s designed to feel simple, human
              and usable in everyday work.
            </p>

            <p className="mt-6 ">In short:</p>

            <p className="mt-2 ">
              HH! helps people work better together — and feel better while
              doing it.
            </p>
          </div>
        </div>

        <div className="mt-30">
          <FAQCard
            title="Why does Hi Humaniser!™ exist?"
            content={`Hi Humaniser™ (HH) is a digital platform that helps people and teams work better — by making work feel more human and perform better.

It turns everyday behaviours like communication, trust and clarity into practical habits that improve collaboration and delivery — within and across teams.`}
          />

          <div className="mt-10 text-[#0F4F58] text-[18px] leading-relaxed max-w-[1000px] ml-50 font-bold">
            <p className="mb-6">
              Modern work relies on collaboration, communication and judgement —
              yet most organisations still focus their systems on tasks, outputs
              and delivery alone.
            </p>

            <p className="mb-4">The result?</p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Meetings that feel heavy or unproductive</li>
              <li>Decisions that bounce back and forth</li>
              <li>Teams working hard without clear impact</li>
              <li>
                Wellbeing initiatives that sit outside how work actually happens
              </li>
            </ul>

            <p className="mt-6">Hi Humaniser!™ exists to close that gap.</p>

            <p className="mt-6">
              It helps organisations embed human behaviours — like clarity,
              psychological safety, perspective and care — directly into
              everyday work. Not as “soft skills” or culture slogans, but as
              performance infrastructure.{" "}
            </p>

            <p className="mt-4">
              Because when people feel safe, clear and connected, work flows
              better.
            </p>

            <p className="mt-6 ">
              And when work flows better, performance follows.
            </p>
          </div>
        </div>
        <div className="mt-30">
          <FAQCard
            title="Who is Hi Humaniser!™ for?"
            content={`Hi Humaniser!™ is for people who do their work through thinking, collaboration and conversations — not just tasks. It’s designed for knowledge-based organisations where performance depends on clarity, trust and how well people work together.`}
          />

          <div className="mt-10 text-[#0F4F58] text-[18px] leading-relaxed max-w-[1000px] ml-50 font-bold">
            <p className="mb-6">
              HH! is built for modern, digital workplaces — where work happens
              in meetings, messages, decisions and shared problem-solving. That
              includes organisations in:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Consulting and professional services</li>
              <li>Technology and digital teams</li>
              <li>Finance and advisory services</li>
              <li>Infrastructure and complex projects</li>
            </ul>

            <p className="mt-6">
              In short: people who spend their days collaborating, making
              decisions, navigating ambiguity and working across teams — often
              under pressure.
            </p>

            <p className="mt-6">HH! supports:</p>

            <p className="mt-4">
              HH! is built on research from psychology, neuroscience and
              organisational science — but it’s designed to feel simple, human
              and usable in everyday work.
            </p>

            <p className="mt-6 ">In short:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Individuals who want to work with more clarity and impact</li>
              <li>
                Teams who want better conversations and smoother collaboration
              </li>
              <li>Leaders who care about performance and how work feels</li>
            </ul>
            <p className="mt-2">
              It’s not designed for highly manual, task-only environments.
            </p>
            <p className="mt-2">
              HH! works best where human judgement, communication and
              relationships shape outcomes.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="mt-14 max-w-[1100px] mx-auto">
      <div className="bg-[#134E4A] rounded-[20px] px-10 py-8 shadow-xl">
        <h2 className="text-white text-[28px] font-semibold mb-4">{title}</h2>

        <p className="text-white/90 text-[18px] leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
}
