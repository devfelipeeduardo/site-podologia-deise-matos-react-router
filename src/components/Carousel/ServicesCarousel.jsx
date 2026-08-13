import { useEffect, useRef, useState } from "react";
import styles from "./ServicesCarousel.module.css";

function getVisibleCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function ServicesCarousel({ services }) {
    const [visibleCount, setVisibleCount] = useState(getVisibleCount());
    const [activeIndex, setActiveIndex] = useState(0);
    const touchStartX = useRef(null);
    const autoplayRef = useRef(null);

    const maxIndex = Math.max(services.length - visibleCount, 0);

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(getVisibleCount());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setActiveIndex((prev) => Math.min(prev, maxIndex));
    }, [maxIndex]);

    const goTo = (index) => {
        setActiveIndex(Math.min(Math.max(index, 0), maxIndex));
    };

    const goNext = () => {
        setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const goPrev = () => {
        setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const restartAutoplay = () => {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(goNext, 4000);
    };

    useEffect(() => {
        restartAutoplay();
        return () => clearInterval(autoplayRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [maxIndex]);

    const handleMouseEnter = () => clearInterval(autoplayRef.current);
    const handleMouseLeave = () => restartAutoplay();

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;
        const deltaX = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(deltaX) > 40) {
            if (deltaX < 0) goNext();
            else goPrev();
            restartAutoplay();
        }
        touchStartX.current = null;
    };

    const handleManualNav = (action) => {
        action();
        restartAutoplay();
    };

    return (
        <div
            className={styles['carousel']}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                type="button"
                className={`${styles['nav-button']} ${styles['prev']}`}
                onClick={() => handleManualNav(goPrev)}
                aria-label="Serviço anterior"
            >
                ‹
            </button>

            <div
                className={styles['viewport']}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className={styles['track']}
                    style={{
                        width: `${(services.length / visibleCount) * 100}%`,
                        transform: `translateX(-${(activeIndex * 100) / services.length}%)`,
                    }}
                >
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className={styles['slide']}
                            style={{ width: `${100 / services.length}%` }}
                        >
                            <div className={styles['slide-card']}>
                                {service.image ? (
                                    <img className={styles['slide-image']} src={service.image} alt={service.title} />
                                ) : (
                                    <div className={styles['slide-icon']}>{service.icon}</div>
                                )}
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                type="button"
                className={`${styles['nav-button']} ${styles['next']}`}
                onClick={() => handleManualNav(goNext)}
                aria-label="Próximo serviço"
            >
                ›
            </button>

            <div className={styles['dots']}>
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`${styles['dot']} ${index === activeIndex ? styles['dot-active'] : ''}`}
                        onClick={() => handleManualNav(() => goTo(index))}
                        aria-label={`Ir para o slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ServicesCarousel;
