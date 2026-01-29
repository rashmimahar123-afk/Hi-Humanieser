import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";

function ChangeMyPathway() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#F5F0EB] p-6 font-sans">
      <Image
        src={images.recGreen}
        alt="login-rectangle"
        className="absolute bottom-0 left-0 z-0"
      />
      {/* Header */}
      <div className="px-12 flex justify-between">
        {" "}
        {/* Left */}
        <div>
          <div
            className="text-[#0F4F58] leading-none"
            style={{ fontFamily: "Aptos", fontSize: "22px" }}
          >
            Hi Humaniser! <span className="align-super text-[0.7em]">™</span>
          </div>

          <h1
            className="mt-1 leading-tight text-[56px] text-[#0F4F58] font-bold"
            style={{ fontFamily: "RocaTwo-Bold" }}
          >
            Hi Maria!
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        {/* Left decoration */}
        <Image
          src={images.arrowImg}
          alt="Left decoration"
          width={40}
          height={40}
          className="shrink-0"
        />

        {/* Banner text */}
        <h2
          className="text-[#0F4F58] text-center font-bold text-[30px] leading-snug -mr-[10px]"
          style={{ fontFamily: "League Spartan" }}
        >
          Great to see you again — ready to explore?
        </h2>

        {/* Right decoration */}
        <Image
          src={images.leftArrowImg}
          alt="Right decoration"
          width={60}
          height={60}
          className="shrink-0"
        />
      </div>
      <div className="flex justify-center">
        <h2 className="text-[51px] font-[RocaTwo-Bold] text-[#0F4F58] font-bold flex justify-center">
          My Personal Pathway
        </h2>
      </div>
      <div className="ml-[140px]">
        {/* Main Section */}
        <div className="relative mt-20  flex justify-between items-start">
          {/* LEFT TEXT */}
          <div className="max-w-[520px]">
            <p className="text-[#E6A757] font-semibold tracking-wide text-[21px] font-[League Spartan]">
              CHANGE MY PATHWAY{" "}
            </p>

            <p className="mt-3 text-[#567F55] text-[20px] leading-relaxed ml-[20px] font-[Roboto]">
              Your growth is not set in stone — you can update your focus
              anytime.
            </p>
          </div>

          {/* RIGHT POLYGON WITH TEXT */}
          <div className="relative w-[363px] h-[153px]">
            {/* Polygon Image */}
            <Image
              src={images.changePathPoly}
              alt="change-path-polygon"
              fill
              className="object-contain"
            />

            {/* Text OVER polygon */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 text-white pt-[20px]">
              <p className="font-semibold text-[17px] mb-2">Just remember</p>

              <p className="text-[16px] leading-snug font-normal flex items-center">
                You can work on up to 2 pathways at a time so you have space to
                make real progress
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-4 max-w-[900px]">
          {/* Pathway 1 */}
          <div className="flex items-center justify-between rounded-xl p-5">
            <div className="flex items-center gap-4 max-w-[325px] ">
              <Image
                src={images.pathEye}
                alt="path-eye"
                width={100}
                height={83}
              />
              <h3 className="font-[700] font-[Canva Sans] text-[17px] text-[#3C4C59]">
                Practice Perspective
              </h3>
            </div>

            <div className="-mr-[41px]">
              <Image
                src={images.pathwayTimer}
                alt="path-eye"
                width={84}
                height={84}
                className="-mb-[16px]"
              />{" "}
            </div>
            <div className="flex items-center gap-6 bg-[#F8E1B8] rounded-[12px] px-5 py-3">
              {/* Keep */}
              <label className="flex items-center gap-2 text-[#3C4C59] text-[16px] cursor-pointer font-[Canva Sans]">
                <span>Keep</span>
                <input
                  type="checkbox"
                  className="w-[16px] h-[16px] border border-[#0F4F58] rounded-sm accent-transparent"
                />
              </label>

              {/* Remove */}
              <label className="flex items-center gap-2 text-[#3C4C59] text-[16px] cursor-pointer font-[Canva Sans]">
                <span>Remove</span>
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] border border-[#0F4F58] rounded-sm accent-transparent"
                />
              </label>
            </div>
          </div>

          {/* Pathway 2 */}
          <div className="flex items-center justify-between rounded-xl p-5">
            <div className="flex items-center gap-4 max-w-[325px]">
              <Image
                src={images.wellbeingImg}
                alt="path-eye"
                width={100}
                height={83}
              />
              <h3 className="font-[700] font-[Canva Sans] text-[17px] text-[#3C4C59]">
                Wellbeing is Performance Infraestructure
              </h3>
            </div>

            <div>
              <Image
                src={images.pathwayTimer}
                alt="path-eye"
                width={84}
                height={84}
                className="-mb-[16px]"
              />{" "}
            </div>
            <div className="flex items-center gap-6 bg-[#F6E3B8] rounded-[12px] px-5 py-3">
              {/* Keep */}
              <label className="flex items-center gap-2 text-[#3C4C59] text-[16px] cursor-pointer font-[Canva Sans]">
                <span>Keep</span>
                <input
                  type="checkbox"
                  className="w-[16px] h-[16px] border border-[#0F4F58] rounded-sm accent-transparent"
                />
              </label>

              {/* Remove */}
              <label className="flex items-center gap-2 text-[#3C4C59] text-[16px] cursor-pointer font-[Canva Sans]">
                <span>Remove</span>
                <input
                  type="checkbox"
                  className="w-[16px] h-[16px] border border-[#0F4F58] rounded-sm accent-transparent"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-[85px]">
        <div className="mt-[30px] flex flex-col items-center gap-[14px] ">
          <CommonButtons
            label="Save My New Pathways"
            bgColor="#0F4F58"
            onClick={() => router.push("/save-pathway")}
          />
        </div>
      </div>
    </div>
  );
}
export default ChangeMyPathway;
