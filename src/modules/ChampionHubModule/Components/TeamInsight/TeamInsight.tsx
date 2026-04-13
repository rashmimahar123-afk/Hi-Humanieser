"use client";

import images from "@/src/assets/images";
import PolygonButton from "@/src/components/PolygonButton/PolygonButton";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import TeamSnapshot from "../TeamSnapshot/TeamSnapshot";
import TeamWorkingOn from "../TeamWorkingOn/TeamWorkingOn";
import TeamSayingSection from "../TeamSayingSection/TeamSayingSection";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";

function TeamInsight() {
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
  const { user } = useAuthValue();
  return (
    <div className=" min-h-screen bg-[#F5F0EB] ">
      {/* TOP LEFT SHAPE */}
      <div className="relative">
        <Image
          src={images.quizPolygon}
          alt="login-rectangle"
          width={630}
          height={630}
          className="absolute top-0 right-0 z-0"
        />
      </div>

      <div className="px-8 py-6">
        <UserProfileHeader
          greetingColor="#0f4f58"
          nameColor="#0F4F58"
          userInfo={user}
        />
      </div>
      <div className="px-8">
        <div className="relative z-10 ml-21 font-bold text-[#0F4F58] text-[45px] font-[RocaTwo]">
          Champion Hub
        </div>

        {/* WELCOME TEXT */}
        <div className="relative z-10 mt-8">
          <h3 className="text-[#0f4f58] text-[30px] font-bold  font-[RocaTwo] ml-12">
            Team Insights{" "}
          </h3>

          <div className="ml-20">
            <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6 ">
              This is where you see the bigger picture.
            </p>
            <p className="text-[#0F4F58] text-[22px] leading-relaxed mb-6">
              Here, you’ll find a collective view of your team’s personal
              Humaniser journeys — the strengths, growth areas and themes
              emerging from <span className="font-bold">individual</span> Quiz
              results and Pathways. These insights reflect personal practice,
              not the team rituals you lead in Team Focus.{" "}
            </p>
            <p className="text-[#0F4F58] text-[22px] leading-relaxed">
              Use these signals to celebrate what’s strong and gently guide
              where shared attention could spark meaningful progress. All
              insights are anonymous and designed to guide attention — not to
              assess individuals.
            </p>
          </div>
        </div>

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
        <div>
          {/* TEXT (Always on top) */}
          <div className="relative z-20 text-[#567F55]  ml-[43px] font-[400] mt-10">
            {/* PILLARS GRID */}
            <TeamSnapshot />
          </div>
          <div className="mt-10">
            <TeamWorkingOn />
          </div>
          <div className="mt-10">
            <TeamSayingSection />
          </div>
          {/* ACTION BUTTONS SECTION */}
          <div className="flex flex-col justify-end mt-10 relative z-20">
            <div className="flex justify-end ">
              {/* View All Reflections Button */}
              <PolygonButton
                height="106px"
                width="87px"
                bgColor="#f5c882"
                radius={14}
                topTilt={18}
                slantSide="right"
                clipPath={`polygon(17% 28px, 77% 17%, 100% 79%, 0% calc(100% - 25px))`}
              >
                <div className="h-full flex items-center justify-center text-center">
                  <span className="text-[#0F4F58] text-[18px] font-[RocaTwo] font-bold leading-[18px]">
                    View All Reflections
                  </span>
                </div>
              </PolygonButton>
            </div>

            <div className="flex justify-end">
              {/* Bottom Buttons */}
              <div className="flex flex-col gap-4 items-center">
                <CommonButtons
                  label={`Return to Champion Hub`}
                  bgColor="#cde3cc"
                  onClick={() => router.push("/dashboard")}
                />

                <CommonButtons
                  label="Go to Homepage"
                  bgColor="#cde3cc"
                  onClick={() => router.push("/dashboard")}
                />
              </div>
            </div>
          </div>
        </div>
        {/* SKY SHAPE CARD */}
      </div>
    </div>
  );
}

export default TeamInsight;
