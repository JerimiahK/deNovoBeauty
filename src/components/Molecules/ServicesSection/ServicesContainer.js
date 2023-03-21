import "./servicesContainer.css";
import BridalMakeupCard from "../../Atoms/ServiceCards/BridalMakeup";
import PersonalMakeupCard from "../../Atoms/ServiceCards/PersonalMakeup";
import EditorialMakeupCard from "../../Atoms/ServiceCards/EditorialMakeup";
import PartyMakeupCard from "../../Atoms/ServiceCards/PartyMakeup";

export default function ServicesSection() {
    return (
        <div className="servicesSectionContainer">
            <h1 className="servicesHeaderText">Services</h1>
            <div className="servicesCardContainer">
                <BridalMakeupCard />
                <PersonalMakeupCard />
                <EditorialMakeupCard />
                <PartyMakeupCard />
            </div>
        </div>
    );
}
