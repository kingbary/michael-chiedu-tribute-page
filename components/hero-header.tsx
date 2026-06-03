import Image from "next/image";
import MichaelImage from "@/public/michael-chiedu-image.webp";
import { Cross } from "@/components/icons/cross";
import Link from "next/link";

export function HeroHeader() {
  return (
    <div className="flex flex-col items-center px-4 pb-6">
      <div className="flex flex-col items-center gap-2 mb-6">
        <Cross />
        <h2 className="text-secondary font-jost font-medium">IN LOVING MEMORY</h2>
      </div>
      <div className="flex flex-col items-center">
        <Image src={MichaelImage} alt="Michael Chiedu Ndika" width={244} height={244} loading="eager" />
        <div className="flex flex-col items-center mt-6">
          <div className="space-y-1.5">
            <h1 className="text-[#1A1714] text-[28px] font-bold">Michael Chiedu Ndika</h1>
            <span className="text-secondary font-jost font-medium">October 13, 1981  –  May 19, 2026</span>
          </div>
          <div className="bg-primary w-15 h-px flex justify-center my-4"></div>
          <p className="text-lg text-center font-semibold font-cormorant-garamond italic tracking-[-1.1%]">Beloved father, husband, mentor, and keeper of stories. His light remains.</p>
        </div>
        <div className="mt-5.75">
          <Link href="/tribute" className="inline-flex justify-center items-center h-10.5 px-7.75 text-[15px] text-primary font-jost font-medium uppercase tracking-[-1.1%] rounded-full border border-primary transition-colors duration-300 hover:bg-primary hover:text-background">Write a tribute</Link>
        </div>
      </div>
    </div>
  );
}
