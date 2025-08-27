import Section from "@/components/ui/Section";

const items = [
  {
    title: "GIS & 공간 데이터",
    desc: "PostGIS·GeoServer로 레이어 구성/QA 자동화",
    emoji: "🗺️",
  },
  {
    title: "백엔드/인프라",
    desc: "Spring·Node.js API, Docker, 간단 CI/CD",
    emoji: "🛠️",
  },
  {
    title: "실무형 문제 해결",
    desc: "요구정의→설계→구현→문서화까지 일관된 진행",
    emoji: "🚀",
  },
];

export default function Features() {
  return (
    <Section title="Strengths" subtitle="제가 잘하는 것들">
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="card">
            <div className="text-2xl">{it.emoji}</div>
            <h3 className="mt-2 font-semibold">{it.title}</h3>
            <p className="subtle mt-1">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
