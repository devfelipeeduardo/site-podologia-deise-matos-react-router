import NeutralSection from "../../components/Sections/NeutralSection/NeutralSection";
import Footer from "../../components/Footer/Footer";
import styles from "./Sobre.module.css"

function Sobre() {
    return (
        <>
            <section className={`${styles['hero-section']} ${styles['brand-green-light']}`}>
                <div className={styles['hero-content']}>
                    <h1>SOBRE A CLÍNICA DEISE MATOS 👨‍⚕️</h1>
                    <p>Conheça nossa história, valores e missão dedicados ao cuidado com seus pés</p>
                </div>
            </section>
            <NeutralSection height={'small'} color={'brand-green-light-02'}>
                <div className={styles['about-container']}>
                    <h2>Nossa História</h2>
                    <p>Com mais de 18 anos de experiência, a Clínica de Podologia Deise Matos se consolidou como uma referência em cuidados podológicos. Nossa trajetória é marcada pelo compromisso com a excelência, ética profissional e dedicação ao bem-estar dos nossos pacientes.</p>
                </div>
            </NeutralSection>
            <NeutralSection height={'small'} color={'brand-beige'}>
                <div className={styles['values-container']}>
                    <h2>Nossos Valores</h2>
                    <div className={styles['values-grid']}>
                        <div className={styles['value-card']}>
                            <h3>💚 Confiança</h3>
                            <p>Construímos relacionamentos baseados em confiabilidade e transparência com cada paciente.</p>
                        </div>
                        <div className={styles['value-card']}>
                            <h3>✨ Qualidade</h3>
                            <p>Oferecemos tratamentos com as melhores técnicas e produtos disponíveis no mercado.</p>
                        </div>
                        <div className={styles['value-card']}>
                            <h3>🤝 Empatia</h3>
                            <p>Compreendemos as necessidades individuais de cada paciente e tratamos com cuidado personalizado.</p>
                        </div>
                        <div className={styles['value-card']}>
                            <h3>⚕️ Profissionalismo</h3>
                            <p>Nossa equipe é altamente capacitada e atualizada com as melhores práticas da podologia.</p>
                        </div>
                    </div>
                </div>
            </NeutralSection>
            <NeutralSection height={'small'} color={'white'}>
                <div className={styles['mission-container']}>
                    <h2>Nossa Missão</h2>
                    <p>Proporcionar tratamentos podológicos de excelência que melhorem a qualidade de vida dos nossos pacientes, trabalhando com ética, respeito e dedicação para solucionar os problemas nos pés de forma eficiente e humanizada.</p>
                </div>
            </NeutralSection>
            <Footer />
        </>
    )
}

export default Sobre;