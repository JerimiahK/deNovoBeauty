import "./servicesPage.css";
import NavBar from "../../Molecules/NavBar/NavBar";
import Footer from "../../Molecules/Footer/Footer";
import ServicesContainer from "../../Molecules/ServicesSection/ServicesContainer";

export default function ServicesPage() {
    return (
        <div className="servicePageContainer">
            <NavBar />
            <ServicesContainer />
            <Footer />
        </div>
    )
}
