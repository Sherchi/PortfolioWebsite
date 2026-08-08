import Reveal from "./Reveal";
import { accentStyle, type Accent } from "./Portfolio";
import styles from "./styles/ResearchPage.module.css";

export type Publication = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  details: string;
  status: string;
  doi: string;
  href: string;
};

export type Conference = {
  year: string;
  name: string;
  shortName: string;
  location: string;
  participation: string;
  description: string;
};

export type ResearchArea = {
  title: string;
  description: string;
  accent: Accent;
};

export function PublicationList({ items }: { items: Publication[] }) {
  return (
    <div className={styles.publicationList}>
      {items.map((publication, index) => (
        <Reveal delay={index * 0.08} key={publication.title}>
          <a
            className={styles.publicationLink}
            href={publication.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open publication: ${publication.title}`}
          >
            <article className={styles.publication}>
              <div>
                <p className={styles.publicationYear}>
                  {publication.year}
                </p>

                <p className={styles.publicationStatus}>
                  {publication.status}
                </p>
              </div>

              <div>
                <h3 className={styles.publicationTitle}>
                  {publication.title}
                </h3>

                <p className={styles.publicationAuthors}>
                  {publication.authors}
                </p>

                <p className={styles.publicationDetails}>
                  {publication.details}
                </p>
              </div>

              <div>
                <p className={styles.publicationVenue}>
                  {publication.venue}
                </p>

                <p className={styles.publicationStatus}>
                  {publication.doi} ↗
                </p>
              </div>
            </article>
          </a>
        </Reveal>
      ))}
    </div>
  );
}

export function ConferenceList({ items }: { items: Conference[] }) {
  return (
    <div className={styles.conferenceList}>
      {items.map((conference) => (
        <article className={styles.conference} key={`${conference.name}-${conference.year}`}>
          <span className={styles.conferenceDot} />
          <div className={styles.conferenceHeader}>
            <div>
              <p className={styles.conferenceYear}>{conference.year}</p>
              <h3 className={styles.conferenceName}>{conference.name}</h3>
              <p className={styles.conferenceMeta}>
                {conference.shortName} · {conference.location}
              </p>
            </div>
            <p className={styles.conferenceRole}>{conference.participation}</p>
          </div>
          <p className={styles.conferenceDescription}>{conference.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ResearchAreaGrid({ items }: { items: ResearchArea[] }) {
  return (
    <div className={styles.researchGrid}>
      {items.map((area, index) => (
        <Reveal delay={index * 0.06} key={area.title}>
          <article className={styles.researchArea} style={accentStyle(area.accent)}>
            <span className={styles.researchAreaIndex}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.researchAreaTitle}>{area.title}</h3>
            <p className={styles.researchAreaDescription}>{area.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
