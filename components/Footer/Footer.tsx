import { site } from "@/content/site";
import styles from "./Footer.module.css";
import ManageConsentButton from "@/components/ManageConsentButton/ManageConsentButton";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.inner} container`}>
                <p className={styles.brand}>{site.footer.companyName}</p>
                <ul className={styles.links} role="list">
                    <li><a href="/mentions-legales">Mentions légales</a></li>
                    <li><a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
                    <li><ManageConsentButton /></li>
                </ul>
            </div>
        </footer>
    );
}