import Hero from "@/components/sections/Hero";
import Section from "@/components/ui/Section";
import { getAllProjects } from "@/lib/projects";
import ProjectsInline from "@/components/sections/ProjectsInline";
import { Mail, Phone, Github } from "lucide-react"; 

export default function OnePagePortfolio() {
  const projects = getAllProjects();

  return (
    <>
      {/* HOME */}
      <Hero id="home" />

      {/* ABOUT */}
      {/* ABOUT (교체) */}
      <Section id="about" title="About Me" subtitle="소개 · 학력 및 교육 · 경력 · 자격증 · Contact">
        <div className="grid gap-6 md:grid-cols-2">
          {/* 1) 소개: 전체 폭 */}
          <div className="card space-y-3 md:col-span-2">
            <h3 className="font-semibold">소개</h3>
            <div className="space-y-4">
              <p>
                안녕하세요. 웹·백엔드 중심으로 개발하는 <b>최보근</b>입니다.
              </p>
              <p>
                공공·SI 프로젝트를 포함해 2년간 다양한 플랫폼을 구축하며,
                <b> DB 마이그레이션, GIS 빅데이터 처리, 서버 운영</b>까지 폭넓은 경험을 쌓았습니다.
              </p>
              <p>
                POMS(항만시설물 관리)에서는 <b>Tibero→MariaDB 마이그레이션</b>, <b>G-Cloud 이관</b>,
                권한 체계 및 퍼블리싱 개선을 수행했습니다.
              </p>
              <p>
                해양수산부 빅데이터 플랫폼·MSP 서비스에서는
                <b> PostGIS·GeoServer 기반 공간 데이터 처리, QA/QC 자동화, 성능 최적화, 업무 프로세스 개선</b>을 담당했습니다.
              </p>
              <p>
                또한 Python·FFmpeg·AI API를 활용해
                <b> 여행지 추천 → 스크립트 생성 → TTS 나레이션 → 영상 자동 생성</b>까지 이어지는
                자동화 파이프라인을 구축한 경험도 있습니다.
              </p>
              <p>
                Java(Spring), JavaScript, PostgreSQL, GeoServer를 중심으로 안정적이고 확장성 있는 서비스를 설계하며,
                <b> 문제를 제품으로 바꾸는 개발자</b>를 지향합니다.
              </p>
              <p>
                현재는 이커머스 실무 흐름까지 확장하며 기술과 비즈니스를 연결하는 경험을 넓혀가고 있습니다.
              </p>
              <p>
                또한 <b>정보처리기사</b> 자격을 취득하여, 개발 지식과 함께 공인된 역량을 보유하고 있습니다.
              </p>
            </div>
          </div>

          {/* 2) 왼쪽: 자격증 + 학력 (한 카드에 묶음) */}
          <div className="card space-y-4">
            <div>
              <h3 className="font-semibold">학력 및 교육</h3>
              <ul className="text-sm space-y-1 mt-2">
                <li>• 국제대학교 · 전기 전공 전문학사 (졸업연도: 2019)<br /></li>
                <li>• 데이터융합 JAVA응용 SW개발자 기업 채용연계 연수과정 (수료연도: 2023)<br /></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">경력</h3>
              <ul className="text-sm space-y-1">
                <li>• (주)에이아이이 - 전기 엔지니어 (2019.12 ~ 2022.03)</li>
              </ul>
              <ul className="text-sm space-y-1">
                <li>• (주)선도소프트 - 2년차 백엔드, 서버 개발자 (2023.05 ~ 2025.05)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">자격증</h3>
              <ul className="text-sm space-y-1 mt-2">
                <li>• 컴퓨터활용능력 2급 (취득연도: 2019)</li>
                <li>• 정보처리기사 (취득연도: 2023)</li>
              </ul>
            </div>
          </div>

          {/* 3) 오른쪽: 주요 경력 */}
          <div className="card space-y-2">
            <div>
              <h3 className="font-semibold">Contact</h3>
              <ul className="text-sm space-y-2 mt-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-sky-500" />
                  <span>+82 10-5686-8659</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-sky-500" />
                  <a
                    className="underline"
                    href="mailto:chleya0708@naver.com"
                  >
                    chleya0708@naver.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="h-4 w-4 text-sky-500" />
                  <a
                    className="underline"
                    href="https://github.com/bogeunchoi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub 링크
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* 4) Skills (원하면 그대로 유지/이하 생략) */}
          <div className="card md:col-span-2">
            <h3 className="font-semibold mb-3">Skills</h3>

           <div className="grid gap-4 sm:grid-cols-2">
            {/* Frontend */}
            <div>
              <p className="font-medium">Frontend</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="badge">React</span>
                <span className="badge">Next.js</span>
                <span className="badge">TypeScript</span>
                <span className="badge">TailwindCSS</span>
                <span className="badge">HTML5</span>
                <span className="badge">CSS3</span>
                <span className="badge">JavaScript (ES6+)</span>
                <span className="badge">AJAX</span>
                <span className="badge">jQuery</span>
              </div>
            </div>

            {/* Backend */}
            <div>
              <p className="font-medium">Backend</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="badge">Java</span>
                <span className="badge">Spring</span>
                <span className="badge">JSP</span>
                <span className="badge">Node.js</span>
                <span className="badge">MyBatis</span>
                <span className="badge">iBATIS</span>
              </div>
            </div>

            {/* Database & Data */}
            <div>
              <p className="font-medium">Database & Data</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="badge">PostgreSQL</span>
                <span className="badge">PostGIS</span>
                <span className="badge">Oracle</span>
                <span className="badge">MariaDB</span>
                <span className="badge">MySQL</span>
              </div>
            </div>

            {/* DevOps / Infra & QA */}
            <div>
              <p className="font-medium">DevOps / Infra & QA</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="badge">Docker</span>
                <span className="badge">JBoss</span>
                <span className="badge">Tomcat</span>
                <span className="badge">Linux 기본</span>
                <span className="badge">Vercel</span>
                <span className="badge">JMeter</span>
                <span className="badge">OWASP ZAP</span>
                <span className="badge">웹표준(W3C)</span>
                <span className="badge">웹접근성(OpenWAX)</span>
              </div>
            </div>

            {/* GIS / ETL */}
            <div>
              <p className="font-medium">GIS / ETL</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="badge">GeoServer</span>
                <span className="badge">OpenLayers</span>
                <span className="badge">TIF 처리</span>
                <span className="badge">공간데이터 QA/QC</span>
              </div>
            </div>

            {/* Automation / AI / Media */}
            <div>
              <p className="font-medium">Automation / AI / Media</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="badge">Python</span>
                <span className="badge">FFmpeg</span>
                <span className="badge">Selenium</span>
                <span className="badge">Google TTS</span>
                <span className="badge">Gemini API</span>
                <span className="badge">JSON</span>
                {/* 필요시 스케줄링 */}
                {/* <span className="badge">Cron</span> */}
              </div>
            </div>

            {/* Tools & Analytics */}
            <div>
              <p className="font-medium">Tools & Analytics</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="badge">Git</span>
                <span className="badge">GitLab</span>
                <span className="badge">SVN</span>
                <span className="badge">Eclipse</span>
                <span className="badge">IntelliJ IDEA</span>
                <span className="badge">VSCode</span>
                <span className="badge">Postman</span>
                <span className="badge">UTM</span>
              </div>
            </div>
          </div>

          </div>

        </div>
      </Section>


      {/* PROJECTS */}
      <Section id="projects" title="Projects" subtitle="최근 작업과 포트폴리오">
        <ProjectsInline /> 
      </Section>
    </>
  );
}
