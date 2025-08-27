import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "개인 포트폴리오 웹",
    summary: "Next.js App Router 기반 반응형 포트폴리오",
    techStack: [],
    coverImage: "/images/project_4.png",
    githubUrl: "",
    demoUrl: "",
    featured: true,
    body: `Problem/Approach/Role/Impact 형식 설명을 여전히 보관하고 싶다면 남겨두세요.`,
    details: {
      overview: {
        name: "개인 포트폴리오 웹사이트",
        period: "2025.08 ~ 2025.08",
        role: "단독 개발 (기획, 디자인, 구현 전담)",
        goal: "기술 스택·프로젝트·경험을 체계적으로 보여주는 웹 포트폴리오 제작",
      },
      tech: {
        frontend: ["Next.js (App Router)", "React", "TypeScript", "TailwindCSS"],
        uiux: ["Framer Motion (애니메이션)", "반응형 디자인", "다크모드 지원"],
        infra: ["Vercel (CI/CD 자동 배포)"],
        tools: ["VSCode", "Git", "GitLab"],
      },
      features: {
        sections: [
          {
            title: "섹션 기반 구조",
            items: [
              "Hero(소개), About, Projects, Skills, Contact 등 직관적 네비게이션",
              "Smooth scroll + 섹션 앵커",
            ],
          },
          {
            title: "반응형 & 다크모드 지원",
            items: [
              "TailwindCSS dark: 프리셋 활용",
              "모바일·태블릿·데스크톱 해상도 최적화",
            ],
          },
          {
            title: "프로젝트 관리 구조",
            items: [
              "getAllProjects()로 프로젝트 정보를 별도 JSON/TS로 분리",
              "데이터만 추가하면 카드/모달 자동 반영",
            ],
          },
          {
            title: "이미지 & 최적화",
            items: [
              "next/image 기반 lazy-loading·자동 최적화",
              "WebP/Responsive Image 대응",
            ],
          },
          {
            title: "UI 디테일",
            items: [
              "부드러운 그라데이션 + Blur로 섹션 경계 최소화",
              "Framer Motion: Hero 텍스트 Fade-in, 카드 Hover 애니메이션",
            ],
          },
        ],
      },
      outcomes: [
        "경력/스킬을 한눈에 보여주는 일관된 채널 확보",
        "반응형 + 다크모드로 사용자 경험 향상",
        "Vercel CI/CD로 커밋 시 자동 배포",
        "Projects 데이터 분리·컴포넌트화로 유지보수성 향상",
      ],
    },
  },
  {
    slug: "poms",
    title: "POMS 항만시설물 관리 플랫폼",
    summary: "Tibero→Maria DB 마이그레이션, 권한 체계 설계, 퍼블리싱 개편, G-Cloud 이전 및 성능 개선",
    techStack: [],
    coverImage: "/images/project_1.png",
    githubUrl: "",
    demoUrl: "https://poms.portcals.go.kr/",
    featured: false,
    body: "",
    details: {
      overview: {
        name: "POMS (Port Operation Management System)",
        period: "2023.05 ~ 2023.10",
        role: "백엔드/DB 마이그레이션/퍼블리싱/클라우드 이전",
        goal: "항만시설물 운영 데이터의 안정적 관리와 인프라 현대화",
      },
      tech: {
        frontend: ["JSP", "HTML", "CSS", "JavaScript"],
        uiux: ["메인 페이지 퍼블리싱 개선"],
        infra: ["Spring Framework", "SVN", "Eclipse", "G-Cloud 이관"],
        tools: ["Tibero → MariaDB 마이그레이션", "SQL 스크립트", "DB 성능 검증"],
      },
      features: {
        sections: [
          {
            title: "DB 마이그레이션",
            items: [
              "기존 Tibero 기반 데이터베이스 → MariaDB로 전환",
              "스키마 변환, 데이터 덤프/적재, 무결성 검증 수행",
              "SQL 호환성 문제(프로시저, 함수, 인덱스 등) 수정 및 최적화",
            ],
          },
          {
            title: "권한 체계 개선",
            items: [
              "계정 단위 시설물 접근 권한 부여 체계 설계",
              "역할(Role) 기반 권한 매핑 및 관리 기능 제공",
            ],
          },
          {
            title: "메인 페이지 퍼블리싱",
            items: [
              "UI 레이아웃 개편으로 주요 지표·모듈 접근성 강화",
              "CSS/JS 최적화를 통한 로딩 속도 개선",
            ],
          },
          {
            title: "G-Cloud 이관",
            items: [
              "기존 항만협회 서버 환경 → G-Cloud로 전체 시스템 이관",
              "데이터/개발 코드/애플리케이션 배포 환경 이전 및 검증",
              "보안·네트워크 정책에 맞춘 환경 재구성",
            ],
          },
          {
            title: "기타 버그 및 성능 개선",
            items: [
              "사용자 피드백 기반 UI/UX 버그 수정",
              "쿼리 튜닝 및 캐싱 전략으로 응답 속도 최적화",
            ],
          },
        ],
      },
      outcomes: [
        "Tibero → MariaDB 전환으로 DB 라이선스 비용 절감 및 운영 유연성 확보",
        "계정·권한 체계 정립으로 보안 강화 및 사용자 업무 효율 개선",
        "메인 페이지 개편으로 접근성·가독성 향상",
        "G-Cloud 이전으로 인프라 표준화 및 안정성 확보",
        "버그 수정 및 성능 개선으로 시스템 안정성·사용자 만족도 향상",
      ],
    },
  },
  {
    slug: "mof-bigdata-platform",
    title: "해양수산부 빅데이터 플랫폼",
    summary: "공간 데이터 파이프라인·GIS 카테고리/검색 기능·품질검증 기반의 빅데이터 플랫폼 구축",
    techStack: [
    ],
    coverImage: "/images/project_2.png",
    githubUrl: "",
    demoUrl: "https://vadahub.go.kr/user/main/index.do",
    featured: false,
    body: "",
    details: {
      overview: {
        name: "해양수산부 빅데이터 플랫폼",
        period: "2023.10 ~ 2025.05",
        role: "데이터 파이프라인·GIS 기능 개발·플랫폼 운영",
        goal: "해양 공간 데이터의 수집·정제·분석·검색·추천을 아우르는 통합 플랫폼 구축",
      },
      tech: {
        frontend: ["JSP", "HTML", "CSS", "JavaScript", "OpenLayers"],
        uiux: ["퍼블리싱 개편", "GIS 데이터 카테고리 구조 개편", "검색/추천 UI"],
        infra: ["JBoss", "이중화 WAS/GeoServer/DB", "GitLab CI/CD"],
        tools: [
          "GeoServer", "PostgreSQL/PostGIS", "QGIS", "GDAL",
          "OpenWAX", "JMeter", "OWASP ZAP", "W3C Validator"
        ],
      },
      features: {
        sections: [
          {
            title: "퍼블리싱 및 UI/UX 개편",
            items: [
              "메인 및 서브 페이지 퍼블리싱 구조 개선",
              "GIS 데이터 카테고리 구조 개편 및 시각화 개선",
              "데이터 추천 및 검색 기능 구현 (사용 로그 기반 추천/검색 기록 관리)",
            ],
          },
          {
            title: "내부망/외부망 운영",
            items: [
              "내/외부망 공통: GIS 데이터 조회/검색/추천 기능 제공",
              "내부망 전용: 공간별 GIS 데이터 카테고리 세분화·분류 기능 구현",
            ],
          },
          {
            title: "데이터/코드 이관 및 배포",
            items: [
              "개발 단계에서 작성한 코드 실제 서버(WAS) 반영",
              "DB 스키마 및 데이터 반영",
              "대용량 GIS TIF 파일 이관 및 GeoServer 연계 표출",
              "이중화된 WAS/GeoServer/DB 서버 환경에 배포 및 안정화",
            ],
          },
          {
            title: "테스트 및 품질 검증",
            items: [
              "OpenWAX 기반 웹 접근성 검증",
              "JMeter 부하 테스트",
              "OWASP ZAP 보안 점검",
              "W3C 웹표준 유효성 검사",
            ],
          },
          {
            title: "네트워크 관리",
            items: [
              "개발 서버 네트워크 관리 수행",
              "포트 포워딩 설정, IP 관리 및 접근 제어",
            ],
          },
        ],
      },
      outcomes: [
        "GIS 데이터 카테고리·검색·추천 기능 강화로 탐색성과 활용도 증대",
        "내/외부망 이원화 구조 대응으로 안정적인 데이터 제공",
        "이중화 서버(WAS/GeoServer/DB) 운영 안정화로 가용성 확보",
        "QA·보안·성능 테스트 수행으로 품질과 보안성 강화",
        "개발→운영 배포 과정에서 데이터/코드/이미지(TIF) 안정적으로 이관 완료",
      ],
    },
  },
  {
    slug: "msp-service",
    title: "MSP 서비스",
    summary: "대용량 GIS 데이터 QA/QC·좌표변환·성능 최적화 및 업무 프로세스 개선",
    techStack: [
    ],
    coverImage: "/images/project_3.png",
    githubUrl: "",
    demoUrl: "https://msp.go.kr",
    featured: false,
    body: "",
    details: {
      overview: {
        name: "MSP 서비스",
        period: "2023.10 ~ 2025.05",
        role: "GIS 데이터 QA/QC·좌표변환·퍼블리싱 개편·업무 프로세스 개선",
        goal: "대용량 GIS 데이터의 안정적 관리와 공무원 업무 효율을 높이는 서비스 제공",
      },
      tech: {
        frontend: ["OpenLayers", "JSP/JS", "HTML/CSS"],
        uiux: ["메인페이지 개편(공무원 업무 직관성 강화)", "퍼블리싱 개선"],
        infra: ["이중화 WAS/GeoServer/DB", "JBoss", "GitLab CI/CD"],
        tools: [
          "Python (QA/QC 자동화, GeoServer 발행 일괄처리)",
          "PostgreSQL/PostGIS", "GeoServer", "GDAL", "QGIS",
          "OpenWAX", "JMeter", "OWASP ZAP", "W3C Validator"
        ],
      },
      features: {
        sections: [
          {
            title: "대용량 GIS 데이터 처리",
            items: [
              "약 30~40GB 규모 GIS 데이터 QA/QC 자동화 (Python)",
              "다양한 확장자 데이터 좌표계 변환 및 PostGIS 적재",
              "CSV 외 복수 형식의 공간데이터 처리·이관",
            ],
          },
          {
            title: "퍼블리싱 및 UI 개선",
            items: [
              "외부망: 메인/서브 퍼블리싱 개편으로 시각적 개선",
              "내부망: GIS 데이터 카테고리 분류 기반 분석 및 표출",
              "웹 플랫폼 내 레이어 표출 검증 및 최적화",
            ],
          },
          {
            title: "업무 프로세스 개선",
            items: [
              "공무원 '적합성 협의' 프로세스 중 **반려 처리** 개선",
              "내부망 메인페이지를 공무원 업무 직관적으로 개편",
              "지역별 GIS 데이터 표출 속도를 캐싱 처리로 20초 → 1~2초 단축",
            ],
          },
          {
            title: "서버 이관 및 자동화",
            items: [
              "개발 단계 코드/DB → 운영 서버 이관",
              "대용량 GIS TIF 파일 서버 반영 및 GeoServer 연계",
              "GeoServer 레이어 발행을 Python 코드로 일괄처리 자동화",
            ],
          },
          {
            title: "테스트 및 네트워크 관리",
            items: [
              "웹 접근성(OpenWAX), 부하(JMeter), 보안(OWASP ZAP), 웹표준(W3C) 검증",
              "개발 서버 네트워크 관리 (포트포워딩·IP 관리)",
            ],
          },
        ],
      },
      outcomes: [
        "대용량 GIS 데이터 처리 자동화로 데이터 품질 및 운영 효율 향상",
        "퍼블리싱 및 UI 개편으로 내부·외부 사용자 경험 개선",
        "공무원 업무 프로세스 개선으로 행정 처리 효율성 증가",
        "캐시 최적화로 대용량 데이터 표출 속도를 20초 → 1~2초로 단축",
        "GeoServer 발행 자동화로 운영 생산성 향상",
        "테스트 및 네트워크 관리로 품질·보안·안정성 확보",
      ],
    },
  },
  {
    slug: "travel-ai-video-automation",
    title: "여행지 자동 추천 · AI 스크립트 · TTS 영상 자동화",
    summary: "여행지 추천 → 스크립트 생성 → 음성합성 → 컷 편집까지 완전 자동 파이프라인",
    techStack: [
    ],
    coverImage: "/images/project_5.png", 
    githubUrl: "",  
    demoUrl: "",    
    featured: false,
    body: "",
    details: {
      overview: {
        name: "여행지 추천 기반 AI 영상 자동 생성",
        period: "2025.06 ~ 2025.07",
        role: "단독 개발 (데이터 수집·AI 스크립트·TTS·렌더링 자동화)",
        goal: "사용자 개요만으로 여행 소개 영상을 자동 생성해 제작 시간을 대폭 단축",
      },
      tech: {
        frontend: [],
        uiux: ["자동 자막 삽입(캡션 오버레이)", "컷 전환/트랜지션 규칙화"],
        infra: ["FFmpeg CLI 파이프라인"],
        tools: [
          "Python", "Selenium(데이터 수집 자동화)", "Google TTS",
          "Gemini API(원고/요약 생성)", "FFmpeg(컷 편집/믹싱)", "JSON(메타/타임라인)"
        ],
      },
      features: {
        sections: [
          {
            title: "여행지 추천·데이터 수집",
            items: [
              "여행/숙소 API(예: HotelsCombined/Agoda 등) 조회로 인기 여행지·핵심 포인트 수집",
              "Selenium으로 보조 자료 스크래핑(필요 시) 및 JSON 정규화",
            ],
          },
          {
            title: "AI 스크립트 & 나레이션",
            items: [
              "Gemini API로 여행 코스 개요→내레이션 스크립트 자동 생성",
              "Google TTS로 멀티 보이스 합성(속도/톤/휴지 설정)",
            ],
          },
          {
            title: "자동 편집 파이프라인",
            items: [
              "FFmpeg로 씬 단위 타임라인 생성(인트로/본문/아웃트로)",
              "배경음/나레이션/효과음 레벨링 & 페이드 인/아웃",
              "한글 자막 오버레이(타임코드 동기화)",
            ],
          },
          {
            title: "운영 자동화",
            items: [
              "환경 변수/프로필 기반 실행(개발·운영 분리)",
            ],
          },
        ],
      },
      outcomes: [
        "아이디어→완성 영상까지 전 과정 자동화로 제작 시간 대폭 단축",
        "일관된 스크립트 톤·컷 구성을 표준화해 퀄리티 안정화",
        "데이터 기반 추천으로 주제 선정 효율 상승",
      ],
    },
  }
];
