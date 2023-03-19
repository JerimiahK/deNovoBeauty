import "./aboutContainer.css";
import NavBar from "../../Molecules/NavBar/NavBar";
import Footer from "../../Molecules/Footer/Footer";
import AboutSection from "../../Molecules/AboutSection/AboutSection";

export default function AboutContainer() {
    return (
        <div className="aboutContainer">
            <NavBar />
            <AboutSection />
            <Footer />
        </div>
    );
}
