import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import ScheduleButton from "../ScheduleButton/ScheduleButton";

import logoGreen from "../../assets/logo-deise-matos-green.png"
import logoWhite from "../../assets/logo-deise-matos.png"
// import logo from "../../assets/logo-deise-matos-green.png"

function Header() {

    const [isSuspense, setSuspense] = useState(false);
    const [scheduleBtnColor, setScheduleBtnColor] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSuspense(true);
            } else {
                setSuspense(false);
            }
        };

        if (isSuspense == true) {
            setScheduleBtnColor("white");
        } 
        else {
            setScheduleBtnColor("brand-green")
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isSuspense]);

    console.log(isSuspense)

    return (
        <header className={`${styles['header']} ${isSuspense ? styles['header-suspense'] : styles['brand-green-light-background']}`}>
            <Link to="/" className={styles['header']}>
                <img className={styles['logo']} src={`${isSuspense ? logoWhite : logoGreen}`} alt="Logo Deise" />
            </Link>
            <Nav isSuspense={isSuspense} />
            <ScheduleButton color={scheduleBtnColor} />
        </header>
    )
}

export default Header;