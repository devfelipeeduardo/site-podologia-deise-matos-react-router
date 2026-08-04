import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import ScheduleButton from "../ScheduleButton/ScheduleButton";

import logoGreen from "../../assets/logo-deise-matos-green.png"
import logoWhite from "../../assets/logo-deise-matos.png"

function Header() {
    const [isSuspense, setSuspense] = useState(false);
    const [isNavHidden, setNavHidden] = useState(false);
    const [scheduleBtnColor, setScheduleBtnColor] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;

            window.requestAnimationFrame(() => {
                setSuspense((prev) => {
                    if (window.scrollY > 100) return true;
                    if (window.scrollY < 60) return false;
                    return prev;
                });
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setScheduleBtnColor(isSuspense ? "white" : "brand-green");
    }, [isSuspense]);

    const handleToggleMenu = () => {
        setNavHidden((prev) => !prev);
    };

    const handleNavLinkClick = () => {
        setNavHidden(false);
    };

    return (
        <header className={`${styles['header']} ${isSuspense ? styles['header-suspense'] : styles['brand-green-light-background']}`}>
            <Link to="/" onClick={handleNavLinkClick}>
                <img className={styles['logo']} src={`${isSuspense ? logoWhite : logoGreen}`} alt="Logo Deise" />
            </Link>
            <button className={`${styles['menu-toggle']} ${isSuspense ? styles['menu-toggle-suspense'] : ''} ${isNavHidden ? styles['menu-toggle-open'] : ''}`} onClick={handleToggleMenu}>{isNavHidden ? '✕' : '≡'}</button>
            <Nav isSuspense={isSuspense} isNavHidden={isNavHidden} onNavLinkClick={handleNavLinkClick}/>
            <ScheduleButton color={scheduleBtnColor} dimension={"small"} margin={"margin-right-50px"}/>

        </header>
    )
}

export default Header;