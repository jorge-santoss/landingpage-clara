import {site} from "@/content/site";
import styles from "./Presentation.module.css";

export default function Presentation() {
    return (
        <section className={`${styles.presentation} container`} id="presentation" aria-labelledby="presentation-title">
            <h2 className={styles.title} id="presentation-title">{site.presentation.title}</h2>
            <p className={styles.subtitle}>{site.presentation.subtitle}</p>
            <p className={styles.subtitle2}>{site.presentation.subtitle2}</p>
            <img src={site.presentation.image} alt="Présentation" className={styles.photo} />
        </section>
    );
}