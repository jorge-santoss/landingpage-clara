"use client";

import {useState, useEffect} from "react";
import Script from "next/script";
import {site} from "@/content/site";
import styles from "./ConsentBanner.module.css"

type Consent = "unknown" | "granted" | "denied";

const STORAGE_KEY = "consent-analytics";
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 182;

export default function ConsentBanner() {
    const [consent, setConsent] = useState<Consent>("unknown");
    const [ready, setReady] = useState<boolean>(false);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const saved = JSON.parse(raw) as { value: Consent; at: number };
                if (Date.now() - saved.at < MAX_AGE_MS) {
                    setConsent(saved.value);
                } else {
                    localStorage.removeItem(STORAGE_KEY);
                }
            }
        } catch {
        }
        setReady(true);
    }, []);

    function choose(value: "granted" | "denied") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({value, at: Date.now()}));
        setConsent(value);
    }

    if (!site.analytics.gaId) return null;
    if (!ready) return null;

    return (
        <>
            {consent === "granted" && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${site.analytics.gaId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="ga-init" strategy="afterInteractive">{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${site.analytics.gaId}');
                    `}</Script>
                </>
            )}

            {consent === "unknown" && (
                <div className={styles.banner} role="dialog" aria-label="Consentement aux cookies">
                    <p className={styles.text}>Ce site utilise des cookies de mesure d'audience. Vous pouvez les
                        accepter ou les refuser.</p>
                    <div className={styles.actions}>
                        <button className={styles.btn} onClick={() => choose("granted")}>Accepter</button>
                        <button className={styles.btn} onClick={() => choose("denied")}>Refuser</button>
                    </div>
                </div>
            )}
        </>
    );
}