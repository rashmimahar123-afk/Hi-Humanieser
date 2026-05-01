"use client";

import Loader from "@/src/components/Loader/Loader";
import useAuthValue from "@/src/modules/AuthModule/Hooks/useAuthValue";
import useGetMtjPollQuery from "@/src/modules/ChampionHubModule/Hooks/useGetMtjPollQuery";
import ChampionTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/ChampionTeamJourney/ChampionTeamJourney";
import MyTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/MyTeamJourney/MyTeamJourney";
import PartnerTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/PartnerTeamJourney/PartnerTeamJourney";
import StartTeamJourney from "@/src/modules/MyTeamJourneyModule/Components/StartTeamJourney/StartTeamJourney";
import { Suspense } from "react";

function StartTeamJourneyPage() {
  const { user } = useAuthValue();
  const { data, isLoading } = useGetMtjPollQuery();
  const pollData = data?.data;

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
      ) : pollData?.ready ? (
        <MyTeamJourney />
      ) : (
        <StartTeamJourney />
      )}
    </Suspense>
  );
}
export default StartTeamJourneyPage;
