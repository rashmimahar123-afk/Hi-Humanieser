"use client";
import AuthContainer from "../modules/AuthModule/Components/AuthContainer/Authcontainer";
import { Suspense } from "react";
import LandingPage from "../modules/WelcomeModule/Components/LandingPage/LandingPage";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-zinc-50 font-sans dark:bg-black">
      <div>
        <Suspense fallback={"Loading..."}>
          <LandingPage />
        </Suspense>
      </div>
    </div>
  );
}
