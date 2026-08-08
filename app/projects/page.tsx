import {
  ProjectCardGrid,
  type ProjectCaseStudyProps,
} from "@/components/ProjectCaseStudy";
import {
  PageHero,
  PortfolioPage,
  SplitCta,
} from "@/components/Portfolio";
import { otaSentinelProjectSlides } from "@/data/otaSentinelSlides";


export const metadata = {
  title: "Projects | Darwin Liao",
  description:
    "Selected software development, machine learning and cybersecurity projects by Darwin Liao.",
};

const projects: ProjectCaseStudyProps[] = [
  {
    number: "01",
    category: "Cybersecurity / Machine Learning",
    overline: "Master's thesis project",
    title: "OTA-Sentinel",
    description:
      "A pre-installation anomaly-screening framework for examining files inside automotive infotainment updates before installation or activation.",
    details: [
      {
        label: "Problem",
        value:
          "Cryptographic verification establishes that an update is authentic and authorized, but does not establish that every accepted file is benign.",
      },
      {
        label: "Approach",
        value:
          "Extracted static file characteristics including size, entropy, byte distributions and byte 3-grams, then evaluated multiple unsupervised anomaly-detection models.",
      },
      {
        label: "Evaluation",
        value:
          "Tested using vendor Linux-based IVI files, Android-Automotive-derived contents, external malware and controlled file modifications.",
      },
    ],
    technologies: "Python / TensorFlow / scikit-learn / HDF5 / CUDA",
    accent: "lime",
    action: { href: "/research", label: "Learn More" },
    secondaryAction: { 
      href: "/liao_darwin_msc_2026_thesis.pdf", 
      label: "Read the Research (Under Publication)",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    visual: {
      slides: otaSentinelProjectSlides,
    },
  },
  {
    number: "02",
    category: "Full-stack development / Medical software",
    overline: "Intellijoint Surgical",
    title: "Intellijoint VIEW",
    description:
        "Preplanning web application designed to support surgeons before hip and knee replacement. Allows them to visualize and plan different types of implants and approaches to the surgery.",
    details: [
      {
        label: "Role",
        value:
          "Full-stack developer on team, responsible for implementing various features and addressing any bugs that occured.",
      },

      {
        label: "My Involvement",
        value: (
          <>
          Designed and implemented case sharing, permission-based access, and concurrent-access functionality for multi-user surgical planning workflows.
          <br />
          Also implemented rate and size limiting features also well as other security based measures to comply with international medical privacy requirements,
          </>
          ),
      },
      {
        label: "Quality",
        value:
          "Added and maintained automated frontend and backend tests using Jest and Spring testing tools, helping validate new functionality and reduce regressions.",
      },

    ],
    technologies:
      "React / Java / Spring / REST / SQL / Jest",
    accent: "violet",
    alternate: true,
    reverse: true,
    action: {
      href: "https://intellijointsurgical.com/view/",
      label: "Visit Intellijoint VIEW",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    visual: {
      imageSrc: "/Images/IntellijointViewPic.png",
      imageAlt: "Intellijoint VIEW preoperative planning application",
      objectPosition: "center",
    },
  },
  {
    number: "03",
    category: "Cloud / API development",
    overline: "Collaborative software project",
    title: "Project Lumi",
    description:
      "An Eternal Return community and content creator Leaderboard. Integrates with the game's public API to display player statistics and rankings, and allows users to submit goals for their favorite content creators.",
    details: [
      { 
        label: "Goal", 
        value: "To increase user engagement within the western audience, and to increase visibility for content creators across these regions (Europe, North America, South America)" 
      },
      { label: "Features", value: "User-generated missions with prizes and tracking, community voting, content creator profiles and links, and a live leaderboard for the event time period." },
      {
        label: "My Involvement",
        value: "Worked with a small team of developers and event organizers. Focused on frontend implementation and deployement. Also reviewed backend API integration.",
      },
    ],
    technologies: "Typescript/ Python / REST / AWS EC2 / Git / Next.js / React / Tailwind",
    accent: "amber",
    action: {
      href: "",
      label: "Visit Project Lumi (Currently offline)",
    },
    visual: {
      imageSrc: "/Images/ERWebsite.png",
      imageAlt: "Eternal Return Event Website (Currently offline)",
      objectPosition: "center 15%",
    },
  },
];

export default function ProjectsPage() {
  return (
    <PortfolioPage>
      <PageHero
        eyebrow="Selected projects"
          title="Things I've built, researched, and helped develop."
          aside="A mix of automotive security, medical software, machine learning, and community projects, both professional and personal."
      />

      <ProjectCardGrid items={projects} />

      <SplitCta
        eyebrow="More about my work"
        title="See where I've applied these skills professionally."
        action={{ href: "/experience", label: "View experience" }}
      />
    </PortfolioPage>
  );
}
