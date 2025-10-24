import styles from "../Sections/sections.module.css"
import ScheduleButton from "../ScheduleButton/ScheduleButton.jsx"

import fotoDeise from "../../assets/foto-deise.png"

function HeroSection() {
  return (
    <section className={`${styles['hero-section']} ${styles['brand-green-light-02']}`}>
      <main className={styles['hero-content']}>
        <div className={styles['container-informations']}>
          <h2>BOAS-VINDAS A CLÍNICA DE PODOLOGIA DEISE MATOS 👋</h2>
          <h1>Podologia de Qualidade
            Simplificada para Todos</h1>
          <p>A Clínica de Podologia Deise Matos vai além dos sintomas para tratar a causa raíz das doenças nos pés e proporcionar uma cura eficiente!</p>
          <ScheduleButton color="brand-green" />
        </div>
        <img src={fotoDeise} alt="" />
      </main>
    </section>

  )
}

export default HeroSection;