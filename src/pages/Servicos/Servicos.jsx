import NeutralSection from "../../components/Sections/NeutralSection/NeutralSection";
import Footer from "../../components/Footer/Footer";
import ScheduleButton from "../../components/ScheduleButton/ScheduleButton";
import ServicesCarousel from "../../components/Carousel/ServicesCarousel";
import sectionStyles from "../../components/Sections/sections.module.css";
import styles from "./Servicos.module.css"
import contactUsImage from "../../assets/contact-us-image.png"

// Para adicionar as fotos: salve os 6 arquivos em src/assets/services/ com os nomes abaixo,
// descomente os imports e troque `image: null` por `image: <nomeDaVariavel>` em cada item.
// import unhasImage from "../../assets/services/unhas.jpg"
// import calosImage from "../../assets/services/calos-e-calosidades.jpg"
// import micoseImage from "../../assets/services/micose.jpg"
// import rachaduraImage from "../../assets/services/rachadura-de-calcanhares.jpg"
// import podoterapeutaImage from "../../assets/services/podoterapeuta.jpg"
// import massagemImage from "../../assets/services/massagem-terapeutica.jpg"


const servicesData = [
    { icon: "💅", title: "Unhas", description: "Tratamento de unhas encravadas, espessadas e outras problemas ungueais com tecnologia de ponta.", image: null },
    { icon: "🦶", title: "Calos e Calosidades", description: "Remoção segura e eficaz de calos, calosidades e ressecamento dos pés.", image: null },
    { icon: "🩸", title: "Micose", description: "Tratamento especializado para infecções fúngicas nas unhas e pele dos pés.", image: null },
    { icon: "👣", title: "Rachadura de Calcanhares", description: "Procedimento seguro para eliminar rachaduras e hiperqueratose do calcanhares.", image: null },
    { icon: "🏥", title: "Podoterapeuta", description: "Sessões de terapia podológica para alívio de dores e desconfortos nos pés.", image: null },
    { icon: "💆", title: "Massagem Terapêutica", description: "Massagem podológica relaxante com técnicas terapêuticas especializadas.", image: null },
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