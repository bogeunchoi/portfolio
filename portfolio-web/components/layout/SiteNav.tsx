"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
];

export default function SiteNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        rootMargin: "-55px 0px -70% 0px", // 헤더 높이 보정 + 위쪽 먼저 감지
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="group flex items-center gap-6">
      {SECTIONS.map(({ id, label }) => {
        const href = `#${id}`;
        const isActive = active === id;
        return (
          <a
            key={id}
            href={href}
            className={`relative text-sm transition ${
              isActive ? "text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-300"
            } hover:text-slate-900 dark:hover:text-white`}
          >
            {label}
            <span
              className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-slate-900 dark:bg-white transition-all ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        );
      })}
    </div>
  );
}
