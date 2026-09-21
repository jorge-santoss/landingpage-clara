"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import styles from "./Footer.module.css";

const socialIcons: Record<string, ReactNode> = {
    Instagram: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
    ),
    Facebook: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
        </svg>
    ),
    TikTok: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.23 1.57-1.13 2.55.08.97.74 1.8 1.67 2.08 1.01.32 2.16.03 2.86-.69.53-.53.81-1.27.81-2.02.01-4.83.01-9.66.01-14.49z"/>
        </svg>
    ),
};

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container container--wide">
                {/* Ligne du haut */}
                <div className={styles.topRow}>

                    {/* Logo, Titre & Adresse */}
                    <div className={styles.brandCol}>
                        <Image
                            src={site.footer.logo}
                            alt={`${site.footer.brandName} Logo`}
                            width={96}
                            height={72}
                            style={{ width: "auto", height: "auto" }}
                        />
                        <div className={styles.brandText}>
                            <h3 className={styles.brandTitle}>{site.footer.brandName}</h3>
                            <p className={styles.address}>{site.footer.address}</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className={styles.navCol} aria-label="Navigation">
                        <h3 className={styles.colTitle}>{site.footer.navTitle}</h3>
                        <ul>
                            {site.footer.navLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Liens légaux */}
                    <nav className={styles.legalCol} aria-label="Liens légaux">
                        <h3 className={styles.colTitle}>{site.footer.legalTitle}</h3>
                        <ul>
                            {site.footer.legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Newsletter */}
                    <div className={styles.newsletterCol}>
                        <h3 className={styles.newsletterTitle}>{site.footer.newsletterTitle}</h3>
                        <form
                            className={styles.newsletterForm}
                            onSubmit={(e) => e.preventDefault()}
                            aria-label={site.footer.newsletterTitle}
                        >
                            <input
                                type="email"
                                placeholder={site.footer.newsletterPlaceholder}
                                className={styles.emailInput}
                            />
                            <button type="submit" className={styles.submitBtn}>
                                {site.footer.newsletterSubmit}
                            </button>
                        </form>
                    </div>

                </div>

                {/* Grand Titre en Bas - texte éditable dans content/site.json */}
                <div className={styles.bigTitleWrapper}>
                    <h2 className={styles.bigTitle}>{site.footer.bigTitle}</h2>
                </div>

                {/* Barre blanche Follow Me */}
                <div className={styles.socialBarWrapper}>
                    <div className={styles.socialBar}>
                        <span className={styles.socialText}>{site.footer.socialText}</span>
                        <div className={styles.socialIcons}>

                            {site.footer.social.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={styles.iconBox}
                                >
                                    {socialIcons[social.label]}
                                </a>
                            ))}

                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} {site.footer.companyName} — Tous droits réservés
                </p>

            </div>
        </footer>
    );
}