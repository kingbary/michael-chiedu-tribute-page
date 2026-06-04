import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { HeroHeader } from "@/components/hero-header";
import { TabNav } from "@/components/tab-nav";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Chiedu Ndika | In Loving Memory",
  description: "A tribute page dedicated to Michael Chiedu Ndika (October 13, 1981 – May 19, 2026). Share your memories, tributes, and photographs celebrating his life and legacy.",
  keywords: ["Michael Chiedu Ndika", "tribute", "in loving memory", "memorial"],
  openGraph: {
    title: "Michael Chiedu Ndika | In Loving Memory",
    description: "Share your memories and tributes in honour of Michael Chiedu Ndika. Beloved father, husband, mentor, and keeper of stories.",
    type: "website",
    images: [{ url: "/michael-chiedu-image.jpeg", width: 800, height: 800, alt: "Michael Chiedu Ndika" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Chiedu Ndika | In Loving Memory",
    description: "Share your memories and tributes in honour of Michael Chiedu Ndika.",
    images: ["/michael-chiedu-image.jpeg"],
  },
  metadataBase: new URL("https://michael-chiedu-tribute-page.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col mx-auto max-w-xl pt-7">
        <HeroHeader />
        <div id="content" className="flex-1 pb-24">
          {children}
        </div>
        <div className="fixed bg-[#F7F3EE] bottom-0 left-0 right-0 p-4">
          <div className="max-w-xl mx-auto">
            <TabNav />
          </div>
        </div>
      </body>
    </html>
  );
}
