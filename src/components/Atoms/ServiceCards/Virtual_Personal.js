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
                        <strong>Virtual Skincare Consultation</strong>
                    </h4>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$30 -</strong> Do you feel like your
                            skincare isn't doing much? Ask an expert! We will
                            have a Zoom meeting about your skincare routine and
                            your concerns! I will recommend products based on
                            your budget and current skin condition! This is a
                            great, easy service that breaks down your routine
                            and see what we can do to enhance it!
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h4>
                        <strong>Virtual Makeup Consultation</strong>
                    </h4>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$45 -</strong> Do you feel like you might
                            have the wrong makeup or that you're not sure if
                            it's the right product for you? Ask away! I am more
                            than happy to go over your current makeup routine to
                            make sure your product is right for you, and we can
                            make simple adjustments! We won't mess with anything
                            you love, and we'll change what you don't like!
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h4>
                        <strong>Virtual Makeup Tutorial</strong>
                    </h4>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$75 -</strong> Want to do a 1-on-1 makeup
                            tutorial from the comfort of your home? This is the
                            service for you! This service includes a
                            side-by-side application over Zoom! You can use your
                            products and what you have available to you to
                            create a new daily look! I'll watch how you apply
                            your makeup as we do it together to give you some
                            tips and tricks!
                        </li>
                    </ul>
                </div>
                <div className="optionsContainer">
                    <h4>
                        <strong>Personal Shopping Experience</strong>
                    </h4>
                    <ul className="virtualListContainer">
                        <li>
                            <strong>$75 -</strong> Do makeup stores give you a
                            headache and overwhelm you with the amount of
                            product to choose from? Take a licensed makeup
                            artist with you who has worked at a makeup store! We
                            will go around the store together to find which
                            products would work best for you with no pressure to
                            having to purchase anything right then and there! I
                            will work with your budget and go to your location
                            of choice.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
