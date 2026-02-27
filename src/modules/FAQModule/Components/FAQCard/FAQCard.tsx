function FAQCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="mb-10">
      <div className="bg-[#134E4A] text-white rounded-xl px-6 py-4 shadow-lg">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      <div className="bg-transparent text-white/90 px-6 py-6 leading-relaxed whitespace-pre-line">
        {content}
      </div>
    </div>
  );
}
export default FAQCard;
