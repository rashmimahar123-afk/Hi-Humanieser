import React from "react";
import Image from "next/image";
import images from "@/src/assets/images";

function PathwayThirdComponent() {
  return (
    <div className="relative w-full h-[240px] mt-20">
      <Image
        src={images.pathImg}
        alt="path-img"
        fill
        className="object-contain scale-85"
        priority
      />

      {/* LEFT TEXT */}
      <div
        className="absolute left-[18%] top-[5%] z-10 text-[#9E9E9E] text-[34px] text-center "
        style={{ fontFamily: "Roboto" }}
      >
        Find Your Way
        <br />
        Around
      </div>

      {/* CENTER TEXT */}
      <div
        className="absolute left-[47%] top-[7%] -translate-x-1/2 z-10 text-[#9E9E9E] text-[34px] text-center"
        style={{ fontFamily: "Roboto" }}
      >
        Choose Your
        <br />
        Starting Point
      </div>

      {/* RIGHT TEXT */}
      <div
        className="absolute right-[23%] top-[13%] z-10 text-[#0F4F58] text-[34px] text-center"
        style={{ fontFamily: "Roboto" }}
      >
        Get Stuck
        <br />
        In!
        <div className="absolute top-[-5px] right-[-50px]">
          <Image src={images.leftArrowImg} alt="arrow" width={45} height={45} />
        </div>
      </div>
    </div>
  );
}

export default PathwayThirdComponent;
