import UserProfileHeader from "../../UserProfileHeader/Components/UserProfileHeader";
import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import { useEffect, useRef, useState } from "react";
import useAuthValue from "../../AuthModule/Hooks/useAuthValue";
import styles from "./Profile.module.css";
import useMyProfileQuery from "../Hooks/useMyProfileQuery";
import PartnerProfile from "./PartnerProfile/PartnerProfile";
import useOrganisationDetailsQuery from "../Hooks/useOrganisationDetailsQuery";
import CompanyStructure from "./CompanyStructure/CompanyStructure";
import LogoutModal from "../../WelcomeModule/Components/LogoutModal/LogoutModal";
import useGetTeamsQuery from "../Hooks/useGetTeamsQuery";
import { useEditUserMutation } from "../Hooks/useEditUserMutation";
import useGetAllListUsersQuery from "../Hooks/useGetAllListUsersQuery";
import ChampionModal from "./ChampionModal/ChampionModal";
import useGetRoleBasedUsersListQuery from "../Hooks/useGetRoleBasedUsersListQuery";
import useFindUserQuery from "../Hooks/useFindUserQuery";
import { formatJoinedDate } from "@/src/lib/Helpers";

function Profile() {
  const [enter, setEnter] = useState(false);
  const [profileImage, setProfileImage] = useState<string | StaticImageData>(
    images.dummyUser,
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const { user } = useAuthValue();
  const orgId = user?.org_id;

  useEffect(() => {
    setEnter(true);
  }, []);

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

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const { mutate: editUser, isPending } = useEditUserMutation();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isPending) return;

    const file = e.target.files?.[0];
    if (!file) return;

    const base64 = await convertToBase64(file);

    editUser(
      {
        target_email: profileData?.email || "",
        profile_picture_base64: base64,
      },
      {
        onSuccess: () => {
          const imageUrl = URL.createObjectURL(file);
          setProfileImage(imageUrl);
        },
      },
    );
  };

  const { data, isLoading } = useMyProfileQuery();
  const profileData = data?.data;

  const { data: orgData, isLoading: orgLoading } = useOrganisationDetailsQuery(
    orgId,
    {
      enabled: user?.user_type === 3,
    },
  );
  const organizationData = orgData?.data.organization;

  useEffect(() => {
    if (profileData) {
      if (profileData.has_profile_picture && profileData.profile_picture_path) {
        setProfileImage(
          `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${profileData.profile_picture_path}`,
        );
      } else {
        setProfileImage(images.dummyUser);
      }
    }
  }, [profileData]);

  const { data: teamsData } = useGetTeamsQuery();
  const teamName =
    teamsData?.data?.teams?.find(
      (team: any) => team.id === profileData?.team_id,
    )?.team_name || "N/A";

  const { data: usersData } = useGetAllListUsersQuery();

  const allUsers = usersData?.data?.users || [];
  const allTeamMembers = allUsers.filter(
    (userItem) =>
      userItem.team_id === profileData?.team_id &&
      userItem.user_type === 1 &&
      !userItem.deactivated, // optional but recommended
  );
  const mappedTeamMembers = allTeamMembers.map((member: any) => ({
    name: `${member.first_name} ${member.last_name}`,
    image:
      member.has_profile_picture && member.profile_picture_path
        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${member.profile_picture_path}`
        : images.dummyUser,
  }));
  const rows = chunkByPattern(mappedTeamMembers || []);

  const mapUsers = (users: any[] = []) => {
    return users.map((user) => ({
      name: `${user.first_name || ""} ${user.last_name || ""}`.trim() || "N/A",
      image:
        user.has_profile_picture && user.profile_picture_path
          ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${user.profile_picture_path}`
          : images.dummyUser,
    }));
  };
  const partners = allUsers.filter((u) => u.user_type === 3);

  const champions = allUsers.filter((u) => u.user_type === 2);

  const members = allUsers.filter((u) => u.user_type === 1);

  const partnersData = mapUsers(partners);
  const championsData = mapUsers(champions);
  const championsWithMembers = champions
    .filter((c) => c.team_id) // avoid null team
    .map((champion) => {
      const teamMembers = members.filter(
        (m) => m.team_id === champion.team_id && !m.deactivated,
      );

      return {
        champion,
        members: teamMembers,
      };
    });

  const email = typeof user?.sub === "string" ? user.sub : undefined;
  const { data: findUserData } = useFindUserQuery(email, {
    enabled: user?.user_type === 2,
  });

  const findUserProfile = findUserData?.data?.profile;
  return (
    <>
      <div
        className={`relative min-h-screen w-full overflow-x-hidden bg-[#F5F0EB] ${styles.page} ${
          enter ? styles.enterActive : styles.enter
        }`}
      >
        {/* ── Header ── */}
        <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
          <UserProfileHeader
            greetingColor="#567F55"
            nameColor="#0F4F58"
            userInfo={user}
          />
        </div>

        {/* ── Page body ── */}
        <div className="relative px-3 sm:px-6 md:px-10 lg:px-14">
          {/* Page Title */}
          <div className="mt-2 sm:mt-4 mb-4 sm:mb-6 px-1 sm:px-4 md:px-10">
            <h2 className="text-[28px] sm:text-[36px] md:text-[45px] font-[RocaTwo-Bold] font-bold text-[#0F4F58]">
              Profile
            </h2>
          </div>

          {user?.user_type === 3 && profileData && organizationData ? (
            <>
              <PartnerProfile
                profileData={profileData}
                organizationData={organizationData}
              />
              <CompanyStructure
                profileData={profileData}
                partners={partnersData}
                champions={championsData}
                championsWithMembers={championsWithMembers}
              />
            </>
          ) : (
            <>
              {/* ══ Profile Card ══ */}
              <section className="relative rounded-[18px] sm:rounded-[24px] bg-[#F8E1B8] px-4 sm:px-8 md:px-14 py-8 sm:py-10 md:py-12 overflow-hidden">
                {/* Dots pattern */}
                <div className="absolute right-3 sm:right-6 md:right-12 top-3 sm:top-6 md:top-12 pointer-events-none">
                  <Image
                    src={images.dotsPattern}
                    alt="pattern"
                    width={270}
                    height={270}
                    className="w-[100px] sm:w-[170px] md:w-[220px] lg:w-[270px] h-auto opacity-60 sm:opacity-100"
                  />
                </div>

                {/* Top content: avatar + details */}
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16">
                  {/* Avatar */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="h-[80px] w-[80px] sm:h-[96px] sm:w-[96px] rounded-full overflow-hidden">
                      <Image
                        src={profileImage}
                        alt="Profile"
                        width={168}
                        height={168}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <p
                      className="mt-2 text-[13px] sm:text-[15px] md:text-[16px] text-[#0F4F58] font-[Roboto] cursor-pointer"
                      onClick={handleImageClick}
                    >
                      add/edit picture
                    </p>
                  </div>

                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[26px] sm:text-[34px] md:text-[45px] font-[RocaTwo] font-bold text-[#0F4F58] truncate">
                      {profileData?.first_name} {profileData?.last_name}
                    </h3>
                    <p className="mt-1 text-[15px] sm:text-[17px] md:text-[19px] text-[#0F4F58] font-[Roboto]">
                      Joined {formatJoinedDate(findUserProfile?.created)}
                    </p>
                    <p className="text-[13px] sm:text-[14px] text-[#0F4F58]">
                      Active Member In Hi Humaniser!
                    </p>
                    <div className="mt-3 sm:mt-5 text-[16px] sm:text-[19px] md:text-[22px] text-[#0F4F58] font-[Roboto] font-[400] leading-6 space-y-1">
                      <p>Company: {profileData?.company_name}</p>
                      <p>Team: {teamName}</p>
                    </div>
                  </div>
                </div>

                {/* Input fields — FIX: replaced xs: (invalid) with sm: */}
                <div className="mt-8 sm:mt-10 w-full max-w-3xl space-y-3 sm:space-y-4">
                  {/* First Name */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                    <span className="w-full sm:w-40 text-[13px] sm:text-[15px] text-[#567F55] shrink-0">
                      First Name
                    </span>
                    <input
                      disabled
                      value={profileData?.first_name || ""}
                      className="w-full rounded-[10px] sm:rounded-[14px] bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#567F55] outline-none"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                    <span className="w-full sm:w-40 text-[13px] sm:text-[15px] text-[#567F55] shrink-0">
                      Last Name
                    </span>
                    <input
                      disabled
                      value={profileData?.last_name || ""}
                      className="w-full rounded-[10px] sm:rounded-[14px] bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#567F55] outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                    <span className="w-full sm:w-40 text-[13px] sm:text-[15px] text-[#567F55] shrink-0">
                      email/username
                    </span>
                    <input
                      disabled
                      value={profileData?.email || ""}
                      className="w-full rounded-[10px] sm:rounded-[14px] bg-white px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-[#567F55] outline-none"
                    />
                  </div>
                </div>
              </section>

              {/* Six-dots decoration — stays in normal flow, no overlap */}
              <div className="relative h-10 sm:h-14">
                <div className="absolute sm:left-10 z-10 -top-[38px]">
                  <Image
                    src={images.sixDots}
                    alt="dots"
                    width={116}
                    height={116}
                    className="w-[70px] sm:w-[90px] md:w-[116px] h-auto"
                  />
                </div>
              </div>

              {/* ══ Team Structure ══ */}
              <div className="py-6 sm:py-8 md:py-12 relative z-0">
                {/*
                  FIX: teamDot was absolute without a positioned parent — it
                  escaped the section and overlapped content. Now it's inline
                  (normal flow) above the heading, pointer-events-none so it
                  doesn't block clicks, and overlaps the card edge with -mb
                  so it visually sits on the boundary like the design intends.
                */}

                {/* Section heading */}
                <h2 className="ml-2 sm:ml-6 md:ml-10 text-[22px] sm:text-[28px] md:text-[36px] font-[RocaTwo] font-bold text-[#0F4F58] mb-4 sm:mb-6 relative z-10">
                  Team Structure
                </h2>

                <div className="pointer-events-none -mb-6 sm:-mb-8 pl-2 sm:pl-4 md:pl-8 absolute z-10">
                  <Image
                    src={images.teamDot}
                    alt=""
                    width={520}
                    height={120}
                    className="w-[180px] sm:w-[320px] md:w-[420px] lg:w-[520px] h-auto"
                  />
                </div>
                <section className="rounded-[18px] sm:rounded-[24px] bg-[#F8E1B8] relative overflow-hidden p-3 sm:p-4 md:p-6">
                  {/*
                    FIX: Champion row — use flex-wrap so the polygon badge
                    drops below on narrow viewports instead of squishing.
                    Removed self-start/self-auto which caused tablet misalignment.
                  */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    {/* Champion identity */}
                    <div className="flex items-center gap-3 sm:gap-5">
                      <div className="h-[52px] w-[52px] sm:h-[62px] sm:w-[62px] md:h-[72px] md:w-[72px] rounded-full overflow-hidden shrink-0">
                        <Image
                          src={images.maria}
                          alt="Champion"
                          width={72}
                          height={72}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div>
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-[Roboto] font-semibold text-[#0F4F58]">
                          Hi Humaniser! Champion
                        </p>
                        <p className="text-[13px] sm:text-[14px] md:text-[15px] text-[#0F4F58]">
                          {profileData?.first_name} {profileData?.last_name}
                        </p>
                      </div>
                    </div>

                    {/* Polygon badge — ml-auto pushes it to the right on wide screens */}
                    <div className="relative inline-block ml-auto">
                      <Image
                        src={images.profilePolygon}
                        alt="profile polygon"
                        className="w-[180px] sm:w-[220px] md:w-[280px] h-auto"
                      />
                      <div className="absolute inset-0 flex items-center justify-center z-10 px-2">
                        <p className="text-[11px] sm:text-[14px] md:text-[18px] font-[Roboto] text-[#0B3D3A] text-center">
                          Team:{" "}
                          <span className="font-semibold">{teamName}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Members grid — FIX: removed huge mb, removed broken absolute teamDots */}
                  <div className="relative z-20 mt-6 sm:mt-8 space-y-8 sm:space-y-10 md:space-y-12 mb-4 sm:mb-6">
                    <h3 className="text-[18px] sm:text-[21px] md:text-[24px] font-[RocaTwo] font-bold text-[#0F4F58]">
                      Hi Humaniser! Members
                    </h3>

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

                    {/* FIX: teamDots moved to normal flow at the bottom of the card */}
                    <div className="flex justify-start pl-0 sm:pl-4 pt-4">
                      <Image
                        src={images.teamDots}
                        alt=""
                        width={160}
                        height={160}
                        className="w-[100px] sm:w-[130px] md:w-[160px] h-auto"
                      />
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}
        </div>
      </div>
      <LogoutModal />
      <ChampionModal />
    </>
  );
}

export default Profile;
