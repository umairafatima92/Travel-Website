import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/night.jpg";
import Footer from "../components/Footer.js";
import Trip from "../components/Trip";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
