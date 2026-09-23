import Hero from "@/components/Hero/Hero";
import Presentation from "@/components/Presentation/Presentation";
import Portfolio from "@/components/Portfolio/Portfolio";
import Formule from "@/components/Formule/Formule";
import SocialProof from "@/components/SocialProof/SocialProof";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import FaqSection from "@/components/FaqSection/FaqSection";
import Carrousel from "@/components/Carrousel/Carrousel";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Presentation/>
                <Portfolio/>
                <Formule/>
                <Carrousel/>
                <SocialProof/>
                <CtaSection/>
                <FaqSection/>
            </main>
            <Footer/>
        </>
    )
}
