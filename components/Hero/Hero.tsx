import {site} from "@/content/site";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={`${styles.hero} container`} id="hero" aria-labelledby="hero-title">
            <h1 className={styles.title} id="hero-title">{site.hero.title}</h1>
            <p className={styles.subtitle}>{site.hero.subtitle}</p>
            <a className={styles.cta} href="#contact">{site.hero.ctaLabel}</a>
        </section>
    );
}