import Hero from "@/components/Hero/Hero";
import Presentation from "@/components/Presentation/Presentation";
import Portfolio from "@/components/Portfolio/Portfolio";
import Solution from "@/components/Solution/Solution";
import SocialProof from "@/components/SocialProof/SocialProof";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Presentation/>
                <Portfolio/>
                <Solution/>
                <SocialProof/>
                <CtaSection/>
            </main>
            <Footer/>
        </>
    )
}
