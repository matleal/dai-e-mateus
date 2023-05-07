"use client";

import { MantineProvider } from "@mantine/core";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider>
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
    </MantineProvider>
  );
}
