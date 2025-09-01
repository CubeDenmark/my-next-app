import Navbar from "../../../components/v2/Navbar";
import Home from "../../../components/v2/Home";
import About from "../../../components/v2/About";
import Projects from "../../../components/v2/Projects";
import Skills from "../../../components/v2/Skills";
import Contact from "../../../components/v2/Contact";
export default function v2() {

    return (
        <div id="main_div_v2">
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    )
}