import styles from "./ScheduleButton.module.css"

function ScheduleButton({ color, dimension }) {
  return (
    <button className={`${styles['schedule-button']} ${styles[color]} ${styles[dimension]}`}>AGENDAR CONSULTA</button>
  )
}

export default ScheduleButton;