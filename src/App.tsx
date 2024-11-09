import { Toaster, toast } from "sonner";

import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
    useGSAP(() => {
        const elements = gsap.utils.toArray<HTMLElement>(".reveal-up");
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "-200 bottom",
                    end: "bottom 80%",
                    scrub: true,
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            });
        });
    });

    useEffect(() => {
        toast.info("The portfolio in note completed yet, still have some fake data");
        console.log("hi")
    }, []);

    return (
        <ReactLenis root>
            <Toaster richColors />
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    );
}

export default App;
