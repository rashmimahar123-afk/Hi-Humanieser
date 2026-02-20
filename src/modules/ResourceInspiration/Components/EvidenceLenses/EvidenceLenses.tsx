/* ===== Lens Component ===== */
function EvidenceLenses({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h4 className="text-[23px] font-[Roboto] font-bold text-[#4BA6A6]">
        {title}
      </h4>
      <p className="leading-[1.3] font-[Roboto] mt-[1px] text-[#0F4F58] text-[23px]">
        {text}
      </p>
    </div>
  );
}
export default EvidenceLenses;
