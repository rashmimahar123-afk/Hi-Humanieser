"use client";
import ChampionNotes from "@/src/modules/ChampionHubModule/Components/ChampionNotes/ChampionNotes";
import AccountSetting from "@/src/modules/ProfileModule/Components/AccountSetting/AccountSetting";
import ChampionHub from "@/src/modules/ProfileModule/Components/ChampionHub/ChampionHub";
import Profile from "@/src/modules/ProfileModule/Components/Profile";
import ProfilePathway from "@/src/modules/ProfileModule/Components/ProfilePathway/ProfilePathway";
import React, { Suspense } from "react";

function ChampionNotesPage() {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <ChampionNotes />
      </Suspense>
    </>
  );
}

export default ChampionNotesPage;
