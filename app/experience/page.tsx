import ExperienceTimeline, {
  type Experience,
} from "@/components/ExperienceTimeline";
import {
  PageHero,
  PortfolioPage,
  Section,
  SplitCta,
} from "@/components/Portfolio";

export const metadata = {
  title: "Experience | Darwin Liao",
  description:
    "Software development, research and engineering experience from Darwin Liao.",
};

const experiences: Experience[] = [
  {
    organization: "Western University",
    role: "Graduate Researcher and Teaching Assistant",
    period: "2024–2026",
    location: "London, Ontario",
    summary:
      "Graduate research focused on machine learning, anomaly detection and automotive software security, alongside teaching support within the Department of Computer Science.",
    contributions: [
      "Designed and implemented an anomaly-detection framework for screening files inside automotive infotainment software updates.",
      "Built Python data-processing and feature-extraction pipelines for Linux-based IVI and Android Automotive datasets.",
      "Evaluated classical, generative and domain-adaptive machine-learning models under multiple anomaly conditions.",
      "Analyzed model performance, computational cost, cross-domain behaviour and feature importance.",
      "Supported undergraduate computer science courses through teaching, student assistance and assessment.",
    ],
    technologies: "Python / PyTorch / scikit-learn / NumPy / pandas / HDF5 / CuPy / CUDA / Captum / Matplotlib / Seaborn / joblib",
    accent: "lime",
  },
  {
    organization: "Intellijoint Surgical",
    role: "Software Developer",
    period: "2022–2023",
    location: "Kitchener, Ontario",
    summary:
      "Contributed to a production medical-software platform across frontend, backend and application-security concerns.",
    contributions: [
      "Developed full-stack product features using React, Java and Spring.",
      "Created case-sharing and permission functionality for managing access to application data.",
      "Implemented concurrent-access behaviour to support reliable collaboration between users.",
      "Introduced API rate-limiting protections to improve service reliability and reduce misuse.",
      "Created and maintained automated tests while collaborating with developers.",
    ],
    technologies: "React / Java / Spring / REST APIs / SQL ",
    accent: "violet",
  },
  {
    organization: "GE Grid Solutions",
    role: "Software Validation Developer",
    period: "2019",
    location: "Markham, Ontario",
    summary:
      "Worked within an engineering environment supporting software quality, technical investigation, and reliable product delivery.",
    contributions: [
      "Evaluated software behaviour against technical and product requirements.",
      "Investigated failures and documented findings for engineering teams.",
      "Worked with developers and other stakeholders to reproduce and communicate software issues.",
      "Contributed within an established engineering workflow involving technical documentation and structured validation.",
    ],
    technologies: "IEC-61850 / SCADA / TCP/IP / Packet Analysis / Wireshark / C / C++ / Python",
    accent: "amber",
  },
];

export default function ExperiencePage() {
  return (
    <PortfolioPage>
      <PageHero
        eyebrow="Professional experience"
        title="Building software, investigating problems and communicating solutions."
        aside="My experience spans from Low-level system testing to high-level application development in safety critical and regulated environments."
        actions={[
          {
            href: "/Darwin_Liao_Resume.pdf",
            label: "Download résumé",
            download: true,
          },
        ]}
      />

      <Section>
        <ExperienceTimeline items={experiences} />
      </Section>

      <SplitCta
        eyebrow="Research and publications"
        title="See the research behind my automotive security work."
        action={{ href: "/research", label: "View research" }}
      />
    </PortfolioPage>
  );
}
