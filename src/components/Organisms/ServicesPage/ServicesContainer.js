import "./servicesContainer.css";
import NavBar from "../../Molecules/ReusableMolecules/NavBar/NavBar";
import Footer from "../../Molecules/ReusableMolecules/Footer/Footer";
import ServicesContainer from "../../Molecules/ServicesMolecules/ServicesContainer";

export default function ServicesPage() {
    return (
        <div className="servicePageContainer">
            <NavBar />
            <ServicesContainer />
            <Footer />
        </div>
    )
}
