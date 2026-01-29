function TeamProgressCards() {
  return (
    <div className="bg-[#F5F0EB] rounded-[20px] p-6">
      {/* Dotted lines */}
      <div className="space-y-4 mb-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border-b border-dotted border-[#000]" />
        ))}
      </div>

      <p className="text-[14px] text-[#0F4F58] font-[Aptos] text-right font-[400]">
        (Shared in reflection Wall)
      </p>
    </div>
  );
}
export default TeamProgressCards;
