import Reveal from "./Reveal";
import { Section, TextLink, type LinkAction } from "./Portfolio";
import sharedStyles from "./styles/PortfolioShared.module.css";
import styles from "./styles/HomePage.module.css";

export type PreviewPanelData = {
  eyebrow: string;
  title: string;
  items: Array<{ title: string; body: string }>;
  link: LinkAction;
};

export default function HomePreviewGrid({
  panels,
}: {
  panels: PreviewPanelData[];
}) {
  return (
    <Section contained={false}>
      <div className={styles.previewGrid}>
        {panels.map((panel, index) => (
          <Reveal
            className={styles.previewPanel}
            delay={index * 0.08}
            key={panel.eyebrow}
          >
            <p className={sharedStyles.eyebrow}>{panel.eyebrow}</p>
            <h2 className={styles.previewTitle}>{panel.title}</h2>
            <div className={styles.previewItems}>
              {panel.items.map((item) => (
                <div key={item.title}>
                  <h3 className={styles.previewItemTitle}>{item.title}</h3>
                  <p className={styles.previewItemBody}>{item.body}</p>
                </div>
              ))}
            </div>
            <div className={sharedStyles.actions}>
              <TextLink {...panel.link} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
