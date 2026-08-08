import type { ReactNode } from "react";
import Reveal from "./Reveal";
import ProjectVisual, {
  type ProjectVisualProps,
} from "./ProjectVisual";
import ProjectSlideshow, {
  type ProjectSlide,
} from "./ProjectSlideshow";
import {
  DetailList,
  Section,
  TextLink,
  accentStyle,
  type Accent,
  type LinkAction,
} from "./Portfolio";
import sharedStyles from "./styles/PortfolioShared.module.css";
import styles from "./styles/ProjectsPage.module.css";
import Image from "next/image";


type ProjectImageProps = {
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
};

type ProjectSlideshowProps = {
  slides: ProjectSlide[];
};

export type ProjectCaseStudyProps = {
  number?: string;
  category: string;
  overline?: string;
  title: ReactNode;
  description: ReactNode;
  details: Array<{ label: string; value: ReactNode }>;
  technologies?: string;
  accent?: Accent;
  alternate?: boolean;
  reverse?: boolean;
  embedded?: boolean;
  action?: LinkAction;
  secondaryAction?: LinkAction;
  visual:
    | ProjectVisualProps
    | ProjectImageProps
    | ProjectSlideshowProps;
};

export default function ProjectCaseStudy({
  number,
  category,
  overline,
  title,
  description,
  details,
  technologies,
  accent = "lime",
  alternate = false,
  reverse = false,
  embedded = false,
  action,
  secondaryAction,
  visual,
}: ProjectCaseStudyProps) {
  const card = (
    <Reveal className={styles.cardReveal}>
      <article
        className={styles.caseGrid}
        data-embedded={embedded}
        data-reverse={reverse}
        style={accentStyle(accent)}
      >
        <div className={styles.caseVisualColumn}>
          <div className={styles.caseTopline}>
            <span>{category}</span>
            {number && <span className={styles.caseNumber}>{number}</span>}
          </div>
            {"slides" in visual ? (
              <ProjectSlideshow slides={visual.slides} />
            ) : "imageSrc" in visual ? (
              <div className={styles.projectImage}>
                <Image
                  className={styles.projectImageFile}
                  src={visual.imageSrc}
                  alt={visual.imageAlt}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1020px) 50vw, 33vw"
                  style={{
                    objectPosition: visual.objectPosition ?? "center",
                  }}
                />
              </div>
            ) : (
              <ProjectVisual accent={accent} {...visual} />
            )}
        </div>

        <div className={styles.caseContent}>
          {overline && <p className={styles.caseOverline}>{overline}</p>}
          <h2 className={styles.caseTitle}>{title}</h2>
          <div className={styles.caseDescription}>{description}</div>
          <DetailList items={details} />
          {technologies && <p className={styles.technologies}>{technologies}</p>}
          {(action || secondaryAction) && (
            <div className={sharedStyles.actions}>
              {action && <TextLink {...action} accent />}
              {secondaryAction && <TextLink {...secondaryAction} accent/>}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );

  if (embedded) {
    return card;
  }

  return <Section alternate={alternate}>{card}</Section>;
}

export function ProjectCardGrid({
  items,
}: {
  items: ProjectCaseStudyProps[];
}) {
  return (
    <Section>
      <div className={styles.projectGrid}>
        {items.map((project) => (
          <ProjectCaseStudy
            embedded
            key={project.number ?? String(project.title)}
            {...project}
          />
        ))}
      </div>
    </Section>
  );
}
