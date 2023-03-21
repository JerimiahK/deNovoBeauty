import "./homepageContainer.css";
import HomeHeader from "../../Molecules/HomeMolecules/Header/Header";
import Testimonials from "../../Molecules/HomeMolecules/TestimonialSection/TestimonialsSection";
import Services from "../../Molecules/HomeMolecules/ServicesSection/ServicesSection";
import Contact from "../../Molecules/HomeMolecules/ContactSection/ContactSection";
import NavBar from "../../Molecules/ReusableMolecules/NavBar/NavBar";
import Footer from "../../Molecules/ReusableMolecules/Footer/Footer";

export default function HomepageContainer() {
    return (
        <div className="homepageContainer">
            <HomeHeader />
            <NavBar />
            <Testimonials />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}
