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
import useMyProfileQuery from "@/src/modules/ProfileModule/Hooks/useMyProfileQuery";
import { Suspense } from "react";

function StartTeamJourneyPage() {
  const { user } = useAuthValue();
  const { data: myProfileDaa, isLoading: myProfileLoading } =
    useMyProfileQuery();
  const profileData = myProfileDaa?.data;

  const { data, isLoading } = useGetMtjPollQuery();
  const pollData = data?.data;
  const cycleStarted = pollData?.cycle_started;
  console.log("pollDatapollDatapollDatapollData", pollData?.poll_open);

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
        <ChampionTeamJourney cycleStarted={cycleStarted} />
      ) : //  : pollData?.team_members_left_to_respond !== 0 ? (
      //   <HoldTeamJourney pollData={pollData} profileData={profileData} />
      // )
      pollData?.poll_open ? (
        pollData?.ready ? (
          <MyTeamJourney />
        ) : (
          <StartTeamJourney />
        )
      ) : (
        <TeamJourney />
      )}
    </Suspense>
  );
}
export default StartTeamJourneyPage;
