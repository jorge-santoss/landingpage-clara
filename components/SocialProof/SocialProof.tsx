import { site } from "@/content/site";
import styles from "./SocialProof.module.css";

export default function SocialProof() {
    return (
        <section className={`${styles.socialProof} container`} id="social-proof" aria-labelledby="social-proof-title">
            <h2 className={styles.title} id="social-proof-title">{site.socialProof.title}</h2>
            <div className={styles.items}>
                {site.socialProof.testimonials.map((testimonials)=> (
                    <figure className={styles.card} key={testimonials.author}>
                        <blockquote className={styles.quote}><p>{testimonials.quote}</p></blockquote>
                        <figcaption className={styles.caption}>{testimonials.author} - {testimonials.role}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}
