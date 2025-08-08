import Destination from "../components/Destination.js";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HeroImg from "../Assets/12.jpg";
import Trip from "../components/Trip.js";
import Footer from "../components/Footer.js";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        HeroImg={HeroImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
