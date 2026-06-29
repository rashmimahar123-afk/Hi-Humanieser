"use client";

import { use } from "react";
import useGetMtjPollQuery from "@/src/modules/ChampionHubModule/Hooks/useGetMtjPollQuery";
import PressurePointRecord from "@/src/modules/ChampionHubModule/Components/PressurePointRecord/PressurePointRecord";
import TeamFocus from "@/src/modules/ChampionHubModule/Components/TeamFocus/TeamFocus";
import ChampionNotes from "@/src/modules/ChampionHubModule/Components/ChampionNotes/ChampionNotes";
import ChampionResources from "@/src/modules/ChampionHubModule/Components/ChampionResources/ChampionResources";

type Props = {
  params: Promise<{
    type: string;
  }>;
};

export default function ChampionHubTypePage({ params }: Props) {
  const { type } = use(params);

  const { data } = useGetMtjPollQuery();
  const cycleStarted = data?.data?.cycle_started;
  console.log("cycleStartedcycleStarted", cycleStarted);
  switch (type) {
    case "team-focus":
      return cycleStarted ? <PressurePointRecord /> : <TeamFocus />;

    case "champion-notes":
      return cycleStarted ? <ChampionNotes /> : <TeamFocus />;

    case "champion-resources":
      return cycleStarted ? <ChampionResources /> : <TeamFocus />;

    default:
      return <div>Page not found</div>;
  }
}
