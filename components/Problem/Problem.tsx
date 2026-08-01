import {site} from "@/content/site";
import styles from "./Problem.module.css";

export default function Problem() {
    return (
        <section className={`${styles.problem} container`} id="problem" aria-labelledby="probleme-title">
            <h2 className={styles.title} id="probleme-title">{site.problem.title}</h2>
            <ul className={styles.items} role="list">
                {site.problem.items.map((item) => (
                    <li className={styles.item} key={item}>{item}</li>
                ))}
            </ul>
        </section>
    );
}