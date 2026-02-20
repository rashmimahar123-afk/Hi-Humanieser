import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

const EditSection = () => (
  <div className="bg-[#F6E3BB] rounded-3xl p-14 ml-[37px] max-w-[1100px]">
    <h3 className="text-[35px] text-[#567F55] mb-10 font-[RocaTwo]">
      Edit member profile
    </h3>

    {/* Email */}
    <div className="flex items-center ">
      <label className="w-[200px] text-[#567F55] text-[20px]">email</label>
      <input
        type="email"
        placeholder="add email address"
        className="bg-[#F2F2F2] italic px-6 h-[56px] w-[520px] rounded-[16px]"
      />
    </div>
    <div className="flex justify-end mb-10">
      <button className="ml-6 bg-[#c2e2e2] px-8 py-2 rounded-[16px] text-[#567f55]">
        Search →
      </button>
    </div>
    {/* First Name */}
    <div className="flex items-center mb-10">
      <label className="w-[200px] text-[#567F55] text-[20px]">First Name</label>
      <input
        type="text"
        placeholder="add pre stablished profile details AND Editable box"
        className="bg-[#F2F2F2] italic px-6 h-[56px] w-[700px] rounded-[16px]"
      />
    </div>

    {/* Last Name */}
    <div className="flex items-center">
      <label className="w-[200px] text-[#567F55] text-[20px]">Last Name</label>
      <input
        type="text"
        placeholder="add pre stablished profile details AND Editable box"
        className="bg-[#F2F2F2] italic px-6 h-[56px] w-[700px] rounded-[16px]"
      />
    </div>

    <div className="flex justify-end mt-16">
      <PolygonButton
        width="150px"
        height="95px"
        bgColor="#86C9C9"
        radius={14}
        clipPath={`polygon(
                15% 11%,
                81% 0%,
                100% 87%,
                3% calc(100% - 15px)
              )`}
        decorationImg={{
          src: images.arrowImg,
          width: 48,
          height: 48,
        }}
        decorationPosition={{
          className: "-left-[31px] -top-[25px]",
        }}
        childTop={20}
      >
        <span className="text-[#0F4F58] text-[26px] font-[RocaTwo] font-bold leading-tight text-center">
          Confirm
        </span>
      </PolygonButton>
    </div>
  </div>
);
export default EditSection;
