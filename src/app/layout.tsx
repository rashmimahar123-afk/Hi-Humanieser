"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { queryClient } from "../lib/ReactQueryConfig";
import RouteThemeProvider from "../components/RouteThemeProvider/RouteThemeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <RouteThemeProvider />
          {children}
          <ToastContainer limit={1} autoClose={1000} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
