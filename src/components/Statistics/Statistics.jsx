import styles from "./Statistics.module.css"

function Statistics() {
  return (
    <div className={styles['performance-metrics']}>
      <div className={styles['numbers-and-description']}>
        <span className={styles['numbers']}>+3.500</span>
        <p className={styles['description']}>Pacientes Atendidos</p>
      </div>
      <div className={styles['numbers-and-description']}>
        <span className={styles['numbers']}>+15</span>
        <p className={styles['description']}>Tratamentos Disponíveis</p>
      </div>
      <div className={styles['numbers-and-description']}>
        <span className={styles['numbers']}>+18</span>
        <p className={styles['description']}>Anos no Mercado</p>
      </div>


    </div>
  )
}

export default Statistics