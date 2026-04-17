import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import { useState } from "react";

const partners = [
  { name: "Matthew Richardson", image: images.userProfile },
  { name: "Daniella James-Daniels", image: images.userProfile },
  { name: "Bibil Baby Paramatthatil", image: images.userProfile },
  { name: "Lorenzo DiCaprio", image: images.userProfile },
  { name: "George Brown", image: images.userProfile },
  { name: "Matthew Richardson", image: images.userProfile },
  { name: "Daniella James-Daniels", image: images.userProfile },
  { name: "Bibil Baby Paramatthatil", image: images.userProfile },
  { name: "Lorenzo DiCaprio", image: images.userProfile },
];

function CompanyStructure() {
  const chunkByPattern = (arr: any[], pattern = [5, 4]) => {
    const chunks = [];
    let i = 0;
    let p = 0;

    while (i < arr.length) {
      chunks.push(arr.slice(i, i + pattern[p]));
      i += pattern[p];
      p = (p + 1) % pattern.length;
    }

    return chunks;
  };

  const rows = chunkByPattern(partners);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState("Systems Engineering - UK");

  const teamOptions = [
    "Systems Engineering - UK",
    "Product Design - India",
    "Marketing - US",
    "QA Team - Remote",
  ];

  return (
    <div className="mt-12 px-14">
      {/* Title */}
      <h2 className="text-[40px] font-[RocaTwo] font-bold text-[#0F4F58] mb-6">
        Company Structure
      </h2>

      {/* Card */}
      <section className="bg-[#F8E1B8] rounded-[24px] p-10 relative overflow-hidden">
        {/* Curve dotted path */}
        <div className="absolute right-10 top-10 rotate-[185deg]">
          <Image src={images.teamDot} alt="curve" width={300} height={120} />
        </div>

        {/* Top Partner */}
        <div className="flex items-center gap-5 mb-10">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
            <Image
              src={images.userProfile}
              alt="Partner"
              width={70}
              height={70}
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-[26px] font-semibold text-[#0F4F58]">
              Hi Humaniser! Partner
            </h3>
            <p className="text-[16px] text-[#0F4F58]">James Grant</p>
          </div>
        </div>

        {/* Partners Title */}
        <h3 className="text-[28px] font-[RocaTwo] font-bold text-[#0F4F58] mb-8">
          Hi Humaniser! Partners
        </h3>

        {/* Grid */}
        <div className="space-y-10">
          {rows.map((row, rowIndex) => {
            const isFour = row.length === 4;

            return (
              <div
                key={rowIndex}
                className={`grid ${
                  isFour
                    ? "grid-cols-4 max-w-[700px] mx-auto gap-x-10"
                    : "grid-cols-5 gap-x-10"
                } gap-y-10`}
              >
                {row.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={72}
                        height={72}
                        className="object-cover"
                      />
                    </div>

                    <p className="mt-3 text-[14px] text-[#0F4F58] leading-5 max-w-[120px]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Bottom Left Dots */}
        <div className="absolute translate-y-4">
          {" "}
          <Image src={images.teamDots} alt="dots" width={100} height={100} />
        </div>

        {/* Button */}

        <div className="mt-10 flex justify-end items-center  ">
          <div>
            {" "}
            <CommonButtons
              label=" See / Edit Partners "
              bgColor="#f2a39c"
              onClick={() => router.push("/dashboard")}
            />
          </div>
        </div>
      </section>

      {/* Card for Champions */}
      <section className="bg-[#F8E1B8] rounded-[24px] p-10 relative overflow-hidden mt-10">
        {/* Curve dotted path */}
        <div className="absolute right-10 top-10 rotate-[185deg]">
          <Image src={images.teamDot} alt="curve" width={300} height={120} />
        </div>

        {/* Top Partner */}
        <div className="flex items-center gap-5 mb-10">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
            <Image
              src={images.userProfile}
              alt="Partner"
              width={70}
              height={70}
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-[26px] font-semibold text-[#0F4F58]">
              Hi Humaniser! Partner
            </h3>
            <p className="text-[16px] text-[#0F4F58]">James Grant</p>
          </div>
        </div>

        {/* Partners Title */}
        <h3 className="text-[28px] font-[RocaTwo] font-bold text-[#0F4F58] mb-8">
          Hi Humaniser! Champions
        </h3>

        {/* Grid */}
        <div className="space-y-10">
          {rows.map((row, rowIndex) => {
            const isFour = row.length === 4;

            return (
              <div
                key={rowIndex}
                className={`grid ${
                  isFour
                    ? "grid-cols-4 max-w-[700px] mx-auto gap-x-10"
                    : "grid-cols-5 gap-x-10"
                } gap-y-10`}
              >
                {row.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={72}
                        height={72}
                        className="object-cover"
                      />
                    </div>

                    <p className="mt-3 text-[14px] text-[#0F4F58] leading-5 max-w-[120px]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Bottom Left Dots */}
        <div className="absolute translate-y-4">
          {" "}
          <Image src={images.teamDots} alt="dots" width={100} height={100} />
        </div>

        {/* Button */}

        <div className="mt-10 flex justify-end items-center  ">
          <div>
            {" "}
            <CommonButtons
              label="See / Edit Champion "
              bgColor="#f2a39c"
              onClick={() => router.push("/dashboard")}
            />
          </div>
        </div>
      </section>

      {/* Card for Members */}
      <section className="bg-[#F8E1B8] rounded-[24px] p-10 relative overflow-hidden mt-10">
        {/* Curve dotted path */}
        <div className="absolute right-10 top-10 rotate-[185deg]">
          <Image src={images.teamDot} alt="curve" width={300} height={120} />
        </div>

        {/* Top Partner */}
        <div className="flex items-center gap-5 mb-10">
          <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
            <Image
              src={images.userProfile}
              alt="Partner"
              width={70}
              height={70}
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="text-[26px] font-semibold text-[#0F4F58]">
              Hi Humaniser! Partner
            </h3>
            <p className="text-[16px] text-[#0F4F58]">James Grant</p>
          </div>
        </div>

        {/* Partners Title */}
        <h3 className="text-[28px] font-[RocaTwo] font-bold text-[#0F4F58] mb-8">
          Hi Humaniser! Members
        </h3>
        <div className="flex items-center justify-end gap-10 px-10">
          <h2 className="text-[38px] font-[RocaTwo] text-[#0F4F58]">Team</h2>

          <div className="relative">
            {/* Selected */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer bg-[#F3EEE7] px-6 py-3 rounded-xl text-[#5E7F6F] text-[16px] flex items-center gap-4 min-w-[280px]"
            >
              {selectedTeam}

              {/* Arrow */}
              <div className="ml-auto transition-transform duration-200">
                <div
                  className={`w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#0F4F58] ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Dropdown Options */}
            {isOpen && (
              <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-md z-10 overflow-hidden">
                {teamOptions.map((team, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setSelectedTeam(team);
                      setIsOpen(false);
                    }}
                    className="px-5 py-3 text-[#0F4F58] hover:bg-[#F8E1B8] cursor-pointer text-[14px]"
                  >
                    {team}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Members Header Row */}
        <div className="flex justify-between items-start mb-10">
          {/* LEFT: Champion */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
                <Image
                  src={images.userProfile}
                  alt="Champion"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>

              <p className="text-[14px] text-[#0F4F58] mt-2">Silvia Smith</p>
            </div>

            <div>
              <h3 className="text-[22px] font-[RocaTwo] font-semibold text-[#0F4F58] leading-tight">
                Hi Humaniser! <br /> Champion
              </h3>
            </div>
          </div>
        </div>
        {/* Grid */}
        <div className="space-y-10">
          {rows.map((row, rowIndex) => {
            const isFour = row.length === 4;

            return (
              <div
                key={rowIndex}
                className={`grid ${
                  isFour
                    ? "grid-cols-4 max-w-[700px] mx-auto gap-x-10"
                    : "grid-cols-5 gap-x-10"
                } gap-y-10`}
              >
                {row.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={72}
                        height={72}
                        className="object-cover"
                      />
                    </div>

                    <p className="mt-3 text-[14px] text-[#0F4F58] leading-5 max-w-[120px]">
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Bottom Left Dots */}
        <div className="absolute translate-y-4">
          {" "}
          <Image src={images.teamDots} alt="dots" width={100} height={100} />
        </div>

        {/* Button */}

        <div className="mt-10 flex justify-end items-center  ">
          <div>
            {" "}
            <CommonButtons
              label="See / Edit Members"
              bgColor="#f2a39c"
              onClick={() => router.push("/dashboard")}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyStructure;
