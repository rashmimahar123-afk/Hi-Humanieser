type FieldColumnProps = {
  label: string;
  value?: string;
  values?: string[];
};

function FieldColumn({ label, value, values }: FieldColumnProps) {
  return (
    <div className="flex items-start">
      <h4 className="w-[260px] text-[25px] text-[#0F4F58] font-bold font-[RocaTwo]">
        {label}
      </h4>

      {values ? (
        <div className="flex gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="w-[420px] h-[64px] bg-white rounded-full px-8 flex items-center text-[#567F55] text-[22px] font-[Roboto]"
            >
              {item || "--"}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-[420px] h-[64px] bg-white rounded-full px-8 flex items-center text-[#567F55] text-[22px] font-[Roboto]">
          {value || "--"}
        </div>
      )}
    </div>
  );
}

export default FieldColumn;
