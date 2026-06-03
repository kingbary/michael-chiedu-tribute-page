"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Tributes", href: "/" },
  { label: "Biography", href: "/biography" },
  { label: "Gallery", href: "/gallery" },
];

export function TabNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center bg-[#DFD6CB99] rounded-full p-1 max-w-85 mx-auto">
      {tabs.map(({ label, href }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center justify-center flex-1 h-9.5 text-center py-2.5 rounded-full font-cormorant-garamond font-bold text-base transition-all duration-500 ease-linear ${isActive
              ? "bg-white text-[#1A1714] shadow-sm font-bold"
              : "text-secondary font-medium"
              }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
