import { site } from "@/content/site";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./CtaSection.module.css";

export default function CtaSection() {
    return (
        <section className={`${styles.cta} container`} id="contact" aria-labelledby="contact-title">
            <h2 className={styles.title} id="contact-title">{site.cta.title}</h2>
            <p className={styles.intro}>{site.cta.intro}</p>

            <div className={styles.icons}>

                <div className={styles.icons_svg}>
                    <svg width="70px" height="70px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#844D4D"><path fillRule="evenodd" clipRule="evenodd" d="M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z"/></svg>
                    <div className={styles.icons_text}><p>+ 123 456 789</p></div>
                </div>

                <div className={styles.icons_svg}>
                    <svg width="70px" height="70px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#844D4D" d="M79.36 432.256L591.744 944.64a32 32 0 0035.2 6.784l253.44-108.544a32 32 0 009.984-52.032l-153.856-153.92a32 32 0 00-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 00-5.952-36.928L233.152 133.568a32 32 0 00-52.032 10.048L72.512 397.056a32 32 0 006.784 35.2zm60.48-29.952l81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 01256 256h-64a192 192 0 00-192-192zm0-192V64a448 448 0 01448 448h-64a384 384 0 00-384-384z"/></svg>
                    <div className={styles.icons_text}><p>help@mail.com</p></div>
                </div>
                
                <div className={styles.icons_svg}>
                    <svg fill="#844D4D" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 28.176 48.261"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M28.175,14.114C28.176,6.318,21.87,0,14.088,0C6.307,0,0,6.318,0,14.114c0,1.971,0.401,3.849,1.13,5.551l0.046,0.103 l0.143,0.314l12.769,28.179l12.77-28.179L27,19.768l0.045-0.103h-0.001C27.773,17.963,28.175,16.085,28.175,14.114z M19.525,19.665 c-1.403,1.381-3.321,2.227-5.438,2.227c-2.116,0-4.034-0.846-5.438-2.227c-1.436-1.411-2.326-3.378-2.326-5.551 c0-4.297,3.475-7.785,7.764-7.785s7.764,3.488,7.764,7.785C21.852,16.287,20.963,18.254,19.525,19.665z"></path> </g></svg>
                    <div className={styles.icons_text}><p>123 Bd Republique,</p>
                    <p> Cannes</p></div>
                </div>
            </div>

            <div className={styles.form_text}><p>Ou remplissez le   formulaire ci‑dessous</p>
            </div>

            <ContactForm />
        </section>
    );
}