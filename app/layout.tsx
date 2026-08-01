import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import {site} from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s - ${site.seo.title}`,
  },
  description: site.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
