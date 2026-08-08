"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons/ThemeIcons";
import styles from "./styles/SiteNavigation.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/research", label: "Research" },
];

export default function SiteNavigation() {
  const pathname = usePathname();
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const currentTheme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : "light";

    document.documentElement.setAttribute("data-theme", currentTheme);
    setIsLight(currentTheme === "light");
  }, []);

  const handleToggle = () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") ?? "light";

    const nextTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setIsLight(nextTheme === "light");
  };

  return (
    <header className={styles.siteHeader}>
      <nav className={styles.siteNav}>
        <Link className={styles.siteName} href="/">
          <span className={styles.brandMark} aria-hidden="true">
            DL
          </span>
          <span className={styles.siteNameText}>Darwin Liao</span>
        </Link>

        <div className={styles.navLinks}>
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                className={`${styles.navLink} ${
                  active ? styles.navLinkActive : ""
                }`}
                href={link.href}
                key={link.href}
              >
                {link.label}

                {active && (
                  <motion.span
                    className={styles.navMarker}
                    layoutId="active-navigation"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}

          <a
            className={styles.resumeLink}
            href="/Darwin_Liao_Resume.pdf"
          >
            Résumé
          </a>
          
          <button
            className={styles.themeToggle}
            onClick={handleToggle}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            type="button"
          >
            {isLight ? (
              <MoonIcon className={styles.themeIcon} />
            ) : (
              <SunIcon className={styles.themeIcon} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
