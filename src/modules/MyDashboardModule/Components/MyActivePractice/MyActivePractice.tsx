/* eslint-disable @typescript-eslint/no-explicit-any */
type MY_ACTIVE_PRACTICE_PROPS = {
  practiceList: Array<any>;
};

function MyActivePractice(props: MY_ACTIVE_PRACTICE_PROPS) {
  const { practiceList } = props;
  return (
    <>
      {/* Heading */}
      <h2 className="text-[35px] font-bold text-[#0F4F58] font-[RocaTwo]">
        My Active Practice List
      </h2>

      {/* Sub text */}
      <p className="text-[#567F55] font-[Roboto] font-[400] text-[20px] ml-[40px] mt-[15px] max-w-3xl">
        Here are the micro-actions you’ve chosen to keep practising. They’re
        your everyday habits-in-progress — small moves that build momentum over
        time.
      </p>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-3 gap-8">
        {practiceList.map((item: any) => (
          <div
            key={item.id}
            className="bg-[#F5C882] rounded-2xl px-8 py-10 flex flex-col justify-between min-h-[360px]"
          >
            {/* Content */}
            <div>
              <h3 className="text-[26px] text-[#0F4F58] font-[RocaTwo] font-bold leading-snug">
                {item.title}
              </h3>

              <p className="mt-5 text-[#0F4F58] text-[18px] font-[400] font-[Aptos] leading-6">
                {item.description}
              </p>
            </div>

            {/* Pathway pill */}
            <div className="mt-8">
              <span className="flex justify-center bg-[#F8E1B8] text-[#0F4F58] text-[15px] px-4 py-2 rounded-full font-[RocaTwo] font-bold">
                {item.pathway}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default MyActivePractice;
