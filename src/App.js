import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import "./index.css";

function App() {
  const AboutRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case "About":
        ref = AboutRef;
        break;

      case "Projects":
        ref = ProjectsRef;
        break;

      case "Contact":
        ref = ContactRef;
        break;

      default:
        return;
    }
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} />
      <Hero />
      <Projects ref={ProjectsRef} />
      <About ref={AboutRef} />
      <Contact ref={ContactRef} />
      <Footer />
    </div>
  );
}

export default App;
