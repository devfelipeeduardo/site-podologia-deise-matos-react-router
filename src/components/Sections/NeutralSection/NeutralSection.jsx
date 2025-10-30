import styles from "../sections.module.css"

function NeutralSection({ children, height, color}) {
  return (
    <section className={`${styles['neutral-section']} ${styles[height]} ${styles[color]}`}>
      {children}
    </section>
  )
}

export default NeutralSection