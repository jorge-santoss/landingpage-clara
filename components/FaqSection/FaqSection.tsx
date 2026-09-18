import {site} from "@/content/site";
import styles from "./FaqSection.module.css";

export default function FaqSection() {
    return (
        <section className={`${styles.faqSection} container container--narrow`} id="faq" aria-labelledby="faq-title">
            <h2 className={styles.title} id="faq-title">{site.faq.title}</h2>
            <p className={styles.subtitle}>{site.faq.subtitle}</p>
            <div className={styles.items}>
                {site.faq.items.map((item) => (
                    <details className={styles.item} key={item.question}>
    <summary className={styles.summary}>
        <h3 className={styles.h3}>{item.question}</h3>
        <span className={styles.arrow} aria-hidden="true">›</span>
    </summary>
    <p className={styles.p}>{item.answer}</p>
</details>
                ))}
            </div>
        </section>
    );
}