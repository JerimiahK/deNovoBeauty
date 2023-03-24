import "./partyMakeup.css";
import Pic1 from "../../../Assets/Pictures/MiscImages/party.jpg";
import {Carousel} from "react-bootstrap";

export default function PartyMakeupCard() {
    return (
        <div className="partyMakeupContainer">
            <div>
                <h1>
                    <strong>Party & Group Makeup</strong>
                </h1>
                <Carousel className="servicesCarousel">
                    {/* Item 1 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 virtualImg"
                            src={Pic1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="partyOptionsContainer">
                <h2>
                    <strong>Party & Group Makeup Information</strong>
                </h2>
                <div className="optionsContainer">
                    <div className="partyListContainer">
                        <p>
                            Party & Group Makeup prices will vary by the number
                            of applications and the amount of time that you want
                            to book. Group and party makeup can include birthday
                            parties, group tutorials, bachelorette parties,
                            team-building events and many more! Please contact
                            me for your quote!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
