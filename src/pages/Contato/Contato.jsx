import NeutralSection from "../../components/Sections/NeutralSection/NeutralSection";
import Footer from "../../components/Footer/Footer";
import styles from "./Contato.module.css"

function Contato() {
    return (
        <>
            <NeutralSection height={'small'} color={'white'}>
              <div className={styles['contact-content']}>
                <div className={styles['contact-left']}>
                    <h1>Entre em contato!</h1>
                    <p>Entre em contato e agende seu atendimento na Clínica de Podologia Deise Matos.</p>

                    <div className={styles['info-item']}>
                        <span>📍</span>
                        <p>R. Moacir Miguel da Silva, 61 - Jardim Bonfiglioli, São Paulo - SP, 05595-000</p>
                    </div>
                    <div className={styles['info-item']}>
                        <span>📱</span>
                        <p>(+11) 97512-6282 — WhatsApp disponível!</p>
                    </div>
                    <div className={styles['info-item']}>
                        <span>✉️</span>
                        <p>contato@deisematos.com.br</p>
                    </div>

                    <iframe
                        className={styles['map-frame']}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.722079696665!2d-46.74405522486264!3d-23.57842306221895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce572eb6a2d2cb%3A0x7f18f1236fa6dd3e!2sPodologia%20Deise%20Matos!5e0!3m2!1spt-BR!2sbr!4v1785799275880!5m2!1spt-BR!2sbr"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Localização Clínica de Podologia Deise Matos"
                    ></iframe>
                </div>

                <div className={styles['contact-right']}>
                    <h2>Horário de Atendimento</h2>
                    <div className={styles['schedule-info']}>
                        <div className={styles['schedule-card']}>
                            <h3>Terça a Sexta</h3>
                            <p>08:00 - 18:00</p>
                        </div>
                        <div className={styles['schedule-card']}>
                            <h3>Sábado</h3>
                            <p>08:00 - 17:00</p>
                        </div>
                        <div className={styles['schedule-card']}>
                            <h3>Domingo e Segunda</h3>
                            <p>Fechado</p>
                        </div>
                    </div>
                </div>
              </div>
            </NeutralSection>
            <Footer />
        </>
    )
}

export default Contato;