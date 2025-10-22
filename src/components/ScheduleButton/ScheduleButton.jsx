import styles from "./ScheduleButton.module.css"

function ScheduleButton({color}) {
  return (
    <button className={`${styles['schedule-button']} ${styles[color]}` }>AGENDAR CONSULTA</button>
  )
}

export default ScheduleButton;