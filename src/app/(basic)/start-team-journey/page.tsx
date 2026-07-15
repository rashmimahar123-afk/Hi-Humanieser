"use client";

import Loader from "@/src/components/Loader/Loader";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import useGetMtjPollQuery from "@/src/modules/ChampionHubModule/Hooks/useGetMtjPollQuery";
import ChampionTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/ChampionTeamJourney/ChampionTeamJourney";
import HoldTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/HoldTeamJourney/HoldTeamJourney";
import MyTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/MyTeamJourney/MyTeamJourney";
import PartnerTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/PartnerTeamJourney/PartnerTeamJourney";
import StartTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/StartTeamJourney/StartTeamJourney";
import TeamJourney from "@/src/modules/MyTeamJourneyModule/Components/TeamJourney/TeamJourney";
import useGetMtjListQuery from "@/src/modules/MyTeamJourneyModule/Hooks/useGetMtjListQuery";
import useMyProfileQuery from "@/src/modules/ProfileModule/Hooks/useMyProfileQuery";
import { Suspense } from "react";

function StartTeamJourneyPage() {
  const { user } = useAuthValue();
  const { data: myProfileDaa, isLoading: myProfileLoading } =
    useMyProfileQuery();
  const profileData = myProfileDaa?.data;

  const { data, isLoading } = useGetMtjPollQuery();
  const pollData = data?.data;

  const hasCurrentUserResponded =
    pollData?.options?.some((option: any) =>
      option.responses?.some(
        (response: any) => response.user_id === user?.user_id,
      ),
    ) ?? false;

  const { data: mtjListData } = useGetMtjListQuery();

  const rituals = mtjListData?.data?.team_rituals || [];

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <Suspense fallback={"Loading..."}>
      {user?.user_type === 3 ? (
        <PartnerTeamJourney />
      ) : user?.user_type === 2 ? (
        <ChampionTeamJourney />
      ) : //  : pollData?.team_members_left_to_respond !== 0 ? (
      //   <HoldTeamJourney pollData={pollData} profileData={profileData} />
      // )
      // pollData?.poll_open && pollData?.cycle_started ? (
      //   pollData?.ready ? (
      //     <MyTeamJourney />
      //   ) : (
      //     <TeamJourney />
      //   )
      // ) : (
      //   <StartTeamJourney /> // make this page visible whenteam ritual is selected

      // pollData?.cycle_started ? (
      //   pollData?.team_member_count === 0 ? (
      //     <TeamJourney />
      //   ) : !hasResponses ? (
      //     <HoldTeamJourney pollData={pollData} profileData={profileData} /> //this will manage according to userId
      //   ) : (
      //     <MyTeamJourney />
      //   )
      // ) : (
      //   <StartTeamJourney />
      // )

      !pollData?.cycle_started ? (
        <StartTeamJourney />
      ) : !pollData?.poll_open ? (
        rituals?.length === 0 ? (
          <HoldTeamJourney pollData={pollData} profileData={profileData} />
        ) : (
          <TeamJourney rituals={rituals} />
        )
      ) : hasCurrentUserResponded ? (
        <HoldTeamJourney pollData={pollData} profileData={profileData} />
      ) : (
        <MyTeamJourney />
      )}
    </Suspense>
  );
}
export default StartTeamJourneyPage;
