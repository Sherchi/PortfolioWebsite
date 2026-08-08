import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { otaSentinelProjectSlides } from "@/data/otaSentinelSlides";
import {
  NumberedSection,
  PageHero,
  PortfolioPage,
  Section,
  SectionHeader,
  SplitCta,
} from "@/components/Portfolio";
import {
  ConferenceList,
  PublicationList,
  ResearchAreaGrid,
  type Conference,
  type Publication,
  type ResearchArea,
} from "@/components/ResearchCollections";

export const metadata = {
  title: "Research | Darwin Liao",
  description:
    "Automotive cybersecurity, machine learning and anomaly-detection research by Darwin Liao.",
};

const publications: Publication[] = [
  {
    year: "2025",
    title:
      "OTArmor: Securing Automotive Over-the-Air Updates Against Malware Using Generative Modeling",
    authors: "Darwin Liao and M. A. Elsayed",
    venue: "9th Cyber Security in Networking Conference (CSNet)",
    details: "Abu Dhabi, United Arab Emirates, pp. 207–214",
    status: "Conference paper",
    doi: "10.1109/CSNet67572.2025.11288195",
    href: "https://doi.org/10.1109/CSNet67572.2025.11288195",
  },
];

const conferences: Conference[] = [
  {
    year: "2025",
    name: "9th Cyber Security in Networking Conference",
    shortName: "CSNet 2025",
    location: "Abu Dhabi, United Arab Emirates",
    participation: "Author and presenter",
    description:
      "Presented research on using generative modelling to detect anomalous and potentially malicious files in automotive over-the-air update environments.",
  },
];

const contributions = [
  {
    title: "Real-data foundation",
    description:
      "Evaluated the framework using actual vendor and platform-derived infotainment software contents rather than relying only on synthetic benign data.",
    accent: "lime" as const,
  },
  {
    title: "Domain evaluation",
    description:
      "Measured how anomaly-detection models behave within and across Linux-based IVI and Android Automotive software domains.",
    accent: "violet" as const,
  },
  {
    title: "Limited-data adaptation",
    description:
      "Investigated whether meta-learning could support adaptation to new software domains using small benign support sets.",
    accent: "amber" as const,
  },
  {
    title: "Efficiency and scalability",
    description:
      "Measured preprocessing costs and considered centralized and parallel deployment paths within an automotive OTA pipeline.",
    accent: "blue" as const,
  },
];

const researchAreas: ResearchArea[] = [
  {
    title: "Automotive cybersecurity",
    description:
      "Security challenges affecting connected vehicles, infotainment systems and over-the-air software updates.",
    accent: "lime",
  },
  {
    title: "Anomaly detection",
    description:
      "Unsupervised and generative methods for identifying suspicious files when labelled domain-specific malware is limited.",
    accent: "violet",
  },
  {
    title: "Secure software delivery",
    description:
      "Content-level screening that complements signatures, authorization, integrity verification and rollback protection.",
    accent: "amber",
  },
  {
    title: "Applied machine learning",
    description:
      "Feature engineering, domain adaptation, experimental evaluation and practical deployment constraints.",
    accent: "blue",
  },
];

export default function ResearchPage() {
  return (
    <PortfolioPage>
      <PageHero
        eyebrow="Research and publications"
        title="PLACEHOLDER AAAAAAAAAAAAAAAAA"
        aside="My research examines how static analysis and machine learning can help identify suspicious files inside automotive software updates before installation."
      />

      <ProjectCaseStudy
        category="Master's thesis"
        overline="Western University · Computer Science · 2026"
        title="Lightweight Static File Analysis for Pre-Installation Anomaly Screening in Automotive OTA Updates"
        description="Modern automotive update systems use signatures, authorization and integrity verification to establish delivery trust. My thesis investigates a separate question: whether the files inside an accepted package appear benign for the target software environment."
        details={[
          {
            label: "Data",
            value:
              "Vendor Linux-based IVI files and Android-Automotive-derived update contents.",
          },
          {
            label: "Features",
            value:
              "File size, entropy, byte histograms, count features and byte 3-gram representations.",
          },
          {
            label: "Models",
            value:
              "Classical, generative and domain-adaptive anomaly-detection methods.",
          },
          {
            label: "Evaluation",
            value:
              "External malware, localized modifications, dispersed modifications and cross-domain testing.",
          },
        ]}
        action={{ href: "/liao_darwin_msc_2026_thesis.pdf", label: "View the thesis" }}
        visual={{
          slides: otaSentinelProjectSlides,
        }}
      />

      <NumberedSection
        eyebrow="Thesis contributions"
        title="Research grounded in real update contents."
        items={contributions}
        alternate
      />

      <Section>
        <SectionHeader
          eyebrow="Publications"
          title="Published research"
          meta="Peer-reviewed conference work"
        />
        <PublicationList items={publications} />
      </Section>

      <Section alternate>
        <SectionHeader
          eyebrow="Conferences"
          title="Presentations and participation"
        />
        <ConferenceList items={conferences} />
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Research interests"
          title="Problems I want to continue exploring."
        />
        <ResearchAreaGrid items={researchAreas} />
      </Section>

      <SplitCta
        eyebrow="Research discussion"
        title="Interested in automotive security or applied anomaly detection?"
        action={{ href: "mailto:darwinliao@yahoo.ca", label: "Get in touch" }}
      />
    </PortfolioPage>
  );
}
