import "./makeupTutorials.css";
import { Carousel } from "react-bootstrap";
import Pic1 from "../../../Assets/Pictures/MiscImages/makeupMisc2.jpg";

export default function MakeupTutorialsCard() {
    return (
        <div className="tutorialMakeupContainer">
            <div>
                <h1>
                    <strong>Makeup Tutorials</strong>
                </h1>
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
                <h2>
                    <strong>Makeup Tutorial Information</strong>
                </h2>
                <div className="optionsContainer">
                    <h4>
                        <strong>Basic Tutorial</strong>
                    </h4>
                    <ul className="tutorialListContainer">
                        <li>
                            <strong>$125 -</strong> Tutorial, Full face of
                            product, techniques, comes with lash application and
                            tutorial.
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h4>
                        <strong>Advanced Application Assistance</strong>
                    </h4>
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
