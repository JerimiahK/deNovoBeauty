import "./servicesContainer.css";
import BridalMakeupCard from "../../Atoms/ServiceCards/BridalMakeup";

export default function ServicesSection() {
    return <div className="servicesSectionContainer">
        <h1 className="servicesHeaderText">Services</h1>
        <BridalMakeupCard />
    </div>;
}
