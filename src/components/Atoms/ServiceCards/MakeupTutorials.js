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
                            <strong>Starting at $125 -</strong> Do you feel like
                            you struggle with makeup application? I'll teach you
                            tips and tricks to elevate your at-home application!
                            I will explain every step in this in-depth service!
                            This includes daily makeup application for a new
                            routine, or try out different products that you've
                            seen going viral on TikTok! Beginner tutorials also
                            include a lash application and tutorial, if
                            requested, for an additional cost!
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h4>
                        <strong>Advanced Application Assistance</strong>
                    </h4>
                    <ul className="tutorialListContainer">
                        <li>
                            <strong>Starting at $200 -</strong> Do you want to
                            do those crazy Tiktok graphic liners but don't know
                            where to start? Feel like you know the basics but
                            want to take it up a notch? Let me help you out!
                            This service is for those who already feel confident
                            in their makeup skills and want to change things up
                            and learn more in-depth techniques.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
