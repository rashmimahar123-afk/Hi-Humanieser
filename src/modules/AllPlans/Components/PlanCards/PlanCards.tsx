function PlanCard({ plan }: any) {
  return (
    <div className="bg-[#174F52] text-white rounded-[20px] px-6 py-7 w-[230px] min-h-[420px] flex flex-col justify-between">
      <div>
        <h3 className="text-[19px] font-bold mb-2 font-[RocaTwo]">
          {plan.title}
        </h3>

        <p className="text-[16px] text-[#9ED0D0] font-medium font-[Roboto]">
          {plan.price}
        </p>

        <p className="text-[16px] mt-1 mb-4 whitespace-pre-line font-[Roboto]">
          {plan.subtitle}
        </p>

        <p className="text-[16px] font-semibold mb-2 font-[Roboto]">
          Includes:
        </p>

        <ul className="text-[16px] space-y-1 mb-4 font-[Roboto]">
          {plan.features.map((f: string, i: number) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>

        <p className="text-[13px] text-[#F4A259] font-semibold">
          {plan.footer}
        </p>
      </div>

      <button className="mt-6 bg-[#4BA6A6] font-[Aptos] text-white text-[12px] px-4 py-2 rounded-full flex items-center justify-between max-w-[100px]">
        Talk to us to activate →
      </button>
    </div>
  );
}
export default PlanCard;
