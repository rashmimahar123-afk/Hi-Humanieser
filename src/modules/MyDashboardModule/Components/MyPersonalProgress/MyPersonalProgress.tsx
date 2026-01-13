/* eslint-disable @typescript-eslint/no-explicit-any */
import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";

type MY_PERSONAL_PROGRESS_PROPS = {
  progressList: Array<any>;
};
function MyPersonalProgress(props: MY_PERSONAL_PROGRESS_PROPS) {
  const { progressList } = props;
  return (
    <>
      {/* Heading */}
      <h2 className="text-[35px] font-bold text-[#0F4F58] font-[RocaTwo]">
        My Personal Progress
      </h2>
      <p className="text-[#567F55] font-[Roboto] font-[400] text-[20px] ml-[40px] mt-[15px] max-w-2xl">
        See the pathways you’ve taken on and how far you’ve come. Each one shows
        whether it’s in progress or complete, so you can track your journey at a
        glance.
      </p>

      {/* Cards */}
      <div className="mt-[20px] grid grid-cols-2 gap-10">
        {/* LEFT CARD */}
        <div className="bg-[#F5F0EB] rounded-2xl p-8">
          <ul className="space-y-6">
            {progressList.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image src={item.icon} alt="" width={32} height={32} />
                  </div>
                  <span className="text-[#000000] text-[17px] font-[Canva Sans] font-[400]">
                    {item.title}
                  </span>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3 text-sm">
                  <Image src={images.compImg} alt="complete-img" />
                  <div className="text-right">
                    <p className="text-[#000000] font-[400] font-[Aptos] text-[17px]">
                      {item.status === "Completed"
                        ? "Completed on"
                        : "In Progress"}
                    </p>
                    {item.date && (
                      <p className="text-[#000000] font-[400] font-[Aptos] text-[17px]">
                        {item.date}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#F5F0EB] rounded-2xl p-8 ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={images.sustainImg} alt="" width={34} height={34} />
              </div>
              <h3 className="text-[#000000] text-[18px] font-[400] text-[17px] font-[Canva Sans]">
                Make it Sustainable
              </h3>
            </div>

            <span className="text-[#000000] font-[400] font-[Aptos] text-[17px]">
              add 5 trofeos
            </span>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-[50px]">
        <div className="grid grid-cols-2 gap-10">
          {/* -------slant Left Btn-------- */}
          <div>
            <PolygonButton
              width="155px"
              height="151px"
              bgColor="#F6E3BF"
              radius={14}
              topTilt={18}
              bottomTilt={14}
              slantSide="left"
              decorationImg={{
                src: images.arrowImg,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: "-left-[44px] -top-[12px]",
              }}
            >
              <div className="h-full flex items-center justify-center text-center px-2">
                <span className="text-[#0F4F58] text-[24px] font-[RocaTwo] font-bold leading-[32px]">
                  See all
                  <br />
                  Micro-Actions
                  <br />
                  I’ve tried
                </span>
              </div>
            </PolygonButton>
          </div>
          {/* -------slant Right Btn-------- */}
          <div>
            <PolygonButton
              width="137px"
              height="151px"
              bgColor="#86C9C9"
              radius={14}
              topTilt={18}
              slantSide="right"
              bottomTilt={14}
              decorationImg={{
                src: images.rightArrow,
                width: 48,
                height: 48,
              }}
              decorationPosition={{
                className: "-right-[46px] -top-[12px]",
              }}
            >
              <div className="h-full flex items-center justify-center text-center px-2">
                <span className="text-[#0F4F58] text-[24px] font-[RocaTwo] font-bold leading-[32px]">
                  See all my Pathway Reflections
                </span>
              </div>
            </PolygonButton>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyPersonalProgress;
