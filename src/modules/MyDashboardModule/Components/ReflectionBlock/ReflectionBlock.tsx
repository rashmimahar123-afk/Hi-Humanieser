import TeamProgressCards from "../TeamProgressCards/TeamProgressCards";

function ReflectionBlock() {
  return (
    <div className="mt-10 bg-[#F6E7C3] rounded-[28px] px-6 py-8">
      {/* 3-column layout */}
      <div className="grid grid-cols-3 gap-10">
        {/* COLUMN 1 */}
        <div>
          {/* 🔹 HEADING */}
          <p className="mb-3 text-center text-[#567F55] text-[16px] font-bold font-[League Spartan] uppercase">
            TEAM RITUAL
          </p>

          {/* 🔹 CARD */}
          <div className="bg-[#F5F0EB] rounded-[21px] p-6">
            <h4 className="text-[#567F55] font-bold text-[20px] font-[Roboto] font-[700] mb-3">
              Ask yourself: “What else could be true?”
              <span className="font-extrabold">“What else could be true?”</span>
            </h4>

            <p className="text-[#567F55] text-[19px] leading-relaxed font-[Roboto] font-[400]">
              Next time you feel sure about what’s going on, take a breath and
              imagine 2–3 other possibilities. You might uncover something that
              shifts the conversation — and the outcome.
            </p>
          </div>
        </div>

        {/* COLUMN 2 */}
        <div>
          <p className="mb-3 text-center text-[#567F55] text-[16px] font-bold font-[League Spartan] uppercase">
            REFLECTION
          </p>
          <TeamProgressCards />
        </div>

        {/* COLUMN 3 */}
        <div>
          <p className="mb-3 text-center text-[#567F55] text-[16px] font-bold font-[League Spartan] uppercase">
            REFLECTION
          </p>
          <TeamProgressCards />
        </div>
      </div>
    </div>
  );
}
export default ReflectionBlock;
