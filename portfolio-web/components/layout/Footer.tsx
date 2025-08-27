export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200/50 py-8 text-sm opacity-80 dark:border-white/10">
      <div className="container flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p>© {new Date().getFullYear()} bogeun. All rights reserved.</p>
        <p>Built with <span className="font-semibold">Next.js</span> & Tailwind</p>
      </div>
    </footer>
  );
}
