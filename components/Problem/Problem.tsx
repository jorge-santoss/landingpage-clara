import {site} from "@/content/site";
import styles from "./Problem.module.css";

export default function Problem() {
    return (
        <section className={`${styles.problem} container`} id="problem" aria-labelledby="probleme-title">
            <h2 className={styles.title} id="probleme-title">{site.problem.title}</h2>
            <p className={styles.subtitle}>{site.problem.subtitle}</p>
            <p className={styles.introduction}>{site.problem.introduction}</p>
            <div className={styles.grid}>
                <img src={site.problem.image} alt={site.problem.title} className={styles.image} />
            <ul className={styles.items} role="list">
                {site.problem.items.map((item) => (
                    <li className={styles.item} key={item}>
                     <span>{item}</span>
    <svg className={styles.arrow} viewBox="-6.5 -6.5 24 24"
     width="56" height="56" aria-hidden="true">
    <path d="M8.9 7.485V1.9a1 1 0 0 1 2 0v8a.997.997 0 0 1-1 1h-8a1 1 0 1 1 0-2h5.585L.707 2.121A1 1 0 0 1 2.121.707L8.9 7.485z"
          fill="currentColor"/>
</svg>
    </li>
                ))}
            </ul>
            </div>
        </section>
    );
}