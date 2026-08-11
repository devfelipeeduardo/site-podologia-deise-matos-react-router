import NeutralSection from "../../components/Sections/NeutralSection/NeutralSection";
import Footer from "../../components/Footer/Footer";
import ScheduleButton from "../../components/ScheduleButton/ScheduleButton";
import ServicesCarousel from "../../components/Carousel/ServicesCarousel";
import sectionStyles from "../../components/Sections/sections.module.css";
import styles from "./Servicos.module.css"
import contactUsImage from "../../assets/contact-us-image.png"

// Para adicionar as fotos: salve os 6 arquivos em src/assets/services/ com os nomes abaixo,
// descomente os imports e troque `image: null` por `image: <nomeDaVariavel>` em cada item.
import unhaImage from "../../assets/services/unha_encravada.png"
import rachaduraCalcanhar from "../../assets/services/rachadura-de-calcanhar.png"
import micoseImage from "../../assets/services/micose.png"
import pesIdososImage from "../../assets/services/pes_idoso.png"
import pesDiabeticos from "../../assets/services/pes_diabeticos.png"
import laserterapiaImage from "../../assets/services/laserterapia.png"
// importpesDi from "../../assets/services/massagem-terapeutica.jpg"


const servicesData = [
    { icon: "💅", title: "Unhas", description: "Tratamento de unhas encravadas, espessadas e outras problemas ungueais com tecnologia de ponta.", image: unhaImage },
    { icon: "🦶", title: "Calos e Calosidades", description: "Remoção segura e eficaz de calos, calosidades e ressecamento dos pés.", image: rachaduraCalcanhar },
    { icon: "🩸", title: "Micose", description: "Tratamento especializado para infecções fúngicas nas unhas e pele dos pés.", image: micoseImage },
    { icon: "👣", title: "Laserterapia", description: "Tratamento com laser de baixa intensidade para auxiliar na cicatrização, reduzir inflamações e aliviar dores e desconfortos nos pés.", image: laserterapiaImage },
    { icon: "🏥", title: "Cuidado com o pé de Idosos", description: "Cuidados especializados para manter os pés dos idosos saudáveis, prevenindo rachaduras, calosidades e outros desconfortos.", image: pesIdososImage },
    { icon: "💆", title: "Pés Diabéticos", description: "Massagem podológica relaxante com técnicas terapêuticas especializadas.", image: pesDiabeticos },
];

function Servicos() {
    return (
        <>
            <NeutralSection height={'large'} color={'brand-green-light-02'}>
                <div className={styles['services-container']}>
                    <h2>Tratamentos Especializados</h2>
                    <ServicesCarousel services={servicesData} />
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