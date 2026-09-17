import {site} from "@/content/site";
import styles from "./Hero.module.css";


export default function Hero() {
    return (
       <section className={styles.hero} id="hero" aria-labelledby="hero-title">
    <div className={styles.content}>
        <h1 className={styles.title} id="hero-title">{site.hero.title}</h1>
        <p className={styles.subtitle}>{site.hero.subtitle}</p>
        <div className={styles.buttons}>
    <a className={styles.cta} href="#contact">{site.hero.ctaLabel}</a>
    <a className={styles.ctaSecondary} href="#portfolio">{site.hero.ctaLabel2}</a>
</div>
    </div>
</section>
    );
}