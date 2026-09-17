"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import styles from "./Carrousel.module.css";

export default function Carrousel() {
    const scrollerRef = useRef<HTMLUListElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

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

    return (
        <section className="container" id="carrousel" aria-labelledby="carrousel-title">
            <h2 id="carrousel-title" className={styles.title}>
                {site.caroussel.title}
            </h2>

            <ul ref={scrollerRef} className={`${styles.carousel} ${styles.cards} ${styles.itemized}`} role="list">
                {site.caroussel.items.map((item, index) => (
                    <li className={styles.item} key={`${item.image}-${index}`}>
                        <img src={item.image} alt="" />
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
        </section>
    );
}