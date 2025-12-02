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

    const handleToggleMenu = () => {
        setNavHidden((prev) => !prev);
    };

    console.log(isSuspense)

    return (
        <header className={`${styles['header']} ${isSuspense ? styles['header-suspense'] : styles['brand-green-light-background']}`}>
            <Link to="/">
                <img className={styles['logo']} src={`${isSuspense ? logoWhite : logoGreen}`} alt="Logo Deise" />
            </Link>
            <button className={styles['menu-toggle']} onClick={handleToggleMenu}>≡</button>
            <Nav isSuspense={isSuspense} isNavHidden={isNavHidden}/>
            <ScheduleButton color={scheduleBtnColor} dimension={"small"} margin={"margin-right-50px"}/>

        </header>
    )
}

export default Header;