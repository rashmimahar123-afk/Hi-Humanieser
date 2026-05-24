import UserProfileHeader from "../../UserProfileHeader/Components/UserProfileHeader";
import Image, { StaticImageData } from "next/image";
import images from "@/src/assets/images";
import { useEffect, useRef, useState } from "react";
import useAuthValue, { getAuthValue, setAuthValue } from "../../AuthModule/Hooks/useAuthValue";
import styles from "./Profile.module.css";
import useMyProfileQuery, { GET_PROFILE_QUERY_KEY } from "../Hooks/useMyProfileQuery";
import PartnerProfile from "./PartnerProfile/PartnerProfile";
import useOrganisationDetailsQuery, { GET_ORGANISATION_DETAILS_QUERY_KEY } from "../Hooks/useOrganisationDetailsQuery";
import CompanyStructure from "./CompanyStructure/CompanyStructure";
import LogoutModal from "../../WelcomeModule/Components/LogoutModal/LogoutModal";
import useGetTeamsQuery from "../Hooks/useGetTeamsQuery";
import { useEditUserMutation } from "../Hooks/useEditUserMutation";
import useGetAllListUsersQuery from "../Hooks/useGetAllListUsersQuery";
import ChampionModal from "./ChampionModal/ChampionModal";
import useFindUserQuery from "../../TeamSettingModule/Hooks/useFindUserQuery";
import { formatJoinedDate } from "@/src/lib/Helpers";
import CardFooter from "./CardFooter/CardFooter";
import { useRouter } from "next/navigation";
import { useTogglePartnerRoleMutation } from "../Hooks/useTogglePartnerRoleMutation";
import { TOGGLE_PARTNER_RESPONSE } from "../Types/ResponseTypes";
import { useQueryClient } from "@tanstack/react-query";

function Profile() {
  const [enter, setEnter] = useState(false);
  const [profileImage, setProfileImage] = useState<string | StaticImageData>(
    images.dummyUser,
  );
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const { user } = useAuthValue();
  const orgId = user?.org_id;
  const router = useRouter();
const queryClient = useQueryClient();
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

  // const allTeamMembers = allUsers.filter(
  //   (userItem) =>
  //     userItem.team_id === profileData?.team_id &&
  //     userItem.user_type === 1 &&
  //     !userItem.deactivated, // optional but recommended
  // );

  const effectiveTeamId = selectedTeamId || profileData?.team_id;

  const allTeamMembers = allUsers.filter(
    (userItem) =>
      userItem.team_id === effectiveTeamId &&
      userItem.user_type === 1 &&
      !userItem.deactivated,
  );

  const teamChampion = allUsers.find(
    (userItem) =>
      userItem.team_id === effectiveTeamId &&
      userItem.user_type === 2 &&
      !userItem.deactivated,
  );

  const mappedTeamMembers = allTeamMembers.map((member: any) => ({
    name: `${member.first_name} ${member.last_name}`,
    image:
      member.has_profile_picture && member.profile_picture_path
        ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${member.profile_picture_path}`
        : images.dummyUser,
  }));
  const rows = chunkByPattern(mappedTeamMembers || []);

  const loggedInUserDetails = allUsers.find(
    (u: any) => u.email === user?.sub && u.user_type === user?.user_type,
  );

  const mapUsers = (users: any[] = []) => {
    return users.map((user) => ({
      name: `${user.first_name || ""} ${user.last_name || ""}`.trim() || "N/A",
      image:
        user.has_profile_picture && user.profile_picture_path
          ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${user.profile_picture_path}`
          : images.dummyUser,
    }));
  };
  const partners = allUsers.filter((u) => u.user_type === 3 && !u.deactivated);
  const champions = allUsers.filter((u) => u.user_type === 2 && !u.deactivated);

  const members = allUsers.filter((u) => u.user_type === 1 && !u.deactivated);

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
  const filteredChampions = championsWithMembers.filter(
    (item: any) => item.champion.team_id === user?.team_id,
  );
  const hasMembers = filteredChampions.some(
    (item: any) => item.members && item.members.length > 0,
  );
  const isEmptyState = !hasMembers;



  const { mutate: togglePartnerRole } = useTogglePartnerRoleMutation();

const handleBecomeChampion = (teamId: string) => {
  togglePartnerRole(
    {
      team_id: teamId,
    },
    {
  onSuccess: async (res: TOGGLE_PARTNER_RESPONSE) => {
  const authState = localStorage.getItem("authState");

  if (authState) {
    const parsedAuthState = JSON.parse(authState);

    const updatedAuthState = {
      ...parsedAuthState,
      user: {
        ...parsedAuthState.user,
        user_type: res.user_type,
      },
    };

    // localStorage update
    localStorage.setItem(
      "authState",
      JSON.stringify(updatedAuthState),
    );
  }

  // observable update (IMPORTANT)
  const currentAuth = getAuthValue();

  setAuthValue({
    ...currentAuth,
    user: {
      ...currentAuth.user!,
      user_type: res.user_type,
    },
  });

  // APIs refetch
  await queryClient.invalidateQueries({
    queryKey: GET_PROFILE_QUERY_KEY,
  });

  await queryClient.invalidateQueries({
    queryKey: GET_ORGANISATION_DETAILS_QUERY_KEY,
  });
},

      onError: (error) => {
        console.log(error);
      },
    },
  );
};

const handleBecomePartner = () => {
  togglePartnerRole(
    {
      team_id: undefined,
    },
    {
      onSuccess: async (res) => {
        const authState = localStorage.getItem("authState");

        if (authState) {
          const parsedAuthState = JSON.parse(authState);

          const updatedAuthState = {
            ...parsedAuthState,
            user: {
              ...parsedAuthState.user,
              user_type: res.user_type,
              team_id: undefined,
            },
          };

          localStorage.setItem(
            "authState",
            JSON.stringify(updatedAuthState),
          );
        }

        // observable update
        const currentAuth = getAuthValue();

        setAuthValue({
          ...currentAuth,
          user: {
            ...currentAuth.user!,
            user_type: res.user_type,
            team_id: undefined,
          },
        });

        // refetch queries
        await queryClient.invalidateQueries({
          queryKey: GET_PROFILE_QUERY_KEY,
        });

        await queryClient.invalidateQueries({
          queryKey: GET_ORGANISATION_DETAILS_QUERY_KEY,
        });
      },

      onError: (error) => {
        console.log(error);
      },
    },
  );
};
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

        
         
              <PartnerProfile
                profileData={profileData}
                // organizationData={organizationData}
                teamName={teamName}
                loggedInUserDetails={loggedInUserDetails}
                  handleBecomePartner={handleBecomePartner}

              />
                {user?.user_type === 3 && profileData  ? (
              <CompanyStructure
                profileData={profileData}
                partners={partnersData}
                champions={championsData}
                championsWithMembers={championsWithMembers}
                teamChampion={teamChampion}
              />
          
          ) : (
            <>
      

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
                    {/* <div className="flex justify-start pl-0 sm:pl-4 pt-4">
                      <Image
                        src={images.teamDots}
                        alt=""
                        width={160}
                        height={160}
                        className="w-[100px] sm:w-[130px] md:w-[160px] h-auto"
                      />
                    </div> */}
                    <div className={isEmptyState ? "mt-[200px]" : ""}>
                      <CardFooter
                        label=" Edit Members"
                        onClick={() => router.push("/edit-members?type=member")}
                        disabled={isEmptyState}
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
<ChampionModal onSubmit={handleBecomeChampion} />
    </>
  );
}

export default Profile;
