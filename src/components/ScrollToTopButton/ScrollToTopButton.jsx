import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css";

function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setVisible(scrollTop > 400);
            setProgress(percent);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`${styles['scroll-top-button']} ${visible ? styles['visible'] : ''}`}
            style={{ '--progress': `${progress}%` }}
            onClick={handleClick}
            aria-label="Voltar ao topo"
        >
            <span className={styles['ring']}></span>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}

export default ScrollToTopButton;
