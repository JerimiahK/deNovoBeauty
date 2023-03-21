import "./servicesContainer.css";
import BridalMakeupCard from "../../Atoms/ServiceCards/BridalMakeup";
import PersonalMakeupCard from "../../Atoms/ServiceCards/PersonalMakeup";
import MakeupTutorialsCard from "../../Atoms/ServiceCards/MakeupTutorials";
import EditorialMakeupCard from "../../Atoms/ServiceCards/EditorialMakeup";
import PartyMakeupCard from "../../Atoms/ServiceCards/PartyMakeup";
import VirtualPersonalCard from "../../Atoms/ServiceCards/Virtual_Personal";

export default function ServicesSection() {
    return (
        <div className="servicesSectionContainer">
            <h1 className="servicesHeaderText">Services</h1>
            <div className="servicesCardContainer">
                <BridalMakeupCard />
                <PersonalMakeupCard />
                <MakeupTutorialsCard />
                <EditorialMakeupCard />
                <PartyMakeupCard />
                <VirtualPersonalCard />
            </div>
        </div>
    );
}
