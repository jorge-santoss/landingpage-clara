import Hero from "@/components/Hero/Hero";
import Problem from "@/components/Problem/Problem";
import Solution from "@/components/Solution/Solution";
import SocialProof from "@/components/SocialProof/SocialProof";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CtaSection from "@/components/CtaSection/CtaSection";
import Carrousel from "@/components/Carrousel/Carrousel";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Problem/>
                <Solution/>
                <Carrousel />
                <SocialProof/>
                <CtaSection/>
            </main>
            <Footer/>
        </>
    )
}
