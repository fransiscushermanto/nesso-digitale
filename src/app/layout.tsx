import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import DefaultLayout from "@/components/layouts/default-layout";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nesso Digitale Lab",
  description: "Software su misura per imprese & Sviluppatori on-demand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}`}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
