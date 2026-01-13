import { useSearchParams } from "next/navigation";

function StartPracticePerspective() {
  const searchParams = useSearchParams();
  const pathname = searchParams.get("step");
  return (
    <div className="animate-slideInRight">
      {/* Heading */}
      <h1 className="text-[30px] text-[#567F55] font-[RocaTwo-Bold] font-[700]">
        Welcome To Practice Perspective.
      </h1>

      {/* Description Box */}
      <div className="mt-10 bg-[#F8E1B8] rounded-xl px-12 py-8 text-center">
        <p className="text-[#567F55] text-[18px] leading-relaxed font-[Roboto]">
          Listen to Understand is about hearing with curiosity rather than
          judgement. It strengthens your ability to hold another person’s
          perspective, notice what sits beneath their words, and keep
          assumptions out of the way. When understanding is present,
          conversations deepen, trust grows and solutions become more grounded
          and shared
        </p>
      </div>

      {/* Milestones */}
      <div className="mt-14 ml-14">
        <p className="text-[#567F55] font-[700] text-[18px] mb-4 font-[roboto] ml-[30px]">
          You’ll move through 3 milestones:
        </p>

        <ul className="space-y-3 text-[#567F55] text-[17px]">
          <li className="flex items-start gap-3 ">
            <span
              className={`w-5 h-5  rounded flex items-center justify-center text-black text-xs mt-1 
    ${pathname === "1" ? "bg-[#E6A757]" : "bg-[#4BA6A6]"}`}
            >
              ✓
            </span>
            <span className="font-[400] font-[Roboto] text-[18px]">
              Understand & Commit – Get clear on what this looks like for you,
              and why it matters.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span
              className={`w-5 h-5  rounded flex items-center justify-center text-black text-xs mt-1 ${
                pathname === "2" ? "bg-[#E6A757]" : "bg-[#4BA6A6]"
              }`}
            >
              ✓
            </span>
            <span className="font-[400] font-[Roboto] text-[18px]">
              Practice & Embed – Test small actions in real situations.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span
              className={`w-5 h-5 rounded flex items-center justify-center text-black text-xs mt-1     ${
                pathname === "3" ? "bg-[#E6A757]" : "bg-[#4BA6A6]"
              }`}
            >
              ✓
            </span>
            <span className="font-[400] font-[Roboto] text-[18px]">
              Lock In & Move Forward – Capture what works so it sticks.
            </span>
          </li>
        </ul>
        <p className="mt-10 text-[#0F4F58] text-[20px] font-[700] font-[Roboto] ml-[30px]">
          You decide the pace: pause, return or move forward whenever you’re
          ready.
        </p>
      </div>
    </div>
  );
}
export default StartPracticePerspective;
