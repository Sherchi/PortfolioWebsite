import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import styles from "./styles/PortfolioShared.module.css";

export type Accent = "lime" | "violet" | "amber" | "blue";

const accentColours: Record<Accent, string> = {
  lime: "var(--accent-lime)",
  violet: "var(--accent-violet)",
  amber: "var(--accent-amber)",
  blue: "var(--accent-blue)",
};

export function accentStyle(accent: Accent): CSSProperties {
  return { "--accent": accentColours[accent] } as CSSProperties;
}

function classes(...values: Array<string | false | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function PortfolioPage({ children }: { children: ReactNode }) {
  return <main className={styles.page}>{children}</main>;
}

export type LinkAction = {
  href: string;
  label: string;
  accent?: boolean;
  muted?: boolean;
  download?: boolean;
  target?: "_blank" | "_self";
  rel?: string;
};

export function TextLink({
  href,
  label,
  children,
  accent,
  muted,
  download,
  target,
  rel,
}: LinkAction & { children?: ReactNode }) {
  const className = classes(
    styles.textLink,
    accent && styles.textLinkAccent,
    muted && styles.textLinkMuted,
  );
  const isExternal = href.startsWith("https://") || href.startsWith("http://");
  const safeRel = target === "_blank" ? rel ?? "noopener noreferrer" : rel;

  const content = (
    <>
      {children ?? label}
      <span className={styles.linkArrow}>→</span>
    </>
  );

  if (download || href.startsWith("mailto:") || isExternal) {
    return (
      <a
        className={className}
        href={href}
        download={download || undefined}
        target={target}
        rel={safeRel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      className={className}
      href={href}
      target={target}
      rel={safeRel}
    >
      {content}
    </Link>
  );
}

export function PageHero({
  eyebrow,
  title,
  aside,
  actions = [],
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
  actions?: LinkAction[];
}) {
  return (
    <section className={styles.hero}>
      <Reveal className={styles.container}>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h1 className={styles.displayTitle}>{title}</h1>

            {actions.length > 0 && (
              <div className={styles.actions}>
                {actions.map((action) => (
                  <TextLink key={action.href} {...action} />
                ))}
              </div>
            )}
          </div>

          {aside && <aside className={styles.heroAside}>{aside}</aside>}
        </div>
      </Reveal>
    </section>
  );
}

export function SummaryList({
  items,
}: {
  items: Array<{ label: string; value: ReactNode }>;
}) {
  return (
    <div className={styles.summaryList}>
      {items.map((item) => (
        <div key={item.label}>
          <p className={styles.summaryLabel}>{item.label}</p>
          <p className={styles.summaryValue}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export function Section({
  children,
  alternate = false,
  contained = true,
  className,
}: {
  children: ReactNode;
  alternate?: boolean;
  contained?: boolean;
  className?: string;
}) {
  return (
    <section className={classes(styles.section, alternate && styles.sectionAlt, className)}>
      {contained ? (
        <div className={classes(styles.container, styles.sectionInner)}>{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  meta,
  accent = false,
}: {
  eyebrow: string;
  title: ReactNode;
  meta?: ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={styles.sectionHeader}>
      <div>
        <p className={classes(styles.eyebrow, accent && styles.eyebrowAccent)}>
          {eyebrow}
        </p>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      {meta && <div className={styles.sectionMeta}>{meta}</div>}
    </div>
  );
}

export function DetailList({
  items,
}: {
  items: Array<{ label: string; value: ReactNode }>;
}) {
  return (
    <dl className={styles.detailList}>
      {items.map((item) => (
        <div className={styles.detailItem} key={item.label}>
          <dt className={styles.detailLabel}>{item.label}</dt>
          <dd className={styles.detailValue}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export type NumberedItem = {
  title: string;
  description: ReactNode;
  accent?: Accent;
};

export function NumberedSection({
  eyebrow,
  title,
  items,
  alternate = false,
}: {
  eyebrow: string;
  title: ReactNode;
  items: NumberedItem[];
  alternate?: boolean;
}) {
  return (
    <Section alternate={alternate}>
      <Reveal>
        <div className={styles.numberedSectionGrid}>
          <div>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2 className={styles.numberedIntroTitle}>{title}</h2>
          </div>

          <div className={styles.numberedList}>
            {items.map((item, index) => (
              <div
                className={styles.numberedRow}
                key={item.title}
                style={item.accent ? ({ "--row-accent": accentColours[item.accent] } as CSSProperties) : undefined}
              >
                <span className={styles.numberedIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.numberedTitle}>{item.title}</h3>
                <p className={styles.numberedDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function SplitCta({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: ReactNode;
  action: LinkAction;
}) {
  return (
    <section className={styles.cta}>
      <Reveal className={classes(styles.container, styles.ctaInner)}>
        <div>
          <p className={classes(styles.eyebrow, styles.ctaEyebrow)}>{eyebrow}</p>
          <h2 className={styles.ctaTitle}>{title}</h2>
        </div>
        <TextLink {...action} />
      </Reveal>
    </section>
  );
}

export { accentColours };
