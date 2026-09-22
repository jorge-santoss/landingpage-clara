"use client";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} container container--narrow${open ? ` ${styles.navOpen}` : ""}`}
        aria-label="Navigation principale"
      >
        <a className={styles.brand} href="#hero">
    {site.logo && (
        <Image className={`${styles.logo} ${styles.logoWhite}`} src={site.logo} alt="" width={40} height={40} />
    )}
    {site.logoDark && (
        <Image className={`${styles.logo} ${styles.logoDark}`} src={site.logoDark} alt="" width={40} height={40} />
    )}
    <span className={styles.name}>{site.name}</span>
</a>
        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen(!open)}
        >
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
          <span className={styles.burgerBar} />
        </button>

        <ul
          id="menu-principal"
          className={`${styles.links} ${open ? styles.linksOpen : ""}`}
          role="list"
        >
          <li>
            <a href="#portfolio" onClick={() => setOpen(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#solution" onClick={() => setOpen(false)}>
              Les formules
            </a>
          </li>
          <li>
            <a href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
