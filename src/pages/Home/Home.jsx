// import styles from "./Home.module.css"
import HeroSection from "../../components/Sections/HeroSection";
import NeutralSection from "../../components/Sections/NeutralSection/NeutralSection"
import Services from "./Contents/Services";
import AboutUs from "./Contents/AboutUs";
import Avaliations from "./Contents/Avaliations";

function Home() {
    return (
        <>
            <HeroSection />
            <NeutralSection height={'super-large'} color={'brand-green-light-02'}>
                <Services />
            </NeutralSection >
            <NeutralSection height={'small'} color={'brand-beige'}>
                <AboutUs />
            </NeutralSection >
            <NeutralSection height={'small'} color={'white'}>
                <Avaliations />
            </NeutralSection >
        </>
    )
}

export default Home;