import emailIcon from "../../../assets/email-icon.png"
import adressIcon from "../../../assets/adress-icon.svg"
import contactImage from "../../../assets/contact-us-image.png"
import styles from "../Contents/Content.module.css"
import ScheduleButton from "../../../components/ScheduleButton/ScheduleButton"

function ContactUs() {
    return (
        <div className={styles['contact-us-container']}>
            <div className={styles['card']}>
                <h2>Entre em contato com a gente</h2>
                <span className={styles['endereco-span']}>
                    <img src={adressIcon} alt="Ícone de endereço" />
                    R. Moacir Miguel da Silva, 61 - Jd. Bonfiglioli
                </span>
                <span className={styles['email-span']} >
                    <img src={emailIcon} alt="Ícone de e-mail" />
                    podologiadeisematos@gmail.com
                </span>
                <ScheduleButton color={"white"} dimension={"super-large"} />
            </div>
            <img src={contactImage} alt="Imagem da clínica" />
        </div>
    )
}

export default ContactUs;