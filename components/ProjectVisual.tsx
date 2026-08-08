import type { CSSProperties } from "react";
import { accentStyle, type Accent } from "./Portfolio";
import styles from "./styles/ProjectsPage.module.css";

type PipelineStep = {
  label: string;
  text: string;
};

type LeaderboardRow = {
  rank: string;
  player: string;
  score: string;
};

export type ProjectVisualProps = {
  variant: "pipeline" | "bars" | "leaderboard";
  accent?: Accent;
  title: string;
  meta: string;
  footer: string;
  pipelineSteps?: [PipelineStep, PipelineStep, PipelineStep];
  leaderboardRows?: LeaderboardRow[];
};

const defaultPipeline: [PipelineStep, PipelineStep, PipelineStep] = [
  { label: "Input", text: "OTA files" },
  { label: "Analysis", text: "Features + ML" },
  { label: "Output", text: "Risk score" },
];

const defaultLeaderboard: LeaderboardRow[] = [
  { rank: "01", player: "Player Alpha", score: "12,480" },
  { rank: "02", player: "Player Bravo", score: "11,920" },
  { rank: "03", player: "Player Charlie", score: "10,870" },
  { rank: "04", player: "Player Delta", score: "9,640" },
];

const barHeights = [32, 58, 44, 84, 68, 108, 74, 118, 64, 94, 52, 78];

export default function ProjectVisual({
  variant,
  accent = "lime",
  title,
  meta,
  footer,
  pipelineSteps = defaultPipeline,
  leaderboardRows = defaultLeaderboard,
}: ProjectVisualProps) {
  const style = accentStyle(accent);

  return (
    <div className={styles.visual} style={style} aria-label={footer}>
      <div className={styles.visualGlow} />
      <div className={styles.visualHeader}>
        <span>{title}</span>
        <span>{meta}</span>
      </div>

      <div className={styles.visualBody}>
        {variant === "pipeline" && (
          <div className={styles.pipeline}>
            {pipelineSteps.map((step, index) => (
              <div className={styles.contents} key={step.label}>
                <div
                  className={`${styles.pipelineStep} ${
                    index === 1 ? styles.pipelineStepActive : ""
                  }`}
                >
                  <p className={styles.pipelineLabel}>{step.label}</p>
                  <p className={styles.pipelineText}>{step.text}</p>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <span className={styles.pipelineArrow}>→</span>
                )}
              </div>
            ))}
          </div>
        )}

        {variant === "bars" && (
          <>
            <div className={styles.chart}>
              {barHeights.map((height, index) => (
                <div
                  className={`${styles.chartBar} ${
                    index === 7 ? styles.chartBarAccent : ""
                  }`}
                  key={`${height}-${index}`}
                  style={{ height } as CSSProperties}
                />
              ))}
            </div>
            <div className={styles.chartLegend}>
              <span>Expected reconstruction</span>
              <span className={styles.chartLegendAccent}>Anomaly</span>
            </div>
          </>
        )}

        {variant === "leaderboard" && (
          <div className={styles.leaderboard}>
            <div className={styles.leaderboardHeader}>
              <span className={styles.leaderboardDots}>
                <span className={styles.leaderboardDot} />
                <span className={styles.leaderboardDot} />
                <span className={styles.leaderboardDot} />
              </span>
              <span>Live leaderboard</span>
            </div>
            <div className={styles.leaderboardRows}>
              {leaderboardRows.map((row) => (
                <div className={styles.leaderboardRow} key={row.rank}>
                  <span className={styles.leaderboardRank}>{row.rank}</span>
                  <span className={styles.leaderboardPlayer}>{row.player}</span>
                  <span>{row.score}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <p className={styles.visualFooter}>{footer}</p>
      <div className={styles.visualProgress} />
    </div>
  );
}
