function MilestoneTwoActionRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  function renderBoldQuotes(text: string) {
    const parts = text.split(/(“[^”]+”)/g);

    return parts.map((part, index) => {
      if (part.startsWith("“") && part.endsWith("”")) {
        return (
          <strong key={index} className="font-bold">
            {part}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      {/* Left Card */}
      <div className="bg-[#F5F0EB] rounded-[16px] p-4">
        <h4 className="text-[#567F55] font-bold text-[20px] mb-3 font-[Roboto]">
          {title}
        </h4>

        <p className="text-[#567F55] text-[18px] whitespace-pre-line leading-relaxed font-[Roboto] font-[400] ml-[10px]">
          {renderBoldQuotes(description)}
        </p>

        <div className="flex items-center justify-end mt-4">
          <span className="text-[14px] font-[Aptos] font-[400] text-[#0F4F58] mr-[16px]">
            Pin this Micro-Action
          </span>
          <input type="checkbox" className="w-4 h-4 accent-[#0F4F58]" />
        </div>
      </div>

      {/* Right Practice Box */}
      {/* Right Practice Box */}
      <div className="bg-[#F5F0EB] rounded-[16px] p-6">
        {/* Row */}
        <div className="flex gap-6 items-center">
          {/* Left text */}
          <div className="w-[35%]">
            <p className="text-[#1F4F55] font-[Aptos] font-[400] text-[18px] leading-snug">
              What did you notice when <br /> you try it?
            </p>
          </div>

          {/* Right dotted lines */}
          <div className="w-[65%] relative">
            <div className="space-y-5">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="border-b border-dotted border-[#000000]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom checkbox */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-[18px] font-[Aptos] font-[400] text-[#0F4F58]">
            Share your insights with your team?
          </p>
          <input type="checkbox" className="w-4 h-4 accent-[#0F4F58]" />
        </div>

        <p className="text-[14px] mt-2 text-[#0F4F58] font-[Aptos] font-[400] italic">
          If yes, your reflection will be shared anonymously on Ritual Walls
        </p>
      </div>
    </div>
  );
}
export default MilestoneTwoActionRow;
