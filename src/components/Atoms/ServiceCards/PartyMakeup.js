import "./partyMakeup.css";
import Pic1 from "../../../Assets/Pictures/MiscImages/party.jpg";
import {Carousel} from "react-bootstrap";

export default function PartyMakeupCard() {
    return (
        <div className="partyMakeupContainer">
            <div>
                <h3>Party Makeup</h3>
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
                <h3>Party Makeup Information</h3>
                <div className="optionsContainer">
                    <h5>Party Makeup</h5>
                    <div className="partyListContainer">
                        <p>
                            Party Makeup prices will vary by the number of
                            applications and the amount of time that you want to
                            book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
