import styles from "./Statistics.module.css"

function Statistics() {
  return (
    <div className={styles['performance-metrics']}>
      <div className={styles['numbers-and-description']}>
        <span className={styles['numbers']}>+10.000</span>
        <p className={styles['description']}>Pacientes Atendidos</p>
      </div>
      <div className={styles['numbers-and-description']}>
        <span className={styles['numbers']}>+15</span>
        <p className={styles['description']}>Tratamentos Disponíveis</p>
      </div>
      <div className={styles['numbers-and-description']}>
        <span className={styles['numbers']}>+19</span>
        <p className={styles['description']}>Anos no Mercado</p>
      </div>


    </div>
  )
}

export default Statistics