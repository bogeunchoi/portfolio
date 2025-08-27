import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group h-full flex flex-col transition hover:-translate-y-1 hover:shadow-xl">
      {/* 썸네일: 고정 비율 */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-100 to-slate-50 dark:from-white/10 dark:to-white/5" />
        )}
      </div>

      {/* 본문 영역: 높이 표준화 */}
      <div className="mt-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold group-hover:text-sky-500 line-clamp-1">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
          {project.summary}
        </p>

        {/* 배지: 한 줄만, 최대 3개 */}
        <div className="mt-3 flex flex-wrap gap-2 max-h-8 overflow-hidden">
          {project.techStack.slice(0, 3).map((t) => (
            <span key={t} className="badge whitespace-nowrap">{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
