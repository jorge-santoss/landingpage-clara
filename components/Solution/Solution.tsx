import { site } from "@/content/site";
import styles from "./Solution.module.css";

export default function Solution() {
    return (
        <section className={`${styles.solution} container`} id="solution" aria-labelledby="solution-title" >
            <h2 className={styles.title} id="solution-title">{site.solution.title}</h2>
            <ul className={styles.items} role="list">
                {site.solution.benefits.map((benefit) => (
                    <li className={styles.item} key={benefit}>{benefit}</li>
                ))}
            </ul>
        </section>
    )
}