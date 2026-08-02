import NeutralSection from "../../components/Sections/NeutralSection/NeutralSection";
import Footer from "../../components/Footer/Footer";
import styles from "./Servicos.module.css"

function Servicos() {
    return (
        <>
            <section className={styles['hero-section']}>
                <div className={styles['hero-content']}>
                    <h1>NOSSOS SERVIÇOS 👣</h1>
                    <p>Conheça todos os tratamentos podológicos disponíveis na nossa clínica</p>
                </div>
            </section>
            <NeutralSection height={'super-large'} color={'brand-green-light-02'}>
                <div className={styles['services-container']}>
                    <h2>Tratamentos Especializados</h2>
                    <div className={styles['services-grid']}>
                        <div className={styles['service-card']}>
                            <h3>💅 Unhas</h3>
                            <p>Tratamento de unhas encravadas, espessadas e outras problemas ungueais com tecnologia de ponta.</p>
                        </div>
                        <div className={styles['service-card']}>
                            <h3>🦶 Calos e Calosidades</h3>
                            <p>Remoção segura e eficaz de calos, calosidades e ressecamento dos pés.</p>
                        </div>
                        <div className={styles['service-card']}>
                            <h3>🩸 Micose</h3>
                            <p>Tratamento especializado para infecções fúngicas nas unhas e pele dos pés.</p>
                        </div>
                        <div className={styles['service-card']}>
                            <h3>👣 Rachadura de Calcanhares</h3>
                            <p>Procedimento seguro para eliminar rachaduras e hiperqueratose do calcanhares.</p>
                        </div>
                        <div className={styles['service-card']}>
                            <h3>🏥 Podoterapeuta</h3>
                            <p>Sessões de terapia podológica para alívio de dores e desconfortos nos pés.</p>
                        </div>
                        <div className={styles['service-card']}>
                            <h3>💆 Massagem Terapêutica</h3>
                            <p>Massagem podológica relaxante com técnicas terapêuticas especializadas.</p>
                        </div>
                    </div>
                </div>
            </NeutralSection>
            <NeutralSection height={'small'} color={'brand-beige'}>
                <div className={styles['info-container']}>
                    <h2>Por que escolher nossos serviços?</h2>
                    <div className={styles['benefits-list']}>
                        <div className={styles['benefit-item']}>
                            <p>✔️ Profissionais experientes com 18+ anos no mercado</p>
                        </div>
                        <div className={styles['benefit-item']}>
                            <p>✔️ Tecnologia moderna e equipamentos de alta qualidade</p>
                        </div>
                        <div className={styles['benefit-item']}>
                            <p>✔️ Atendimento personalizado e humanizado</p>
                        </div>
                        <div className={styles['benefit-item']}>
                            <p>✔️ Ambiente limpo, seguro e confortável</p>
                        </div>
                    </div>
                </div>
            </NeutralSection>
            <Footer />
        </>
    )
}

export default Servicos;