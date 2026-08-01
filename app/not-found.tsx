import type { Metadata } from "next";
import Link from "next/link";
import styles from "./not-found.module.css"

export const metadata: Metadata = {
    title: "Page introuvable",
    robots: { index: false },
};

export default function NotFound() {
    return (
        <main className={`${styles.notFound} container`}>
            <h1 className={styles.code}>404</h1>
            <p className={styles.message}>Cette page n'existe pas ou a été déplacée.</p>
            <Link className={styles.link} href="/">Revenir à l'accueil</Link>
        </main>
    );
}