import "./virtual_personal.css";
import Pic1 from "../../../Assets/Pictures/MiscImages/makeupMisc.jpg";
import { Carousel } from "react-bootstrap";

export default function Virtual_PersonalCard() {
    return (
        <div className="virtualMakeupContainer">
            <div>
                <h3>Personal & Virtual Services</h3>
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
                <h3>Personal & Virtual Services Information</h3>
                <div className="optionsContainer">
                    <h5>Skincare Product Virtual Session</h5>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$30 -</strong> Virtual Skincare
                            Consultation. Recommend products based on concerns,
                            budget, and current routine.
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h5>Makeup Product Virtual Session</h5>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$30 -</strong> Virtual Makeup Consultation.
                            Recommend products based on concerns, budget, and
                            current routine.
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h5>Makeup Tutorial Virtual Session</h5>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$75 -</strong> Virtual Makeup Tutorial.
                            Side-by-Side application, use your own product,
                            learn new techniques!
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h5>Personal Shopper Session</h5>
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
