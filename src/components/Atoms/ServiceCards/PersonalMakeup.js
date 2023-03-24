import "./personalMakeup.css";
import {Carousel} from "react-bootstrap";
import Pic1 from "../../../Assets/Pictures/PersonalMakeup/Personal-Makeup.avif";
import Pic2 from "../../../Assets/Pictures/PersonalMakeup/Personal-Makeup2.avif";

export default function PersonalMakeupCard() {
    return (
        <div className="personalMakeupContainer">
            <div>
                <h1>
                    <strong>Personal Makeup</strong>
                </h1>
                <Carousel className="servicesCarousel">
                    {/* Item 1 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 personalImg"
                            src={Pic1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    {/* Item 2 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 personalImg"
                            src={Pic2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="personalOptionsContainer">
                <h2>
                    <strong>Personal Makeup Information</strong>
                </h2>
                {/* Basic Application */}
                <div className="optionsContainer">
                    <h4>
                        <strong>Basic Application</strong>
                    </h4>
                    <ul className="personalListContainer">
                        <li>
                            <strong>Starting at $85 -</strong> Personal makeup
                            is individual makeup for any event! Whether you're
                            going to prom, a dinner, a party, or a concert, I
                            have the makeup look for you! It'll last all night!
                            This service doesn't include lashes, but you can add
                            them for an additional fee! - 1hr{" "}
                            <i className="mustHave">*lashes not included*</i>
                        </li>
                    </ul>
                </div>
                {/* GLAM Application */}
                <div className="optionsContainer">
                    <h4>
                        <strong>Glam Personal Event</strong>
                    </h4>
                    <ul className="personalListContainer">
                        <li>
                            <strong>$125 -</strong> Want to go all out for your
                            big event? This service can include big lashes,
                            graphic liner, and more! We take extra time to give
                            you extra GLAM! - 1.5hr <i className="mustHave">*lashes included*</i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
