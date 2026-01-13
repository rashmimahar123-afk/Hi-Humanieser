import Image from "next/image";
import images from "@/src/assets/images";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f0] px-4 py-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="space-y-8 ">
            {/* Logo Section - Top */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Image
                  src={images.humaniserLogo}
                  alt="Humanising Our Workplaces Logo"
                  width={80}
                  className="object-contain"
                  priority
                />
                <div
                  style={{
                    fontSize: "28px",
                    fontFamily: "Aptos, sans-serif",
                    fontWeight: "bold",
                    lineHeight: "1",
                  }}
                >
                  <span className="block">Humanising our</span>
                  <span className="block -mt-[2px]">Workplaces</span>
                </div>
              </div>
              <div
                style={{
                  fontFamily: "Aptos, sans-serif",
                  fontWeight: 400,
                  marginLeft: "18px",
                }}
              >
                People & Performance Thriving Together
              </div>
            </div>
            {/* Main Heading */}
            <h1 className={`text-[#0F4F58] font-bold ${styles.mainHeading}`}>
              Hi Humaniser!
              <span className={`align-super ${styles.headSpan}`}>™</span>
            </h1>

            {/* Description */}
            <div className={`space-y-4 ${styles.description}`}>
              <p className={`text-base text-[#0F4F58] ${styles.descParagraph}`}>
                A human-centred platform aligning people, teams and
                <br />
                performance — together.
              </p>
              <p className={`text-base text-[#0F4F58] ${styles.descParagraph}`}>
                More than a platform, it’s a mindset shift.
                <br />
                <span
                  className={`text-base font-bold text-[#0F4F58] ${styles.descParagraph}`}
                >
                  {" "}
                  Because performance doesn’t grow despite people,
                  <br />
                  it grows because of them.
                </span>
              </p>
              <p className={`text-base text-[#0F4F58] ${styles.descParagraph}`}>
                Explore your pathway, connect with your team, and
                <br />
                shape a culture where humans thrive — and results
                <br />
                follow.
              </p>
            </div>

            {/* CTA Button */}
          </div>

          {/* Right Section - Card */}
          <div className="relative px-4 lg:px-0">
            <div className="relative">
              <div className={`inline-flex items-center mt-6 ${styles.goBtn}`}>
                <Image src={images.arrowImg} alt="Arrow Right" />

                {/* Text with background */}
                <div
                  className={`bg-white rounded-[20px] px-4 py-2 cursor-pointer hover:shadow-md transition-shadow flex items-center justify-center ${styles.goBtnText}`}
                >
                  <span
                    className={`text-black whitespace-nowrap font-bold ${styles.goBtnSpan}`}
                  >
                    Lets go
                  </span>
                </div>
              </div>
              {/* Image with rounded background */}
              <div className="relative">
                <Image
                  src={images.peopleImg}
                  alt="Team collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Footer Info Box */}
          </div>
        </div>
      </div>
      <div className={`relative flex justify-center ${styles.infoBox}`}>
        <Image src={images.landRectangle} alt="Land Rectangle" />

        {/* Text Overlay */}
        <div className={"absolute inset-0 flex left-[12%] top-[18%]"}>
          <p className={`text-center font-bold ${styles.infoBoxText}`}>
            Curious? Explore how to join or bring Hi Humaniser!™ to your
            organisation. Visit HumanisingOurWorkplaces.com or check the FAQ
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
