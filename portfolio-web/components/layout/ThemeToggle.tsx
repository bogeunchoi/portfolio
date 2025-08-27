"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
  }, [mounted, dark]);

  return (
    <button
      aria-label="toggle theme"
      className="btn-ghost px-2 py-1 text-xs"
      onClick={() => setDark(v => !v)}
    >
      {dark ? "Dark" : "Light"}
    </button>
  );
}
