"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import styles from "./Carrousel.module.css";

export default function Carrousel() {
    const scrollerRef = useRef<HTMLUListElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const caroussel = site.caroussel;
    const items = caroussel.items;
    const count = items.length;

    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;
        const update = () => {
            setAtStart(el.scrollLeft <= 0);
            setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
        };
        update();
        el.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            el.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    const scrollByPage = (direction: 1 | -1) => {
        const el = scrollerRef.current;
        if (!el) return;
        el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
    };

    const altOf = (index: number) => `${caroussel.title} — photo ${index + 1} / ${count}`;

    /* Lightbox : navigation clavier + verrouillage du scroll de la page */
    useEffect(() => {
        if (openIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpenIndex(null);
            else if (e.key === "ArrowRight") setOpenIndex((openIndex + 1) % count);
            else if (e.key === "ArrowLeft") setOpenIndex((openIndex - 1 + count) % count);
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [openIndex, count]);

    return (
        <section className="container" id="carrousel" aria-labelledby="carrousel-title">
            <h2 id="carrousel-title" className={styles.title}>
                {caroussel.title}
            </h2>
            <p className={styles.subtitle}>{caroussel.subtitle}</p>
            <p className={styles.introduction}>{caroussel.introduction}</p>

            <ul
                ref={scrollerRef}
                className={`${styles.carousel} ${styles.cards} ${styles.itemized}`}
                role="list"
            >
                {items.map((item, index) => (
                    <li className={styles.item} key={`${item.image}-${index}`}>
                        <img
                            src={item.image}
                            alt={altOf(index)}
                            tabIndex={0}
                            role="button"
                            aria-label={`Agrandir : ${altOf(index)}`}
                            onClick={() => setOpenIndex(index)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    setOpenIndex(index);
                                }
                            }}
                        />
                    </li>
                ))}
            </ul>

            <div className={styles.navControls}>
                <button
                    type="button"
                    className={styles.navButton}
                    onClick={() => scrollByPage(-1)}
                    disabled={atStart}
                    aria-label="Image précédente"
                >
                    ‹
                </button>
                <button
                    type="button"
                    className={styles.navButton}
                    onClick={() => scrollByPage(1)}
                    disabled={atEnd}
                    aria-label="Image suivante"
                >
                    ›
                </button>
            </div>

            {openIndex !== null && (
                <div
                    className={styles.lightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label={caroussel.title}
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setOpenIndex(null);
                    }}
                >
                    <button
                        ref={closeButtonRef}
                        type="button"
                        className={styles.lightboxClose}
                        onClick={() => setOpenIndex(null)}
                        aria-label="Fermer la visionneuse"
                    >
                        ✕
                    </button>

                    <button
                        type="button"
                        className={`${styles.lightboxArrow} ${styles.lightboxPrev}`}
                        onClick={() => setOpenIndex((openIndex - 1 + count) % count)}
                        aria-label="Photo précédente"
                    >
                        ‹
                    </button>

                    <figure className={styles.lightboxFigure}>
                        <img
                            src={items[openIndex].image}
                            alt={altOf(openIndex)}
                            className={styles.lightboxImage}
                        />
                        <figcaption className={styles.lightboxCounter}>
                            {openIndex + 1} / {count}
                        </figcaption>
                    </figure>

                    <button
                        type="button"
                        className={`${styles.lightboxArrow} ${styles.lightboxNext}`}
                        onClick={() => setOpenIndex((openIndex + 1) % count)}
                        aria-label="Photo suivante"
                    >
                        ›
                    </button>

                    <div className={styles.lightboxThumbs} aria-label="Toutes les photos">
                        {items.map((item, index) => (
                            <button
                                key={`${item.image}-thumb-${index}`}
                                type="button"
                                className={`${styles.lightboxThumb} ${
                                    index === openIndex ? styles.lightboxThumbActive : ""
                                }`}
                                onClick={() => setOpenIndex(index)}
                                aria-label={altOf(index)}
                                aria-current={index === openIndex ? "true" : undefined}
                            >
                                <img src={item.image} alt="" />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
