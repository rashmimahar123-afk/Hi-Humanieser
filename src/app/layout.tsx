"use client";
import type { Metadata } from "next";
import { QueryClientProvider } from "react-query";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { queryClient } from "../lib/ReactQueryConfig";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <Head>
          <title>Tapcard</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          {children}
          <ToastContainer limit={1} autoClose={1000} />
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </body>
      </html>
    </QueryClientProvider>
  );
}
