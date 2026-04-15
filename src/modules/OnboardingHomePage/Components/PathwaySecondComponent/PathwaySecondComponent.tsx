import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";

function PathwaySecondComponent() {
  return (
    <>
      {/* ── Desktop / tablet ── */}
      <div className="relative w-full h-[180px] sm:h-[210px] md:h-[240px] mt-10 md:mt-20 hidden sm:block">
        <Image
          src={images.pathImg}
          alt="path-img"
          fill
          className="object-contain scale-85"
          priority
        />

        {/* LEFT TEXT */}
        <div
          className="absolute z-10 text-[#9E9E9E] text-center"
          style={{
            fontFamily: "Roboto",
            left: "clamp(12%, 15%, 18%)",
            top: "clamp(2%, 5%, 8%)",
            fontSize: "clamp(14px, 3vw, 34px)",
          }}
        >
          Find Your Way
          <br />
          Around
        </div>

        {/* CENTER TEXT — active */}
        <div
          className="absolute z-10 text-[#0F4F58] text-center"
          style={{
            fontFamily: "Roboto",
            left: "50%",
            top: "clamp(4%, 7%, 10%)",
            transform: "translateX(-50%)",
            fontSize: "clamp(14px, 3vw, 34px)",
            whiteSpace: "nowrap",
          }}
        >
          <div
            className="absolute"
            style={{
              top: "clamp(-12px, -2vw, -8px)",
              left: "clamp(-36px, -5vw, -30px)",
            }}
          >
            <Image
              src={images.arrowImg}
              alt="arrow"
              width={30}
              height={30}
              style={{ width: "clamp(20px, 3vw, 30px)", height: "auto" }}
            />
          </div>
          Choose Your
          <br />
          Starting Point
          <div
            className="absolute"
            style={{
              top: "clamp(-5px, -1vw, 0px)",
              right: "clamp(-50px, -7vw, -40px)",
            }}
          >
            <Image
              src={images.leftArrowImg}
              alt="arrow"
              width={45}
              height={45}
              style={{ width: "clamp(30px, 4vw, 45px)", height: "auto" }}
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div
          className="absolute z-10 text-[#9E9E9E] text-center"
          style={{
            fontFamily: "Roboto",
            right: "clamp(15%, 18%, 23%)",
            top: "clamp(8%, 11%, 13%)",
            fontSize: "clamp(14px, 3vw, 34px)",
            whiteSpace: "nowrap",
          }}
        >
          Get Stuck
          <br />
          In!
        </div>
      </div>

      {/* ── Mobile step indicator ── */}
      <div className="sm:hidden flex items-center justify-center gap-3 mt-8 px-4">
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-[#9E9E9E] text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <span className="mt-1 text-[11px] text-[#9E9E9E] text-center leading-tight">
            Find Your
            <br />
            Way Around
          </span>
        </div>
        <div className="flex-1 h-[2px] bg-[#9E9E9E] rounded" />
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-[#0F4F58] text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <span className="mt-1 text-[11px] text-[#0F4F58] font-semibold text-center leading-tight">
            Choose Your
            <br />
            Starting Point
          </span>
        </div>
        <div className="flex-1 h-[2px] bg-[#9E9E9E] rounded" />
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-[#9E9E9E] text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <span className="mt-1 text-[11px] text-[#9E9E9E] text-center leading-tight">
            Get Stuck
            <br />
            In!
          </span>
        </div>
      </div>
    </>
  );
}

export default PathwaySecondComponent;
