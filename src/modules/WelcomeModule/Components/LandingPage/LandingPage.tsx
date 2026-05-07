import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./LandingPage.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import FAQAccordion from "../FaqAccordian/FaqAccordian";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";

function LandingPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#f5f5f0] px-4 py-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="space-y-8 ">
            {/* Logo Section - Top */}
            <Link href="https://humanisingourworkplaces.com" target="_blank">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Image
                    src={images.humaniserLogo}
                    alt="Humanising Our Workplaces Logo"
                    width={80}
                    className="object-contain"
                    priority
                  />
                  <div
                    style={{
                      fontSize: "28px",
                      fontFamily: "Aptos, sans-serif",
                      fontWeight: "bold",
                      lineHeight: "1",
                    }}
                  >
                    <span className="block">Humanising our</span>
                    <span className="block -mt-[2px]">Workplaces</span>
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "Aptos, sans-serif",
                    fontWeight: 400,
                    marginLeft: "18px",
                  }}
                >
                  {/* People & Performance Thriving Together */}
                  Human Habits. Clear Decision. Reliable Execution.
                </div>
              </div>
            </Link>
            {/* Main Heading */}
            <h1 className={`text-[#0F4F58] font-bold ${styles.mainHeading}`}>
              Hi Humaniser!
              <span className={`align-super ${styles.headSpan}`}>™</span>
            </h1>

            {/* Description */}
            <div className={`space-y-4 ${styles.description}`}>
              <p className={`text-base text-[#0F4F58] ${styles.descParagraph}`}>
                A human-centred platform aligning people, teams and
                <br />
                performance — together.
              </p>
              <p className={`text-base text-[#0F4F58] ${styles.descParagraph}`}>
                More than a platform, it’s a mindset shift.
                <br />
                <span
                  className={`text-base font-bold text-[#0F4F58] ${styles.descParagraph}`}
                >
                  {" "}
                  Because performance doesn’t grow despite people,
                  <br />
                  it grows because of them.
                </span>
              </p>
              <p className={`text-base text-[#0F4F58] ${styles.descParagraph}`}>
                Explore your pathway, connect with your team, and
                <br />
                shape a culture where humans thrive and results
                <br />
                follow.
              </p>
            </div>

            {/* CTA Button */}
          </div>

          {/* Right Section - Card */}
          <div className="relative px-4 lg:px-0">
            <div className="relative">
              <div className={`inline-flex items-center mt-6 ${styles.goBtn}`}>
                <Image src={images.arrowImg} alt="Arrow Right" />

                {/* Text with background */}
                <div
                  className={`bg-white rounded-[20px] px-4 py-2 cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center ${styles.goBtnText}`}
                  onClick={() => router.push("/login")}
                >
                  <span
                    className={`text-black whitespace-nowrap font-bold ${styles.goBtnSpan}`}
                  >
                    Let's go
                  </span>
                </div>
              </div>
              {/* Image with rounded background */}

              <Image
                src={images.people}
                alt="Team collaborating"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Footer Info Box */}
          </div>
        </div>
      </div>
      <div className={`relative flex justify-center ${styles.infoBox}`}>
        <Image src={images.landRectangle} alt="Land Rectangle" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex left-[12%] top-[18%]">
          <p className={`text-center font-bold ${styles.infoBoxText}`}>
            Curious? Explore how to join or bring Hi Humaniser!™ to your
            organisation. Visit{" "}
            <Link
              href="https://humanisingourworkplaces.com"
              target="_blank"
              className="underline hover:text-[#0F4F58] transition-colors"
            >
              HumanisingOurWorkplaces.com
            </Link>{" "}
            or check the{" "}
            <Link
              href="/faq"
              className="underline hover:text-[#0F4F58] transition-colors"
            >
              FAQ
            </Link>
          </p>
        </div>
      </div>
      <div className=" mt-16 max-w-7xl mx-auto">
        <div className="w-full flex justify-end text-center">
          {" "}
          <div className="flex flex-col items-end">
            {" "}
            <div className="text-[#0F4F58] text-[38px] font-[RocaTwo]">
              Frequently Asked Questions
            </div>
            <div className=" text-[#0f4f58] text-[20px] font-[Roboto] flex items-end ">
              Find answers to common questions below, read the full FAQs{" "}
              <Link
                href="/faq"
                className="ml-2 mr-2 text-[#4ba6a6] transition-colors"
              >
                here
              </Link>
              or pop us an email at
            </div>
            <div className="font-[Roboto] text-[20px] text-[#0f4f58] text-center">
              {" "}
              <a
                href="mailto:connect@humanisingourworkplaces.com"
                className="text-[#0f4f58] hover:underline"
              >
                connect@humanisingourworkplaces.com
              </a>{" "}
            </div>
          </div>
        </div>
        <div className="mt-12 w-full max-w-[1000px] mx-auto">
          {" "}
          <div className="flex flex-col justify-center gap-4">
            <FAQAccordion
              title="What is Hi Humaniser!™?"
              paragraph={`Hi Humaniser!™ is a digital platform… but not in the way you might expect.

It’s not another place to log in and “do things”. It’s there to improve how work actually happens, in meetings, in conversations, in decisions that don’t always go as planned.

At its core, it helps organisations connect two things that are often disconnected:
what leaders are dealing with… and what teams experience day to day.

From there, it turns small behaviours, like how we communicate, how we listen, how we show up, into practical habits that make work feel clearer, smoother… and yes, more effective.`}
            />
            <FAQAccordion
              title="Who is Hi Humaniser!™ for?"
              paragraph={`It’s for organisations where work isn’t just tasks… it’s conversations, decisions, constant interaction.
 
The kind of places where people are thinking, aligning, re-aligning… and sometimes talking past each other without meaning to.
 
So yes, individuals use it. Teams use it. Leaders use it.
 
But really… it’s for organisations where performance depends on how well people work together, not just how hard they work.
 
If everything in your world is clear, simple and predictable… this is probably not for you.
If things get messy, fast, human… then it probably is.`}
            />
            <FAQAccordion
              title="Is this just another platform or initiative I don’t have time for?"
              paragraph={`Fair question. Most people don’t.
 
This wasn’t built for people who have spare time. It was built for people already in the middle of it… the meetings, the decisions, the “can we just align on this?” moments.
 
So no, it doesn’t sit on top of your work. It slips into it.
 
You try things in real conversations. In meetings you were already going to have. With the same people.
 
And if it ever feels like “one more thing”… then it’s not working the way it should.
The point is the opposite: less friction, fewer loops, clearer decisions.
 
Not more work. Better work.`}
            />
            <FAQAccordion
              title="What problem is Hi Humaniser!™ trying to solve?"
              paragraph={`It’s not a lack of effort. Most teams are already working hard.
 
The problem is what sits underneath that…
things not quite landing, decisions going in circles, people doing their best but not always in the same direction.
 
Leaders feel the pressure from above.
Teams feel the confusion below.
And those two don’t always meet.
 
That’s where the friction comes from.
 
Hi Humaniser!™ is there to close that gap… so work becomes clearer, decisions move faster, and people are not constantly having to work around the system to get things done.`}
            />
            <FAQAccordion
              title="How does Hi Humaniser!™ work?"
              paragraph={`It doesn’t take you out of work to “develop”.
It works with what’s already there.
 
You pick a starting point… something that feels relevant right now.
 
Then you try small shifts.
In meetings. In conversations. In decisions you were already going to make anyway.
 
At the same time, your team is working on a shared focus… trying simple things together, noticing what changes.
 
Nothing heavy. Nothing theoretical.
Just small adjustments that, over time, make work feel a lot less complicated than it used to.`}
            />
            <FAQAccordion
              title="How much time does it take each week?"
              paragraph={`Very little. And that’s kind of the point.
 
This is not something you block time for. It shows up in the work you’re already doing. A small shift in how you run a meeting. A different way of asking a question. Catching something earlier instead of fixing it later.
 
That’s it.
And over time… those small things tend to give you time back.`}
            />
            <FAQAccordion
              title="How do you measure impact?"
              paragraph={`Not with a single score or a dashboard full of numbers.
 
You see it in how things start to shift.
Conversations get clearer. Decisions don’t bounce around as much. Teams spend less time untangling things.
 
There are signals in the platform, of course… patterns over time, how teams are engaging, where focus is building.
 
But the real impact shows up in the day-to-day.
 
When work feels lighter.
When things move forward without as much friction.
 
That’s when you know it’s working.`}
            />
            <FAQAccordion
              title="How do we get started with Hi Humaniser!™?"
              paragraph={`You don’t need a big rollout or a perfect plan to start.
 
Most organisations begin small… sometimes it’s just one person exploring it first, getting a feel for how it works in real meetings, real conversations, real work.
 
You can try it out free for 10 days, see what shifts, and decide from there what makes sense for your team or organisation.
 
If it resonates, just reach out. We’ll set you up and walk you through the next steps, at your pace.`}
            />
            <FAQAccordion
              title="What if my organisation is not ready yet?"
              paragraph={`That’s okay. Not every organisation is ready at the same time.
 
You don’t need to push or convince anyone. You can explore Hi Humaniser!™ at your own pace, and introduce it when the timing feels right.
 
This works best when organisations are genuinely open to improving how work happens.
 
And when that moment comes, it will still be here.`}
            />
          </div>
        </div>
        <div className="mt-16 ">
          <div className=" text-[#0f4f58] text-[20px] font-[Roboto] flex items-end ">
            Want to go deeper? Explore the full FAQs{" "}
            <Link
              href="/faq"
              className="ml-2 mr-2 text-[#4ba6a6] transition-colors"
            >
              here
            </Link>
            .
          </div>
          <div className="font-[Roboto] text-[20px] text-[#0f4f58] flex mt-8">
            Still not sure, or just want to talk it through?
          </div>
          <div className="font-[Roboto] text-[20px] text-[#0f4f58] flex ">
            Drop us a note at
            <a
              href="mailto:connect@humanisingourworkplaces.com"
              className="text-[#0f4f58] hover:underline ml-2 "
            >
              connect@humanisingourworkplaces.com
            </a>
          </div>
        </div>
        <div className="mt-20 relative">
          <SuccessMessage
            text="Small shifts. Real work. Better outcomes."
            fontSize="text-[22px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            fontColor="#0F4F58"
            bottom="3px"
            rightImgBottom="3px"
            rotate="-35deg"
          />
        </div>
        <div className="relative w-full h-full py-20">
          <div className="absolute right-0">
            {/* Image */}
            <Image src={images.landFooter} alt="Land Footer" />
            <div className="absolute top-8 w-full px-6  text-[#0F4F58] font-[Roboto]">
              <p className="text-[15px] ">
                © 2026 Humanising Our Workplaces Ltd. All rights reserved.
              </p>

              <p className="text-[15px]">
                Hi Humaniser!™ is a product of Humanising Our Workplaces Ltd.
              </p>
            </div>
          </div>
          {/* Overlay Content */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
