'use client';

import { useState } from 'react';
import Image from 'next/image';
import ProjectModal from '../ui/Modal'; // 앞서 드린 modal.tsx
import { projects } from '@/data/projects';
import type { Project } from '@/types/project';

export default function ProjectsInline() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const onOpen = (p: Project) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <button
            key={p.slug}
            onClick={() => onOpen(p)}
            className="text-left rounded-xl border border-slate-200 p-4 transition hover:shadow-lg dark:border-slate-800"
          >
            {p.coverImage && (
              <div className="relative mb-3 h-40 w-full overflow-hidden rounded-lg">
                <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
              </div>
            )}
            <h4 className="font-semibold">{p.title}</h4>
            <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
              {p.summary}
            </p>
            {/* 배지 */}
            {p.techStack?.length ? (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {p.techStack.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            ) : null}
          </button>
        ))}
      </div>

      {selected && (
        <ProjectModal
          open={open}
          onClose={() => setOpen(false)}
          project={selected}
        />
      )}
    </>
  );
}
