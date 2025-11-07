import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

function Nav( {isSuspense, isNavHidden}) {
    return (
        <nav className={`${styles['nav']} ${isNavHidden ? '' : styles['nav-hidden']}`}>
            <Link to="/" className={`${styles.link} ${isSuspense ? styles['link-suspense'] : ""}`} >Início</Link>
            <Link to="/sobre" className={`${styles.link} ${isSuspense ? styles['link-suspense'] : ""}`} >Sobre</Link>
            <Link to="/servicos" className={`${styles.link} ${isSuspense ? styles['link-suspense'] : ""}`} >Serviços</Link>
            <Link to="/contato" className={`${styles.link} ${isSuspense ? styles['link-suspense'] : ""}`}>Contato</Link>
        </nav>
    )
}

export default Nav;