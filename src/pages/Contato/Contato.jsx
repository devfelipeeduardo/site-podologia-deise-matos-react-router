import NeutralSection from "../../components/Sections/NeutralSection/NeutralSection";
import Footer from "../../components/Footer/Footer";
import styles from "./Contato.module.css"

function Contato() {
    return (
        <>
            <section className={styles['hero-section']}>
                <div className={styles['hero-content']}>
                    <h1>FALE CONOSCO 📞</h1>
                    <p>Entre em contato e agende seu atendimento na clínica</p>
                </div>
            </section>
            <NeutralSection height={'small'} color={'white'}>
                <div className={`${styles['contact-container']} ${styles['section-small']}`}>
                    <h2>Informações de Contato</h2>
                    <div className={styles['contact-info']}>
                        <div className={styles['info-card']}>
                            <h3>📍 Endereço</h3>
                            <p>Rua/Avenida, Número<br/>Bairro - Cidade, Estado<br/>CEP: 00000-000</p>
                        </div>
                        <div className={styles['info-card']}>
                            <h3>📱 Telefone</h3>
                            <p>(+11) 97512-6282<br/>WhatsApp disponível!</p>
                        </div>
                        <div className={styles['info-card']}>
                            <h3>✉️ Email</h3>
                            <p>contato@deisematos.com.br</p>
                        </div>
                    </div>
                </div>
            </NeutralSection>
            <NeutralSection height={'small'} color={'brand-green-light-02'}>
                <div className={`${styles['schedule-container']} ${styles['section-large']}`}>
                    <h2>Horário de Atendimento</h2>
                    <div className={styles['schedule-info']}>
                        <div className={styles['schedule-card']}>
                            <h3>Segunda a Sexta</h3>
                            <p>08:00 - 18:00</p>
                        </div>
                        <div className={styles['schedule-card']}>
                            <h3>Sábado</h3>
                            <p>08:00 - 14:00</p>
                        </div>
                        <div className={styles['schedule-card']}>
                            <h3>Domingo</h3>
                            <p>Fechado</p>
                        </div>
                    </div>
                </div>
            </NeutralSection>
            <Footer />
        </>
    )
}

export default Contato;