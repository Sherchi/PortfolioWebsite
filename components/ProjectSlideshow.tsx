"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles/ProjectSlideshow.module.css";

export type ProjectSlide = {
  src: string;
  alt: string;
  label: string;
  caption: string;
};

export default function ProjectSlideshow({
  slides,
}: {
  slides: ProjectSlide[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (slides.length <= 1 || isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [slides.length, isPaused]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className={styles.slideshow}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Image
        key={currentSlide.src}
        className={styles.slideImage}
        src={currentSlide.src}
        alt={currentSlide.alt}
        fill
        sizes="(max-width: 680px) 100vw, (max-width: 1020px) 50vw, 33vw"
      />

      <div className={styles.overlay} />

      <div className={styles.caption} aria-live="polite">
        <p className={styles.slideLabel}>{currentSlide.label}</p>
        <p className={styles.slideCaption}>{currentSlide.caption}</p>
      </div>

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            type="button"
            key={slide.src}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show slide ${index + 1}: ${slide.label}`}
            aria-current={index === currentIndex ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}