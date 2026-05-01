"use client";

import images from "@/src/assets/images";
import UserProfileHeader from "@/src/modules/UserProfileHeader/Components/UserProfileHeader";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SuggestPressurePointModal, {
  openSuggestPressurePointModal,
} from "../SuggestPressurePointModal/SuggestPressurePointModal";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import useGetTeamsQuery from "@/src/modules/ProfileModule/Hooks/useGetTeamsQuery";
import useGetAllListUsersQuery from "@/src/modules/ProfileModule/Hooks/useGetAllListUsersQuery";
import { chunkByPattern } from "@/src/lib/Helpers";

function TeamFocus() {
  const router = useRouter();
  const { user } = useAuthValue();

  const { data: teamsData } = useGetTeamsQuery();
  const teamName =
    teamsData?.data?.teams?.find((team: any) => team.id === user?.team_id)
      ?.team_name || "N/A";

  const { data: usersData } = useGetAllListUsersQuery();

  const allUsers = usersData?.data?.users || [];
  const allTeamMembers = allUsers.filter(
    (userItem) =>
      userItem.team_id === user?.team_id &&
      !userItem.deactivated &&
      userItem?.user_type === 1,
  );
  const mappedTeamMembers = allTeamMembers.map((member: any) => ({
    name: `${member.first_name} ${member.last_name}`,
    image:
      member.has_profile_picture && member.profile_picture_path
        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${member.profile_picture_path}`
        : images.dummyUser,
  }));
  const rows = chunkByPattern(mappedTeamMembers || []);

  return (
    <>
      <div className="relative min-h-screen bg-[#F3EEE7] px-10 py-10 z-10 font-serif">
        {/* TOP LEFT SHAPE */}

        <div>
          <UserProfileHeader
            greetingColor="#0f4f58"
            nameColor="#0F4F58"
            userInfo={user}
          />
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
            Use this space to listen to your team, notice where pressure is
            showing up, and decide what to work on next.
          </p>

          <p className="text-[#0F4F58] text-[22px] leading-relaxed">
            Team Focus runs in simple cycles — helping you move from awareness
            into shared action.
          </p>
        </div>

        {/* TEAM HEADER BAR */}
        <div className="bg-[#f6e3bb] p-6 mt-10 rounded-[20px]">
          <div className=" px-10 flex items-center justify-end gap-10  mx-auto">
            <h2 className="text-[38px] font-[RocaTwo] text-[#0F4F58]">Team</h2>

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
                A quick view of who you’re guiding through this shared practice.
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
                className="bg-[#f8e1b8] rounded-2xl pt-[20px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                onClick={() => router.push("/pressure-point/urgent")}
              >
                <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                  Everything feels urgent.{" "}
                </h3>

                <div className="relative h-[124px]">
                  <Image
                    src={images.hubPolyThree}
                    alt="shape"
                    fill
                    className="object-contain absolute -left-[24px] top-0"
                  />

                  <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                    My days are driven by escalations, last-minute requests, and
                    constant interruptions, leaving little time to think, plan
                    or lead.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div
                className="bg-[#fbe1de] rounded-2xl pt-[20px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                onClick={() => router.push("/pressure-point/alignment")}
              >
                <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                  Teams are busy, but not aligned{" "}
                </h3>

                <div className="relative h-[124px]">
                  <Image
                    src={images.hubPolyFour}
                    alt="shape"
                    fill
                    className="object-contain"
                  />

                  <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                    My team is working hard, but priorities are interpreted
                    differently — progress feels fragmented and slower than it
                    should be.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div
                className="bg-[#D2E5E6] rounded-2xl pt-[20px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                onClick={() => router.push("/pressure-point/late")}
              >
                <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                  Problems surface too late{" "}
                </h3>

                <div className="relative h-[124px]">
                  <Image
                    src={images.hubPolyOne}
                    alt="shape"
                    fill
                    className="object-contain"
                  />

                  <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                    Issues look fine in meetings, but real risks only emerge
                    once they’re already hard — or expensive — to fix.
                  </p>
                </div>
              </div>
              <div className="col-span-3 grid grid-cols-2 gap-16 max-w-4xl mx-auto">
                {" "}
                {/* CARD 4 */}
                <div
                  className="bg-[#CDE1D0] rounded-2xl pt-[20px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl "
                  onClick={() => router.push("/pressure-point/dependency")}
                >
                  <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                    Too much depends on me.{" "}
                  </h3>

                  <div className="relative h-[124px]">
                    <Image
                      src={images.hubPolyTwo}
                      alt="shape"
                      fill
                      className="object-contain"
                    />

                    <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                      Work relies too heavily on me — when I’m unavailable,
                      decisions stall and momentum drops.
                    </p>
                  </div>
                </div>
                {/* CARD 5 (BOTTOM RIGHT – CENTERED ROW) */}
                {/* CARD 5 */}
                <div
                  className="bg-[#F8E1B8] rounded-2xl pt-[20px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl "
                  onClick={() => router.push("/pressure-point/other")}
                >
                  <h3 className="text-[#0F4F58] font-[RocaTwo] text-center mb-4 text-[22px] font-bold">
                    Something else is making work heavier{" "}
                  </h3>

                  <div className="relative h-[124px]">
                    <Image
                      src={images.hubPolyThree}
                      alt="shape"
                      fill
                      className="object-contain"
                    />

                    <p className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 text-[#0F4F58] font-[Roboto] text-[18px]">
                      The pressure I’m dealing with is real, but it doesn’t
                      quite fit the options above.
                    </p>
                  </div>
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
                These pressure points are grounded in research and real team
                data - but we may not have captured everything. Not seeing what
                you’re dealing with? Let us know{" "}
                <span
                  onClick={openSuggestPressurePointModal}
                  className="underline cursor-pointer text-[#3377bd] font-semibold"
                >
                  HERE
                </span>{" "}
                and help shape what we explore next.
              </p>
            </div>
          </div>

          {/* <div className="flex justify-end mt-4 mb-[7px]">
            <div
              className="cursor-pointer"
              onClick={openSuggestPressurePointModal}
            >
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
          </div> */}
        </div>
      </div>
      <SuggestPressurePointModal />
    </>
  );
}

export default TeamFocus;
