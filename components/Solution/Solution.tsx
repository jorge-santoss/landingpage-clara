import {site} from "@/content/site";
import styles from "./Solution.module.css";

export default function Solution() {
    return (
        <section className={`${styles.solution} container`} id="solution" aria-labelledby="solution-title">
            <h2 className={styles.title} id="solution-title">{site.solution.title}</h2>
            <p className={styles.subtitle}>{site.solution.subtitle}</p>
            <p className={styles.introduction}>{site.solution.introduction}</p>
            <ul className={styles.items} role="list">
                {site.solution.categories.map((item) => (
                    <li className={styles.item} key={item.name}>
                    <h3 className={styles.itemTitle}>{item.name}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    <ul className={styles.inclus}>
    {item.inclus.map((item) => (
        <li key={item}>{item}</li>
    ))}
</ul>
                    <p className={styles.itemPrice}>{item.price}</p>
                    < a href="#cta" className={styles.itemButton}>{item.ctaLabel}</a>
                        </li>
                ))}
            </ul>
        </section>
    )
}