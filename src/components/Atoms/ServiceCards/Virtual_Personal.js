import "./virtual_personal.css";
import Pic1 from "../../../Assets/Pictures/MiscImages/makeupMisc.jpg";
import { Carousel } from "react-bootstrap";

export default function Virtual_PersonalCard() {
    return (
        <div className="virtualMakeupContainer">
            <div>
                <h1>
                    <strong>Personal & Virtual Services</strong>
                </h1>
                <Carousel className="servicesCarousel">
                    {/* Item 1 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 partyImg"
                            src={Pic1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="virtualOptionsContainer">
                <h2>
                    <strong>Personal & Virtual Information</strong>
                </h2>
                <div className="optionsContainer">
                    <h4>
                        <strong>Skincare Product Virtual Session</strong>
                    </h4>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$30 -</strong> Virtual Skincare
                            Consultation. Recommend products based on concerns,
                            budget, and current routine.
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h4>
                        <strong>Makeup Product Virtual Session</strong>
                    </h4>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$30 -</strong> Virtual Makeup Consultation.
                            Recommend products based on concerns, budget, and
                            current routine.
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h4>
                        <strong>Makeup Tutorial Virtual Session</strong>
                    </h4>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$75 -</strong> Virtual Makeup Tutorial.
                            Side-by-Side application, use your own product,
                            learn new techniques!
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h4>
                        <strong>Personal Shopper Session</strong>
                    </h4>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$75 -</strong> Don't know what to buy? Take
                            a licensed makeup artist shopping with you! I will
                            pick out products based on your concerns, budget,
                            and skill level!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
