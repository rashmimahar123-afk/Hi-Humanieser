import Image from "next/image";
import images from "@/src/assets/images";

function SetStartPage() {
  return (
    <div>
      <div className="min-h-screen bg-[#FBE6BF] relative overflow-hidden">
        <Image
          src={images.startFirstPolygon}
          alt="first-poly"
          className="absolute top-0 left-0 z-0"
          width={312}
          height={454}
        />
        <Image
          src={images.startSecondPolygon}
          alt="second-poly"
          className="absolute top-0 right-0 z-0"
          width={320}
          height={320}
        />
        <Image
          src={images.startThirdPolygon}
          alt="third-poly"
          className="absolute bottom-0 left-0 z-0"
          width={620}
          height={620}
        />
        <Image
          src={images.startForthPolygon}
          alt="forth-poly"
          className="absolute bottom-0 right-0 z-0"
          width={180}
          height={180}
        />
        <div className="flex">
          {" "}
          {/* Overlay content */}
          <div className="absolute inset-0 px-12 py-10 flex justify-between">
            {/* Left */}
            <div>
              <div
                className="text-[#567F55]"
                style={{ fontFamily: "Aptos", fontSize: "22px" }}
              >
                Hi Humaniser!{" "}
                <span className="align-super text-[0.7em]">™</span>
              </div>

              <h1
                className="mt-4 text-[56px] text-[#0F4F58] font-bold "
                style={{ fontFamily: "RocaTwo-Bold" }}
              >
                Hi Maria!
              </h1>
              <div className="flex justify-center mt-[53px] ">
                <div>
                  <h2
                    className="mt-2 text-[45px] text-[#567F55] font-bold"
                    style={{ fontFamily: "RocaTwo-Bold", marginLeft: "76px" }}
                  >
                    Let’s find your starting point
                  </h2>
                  <ul
                    className="mt-6 ml-[76px] space-y-3 text-[#0F4F58] text-[20px]"
                    style={{ fontFamily: "Aptos" }}
                  >
                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0F4F58]" />
                      This quiz will help guide you toward a Pathway that fits
                      where you are now.
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0F4F58]" />
                      There are no right or wrong answers — just honest ones.
                    </li>

                    <li className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0F4F58]" />
                      It takes around 10 minutes to complete.
                    </li>
                  </ul>
                </div>
                <div className="ml-10 mt-[-110px]">
                  <Image
                    src={images.startImg}
                    alt="Start Image"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="ml-[70px] mt-[60px] relative">
                  <Image
                    src={images.startRec}
                    alt="Decorative Rectangle"
                    width={150}
                    height={150}
                  />

                  {/* Text inside image */}
                  <div className="absolute inset-0 flex items-center justify-center top-[-30px]">
                    <span
                      className="text-white text-[35px] font-bold text-center "
                      style={{
                        fontFamily: "RocaTwo-Bold",
                        textDecoration: "underline",
                      }}
                    >
                      Start
                      <br />
                      Quiz
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetStartPage;
