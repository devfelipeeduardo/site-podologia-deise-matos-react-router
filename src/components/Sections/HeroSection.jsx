import styles from "../Sections/sections.module.css"
import ScheduleButton from "../ScheduleButton/ScheduleButton.jsx"

import fotoDeise from "../../assets/foto-deise.png"
import Statistics from "../Statistics/Statistics.jsx";

function HeroSection() {
  return (
    <section className={`${styles['hero-section']} ${styles['brand-green-light']}`}>
      <main className={styles['hero-content']}>
        <div className={styles['container-informations']}>
          <h2>BOAS-VINDAS A CLÍNICA DE PODOLOGIA DEISE MATOS 👋</h2>
          <h1>Podologia de Qualidade
            Simplificada para Todos</h1>
          <p>A Clínica de Podologia Deise Matos vai além dos sintomas para tratar a causa raíz das doenças nos pés e proporcionar uma cura eficiente!</p>
          <ScheduleButton color="white" dimension="big" />
        </div>
        <img className={styles['img']} src={fotoDeise} alt="Foto da pódologa Deise Matos" />
      </main>
      <Statistics />
    </section>

  )
}

export default HeroSection;