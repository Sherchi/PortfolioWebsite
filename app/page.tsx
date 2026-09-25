import ProjectCaseStudy from "@/components/ProjectCaseStudy";
<<<<<<< HEAD
import HomePreviewGrid from "@/components/HomePreviewGrid";
import HomeTechStack from "@/components/HomeTechStack";
import { otaSentinelHomeSlides } from "@/data/otaSentinelSlides";
=======
>>>>>>> fe047d0 (Update)
import {
  NumberedSection,
  PageHero,
  PortfolioPage,
<<<<<<< HEAD
=======
  PreviewGrid,
>>>>>>> fe047d0 (Update)
  SplitCta,
  SummaryList,
} from "@/components/Portfolio";

const areasOfWork = [
  {
    title: "Full-stack development",
    description:
      "User-facing features, backend services, APIs, permissions and maintainable production code.",
  },
  {
    title: "Machine learning",
    description:
      "Anomaly detection, deep learning, feature engineering and experimental evaluation.",
  },
  {
    title: "Secure systems",
    description:
      "Automotive cybersecurity, network security and software systems designed around practical threat models.",
  },
];

<<<<<<< HEAD
const technologies = [
  { label: "Python", mark: "Py" },
  { label: "TensorFlow", mark: "TF" },
  { label: "PyTorch", mark: "PT" },
  { label: "scikit-learn", mark: "SK" },
  { label: "React", mark: "⚛" },
  { label: "Java", mark: "Jv" },
  { label: "Spring", mark: "Sp" },
  { label: "CUDA", mark: "Cu" },
  { label: "SQL", mark: "DB" },
  { label: "AWS", mark: "AWS" },
];

=======
>>>>>>> fe047d0 (Update)
const previews = [
  {
    eyebrow: "Experience",
    title: "Software development grounded in real product work.",
    items: [
      {
        title: "Intellijoint Surgical",
        body: "Full-stack development using React, Java and Spring, including application permissions, API protections and collaborative product features.",
      },
      {
        title: "Western University",
        body: "Graduate research in machine learning, automotive software security and anomaly detection.",
      },
    ],
    link: { href: "/experience", label: "View experience" },
  },
  {
    eyebrow: "Research",
    title: "Automotive OTA security and anomaly detection.",
    items: [
      {
        title: "OTArmor",
        body: "Securing Automotive Over-the-Air Updates Against Malware Using Generative Modeling, published at CSNet 2025.",
      },
    ],
    link: { href: "/research", label: "View research and conferences" },
  },
];

export default function Home() {
  return (
    <PortfolioPage>
      <PageHero
        eyebrow="Software Developer · Ontario, Canada"
        title="Darwin Liao"
        aside={
          <SummaryList
            items={[
              { label: "M.Sc. Computer Science", value: "Western University" },
              {
                label: "Areas of focus",
                value: "Full-stack systems, ML, Network Analysis, and cybersecurity",
              },
              {
                label: "Looking for",
                value: "Early-career software development roles",
              },
            ]}
          />
        }
        actions={[
          { href: "/projects", label: "Explore my work" , muted: true},
          { href: "/research", label: "Read my research", muted: true },
        ]}
      />

      <HomeTechStack items={technologies} />

      <ProjectCaseStudy
        category="Featured project"
        number="01"
        overline="Master's thesis project"
        title="OTA-Sentinel"
        description="A pre-installation anomaly-screening framework designed to examine files inside automotive infotainment updates before installation is allowed to proceed."
        details={[
          { label: "Problem", value: "Signed updates may still contain suspicious files" },
          { label: "Approach", value: "Static analysis and unsupervised learning" },
          { label: "Platforms", value: "Linux-based IVI and Android Automotive" },
          { label: "Built with", value: "Python, TensorFlow and scikit-learn" },
        ]}
        technologies="Python / TensorFlow / scikit-learn / HDF5 / CUDA"
        action={{ href: "/projects", label: "View the full project", muted: true }}
        visual={{
          slides: otaSentinelHomeSlides,
        }}
      />

      <NumberedSection
        eyebrow="Areas of work"
        title="From application code to research systems."
        items={areasOfWork}
      />

      <HomePreviewGrid panels={previews} />

      <SplitCta
        eyebrow="Contact"
        title="Interested in working together?"
        action={{ href: "mailto:darwinliao@yahoo.ca", label: "Send me an email", muted: true }}
      />
    </PortfolioPage>
  );
}
