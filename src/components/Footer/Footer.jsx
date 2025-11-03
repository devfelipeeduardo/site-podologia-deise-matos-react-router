import styles from "../Footer/Footer.module.css"
import deiseIcon from "../../assets/logo-deise-matos.png"
import facebookIcon from "../../assets/facebook-icon.svg"
import instagramIcon from "../../assets/instagram-icon.svg"
import whatsAppIconWhite from "../../assets/logo-whatsapp-white.png"

function Footer() {
    return (
        <footer>
            <div className={styles['footer-content']}>
                <div className={styles["social-media-card"]}>
                    <img className={styles['logo']} src={deiseIcon} alt="Logo da Clínica" />
                    <p>O profissional que você procura! 🔎</p>
                    <span className={styles['social-media-logos']}>
                        <a href="https://api.whatsapp.com/send/?phone=5511975126282&text&type=phone_number&app_absent=0" target="blank"><img className={styles['whatsapp-logo']} src={whatsAppIconWhite} alt="Logo WhatsApp" /></a>
                        <a href="https://www.instagram.com/podologiadeisematos/" target="blank"><img className={styles['insta-logo']} src={instagramIcon} alt="Logo Instagram" /></a>
                        <a href="https://www.facebook.com/deisematos.matos.1" target="blank"><img className={styles['fb-logo']} src={facebookIcon} alt="Logo Facebook" /></a>
                    </span>
                </div>
                <div className={styles["contact-information-card"]}>
                    <h2>Contato</h2>
                    <span>+11 97512-6282</span>
                    <span className={styles['email']}>podologiadeisematos@gmail.com</span>
                </div>
                <div className={styles['rights']}>
                    ©2025 - Podologia Deise Matos.
                    <br/>
                    Todos os direitos reservados.
                </div>
            </div>

        </footer>
    )
}

export default Footer