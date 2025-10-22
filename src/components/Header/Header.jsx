import Nav from "../Nav/Nav";
import ScheduleButton from "../ScheduleButton/ScheduleButton";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-deise-matos-green.png"

function Header() {
    return (
        <header className={`${styles['header']} ${styles['transparent-background']}`}>
            <Link to="/" className={styles['header']}>
                <img className={styles['logo']} src={logo} alt="Logo Deise" />
            </Link>
            <Nav />
            <ScheduleButton color="brand-green" />
        </header>
    )
}

export default Header;