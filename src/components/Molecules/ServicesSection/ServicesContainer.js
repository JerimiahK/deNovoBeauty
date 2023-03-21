import "./servicesContainer.css";
import BridalMakeupCard from "../../Atoms/ServiceCards/BridalMakeup";
import PersonalMakeupCard from "../../Atoms/ServiceCards/PersonalMakeup";
import EditorialMakeupCard from "../../Atoms/ServiceCards/EditorialMakeup";

export default function ServicesSection() {
    return (
        <div className="servicesSectionContainer">
            <h1 className="servicesHeaderText">Services</h1>
            <div className="servicesCardContainer">
                <BridalMakeupCard />
                <PersonalMakeupCard />
                <EditorialMakeupCard />
            </div>
        </div>
    );
}
