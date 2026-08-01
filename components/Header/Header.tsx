import {site} from "@/content/site";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`} aria-label="Navigation principale">
                <a className={styles.brand} href="#hero">{site.name}</a>
                <ul className={styles.links} role="list">
                    <li><a href="#problem">Le problème</a></li>
                    <li><a href="#solution">La solution</a></li>
                </ul>
            </nav>
        </header>
    );
}