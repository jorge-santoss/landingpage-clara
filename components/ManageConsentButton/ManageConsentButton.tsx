"use client";

import styles from "./ManageConsentButton.module.css"
import { STORAGE_KEY } from "../ConsentBanner/consent";

export default function ManageConsentButton() {
    function reset() {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    }

    return (
        <button className={styles.btn} type="button" onClick={reset}>Gérer mes cookies</button>
    );
}