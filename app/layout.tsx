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
  title: "Michael Chiedu Ndika Tribute Page",
  description: "A tribute page dedicated to Michael Chiedu Ndika, celebrating his life and legacy.",
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
      <body className="min-h-full flex flex-col mx-auto max-w-xl pt-7 border border-gray-300">
        <HeroHeader />
        <div className="flex-1 pb-24">
          {children}
        </div>
        <div className="fixed bottom-4 left-0 right-0 px-4">
          <div className="max-w-xl mx-auto">
            <TabNav />
          </div>
        </div>
      </body>
    </html>
  );
}
