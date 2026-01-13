import SuccessMessage from "@/src/components/SuccessMessage/SuccessMessage";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import { useRouter } from "next/navigation";

function ReflectionWalls() {
  const reflections = [
    {
      text: "This week I tried explaining why before asking what. The shift was instant — people leaned in instead of shutting down. Clarity really is kindness, especially when everyone’s moving fast",
      time: "3 hours ago",
      likes: "you and 11 others felt this",
    },
    {
      text: "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
      time: "2 days ago",
      likes: "you and 7 others felt this",
    },
    {
      text: "Noticed how much clarity helps when things get tense. One honest question can calm a whole meeting.",
      time: "5 days ago",
      likes: "you and 7 others felt this",
    },
    {
      text: "This week I tried explaining why before asking what. The shift was instant — people leaned in instead of shutting down. Clarity really is kindness, especially when everyone’s moving fast",
      time: "1 day ago",
      likes: "you and 4 others felt this",
    },
    {
      text: "I’ve started pausing before reacting in meetings, just to understand what others might be trying to say. It’s surprising how much smoother conversations feel when I do that. People seem more open, and I feel less defensive. It’s such a small change, but it’s helping me focus on the bigger picture instead of winning the moment — and honestly, it’s making collaboration feel lighter and more human",
      time: "4 days ago",
      likes: "you and 9 others felt this",
    },
    {
      text: "Noticed how much clarity helps when things get tense. One honest question can calm a whole meeting.",
      time: "6 days ago",
      likes: "you and 6 others felt this",
    },
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F5F0EB] px-10 py-8">
      {/* Header */}
      <UserProfileHeader greetingColor="#0F4F58" nameColor="#0F4F58" />

      {/* Center Heading */}
      <div className="text-center mt-10">
        <SuccessMessage
          text="Clarity grows when we pause to notice what worked — and why"
          fontSize="text-[23px]"
          leftImg={{ src: images.arrowImg, width: 40, height: 40 }}
          rightImg={{ src: images.leftArrowImg, width: 60, height: 60 }}
        />
        <h2 className="text-[52px] font-[RocaTwo] font-bold  text-[#4BA6A6] mt-[30px]">
          Reflection Walls
        </h2>
      </div>

      {/* Description + Filters */}

      {/* Left text */}
      <div className="mt-14">
        <h3 className="text-[25px] font-bold font-[Roboto] text-[#4BA6A6]">
          Small Reflections. Big Shifts.
        </h3>

        <p className="mt-2 text-[22px] text-[#0F4F58] leading-[23px] max-w-[847px] font-[Roboto] ml-[36px]">
          Every reflection adds a piece to the bigger picture of how your team
          works and grows. These walls capture the real, everyday moments that
          shape your culture — one insight at a time.
        </p>
      </div>

      {/* Right select */}
      <div className="mt-6 flex justify-end">
        <div className="relative">
          <select
            className="
          appearance-none
          bg-[#86C9C9]
          text-[#0F4F58]
          text-[18px]
          font-[400]
          px-6
          pr-10
          h-[40px]
          rounded-full
          outline-none
          font-[Roboto]

        "
          >
            <option>Choose Team</option>
          </select>

          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
            <Image src={images.dropdownImg} alt="dropdown-img" width={15} />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-[#F8E1B8] rounded-[32px] px-12 py-14 mt-10 max-w-[1278px]">
        <div
          className="grid grid-cols-3 gap-x-[65px] gap-y-[40px]
"
        >
          {reflections.map((item, index) => (
            <div
              key={index}
              className="
       bg-[#CDE3CC]
        rounded-[16px]
        w-[350px]
        h-[300px]
        px-[10px]
        py-[20px]
        flex
        flex-col
        justify-between
      "
            >
              <p className="text-[18px] leading-[20px] text-[#0F4F58] text-center font-[Roboto] font-[400]">
                {item.text}
              </p>

              <div className="flex items-center justify-between text-[15px] text-[#0F4F58] font-[Aptos] font-[400]">
                <span className="flex items-center gap-1">⏱ {item.time}</span>

                <span className="flex items-center gap-1">❤️ {item.likes}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-8 mt-12">
          {/* -------- Add Reflection -------- */}
          <div className="relative w-[80px] h-[85px]">
            <PolygonButton
              width="80px"
              height="85px"
              bgColor="#F7C3BE"
              radius={14}
              topTilt={18}
              bottomTilt={14}
              slantSide="left"
            />

            {/* TEXT OUTSIDE / OVER POLYGON */}
            <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none">
              <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[26px]">
                Add
                <br />
                Reflection
              </span>
            </div>
          </div>

          {/* -------- View Full Wall -------- */}
          <div
            className="relative w-[80px] h-[85px]  cursor-pointer"
            onClick={() => router.push("/view-reflection-wall")}
          >
            <PolygonButton
              width="80px"
              height="85px"
              bgColor="#86C9C9"
              radius={14}
              topTilt={18}
              bottomTilt={14}
              slantSide="left"
            />

            {/* TEXT OUTSIDE / OVER POLYGON */}
            <div className="absolute inset-0 flex items-center justify-center text-center pointer-events-none ">
              <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[26px]">
                View Full
                <br />
                Wall
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ReflectionWalls;
