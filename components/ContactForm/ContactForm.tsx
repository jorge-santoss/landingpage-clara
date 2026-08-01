"use client";

import {useState} from "react";
import styles from "./ContactForm.module.css";

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

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!validate()) return;

        setStatus("sending");

        setStatus("success");
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

            <button className={styles.submit} type="submit" disabled={status === "sending"}>Envoyer</button>
        </form>
    )
}