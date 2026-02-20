import TeamProgressCards from "../TeamProgressCards/TeamProgressCards";

function ReflectionBlock() {
  return (
    <div className="mt-10 bg-[#FBE4BC] rounded-[24px] p-8">
      {/* Header */}
      <div className="grid grid-cols-[340px_1fr] mb-6">
        <p className="text-[#567F55] font-[Aptos] font-bold text-[16px] ml-[130px] font-bold">
          TEAM RITUAL
        </p>
        <p className="text-[#567F55] font-[Aptos] font-bold text-[16px] text-center font-bold">
          REFLECTIONS
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-[380px_390px_390px] gap-6">
        {/* Team Ritual */}
        <div className="bg-white rounded-[20px] p-6">
          <p className="text-[#567F55] font-bold text-[20px] mb-3">
            Ask yourself: “What else could be true?”
          </p>
          <p className="text-[#567F55] text-[16px] leading-relaxed">
            Next time you feel sure about what’s going on, take a breath and
            imagine 2–3 other possibilities. You might uncover something that
            shifts the conversation – and the outcome.
          </p>
        </div>

        {/* Reflection 1 */}
        <div className="bg-white rounded-[20px] p-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="border-b border-dotted border-[#567F55] py-2"
            />
          ))}
          <p className="text-end text-[#0F4F58] text-[14px] mt-4 font-bold">
            (Shared in reflection Wall)
          </p>
        </div>

        {/* Reflection 2 */}
        <div className="bg-white rounded-[20px] p-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="border-b border-dotted border-[#567F55] py-2"
            />
          ))}
          <p className="text-end text-[#0F4F58] text-[14px] font-bold mt-4">
            (Shared in reflection Wall)
          </p>
        </div>
      </div>
    </div>
  );
}
export default ReflectionBlock;
