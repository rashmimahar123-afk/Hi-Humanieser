import Image from "next/image";
import images from "@/src/assets/images";
import CommonButtons from "@/src/components/CommonButtons/CommonButtons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useGetTeamsQuery from "../../Hooks/useGetTeamsQuery";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import CardFooter from "../CardFooter/CardFooter";

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

/* ── Reusable member grid ── */
function MemberGrid({ rows }: { rows: any[][] }) {
  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-10">
      {rows.map((row, rowIndex) => {
        const isFour = row.length === 4;
        return (
          <div
            key={rowIndex}
            className={`grid gap-y-6 sm:gap-y-8 md:gap-y-10 gap-x-3 sm:gap-x-6 md:gap-x-10 ${
              isFour ? "grid-cols-4 md:max-w-[700px] md:mx-auto" : "grid-cols-5"
            }`}
          >
            {row.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] md:w-[72px] md:h-[72px] rounded-full overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={72}
                    height={72}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-2 text-[10px] sm:text-[12px] md:text-[14px] text-[#0F4F58] leading-4 md:leading-5 break-words w-full">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

/* ── Reusable card shell ── */
function StructureCard({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-[#F8E1B8] rounded-[18px] sm:rounded-[24px] p-4 sm:p-6 md:p-10 relative mt-6 sm:mt-8 md:mt-10">
      {/* Curve dotted path */}
      <div className="absolute right-3 sm:right-6 md:-right-[5px] top-3 sm:top-6 md:-top-[16px] rotate-[185deg] pointer-events-none">
        <Image
          src={images.teamDot}
          alt=""
          width={300}
          height={120}
          className="w-[120px] sm:w-[200px] md:w-[300px] h-auto opacity-60 sm:opacity-100"
        />
      </div>
      {children}
    </section>
  );
}

/* ── Top partner row (shared by Partners + Champions cards) ── */
function TopPartnerRow({ profileData, teamChampion }: any) {
  return (
    <div className="flex items-center gap-3 sm:gap-5 mb-6 sm:mb-8 md:mb-10">
      <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px] rounded-full overflow-hidden shrink-0">
        <Image
          src={
            teamChampion?.has_profile_picture &&
            teamChampion?.profile_picture_path
              ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${teamChampion.profile_picture_path}`
              : images.dummyUser
          }
          alt="Champion"
          width={72}
          height={72}
        />
      </div>
      <div>
        <h3 className="text-[18px] sm:text-[22px] md:text-[36px] font-semibold text-[#0F4F58]">
          Hi Humaniser!
        </h3>
        <p className="text-[13px] sm:text-[15px] md:text-[18px] text-[#0F4F58]">
          {teamChampion
            ? `${teamChampion.first_name} ${teamChampion.last_name}`
            : `${profileData?.first_name} ${profileData?.last_name}`}
        </p>
      </div>
    </div>
  );
}

/* ── Bottom dots + button row (shared) ── */

function CompanyStructure({
  profileData,

  teamChampion,
  partners = [],
  champions = [],
  championsWithMembers = [],
}: any) {
  const { user } = useAuthValue();
  const partnerRows = chunkByPattern(partners);
  const championRows = chunkByPattern(champions);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<any>(null);

  const { data: teamsData } = useGetTeamsQuery();
  const teams = teamsData?.data?.teams || [];
  const filteredChampions = selectedTeam
    ? championsWithMembers.filter(
        (item: any) => item.champion.team_id === selectedTeam.id,
      )
    : [];

  const hasMembers = filteredChampions.some(
    (item: any) => item.members && item.members.length > 0,
  );

  const isEmptyState = !selectedTeam || !hasMembers;
  return (
    <div className="mt-8 sm:mt-10 md:mt-12 px-0 sm:px-4 md:px-14">
      {/* Title */}
      <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-[RocaTwo] font-bold text-[#0F4F58] mb-4 sm:mb-6">
        Company Structure
      </h2>

      {/* ══ Partners Card ══ */}
      <StructureCard>
        <TopPartnerRow profileData={profileData} teamChampion={teamChampion} />
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-[RocaTwo] font-bold text-[#0F4F58] mb-4 sm:mb-6 md:mb-8">
          Hi Humaniser! Partners
        </h3>
        <MemberGrid rows={partnerRows} />
        <CardFooter
          label=" Edit Partners"
          onClick={() => router.push("/edit-members?type=partner")}
        />
      </StructureCard>

      {/* ══ Champions Card ══ */}
      <StructureCard>
        <TopPartnerRow profileData={profileData} teamChampion={teamChampion} />
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-[RocaTwo] font-bold text-[#0F4F58] mb-4 sm:mb-6 md:mb-8">
          Hi Humaniser! Champions
        </h3>
        <MemberGrid rows={championRows} />
        <CardFooter
          label="Edit Champion"
          onClick={() => router.push("/edit-members?type=champion")}
        />
      </StructureCard>

      {/* ══ Members Card ══ */}
      <StructureCard>
        <TopPartnerRow profileData={profileData} teamChampion={teamChampion} />
        <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-[RocaTwo] font-bold text-[#0F4F58] mb-4 sm:mb-6 md:mb-8">
          Hi Humaniser! Members
        </h3>

        {/* Team selector row — stacks on mobile, inline on sm+ */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 sm:gap-6 md:gap-10 px-0 sm:px-4 md:px-10 mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-[24px] sm:text-[30px] md:text-[38px] font-[RocaTwo] text-[#0F4F58]">
            Team
          </h2>

          <div className="relative w-full sm:w-auto">
            {/* Selected value */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer bg-[#F3EEE7] px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[#5E7F6F] text-[14px] sm:text-[15px] md:text-[16px] flex items-center gap-3 sm:gap-4 w-full sm:min-w-[280px]"
            >
              <span className="truncate">
                {selectedTeam ? selectedTeam.team_name : "Select Team"}
              </span>{" "}
              {/* Arrow */}
              <div className="ml-auto shrink-0 transition-transform duration-200">
                <div
                  className={`w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[9px] border-t-[#0F4F58] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            {/* Dropdown */}
            {isOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-full sm:min-w-[280px] 
  max-h-[250px] overflow-y-auto 
  bg-[#F3EEE7] rounded-xl shadow-md z-50 text-[#5E7F6F]"
              >
                {" "}
                {teams.length > 0 ? (
                  teams.map((team: any) => (
                    <div
                      key={team.id}
                      onClick={() => {
                        setSelectedTeam(team); // pura object store karo
                        setIsOpen(false);
                      }}
                      className="px-4 sm:px-5 py-2.5 sm:py-3 cursor-pointer hover:bg-[#F3EEE7]"
                    >
                      {team.team_name}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm">No team found</div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Champion row */}
        {/* Champions with Members */}
        {filteredChampions.map((item: any, index: number) => {
          const champion = {
            name: `${item.champion.first_name} ${item.champion.last_name}`,
            image:
              item.champion.has_profile_picture &&
              item.champion.profile_picture_path
                ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.champion.profile_picture_path}`
                : images.dummyUser,
          };

          const mappedMembers = item.members.map((m: any) => ({
            name: `${m.first_name} ${m.last_name}`,
            image:
              m.has_profile_picture && m.profile_picture_path
                ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${m.profile_picture_path}`
                : images.dummyUser,
          }));

          const rows = chunkByPattern(mappedMembers);

          return (
            <div key={index} className="mb-10">
              {/* Champion */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
                    <Image
                      src={champion.image}
                      alt={champion.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-[13px] text-[#0F4F58] mt-2">
                    {champion.name}
                  </p>
                </div>

                <h3 className="text-[18px] font-semibold text-[#0F4F58]">
                  Hi Humaniser! Champion
                </h3>
              </div>

              {/* Members */}
              {mappedMembers.length === 0 ? (
                <p className="text-[#0F4F58]">No members found</p>
              ) : (
                <MemberGrid rows={rows} />
              )}
            </div>
          );
        })}
        <div className={isEmptyState ? "mt-[200px]" : ""}>
          <CardFooter
            label=" Edit Members"
            onClick={() => router.push("/edit-members?type=member")}
            disabled={isEmptyState}
          />
        </div>
      </StructureCard>
    </div>
  );
}

export default CompanyStructure;
