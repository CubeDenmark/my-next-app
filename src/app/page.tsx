import Header from "../../components/v1/Header";
import Main from "../../components/v1/Home";
import About from "../../components/v1/About";
import Projects from "../../components/v1/Projects";
import Skills from "../../components/v1/Skills"
import Contacts from "../../components/v1/Contacts";
import Footer from "../../components/v1/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      <Footer />
    </main>
  );
}
