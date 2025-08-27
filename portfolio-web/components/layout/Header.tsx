"use client";

import Link from "next/link";
import SiteNav from "./SiteNav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        border-b border-slate-200/50 dark:border-white/10
        bg-white/80 dark:bg-[#0b0b12]/70
        supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-[#0b0b12]/60
        backdrop-blur
      "
    >
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">BOGEUN</Link>
        <div className="flex items-center gap-6">
          <SiteNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
