import { useEffect } from "react";
import styles from "./ScheduleButton.module.css"
import whatsAppIconWhite from "../../assets/logo-whatsapp-white.png"
import whatsAppIconGreen from "../../assets/logo-whatsapp-green.png"

function ScheduleButton({ color, dimension, margin }) {

    useEffect(() => {
    new Image().src = whatsAppIconWhite;
    new Image().src = whatsAppIconGreen;
  }, []);

  return (
    <a href="https://api.whatsapp.com/send/?phone=5511975126282&text&type=phone_number&app_absent=0" target="blank">
      <button className={`${styles['schedule-button']} ${styles[color]} ${styles[dimension]} ${styles[margin]}`}>
        <img src={whatsAppIconWhite} className={`${styles['whatsapp-icon']} ${styles['icon-white']}`} alt="" />
        <img src={whatsAppIconGreen} className={`${styles['whatsapp-icon']} ${styles['icon-green']}`} alt="" />
        AGENDAR CONSULTA
      </button>
    </a>
  )
}

export default ScheduleButton;