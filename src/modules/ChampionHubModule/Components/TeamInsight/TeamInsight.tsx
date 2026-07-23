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
import useGetKpiQuery from "../../Hooks/useGetKpiQuery";
import useGetMtjCycleOverviewQuery from "../../Hooks/useGetCycleOverviewQuery";
import useGetTeamsQuery from "@/src/modules/ProfileModule/Hooks/useGetTeamsQuery";
import useGetAllListUsersQuery from "@/src/modules/ProfileModule/Hooks/useGetAllListUsersQuery";
import LogoutModal from "@/src/modules/WelcomeModule/Components/LogoutModal/LogoutModal";
import useGetReflectionWallsQuery from "@/src/modules/MyDashboardModule/Hooks/useGetReflectionWallsQuery";

function TeamInsight() {
  const router = useRouter();
  const { user } = useAuthValue();

  const { data: teamsData } = useGetTeamsQuery();
  const teamName =
    teamsData?.data?.teams?.find((team: any) => team.id === user?.team_id)
      ?.team_name || "N/A";

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

  const { data: usersData } = useGetAllListUsersQuery();

  const allUsers = usersData?.data?.users || [];
  const allTeamMembers = allUsers.filter(
    (userItem) =>
      userItem.team_id === user?.team_id &&
      !userItem.deactivated &&
      userItem?.user_type === 1,
  );
  // const rows = chunkByPattern(teamMembers);
  const mappedTeamMembers = allTeamMembers.map((member: any) => ({
    name: `${member.first_name} ${member.last_name}`,
    image:
      member.has_profile_picture && member.profile_picture_path
        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${member.profile_picture_path}`
        : images.dummyUser,
  }));
  const rows = chunkByPattern(mappedTeamMembers || []);

  const { data: mtjKpiData } = useGetKpiQuery(user?.team_id);
  const kpiData = mtjKpiData;

  const cycleKpi = kpiData?.data?.cycle;

  const teamSnapshot = kpiData?.data?.quiz?.team_snapshot;
  const participation = kpiData?.data?.quiz?.participation;
  const quadrimester = kpiData?.data?.quiz?.quadrimester;

  const { data: cycleOverviewData } = useGetMtjCycleOverviewQuery(
    user?.team_id,
  );

  const cycle = cycleOverviewData?.data?.cycle;
  const teamRituals = cycle?.team_rituals || [];

  const getRemainingWeeks = (endAt?: number | null) => {
    if (!endAt) return "--";

    const now = Date.now();
    const end = new Date(endAt * 1000).getTime();

    const diff = end - now;
    const weeks = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24 * 7)));

    return `${weeks} Weeks`;
  };

  const { data: reflectionApiData } = useGetReflectionWallsQuery(user?.team_id);

  return (
    <>
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

          <div className="bg-[#f6e3bb] p-6 mt-10 rounded-[20px]">
            <div className=" px-10 flex items-center justify-end gap-10  mx-auto">
              <h2 className="text-[38px] font-[RocaTwo] text-[#0F4F58]">
                Team
              </h2>

              <div className="bg-[#F3EEE7] px-6 py-3 rounded-xl text-[#5E7F6F] text-[18px] font-[Roboto]">
                {teamName}
              </div>
            </div>

            <div className="relative z-20 mt-8 space-y-14 mb-[130px]">
              <div>
                <h3 className="text-[30px] font-[RocaTwo] font-bold text-[#0F4F58]">
                  Hi Humaniser! Members
                </h3>
                <div className="text-[#0f4f58] text-[18px] font-[Roboto] mt-2 ml-2">
                  A quick view of who you’re guiding through this shared
                  practice.
                </div>
              </div>
              {!usersData ? (
                <p className="text-[#0F4F58] text-[16px]">
                  Loading team members...
                </p>
              ) : mappedTeamMembers.length === 0 ? (
                <p className="text-[#0F4F58] text-[16px]">
                  No team members found
                </p>
              ) : (
                rows.map((row, rowIndex) => {
                  const isSix = row.length === 6;

                  return (
                    <div key={rowIndex}>
                      <div
                        className={`grid gap-y-8 sm:gap-y-10 md:gap-y-12 gap-x-2 sm:gap-x-4 md:gap-x-6 ${
                          isSix
                            ? "grid-cols-3 sm:grid-cols-6"
                            : "grid-cols-4 sm:grid-cols-8"
                        }`}
                      >
                        {row.map((member: any, index: number) => (
                          <div
                            key={index}
                            className="flex flex-col items-center text-center"
                          >
                            <div className="h-[48px] w-[48px] sm:h-[60px] sm:w-[60px] md:h-[72px] md:w-[72px] rounded-full overflow-hidden">
                              <Image
                                src={member.image}
                                alt={member.name}
                                width={72}
                                height={72}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <p className="mt-2 text-[10px] sm:text-[12px] md:text-[13px] text-[#0F4F58]">
                              {member.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div>
            {/* TEXT (Always on top) */}
            <div className="relative z-20 text-[#567F55]  ml-[43px] font-[400] mt-10">
              {/* PILLARS GRID */}
              <TeamSnapshot
                teamSnapshot={teamSnapshot}
                participation={participation}
                quadrimester={quadrimester}
              />
            </div>
            <div className="mt-10">
              <TeamWorkingOn />
            </div>
            <div className="mt-10">
              <TeamSayingSection
                reflections={reflectionApiData?.data?.reflections ?? []}
              />
            </div>
            {/* ACTION BUTTONS SECTION */}
            <div className="flex flex-col justify-end mt-10 relative z-20">
              <div className="flex justify-end ">
                <div
                  onClick={() =>
                    router.push(`/view-reflection-wall?teamId=${user?.team_id}`)
                  }
                  className="inline-block cursor-pointer"
                >
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
              </div>

              <div className="flex justify-end">
                {/* Bottom Buttons */}
                <div className="flex flex-col gap-4 items-center">
                  <CommonButtons
                    label={`Return to Champion Hub`}
                    bgColor="#cde3cc"
                    onClick={() => router.push("/champion-hub")}
                  />

                  <CommonButtons
                    label="Go to Homepage"
                    bgColor="#cde3cc"
                    onClick={() => router.push("/home")}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* SKY SHAPE CARD */}
        </div>
      </div>
      <LogoutModal />
    </>
  );
}

export default TeamInsight;
