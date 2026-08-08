import type { CSSProperties } from "react";
import Reveal from "./Reveal";
import { accentColours, type Accent } from "./Portfolio";
import styles from "./styles/ExperiencePage.module.css";

export type Experience = {
  organization: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  contributions: string[];
  technologies: string;
  accent: Accent;
};

export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <div className={styles.timeline}>
      {items.map((experience, index) => {
        const style = {
          "--item-accent": accentColours[experience.accent],
        } as CSSProperties;

        return (
          <Reveal delay={index * 0.08} key={experience.organization}>
            <article className={styles.timelineItem} style={style}>
              <div>
                <p className={styles.timelinePeriod}>{experience.period}</p>
                <p className={styles.timelineLocation}>{experience.location}</p>
              </div>

              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <div>
                    <p className={styles.timelineOrganization}>
                      {experience.organization}
                    </p>
                    <h2 className={styles.timelineRole}>{experience.role}</h2>
                  </div>
                  <span className={styles.timelineNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className={styles.timelineSummary}>{experience.summary}</p>

                <div className={styles.timelineDetails}>
                  <div>
                    <p className={styles.subheading}>Selected contributions</p>
                    <ul className={styles.contributionList}>
                      {experience.contributions.map((contribution, contributionIndex) => (
                        <li className={styles.contribution} key={contribution}>
                          <span className={styles.contributionIndex}>
                            {String(contributionIndex + 1).padStart(2, "0")}
                          </span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <aside className={styles.technologyAside}>
                    <p className={styles.subheading}>Technologies and areas</p>
                    <p className={styles.technologyText}>{experience.technologies}</p>
                  </aside>
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
