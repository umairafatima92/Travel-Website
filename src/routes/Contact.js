import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../Assets/2.jpg";
import Footer from "../components/Footer.js";
import ContactForm from "../components/ContactForm.js";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
