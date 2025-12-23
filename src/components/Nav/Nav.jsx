import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

function Nav( {isSuspense, isNavHidden, onNavLinkClick}) {
    return (
        <nav className={`${styles['nav']} ${isNavHidden ? '' : styles['nav-hidden']} ${isSuspense ? styles['nav-suspense'] : ''}`}>
            <Link to="/" onClick={onNavLinkClick} className={`${styles.link} ${isSuspense ? styles['link-suspense'] : ""}`} >Início</Link>
            <Link to="/sobre" onClick={onNavLinkClick} className={`${styles.link} ${isSuspense ? styles['link-suspense'] : ""}`} >Sobre</Link>
            <Link to="/servicos" onClick={onNavLinkClick} className={`${styles.link} ${isSuspense ? styles['link-suspense'] : ""}`} >Serviços</Link>
            <Link to="/contato" onClick={onNavLinkClick} className={`${styles.link} ${isSuspense ? styles['link-suspense'] : ""}`}>Contato</Link>
        </nav>
    )
}

export default Nav;