import "./homepageContainer.css";
import HomeHeader from "./Header/Header";
import Testimonials from "./TestimonialSection/TestimonialsSection";
import Services from "./ServicesSection/ServicesSection";
import Contact from "./ContactSection/ContactSection";
import NavBar from "../../Molecules/NavBar/NavBar";
import Footer from "../..//Molecules/Footer/Footer";

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
