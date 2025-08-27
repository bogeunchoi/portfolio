import Link from "next/link";

export default function CTA() {
  return (
    <section className="container py-12">
      <div className="card flex flex-col items-center gap-3 text-center">
        <h3 className="heading-2">함께 만들고 싶은 아이디어가 있나요?</h3>
        <p className="subtle">프로젝트 협업 또는 채용 관련 문의를 환영합니다.</p>
        <Link href="/contact" className="btn-primary mt-2">문의하기</Link>
      </div>
    </section>
  );
}
