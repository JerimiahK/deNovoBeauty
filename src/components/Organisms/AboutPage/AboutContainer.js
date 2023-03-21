import "./aboutContainer.css";
import NavBar from "../../Molecules/ReusableMolecules/NavBar/NavBar";
import Footer from "../../Molecules/ReusableMolecules/Footer/Footer";
import AboutSection from "../../Molecules/AboutMolecules/AboutSection";

export default function AboutContainer() {
    return (
        <div className="aboutContainer">
            <NavBar />
            <AboutSection />
            <Footer />
        </div>
    );
}
