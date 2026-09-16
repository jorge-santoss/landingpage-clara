import {site} from "@/content/site";
import styles from "./Solution.module.css";

export default function Solution() {
    return (
        <section className={`${styles.solution} container`} id="solution" aria-labelledby="solution-title">
            <h2 className={styles.title} id="solution-title">{site.solution.title}</h2>
            <p className={styles.subtitle}>{site.solution.subtitle}</p>
            <p className={styles.introduction}>{site.solution.introduction}</p>
            <ul className={styles.items} role="list">
                {site.solution.categories.map((category) => (
                    <li className={styles.item} key={category}>{category}</li>
                ))}
            </ul>
        </section>
    )
}