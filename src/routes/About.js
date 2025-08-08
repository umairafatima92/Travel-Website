import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/night.jpg";
import Footer from "../components/Footer.js";
import AboutUs from "../components/AboutUs.js";
function About() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" HeroImg={AboutImg} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
