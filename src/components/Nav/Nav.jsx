import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.link}>Início</Link>
            <Link to="/sobre" className={styles.link}>Sobre</Link>
            <Link to="/servicos" className={styles.link}>Servicos</Link>
            <Link to="/contato" className={styles.link}>Contato</Link>
        </nav>
    )
}

export default Nav;