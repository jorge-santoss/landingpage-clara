import {site} from "@/content/site";
import styles from "./Formule.module.css";

export default function Formule() {
    return (
        <section className={`${styles.formule} container container--wide`} id="formule" aria-labelledby="formule-title">
            <h2 className={styles.title} id="formule-title">{site.formule.title}</h2>
            <p className={styles.subtitle}>{site.formule.subtitle}</p>
            <p className={styles.introduction}>{site.formule.introduction}</p>
            <ul className={styles.items} role="list">
                {site.formule.categories.map((item) => (
                    <li className={styles.item} key={item.name}>
                    <h3 className={styles.itemTitle}>{item.name}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    <ul className={styles.inclus}>
    {item.inclus.map((item) => (
        <li key={item}>{item}</li>
    ))}
</ul>
                    <p className={styles.itemPrice}>{item.price}</p>
                    < a href="#contact" className={styles.itemButton}>{item.ctaLabel}</a>
                        </li>
                ))}
            </ul>
        </section>
    )
}