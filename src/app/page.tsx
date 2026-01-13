"use client";
import AuthContainer from "../modules/AuthModule/Components/AuthContainer/Authcontainer";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        <Suspense fallback={"Loading..."}>
          <AuthContainer />
        </Suspense>
      </div>
    </div>
  );
}
