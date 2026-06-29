import ArrowSquare from "@/src/components/ArrowSquare/ArrowSquare";
import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import images from "@/src/assets/images";
import Image from "next/image";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";

function PressureOne() {
  // pressureData.ts

  const pressureData = [
    {
      id: 1,
      title: "Everything Feels Urgent",
      highlight:
        "Your days are filled with escalations, last-minute decisions, and “quick questions” that are not quick. Priorities keep shifting, there’s little uninterrupted time to think, and work feels reactive rather than led.",

      underneath: [
        "This pressure often shows up when decision boundaries are not clear, priorities keep shifting, or uncertainty flows upward instead of being resolved where the work happens.",
        "Over time, urgency becomes the default operating mode — not because everything is truly critical, but because the system lacks the clarity needed to resolve issues at the right level.",
      ],

      leadershipResponse:
        "To keep things moving, leaders often step in more, stay constantly available, and absorb pressure personally. It works in the short term — but can quietly increase dependency and reinforce urgency over time.",

      successMessage:
        "This is a common leadership pressure — and it’s workable.",

      structuralIntro:
        "Small structural shifts can reduce urgency faster than bigger efforts. A few clear boundaries often create more breathing room than working longer hours.",

      moves: [
        {
          title: "Define One Escalation Rule",
          description:
            "Clarify what truly needs same-day escalation — and what can wait 24 hours. Even a simple shared rule reduces constant interruptions and decision fatigue.",
          why: "Urgency thrives in ambiguity. One rule creates instant filtering.",
        },
        {
          title: "Protect One Weekly Thinking Block",
          description:
            "Block one recurring hour with no meetings, approvals, or quick questions. Use it to review priorities and anticipate issues before they escalate.",
          why: "You’re creating proactive space instead of extending reactive time.",
        },
        {
          title: "Close Meetings With a Priority Check",
          description:
            "End key meetings by naming the top 1–3 priorities until the next check-in. This reduces mid-week re-prioritisation and urgent follow-ups.",
          why: "Urgency often comes from shifting direction, not workload.",
        },
      ],

      SuccessMessage:
        "This is a common leadership pressure — and it’s workable.",

      successPosition: {
        left: "323px",
        bottom: "0px",
        rightImgRight: "319px",
        rightImgBottom: "0px",
        maxWidth: "1100px",
      },
    },
    {
      id: 2,
      title: "Teams are Busy, but not Aligned",
      highlight:
        "Your team is busy and capable, yet progress feels uneven and slower than expected. Different parts of the work move in parallel without fully connecting, creating rework and a sense that effort is not adding up.",

      underneath: [
        "This pressure often shows up when decision boundaries are not clear, priorities keep shifting, or uncertainty flows upward instead of being resolved where the work happens.",
        "Over time, urgency becomes the default operating mode, not because everything is truly critical, but because the system lacks the clarity needed to resolve issues at the right level.",
      ],

      leadershipResponse:
        "To keep things moving, leaders often step in more, stay constantly available, and absorb pressure personally. It works in the short term — but can quietly increase dependency and reinforce urgency over time.",

      successMessage:
        "This is a common leadership pressure — and it’s workable.",

      structuralIntro:
        "Small structural shifts can reduce urgency faster than bigger efforts. A few clear boundaries often create more breathing room than working longer hours.",

      moves: [
        {
          title: "Define One Escalation Rule",
          description:
            "Clarify what truly needs same-day escalation and what can wait 24 hours. Even a simple shared rule reduces constant interruptions and decision fatigue.",
          why: "Urgency thrives in ambiguity. One rule creates instant filtering.",
        },
        {
          title: "Protect One Weekly Thinking Block",
          description:
            "Block one recurring hour with no meetings, approvals, or quick questions. Use it to review priorities and anticipate issues before they escalate.",
          why: "You’re creating proactive space instead of extending reactive time.",
        },
        {
          title: "Close Meetings With a Priority Check",
          description:
            "End key meetings by naming the top 1-3 priorities until the next check-in. This reduces mid-week re-prioritisation and urgent follow-ups.",
          why: "Urgency often comes from shifting direction, not workload.",
        },
      ],
      SuccessMessage:
        "Hard-working teams can still struggle when shared direction is not clear.",
      successPosition: {
        left: "392px",
        bottom: "30px",
        rightImgRight: "385px",
        rightImgBottom: "22px",
        maxWidth: "470px",
      },
    },
    {
      id: 3,
      title: "Problems Surface Too Late",
      highlight:
        "On the surface, things seem fine — updates sound positive and meetings stay polite. Issues tend to surface only when they’re already costly: deadlines slip, tensions rise, or clients escalate. There’s often a sense that something was off, but it wasn’t visible early enough to address lightly.",

      underneath: [
        "This pressure often shows up when decision boundaries are not clear, priorities keep shifting, or uncertainty flows upward instead of being resolved where the work happens.",
        "Over time, urgency becomes the default operating mode, not because everything is truly critical, but because the system lacks the clarity needed to resolve issues at the right level.",
      ],

      leadershipResponse:
        "To keep things moving, leaders often step in more, stay constantly available, and absorb pressure personally. It works in the short term — but can quietly increase dependency and reinforce urgency over time.",

      successMessage:
        "This is a common leadership pressure — and it’s workable.",

      structuralIntro:
        "Small structural shifts can reduce urgency faster than bigger efforts. A few clear boundaries often create more breathing room than working longer hours.",

      moves: [
        {
          title: "Define One Escalation Rule",
          description:
            "Clarify what truly needs same-day escalation and what can wait 24 hours. Even a simple shared rule reduces constant interruptions and decision fatigue.",
          why: "Urgency thrives in ambiguity. One rule creates instant filtering.",
        },
        {
          title: "Protect One Weekly Thinking Block",
          description:
            "Block one recurring hour with no meetings, approvals, or quick questions. Use it to review priorities and anticipate issues before they escalate.",
          why: "You’re creating proactive space instead of extending reactive time.",
        },
        {
          title: "Close Meetings With a Priority Check",
          description:
            "End key meetings by naming the top 1–3 priorities until the next check-in. This reduces mid-week re-prioritisation and urgent follow-ups.",
          why: "Urgency often comes from shifting direction, not workload.",
        },
      ],
      SuccessMessage:
        "This is a common leadership pressure — and it’s workable.",
      successPosition: {
        left: "323px",
        bottom: "0px",
        rightImgRight: "319px",
        rightImgBottom: "0px",
        maxWidth: "1100px",
      },
    },
    {
      id: 4,
      title: "Too Much Depends on Me",
      highlight:
        "Decisions slow down unless you’re involved. People look to you for reassurance before acting, and progress stalls when you’re unavailable. Even capable leaders hesitate without your input, and the organisation feels more fragile than it should.",

      underneath: [
        "This pressure often shows up when decision boundaries are not clear, priorities keep shifting, or uncertainty flows upward instead of being resolved where the work happens.",
        "Over time, urgency becomes the default operating mode, not because everything is truly critical, but because the system lacks the clarity needed to resolve issues at the right level.",
      ],

      leadershipResponse:
        "To keep things moving, leaders often step in more, stay constantly available, and absorb pressure personally. It works in the short term — but can quietly increase dependency and reinforce urgency over time.",

      successMessage:
        "This is a common leadership pressure — and it’s workable.",

      structuralIntro:
        "Small structural shifts can reduce urgency faster than bigger efforts. A few clear boundaries often create more breathing room than working longer hours.",

      moves: [
        {
          title: "Define One Escalation Rule",
          description:
            "Clarify what truly needs same-day escalation and what can wait 24 hours. Even a simple shared rule reduces constant interruptions and decision fatigue.",
          why: "Urgency thrives in ambiguity. One rule creates instant filtering.",
        },
        {
          title: "Protect One Weekly Thinking Block",
          description:
            "Block one recurring hour with no meetings, approvals, or quick questions. Use it to review priorities and anticipate issues before they escalate.",
          why: "You’re creating proactive space instead of extending reactive time.",
        },
        {
          title: "Close Meetings With a Priority Check",
          description:
            "End key meetings by naming the top 1–3 priorities until the next check-in. This reduces mid-week re-prioritisation and urgent follow-ups.",
          why: "Urgency often comes from shifting direction, not workload.",
        },
      ],
      SuccessMessage:
        "Many leaders experience this as organisations grow and demands increase.",
      successPosition: {
        left: "358px",
        bottom: "30px",
        rightImgRight: "348px",
        rightImgBottom: "23px",
        maxWidth: "500px",
      },
    },
    {
      id: 5,
      title: "Something Else Is Making Work Heavier",
      highlight:
        "Work feels heavier than it should, even when nothing is obviously broken. Progress takes more effort, energy drains faster, and small issues feel harder to absorb. There’s a sense of drag without a single clear cause.",

      underneath: [
        "This pressure often shows up when decision boundaries are not clear, priorities keep shifting, or uncertainty flows upward instead of being resolved where the work happens.",
        "Over time, urgency becomes the default operating mode, not because everything is truly critical, but because the system lacks the clarity needed to resolve issues at the right level.",
      ],

      leadershipResponse:
        "To keep things moving, leaders often step in more, stay constantly available, and absorb pressure personally. It works in the short term — but can quietly increase dependency and reinforce urgency over time.",

      successMessage:
        "This is a common leadership pressure — and it’s workable.",

      structuralIntro:
        "Small structural shifts can reduce urgency faster than bigger efforts. A few clear boundaries often create more breathing room than working longer hours.",

      moves: [
        {
          title: "Define One Escalation Rule",
          description:
            "Clarify what truly needs same-day escalation and what can wait 24 hours. Even a simple shared rule reduces constant interruptions and decision fatigue.",
          why: "Urgency thrives in ambiguity. One rule creates instant filtering.",
        },
        {
          title: "Protect One Weekly Thinking Block",
          description:
            "Block one recurring hour with no meetings, approvals, or quick questions. Use it to review priorities and anticipate issues before they escalate.",
          why: "You’re creating proactive space instead of extending reactive time.",
        },
        {
          title: "Close Meetings With a Priority Check",
          description:
            "End key meetings by naming the top 1–3 priorities until the next check-in. This reduces mid-week re-prioritisation and urgent follow-ups.",
          why: "Urgency often comes from shifting direction, not workload.",
        },
      ],
      SuccessMessage:
        "Not all pressures are obvious or easy to name — that doesn’t make it less real or less workable.",
      successPosition: {
        left: "316px",
        bottom: "32px",
        rightImgRight: "304px",
        rightImgBottom: "25px",
        maxWidth: "570px",
      },
    },
  ];

  const router = useRouter();
  return (
    <>
      {pressureData.map((item) => (
        <div key={item.id} className="mt-[100px] ml-20">
          {/* Title */}
          <h1 className="text-[#0F4F58] text-[32px] leading-[40px] font-[RocaTwo] font-bold">
            Pressure Point {"-"} {""}
            {item.title}
          </h1>

          {/* Highlight Box */}
          <div className="mt-10 bg-[#f8e1b8] rounded-[22px] p-8 max-w-[1100px] text-[#0F4F58] text-[24px] leading-[40px] font-[Roboto]">
            {item.highlight}
          </div>

          {/* Underneath */}
          <div className="mt-10 flex items-start gap-4">
            <div className="mt-[8px]">
              <ArrowSquare width="40" height="24" />
            </div>
            <div>
              <h3 className="text-[#0F4F58] text-[28px] font-[RocaTwo] font-bold">
                What’s usually underneath
              </h3>

              {item.underneath.map((para, i) => (
                <p
                  key={i}
                  className="mt-4 text-[#0F4F58] text-[20px] leading-[36px] font-[Roboto]"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Leadership Response */}
          <div className="mt-8 flex items-start gap-4">
            <ArrowSquare width="40" height="24" />
            <div>
              <h3 className="text-[#0F4F58] text-[28px] font-[RocaTwo] font-bold">
                A common leadership response
              </h3>

              <p className="text-[#0F4F58] text-[20px] leading-[36px] font-[Roboto]">
                {item.leadershipResponse}
              </p>
            </div>
          </div>

          {/* Success Message */}
          <div className="mt-20 relative">
            <SuccessMessage
              text={item.SuccessMessage}
              fontSize="text-[22px]"
              leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
              rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
              fontColor="#0F4F58"
              left={item.successPosition.left}
              bottom={item.successPosition.bottom}
              rightImgRight={item.successPosition.rightImgRight}
              rightImgBottom={item.successPosition.rightImgBottom}
              rotate="-35deg"
              maxWidth={item.successPosition.maxWidth}
            />
          </div>

          {/* Structural Moves */}
          <div className="mt-20 flex items-start gap-4">
            <ArrowSquare width="40" height="24" />

            <div>
              <h2 className="text-[#0F4F58] text-[28px] font-[RocaTwo] font-bold">
                Small Structural Moves That Help
              </h2>

              <p className="text-[#0F4F58] text-[20px] leading-[36px] font-[Roboto]">
                {item.structuralIntro}
              </p>

              {item.moves.map((move, index) => (
                <div key={index} className="mt-6">
                  <h3 className="text-[#0F4F58] text-[24px] font-semibold font-[Roboto]">
                    {move.title}
                  </h3>

                  <p className="mt-2 text-[#0F4F58] text-[21px] leading-[34px] font-[Roboto]">
                    {move.description}
                  </p>

                  <p className="mt-2 text-[#0F4F58] text-[21px] leading-[34px] font-[Roboto]">
                    Why this works: {move.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-10">
            {/* Bottom Buttons */}
            <div className="flex flex-col gap-4 items-center">
              <CommonButtons
                label={`Return to Champion Hub`}
                bgColor="#fbe1de"
                onClick={() => router.push("/champion-hub")}
              />

              <CommonButtons
                label="Go to Homepage"
                bgColor="#fbe1de"
                onClick={() => router.push("/home")}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default PressureOne;
