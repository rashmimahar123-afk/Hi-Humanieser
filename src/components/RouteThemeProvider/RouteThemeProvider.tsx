"use client";

import { usePathname } from "next/navigation";
import path from "path";
import { useEffect } from "react";

export default function RouteThemeProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    // default
    let bg = "#FBE6BF";
    let fg = "#171717";

    if (pathname === "/my-dashboard") {
      bg = "#4BA6A6";
      fg = "#ffffff";
    }
    if (pathname === "/home") {
      bg = "#4BA6A6";
      fg = "#ffffff";
    }
    if (pathname === "/start-team-journey") {
      bg = "#4BA6A6";
      fg = "#ffffff";
    }
    if (pathname === "/personal-pathway") {
      bg = "#4BA6A6";
      fg = "#ffffff";
    }
    if (pathname === "/choose-pathway") {
      bg = "#F5F0EB";
      fg = "#0F4F58";
    }
    if (pathname === "/team-journey") {
      bg = "#4BA6A6";
      fg = "#ffffff";
    }
    if (pathname === "/moments") {
      bg = "#F3EEE7";
      fg = "#0F4F58";
    }

    if (pathname === "/research-room") {
      bg = "#f5f0eb";
      fg = "#0F4F58";
    }

    if (pathname === "/change-password") {
      bg = "#e8e4df";
      fg = "#0F4F58";
    }

    if (pathname === "/team-insight") {
      bg = "#F5F0EB";
      fg = "#0F4F58";
    }

    if (pathname === "/resource-inspiration") {
      bg = "#6FAFB0";
      fg = "#6FAFB0";
    }
    if (pathname === "/my-team") {
      bg = "#4BA6A6";
      fg = "#4BA6A6";
    }

    if (
      pathname === "/profile" ||
      pathname === "/account-setting" ||
      pathname === "/reflection-walls" ||
      pathname === "/view-reflection-wall" ||
      pathname === "/champion-hub" ||
      pathname === "/overseer-hub" ||
      pathname === "/notification" ||
      pathname === "/spread-ripple" ||
      pathname === "/continue-pressure"
    ) {
      bg = "#F5F0EB";
      fg = "#F5F0EB";
    }

    if (pathname === "/organisation-setting") {
      bg = "#F8F4EE";
      fg = "#F8F4EE";
    }
    if (pathname === "/team-focus") {
      bg = "#F3EEE7";
      fg = "#F3EEE7";
    }
    if (pathname.startsWith("/pressure-point/")) {
      bg = "#E9E6E2";
      fg = "#E9E6E2";
    }
    root.style.setProperty("--background", bg);
    root.style.setProperty("--foreground", fg);
  }, [pathname]);

  return null;
}
