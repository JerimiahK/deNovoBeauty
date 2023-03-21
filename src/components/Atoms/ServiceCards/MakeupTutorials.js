import "./makeupTutorials.css";
import { Carousel } from "react-bootstrap";
import Pic1 from "../../../Assets/Pictures/MiscImages/makeupMisc2.jpg";

export default function MakeupTutorialsCard() {
    return (
        <div className="tutorialMakeupContainer">
            <div>
                <h3>Makeup Tutorial</h3>
                <Carousel className="servicesCarousel">
                    {/* Item 1 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 tutorialImg"
                            src={Pic1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="tutorialOptionsContainer">
                <h3>Tutorial Makeup Information</h3>
                <div className="optionsContainer">
                    <h5>Basic Tutorial</h5>
                    <ul className="tutorialListContainer">
                        <li>
                            <strong>$125 -</strong> Tutorial, Full face of
                            product, techniques, comes with lash application and
                            tutorial.
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h5>Advanced Application Assistance</h5>
                    <ul className="tutorialListContainer">
                        <li>
                            <strong>$200 -</strong> Deep dive into the latest
                            products and techniques used by industry
                            professionals. Lashes are included in this tutorial.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
