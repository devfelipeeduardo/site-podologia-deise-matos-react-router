import aboutUsImage from "../../../assets/about-us-image.png"
import styles from "../Contents/Content.module.css"

function AboutUs() {
  return (
    <div className={styles['title-and-about-us-container']}>
      <h2>SOBRE NÓS</h2>
      <div className={styles['about-us-container']}>
        <img alt="" src={aboutUsImage} />
        <div className={styles['card']}>
          <h3>Entenda quem somos e porquê existimos</h3>
          <p>Com 18 anos de experiência, construímos uma história marcada por cuidado, ética e excelência. Nossa missão é oferecer um atendimento personalizado, com atenção aos detalhes e dedicação a cada cliente. Acreditamos que cada pessoa é única e merece confiança, bem-estar e resultados de qualidade.
            <br />
            ✨ Missão: cuidar com empatia e profissionalismo.
            <br />
            💚 Valores: respeito, ética, confiança, qualidade e amor pelo que fazemos.
          </p>
        </div>
      </div>
    </div>
  ) 
}

export default AboutUs;