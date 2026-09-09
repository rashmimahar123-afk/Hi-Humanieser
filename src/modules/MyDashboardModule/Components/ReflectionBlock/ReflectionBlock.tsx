import { MTJ_TEAM_RITUAL_DATA } from "@/src/modules/MyTeamJourneyModule/Types/ResponseTypes";

type REFLECTION_BLOCK_PROPS = {
  ritual: MTJ_TEAM_RITUAL_DATA;
};

function ReflectionBlock(props: REFLECTION_BLOCK_PROPS) {
  const { ritual } = props;
  const myReflections = ritual.reflections?.my_reflections || [];

  const latestReflection = myReflections[0];

  return (
    <div className="mt-10 bg-[#FBE4BC] rounded-[24px] p-8">
      {/* Header */}
      <div className="grid grid-cols-2 mb-6">
        <p className="text-[#567F55] font-[Aptos] font-bold text-[16px] text-center font-bold">
          TEAM RITUAL
        </p>
        <p className="text-[#567F55] font-[Aptos] font-bold text-[16px] text-center font-bold">
          REFLECTIONS
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-6">
        {/* Team Ritual */}
        <div className="bg-white rounded-[20px] p-6">
          <p className="text-[#567F55] font-bold text-[20px] mb-3">
            {ritual.title}
          </p>
          <p className="text-[#567F55] text-[16px] leading-relaxed">
            {ritual.short_description}
          </p>
        </div>

        {/* Reflection */}
        <div className="bg-white rounded-[20px] p-6">
          {latestReflection ? (
            <p
              className="text-[#0F4F58] text-[14px] whitespace-pre-wrap break-words"
              style={{
                lineHeight: "28px",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 27px, #000 28px)",
                backgroundSize: "100% 28px",
                paddingTop: "2px",
              }}
            >
              {latestReflection.reflection}
            </p>
          ) : (
            Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="border-b border-dotted border-[#000000] py-2"
              />
            ))
          )}

          {latestReflection?.shared_anonymously && (
            <p className="text-end text-[#0F4F58] text-[14px] mt-4 font-bold">
              (Shared in reflection Wall)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default ReflectionBlock;
