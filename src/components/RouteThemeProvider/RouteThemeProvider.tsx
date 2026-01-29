"use client";

import { usePathname } from "next/navigation";
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

    if (pathname === "/choose-pathway") {
      bg = "#F5F0EB";
      fg = "#0F4F58";
    }

    root.style.setProperty("--background", bg);
    root.style.setProperty("--foreground", fg);
  }, [pathname]);

  return null;
}
