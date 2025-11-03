import HeroSection from "../../components/Sections/HeroSection";
import NeutralSection from "../../components/Sections/NeutralSection/NeutralSection"
import Services from "./Contents/Services";
import AboutUs from "./Contents/AboutUs";
import Avaliations from "./Contents/Avaliations";
import ContactUs from "./Contents/ContactUs";
import Footer from "../../components/Footer/Footer";

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
            <NeutralSection height={'small'} color={'beige'}>
                <ContactUs />
            </NeutralSection >
            <Footer />
        </>
    )
}

export default Home;