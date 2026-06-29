function FieldColumn({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <h4 className="text-[25px] text-[#0F4F58] font-bold font-[RocaTwo] w-[260px]">
        {label}
      </h4>

      <div className="w-[420px] h-[64px] bg-[#ffffff] rounded-full px-8 flex items-center text-[#567F55] text-[22px] font-[Roboto]">
        {value}
      </div>
    </div>
  );
}
export default FieldColumn;
