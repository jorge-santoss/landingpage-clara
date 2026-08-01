import type {Metadata} from "next";
import {Geist} from "next/font/google";
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
    openGraph: {
        type: "website",
        locale: "fr_FR",
        url: "/",
        title: site.seo.title,
        description: site.seo.description,
        images: [
            {
                url: "/og.jpg",
                width: 1200,
                height: 630,
                alt: site.seo.title,
            },
        ],
    },
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
