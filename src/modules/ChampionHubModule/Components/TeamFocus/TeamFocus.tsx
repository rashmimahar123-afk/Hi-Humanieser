"use client";

import images from "@/src/assets/images";
import CustomDropdown from "@/src/components/CustomDropdown/CustomDropdown";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";

function TeamFocus() {
  const focusOptions = ["Build Trust", "Improve Clarity", "Reduce Friction"];
  const ritualOptions = ["Weekly Sync", "Retro", "Check-in", "Planning"];
  const weekOptions = ["1 Week", "2 Weeks", "4 Weeks", "8 Weeks"];
  const members = [
    { name: "Matthew Richardson", img: "/m1.jpg" },
    { name: "Daniella James-Daniels", img: "/m2.jpg" },
    { name: "Bibil Baby Paramathatil", img: "/m3.jpg" },
    { name: "Lorenzo DiCaprio", img: "/m4.jpg" },
    { name: "George Brown", img: "/m5.jpg" },
  ];

  const teamMembers = [
    { name: "Matthew Richardson", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "George Brown", image: images.userProfile },

    { name: "Maria Palacios", image: images.maria },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },

    { name: "Matthew Richardson", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "George Brown", image: images.userProfile },

    { name: "Maria Palacios", image: images.maria },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Maria Palacios", image: images.maria },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Lorenzo DiCaprio", image: images.userProfile },
    { name: "Daniella James-Daniels", image: images.userProfile },
    { name: "Bibil Baby Paramatthatil", image: images.userProfile },
  ];

  const chunkByPattern = (arr: any, pattern = [8, 6]) => {
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

  const rows = chunkByPattern(teamMembers);

  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif">
      {/* TOP LEFT SHAPE */}

      <div>
        <UserProfileHeader greetingColor="#0f4f58" nameColor="#0F4F58" />
      </div>

      <Image
        src={images.homeRec}
        alt="left-bg"
        width={421}
        height={414}
        className="absolute top-0 left-0 -z-10"
        priority
      />
      <div className="relative z-10 ml-21 font-bold text-[#0F4F58] text-[45px] font-[RocaTwo]">
        Champion Hub
      </div>

      {/* WELCOME TEXT */}
      <div className="relative z-10 mt-8 ml-[85px]">
        <h3 className="text-[#0f4f58] text-[30px] font-bold mb-6 font-[RocaTwo] ml-12">
          Team Focus
        </h3>

        <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6">
          As a Champion, you play a key role in how work actually happens in
          your team. This hub gives you a clear view of what’s going on — and
          practical ways to guide focus, reduce friction, and keep progress
          moving.
        </p>

        <p className="text-[#0F4F58] text-[22px] leading-relaxed">
          You’ll find insights, signals, and actionable options to help you make
          deliberate decisions — so small, consistent actions strengthen
          clarity, coordination, and execution over time.
        </p>
      </div>

      {/* TEAM HEADER BAR */}
      <div className="bg-[#E6D2B1] p-6 mt-10">
        <div className=" px-10 flex items-center justify-end gap-10  mx-auto">
          <h2 className="text-[38px] font-[RocaTwo] text-[#0F4F58]">Team</h2>

          <div className="bg-[#F3EEE7] px-6 py-3 rounded-xl text-[#5E7F6F] text-[18px] font-[Roboto]">
            Systems Engineering - UK (allow 45 characters)
          </div>
        </div>

        <div className="relative z-20 mt-8 space-y-14 mb-[130px]">
          <div>
            <h3 className="text-[30px] font-[RocaTwo] font-bold text-[#0F4F58]">
              Hi Humaniser! Members
            </h3>
            <div className="text-[#0f4f58] text-[18px] font-[Roboto] mt-2 ml-2">
              A quick view of who you’re guiding through this shared practice.
            </div>
          </div>
          {rows.map((row, rowIndex) => {
            const cols = row.length; // 8 or 6 dynamically

            return (
              <div
                key={rowIndex}
                className={`grid justify-center gap-y-14 gap-x-14`}
                style={{
                  gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                }}
              >
                {row.map((member: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="h-[88px] w-[88px] rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={88}
                        height={88}
                        className="object-cover"
                      />
                    </div>

                    <p className="mt-4 text-[16px] font-[Roboto] text-[#0F4F58] leading-5 max-w-[140px]">
                      {member.name}
                    </p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full px-8 py-16 relative">
        {/* START NEW CYCLE */}
        <h1 className="text-[42px] font-[RocaTwo] text-[#0F4F58] mb-4">
          Start a new cycle
        </h1>

        <p className="text-[#0F4F58] text-[18px] leading-relaxed mb-4">
          <span className="font-semibold">
            Your team is ready for a new cycle.
          </span>{" "}
          Start by naming the pressure you’re operating under. Then listen to
          your team through a short poll and choose one or two team rituals to
          practice together.
        </p>

        <p className="text-[#0F4F58] text-[18px] leading-relaxed ">
          Each ritual follows its own 10-week rhythm, so progress can build
          steadily without everything moving at once.
        </p>

        {/* DECORATIVE CURVE (optional image) */}
        <div className="absolute right-48 top-22 ">
          <Image
            src={images.dottedCurve}
            alt="pattern"
            width={500}
            height={270}
          />
        </div>

        {/* PRESSURE POINTS SECTION */}
        <div className="mt-20">
          <h2 className="text-[32px] font-[RocaTwo] text-[#0F4F58] mb-3">
            Pressure Points
          </h2>
          <p className="text-[#0F4F58] text-[18px] font-semibold mb-1">
            Where does work feel most under pressure right now?
          </p>
          <p className="text-[#0F4F58] text-[16px] mb-12">
            Choose the one that best reflects your current reality. You’ll see
            more detail after you select it.
          </p>
          {/* CARDS GRID */}
          <div className="relative z-10 mt-20 grid grid-cols-3 gap-12  mx-auto">
            {/* CARD 1 */}
            <div
              className="bg-[#FFF7F3] rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out"
              onClick={() => router.push("/pressure-point")}
            >
              <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                Everything feels urgent.
              </h3>

              <div className="relative h-[182px]">
                <Image
                  src={images.resourcePoly1}
                  alt="shape"
                  fill
                  className="object-contain absolute -left-[24px] top-0"
                />

                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                  My days are driven by escalations, last-minute requests, and
                  constant interruptions, leaving little time to think, plan or
                  lead.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#F8E1B8] rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out">
              <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                Teams are busy, but not aligned
              </h3>

              <div className="relative h-[182px]">
                <Image
                  src={images.resourcePoly2}
                  alt="shape"
                  fill
                  className="object-contain"
                />

                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                  My team is working hard, but priorities are interpreted
                  differently.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#D2E5E6] rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out">
              <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                Problems surface too late
              </h3>

              <div className="relative h-[182px]">
                <Image
                  src={images.resourcePoly3}
                  alt="shape"
                  fill
                  className="object-contain"
                />

                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                  Issues only emerge once they’re already hard — or expensive —
                  to fix.
                </p>
              </div>
            </div>
            {/* CARD 4 */}
            <div className="bg-[#CDE1D0] rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out col-start-1">
              <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                Too much depends on me
              </h3>

              <div className="relative h-[182px]">
                <Image
                  src={images.resourcePoly3}
                  alt="shape"
                  fill
                  className="object-contain"
                />

                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                  Work relies too heavily on me — decisions stall when I’m
                  unavailable.
                </p>
              </div>
            </div>

            {/* CARD 5 (BOTTOM RIGHT – CENTERED ROW) */}
            {/* CARD 5 */}
            <div className="bg-[#F8E1B8] rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out col-start-2">
              <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                Something else is making work heavier
              </h3>

              <div className="relative h-[182px]">
                <Image
                  src={images.resourcePoly2}
                  alt="shape"
                  fill
                  className="object-contain"
                />

                <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                  The pressure is real, but it doesn’t quite fit the options
                  above.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* DID WE MISS SECTION */}
        <div className="mt-20 flex justify-between items-end">
          <div>
            <h3 className="text-[24px] font-[RocaTwo] text-[#0F4F58] mb-2">
              Did we miss something?
            </h3>
            <p className="text-[#0F4F58] text-[18px] ">
              These pressure points are grounded in research and real team data
              — but we may not have captured everything. Not seeing what you’re
              dealing with? Let us know, and help shape what we explore next.
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-4 mb-[7px]">
          <PolygonButton
            width="106px"
            height="90px"
            bgColor="#acd5ab"
            radius={14}
            clipPath={`polygon(
    15% 11%,
    81% 0%,
    100% 87%,
    3% calc(100% - 15px)
  )`}
          >
            <span className="text-[#0f4f58] text-[23px] font-[RocaTwo] font-bold leading-tight text-center">
              Suggest <br />
              <span className="whitespace-nowrap">Pressure Point</span>
            </span>
          </PolygonButton>
        </div>
      </div>
    </div>
  );
}

export default TeamFocus;
