import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useRouter } from "next/navigation";
import { createPatternRows } from "@/src/lib/Helpers";
import ViewAllReflectionCard from "../ViewAllReflectionCard/ViewAllReflectionCard";

function ReflectionWalls() {
  const reflections = [
    {
      text: "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human.",
      time: "3 hours ago",
      likes: "you and 11 others felt this",
    },
    {
      text: "This week I tried explaining why before asking what. The shift was instant — people leaned in instead of shutting down. Clarity really is kindness, especially when everyone’s moving fast",
      time: "2 days ago",
      likes: "you and 7 others felt this",
    },
    {
      text: "Noticed how much clarity helps when things get tense. One honest question can calm a whole meeting.",
      time: "5 days ago",
      likes: "you and 7 others felt this",
    },
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F5F0EB] ">
      <div className="relative">
        <Image
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0"
        />
      </div>
      <div className="px-10 py-8">
        {/* Header */}
        <UserProfileHeader greetingColor="#0F4F58" nameColor="#0F4F58" />

        {/* Center Heading */}
        <div className="text-center mt-10">
          <SuccessMessage
            text="Clarity grows when we pause to notice what worked — and why"
            fontSize="text-[23px]"
            leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
            rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
            left="382px"
            top="175px"
            rightImgRight="373px"
            rightImgTop="173px"
            fontColor="#0F4F58"
          />
          <h2 className="text-[52px] font-[RocaTwo] font-bold  text-[#4BA6A6] mt-[30px]">
            Reflection Walls
          </h2>
        </div>

        {/* Description + Filters */}

        {/* Left text */}
        <div className="mt-10">
          <p className=" text-[22px] text-[#0F4F58] leading-[23px] font-[Roboto] ">
            This wall brings together reflections over time — offering a wider
            view of what’s emerging across the team.
          </p>
        </div>

        {/* Right select */}
        {/* Filter Section */}
        <div className="mt-10 flex items-start justify-end px-[36px]">
          {/* Left: Filter text */}

          {/* Right: Button + Download */}
          <div className="flex items-center gap-10">
            <div className="text-[#0F4F58] font-[Roboto]">
              <p className="text-[18px] font-[500] mb-2">Filter by</p>
              <ul className="list-disc ml-6 text-[18px] leading-[28px]">
                <li>All reflections</li>
                <li>Last 7 days</li>
                <li>Last 30 days</li>
                <li>Custom range</li>
              </ul>
            </div>
            {/* Filter Button */}
            <div className="relative">
              <button
                className="
          bg-[#86C9C9]
          text-[#0F4F58]
          text-[18px]
          font-[Roboto]
          px-10
          h-[44px]
          rounded-full
          flex
          items-center
          gap-3
        "
              >
                Filter By
                <Image
                  src={images.dropdownImg}
                  alt="dropdown"
                  width={20}
                  height={20}
                />
              </button>
            </div>

            {/* Download PDF */}
            <div className="flex justify-end">
              <button className="flex flex-col items-center gap-2">
                <Image src={images.downloadImg} alt="download" />

                <span className="text-sm text-[#3E5F5F]">Download in PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="bg-[#F8E1B8] rounded-[32px] mt-10 px-8 py-4 relative ">
          <div className="mt-[20px] flex flex-col gap-6">
            {reflections.map((item, index) => (
              <div
                key={index}
                className="bg-[#CDE3CC] rounded-[16px] px-[10px] py-[20px] flex flex-col justify-between"
              >
                <p className="text-[18px] leading-[20px] text-[#0F4F58] text-center font-[Roboto] font-[400] mb-[40px]">
                  {item.text}
                </p>

                <div className="flex items-center text-[15px] text-[#0F4F58] font-[Aptos] font-[400]">
                  <span className="flex items-center ">⏱ {item.time}</span>
                  <span className="flex items-center ml-[29px]">
                    ❤️ {item.likes}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReflectionWalls;
