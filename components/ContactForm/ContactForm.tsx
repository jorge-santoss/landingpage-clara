"use client";

import {useState} from "react";
import styles from "./ContactForm.module.css";
import {site} from "@/content/site";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [consent, setConsent] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; email?: string; consent?: string; }>({});
    const [status, setStatus] = useState<Status>("idle");

    function validate() {
        const next: typeof errors = {};

        if (!name.trim()) next.name = "Votre nom est requis.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Adresse email invalide.";
        if (!consent) next.consent = "Vous devez accepter la politique de confidentialité.";

        setErrors(next);

        return Object.keys(next).length === 0;
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validate()) return;
        if (!site.cta.formEndpoint) {
            setStatus("error");
            return;
        }

        setStatus("sending");
        try {
            const body = new URLSearchParams({
                NOM: name,
                EMAIL: email,
                email_address_check: "",
            });

            const response = await fetch(site.cta.formEndpoint, {
                method: "POST",
                body,
            });

            if (response.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return <p className={styles.success} role="status">Merci ! Nous vous recontactons vite.</p>
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
                <label htmlFor="name">Nom</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <span className={styles.error} id={"name-error"}>{errors.name}</span>}
            </div>
            <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <span className={styles.error} id={"email-error"}>{errors.email}</span>}
            </div>
            <div>
                <input
                    id="consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    aria-invalid={!!errors.consent}
                    aria-describedby={errors.consent ? "consent-error" : undefined}
                />
                <label htmlFor="consent">
                    J'accepte que mes données soient utilisées pour être recontacté, conformément à la{" "}
                    <a href="/politique-de-confidentialite">politique de confidentialité</a>.
                </label>
            </div>
            {errors.consent && <span className={styles.error} id="consent-error">{errors.consent}</span>}

            <input
                className={styles.honeypot}
                type="text"
                name="email_address_check"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
            />
            {status === "error" && (
                <p className={styles.error} role="alert">Une erreur est survenue. Veuillez réessayer.</p>
            )}
            <button className={styles.submit} type="submit" disabled={status === "sending"}>Envoyer</button>
        </form>
    )
}