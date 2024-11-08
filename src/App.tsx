import "./App.css";

import {ReactLenis} from 'lenis/react'

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";

function App() {
    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
            </main>
        </ReactLenis>
    );
}

export default App;
