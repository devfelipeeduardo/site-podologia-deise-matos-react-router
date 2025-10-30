// import styles from "./Home.module.css"
import HeroSection from "../../components/Sections/HeroSection";
import Services from "../../components/Sections/NeutralSection/Contents/Services";
import NeutralSection from "../../components/Sections/NeutralSection/NeutralSection"
import AboutUs from "../../components/Sections/NeutralSection/Contents/AboutUs";

function Home() {
    return (
        <>
            <HeroSection />
            <NeutralSection height={'height-130vh'} color={'brand-green-light-02'}>
                <Services />
            </NeutralSection >
            <NeutralSection height={'height-100vh'} color={'brand-beige'}>
                <AboutUs />
            </NeutralSection >
        </>
    )
}

export default Home;