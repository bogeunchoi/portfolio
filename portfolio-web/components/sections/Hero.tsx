import Image from "next/image";

export default function Hero({ id }: { id?: string }) {
  return (
    <section id={id} className="section-anchor relative overflow-hidden">
      {/* 배경 장식 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-20%] top-[-20%] h-80 w-80 rounded-full bg-gradient-to-tr from-sky-400/30 to-fuchsia-400/30 blur-3xl" />
        <div className="absolute right-[-20%] bottom-[-20%] h-96 w-96 rounded-full bg-gradient-to-tr from-violet-400/30 to-emerald-400/30 blur-3xl" />
      </div>

      <div className="container flex flex-col items-center pt-24 sm:pt-40 pb-16 sm:pb-24">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-slate-800">
          <Image src="/images/profilo.jpeg" alt="최보근" fill className="object-cover" />
        </div>

        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight sm:text-5xl">
          <span className="bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
            안녕하세요, 웹 개발자<br/>최보근입니다
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-center text-base text-slate-600 dark:text-slate-300 sm:text-lg">
          GIS·빅데이터 플랫폼과 DB 마이그레이션 경험,<br className="hidden sm:block" />
          Spring/Java · Python · PostgreSQL 기반 백엔드 개발 역량,<br className="hidden sm:block" />
          그리고 Next.js · AI 자동화 프로젝트까지<br className="hidden sm:block" />
          문제를 제품으로 바꾸는 개발자입니다.
        </p>

        <div className="mt-6 flex gap-3">
          <a href="#about" className="btn-ghost">소개</a>
          <a href="#projects" className="btn-primary">프로젝트 보기</a>
        </div>
      </div>
    </section>
  );
}
