'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, Cpu, Lightbulb, Rocket, CheckCircle } from "lucide-react";

type ProjectDetails = {
  overview?: {
    name?: string;
    period?: string;
    role?: string;
    goal?: string;
  };
  tech?: {
    frontend?: string[];
    uiux?: string[];
    infra?: string[];
    tools?: string[];
  };
  features?: {
    sections?: Array<{ title: string; items: string[] }>;
  };
  outcomes?: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary?: string;
  techStack?: string[];
  coverImage?: string | null;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  body?: string;
  details?: ProjectDetails;
};

export default function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: Project;
}) {
  // ESC 닫기
  useEffect(() => {
  if (open) {
    // ESC 닫기 핸들러
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    // 모달 열릴 때 body 스크롤 막기
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      // 닫힐 때 body 스크롤 원상복구
      document.body.style.overflow = "";
    };
  }
}, [open, onClose]);


  if (!open || !project) return null;

  const d = project.details;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
        {/* Header (이미지 제거, 제목/요약/배지/버튼만) */}
        <header className="border-b border-slate-200 p-4 dark:border-slate-800">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-lg font-semibold">{project.title}</h3>
              {project.summary && (
                <p className="mt-0.5 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                  {project.summary}
                </p>
              )}
              {project.techStack?.length ? (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.techStack.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-xl 
                            bg-indigo-700 text-white hover:bg-indigo-600 
                            dark:bg-indigo-600 dark:hover:bg-indigo-500
                            px-3 py-1.5 text-sm font-medium transition"
                >
                  홈페이지로 이동
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="btn-ghost px-3 py-1.5 text-sm"
                >
                  Github로 이동
                </Link>
              )}

              <button
                onClick={onClose}
                aria-label="닫기"
                className="ml-1 rounded-lg px-2 py-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                ✕
              </button>
            </div>
          </div>
        </header>


        {/* Body (스크롤 영역) */}
        <div className="modal-scroll max-h-[78vh] overflow-y-auto">
          {/* 커버 이미지: 개요 위에 크게 */}
          {project.coverImage && (
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[2/1]">
            <Image
              src={project.coverImage!}
              alt={project.title}
              fill
              priority
              className="object-cover object-[center_30%] rounded-b-xl"
            />
          </div>
          )}

          <div className="space-y-8 p-5 sm:p-6">
            {d ? (
              <>
                {/* 📝 개요 */}
                {(d.overview?.name || d.overview?.period || d.overview?.role || d.overview?.goal) && (
                  <section>
                    <h4 className="mb-3 flex items-center gap-2 text-base font-semibold">
                      <FileText className="h-5 w-5 text-sky-500" /> 개요
                    </h4>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {d.overview?.name && <InfoRow label="프로젝트명" value={d.overview.name} />}
                      {d.overview?.period && <InfoRow label="기간" value={d.overview.period} />}
                      {d.overview?.role && <InfoRow label="역할" value={d.overview.role} />}
                      {d.overview?.goal && <InfoRow label="목적" value={d.overview.goal} />}
                    </div>
                  </section>
                )}

                {/* 🛠 사용 기술 */}
                {(d.tech?.frontend?.length ||
                  d.tech?.uiux?.length ||
                  d.tech?.infra?.length ||
                  d.tech?.tools?.length) && (
                  <section>
                    <h4 className="mb-3 flex items-center gap-2 text-base font-semibold">
                      <Cpu className="h-5 w-5 text-emerald-500" /> 사용 기술
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {d.tech?.frontend?.length ? <TechBlock title="Frontend" items={d.tech.frontend} /> : null}
                      {d.tech?.uiux?.length ? <TechBlock title="UI/UX" items={d.tech.uiux} /> : null}
                      {d.tech?.infra?.length ? <TechBlock title="Infra/배포" items={d.tech.infra} /> : null}
                      {d.tech?.tools?.length ? <TechBlock title="협업/툴" items={d.tech.tools} /> : null}
                    </div>
                  </section>
                )}

                {/* 💡 주요 기능 */}
                {d.features?.sections?.length ? (
                  <section>
                    <h4 className="mb-3 flex items-center gap-2 text-base font-semibold">
                      <Lightbulb className="h-5 w-5 text-amber-500" /> 주요 기능
                    </h4>
                    <div className="space-y-6">
                      {d.features.sections.map((s, idx) => (
                        <div key={idx}>
                          <p className="font-medium">{s.title}</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                            {s.items.map((it, i) => (
                              <li key={i}>{it}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {/* 🚀 성과/특징 */}
                {d.outcomes?.length ? (
                  <section>
                    <h4 className="mb-3 flex items-center gap-2 text-base font-semibold">
                      <Rocket className="h-5 w-5 text-violet-500" /> 성과/특징
                    </h4>
                    <ul className="list-none space-y-2 text-[15px] leading-relaxed">
                      {d.outcomes.map((o, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="mt-1 h-5 w-5 text-green-500" />
                          <span className="text-slate-700 dark:text-slate-300">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ) : null}
              </>
            ) : (
              // details 없으면 body 텍스트 표출
              <pre className="whitespace-pre-wrap leading-relaxed text-slate-700 dark:text-slate-300">
                {project.body ?? '프로젝트 상세가 없습니다.'}
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-2 rounded-lg border border-slate-200 p-3 text-sm dark:border-slate-800">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-800 dark:text-slate-200">
        {value}
      </span>
    </div>
  );
}

function TechBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-medium">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
