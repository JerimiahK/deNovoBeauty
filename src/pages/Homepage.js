import HomeHeader from "../components/Organisms/HomePage/Header/Header";
import Testimonials from "../components/Organisms/HomePage/TestimonialSection/Testimonials";
import Services from "../components/Organisms/HomePage/ServicesSection/Services";
import Contact from "../components/Organisms/HomePage/ContactSection/ContactSection";
import NavBar from "../components/Molecules/NavBar/NavBar";
import Footer from "../components/Molecules/Footer/Footer";

export default function Homepage() {
  return (
      <>
          <HomeHeader />
          <NavBar />
          <Testimonials />
          <Services />
          <Contact />
          <Footer />
      </>
  );
}
