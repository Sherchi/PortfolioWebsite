import styles from "./styles/HomePage.module.css";
import sharedStyles from "./styles/PortfolioShared.module.css";

export type Technology = {
  label: string;
  mark: string;
};

export default function HomeTechStack({ items }: { items: Technology[] }) {
  return (
    <section className={styles.stackSection} aria-labelledby="stack-heading">
      <div className={sharedStyles.container}>
        <div className={styles.stackHeader}>
          <div>
            <p className={sharedStyles.eyebrow}>Core toolkit</p>
            <h2 className={styles.stackTitle} id="stack-heading">
              Technologies I use to build systems
            </h2>
          </div>
        </div>

        <ul className={styles.stackList}>
          {items.map((item) => (
            <li className={styles.stackChip} key={item.label}>
              <span className={styles.stackMark} aria-hidden="true">
                {item.mark}
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
