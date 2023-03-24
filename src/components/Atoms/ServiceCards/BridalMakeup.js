import "./bridalMakeup.css";
import Carousel from "react-bootstrap/Carousel";
import Pic3 from "../../../Assets/Pictures/BridalMakeup/BridalMakeup.png";
import Pic1 from "../../../Assets/Pictures/BridalMakeup/BridalMakeup3.avif";

export default function BridalMakeupCard() {
    return (
        <div className="bridalMakeupContainer">
            <div className="bridalCarouselContainer">
                <h1>
                    <strong>Bridal Makeup</strong>
                </h1>
                <Carousel className="servicesCarousel">
                    {/* Item 1 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 bridalImg"
                            src={Pic1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    {/* Item 2 */}
                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100 bridalImg"
                            src={Pic2}
                            alt="Second slide"
                        />
                    </Carousel.Item> */}
                    {/* Item 3 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 bridalImg"
                            src={Pic3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="bridalOptionsContainer">
                <h2>
                    <strong>Bridal Makeup Information</strong>
                </h2>
                <h6>
                    <i>
                        <strong>$50 Deposit To Hold Wedding Day</strong>
                    </i>
                </h6>
                <h6>
                    <i>
                        <strong>
                            Up To $50 Travel Fee Depending On Location
                        </strong>
                    </i>
                </h6>
                {/* Bride Options */}
                <div className="optionsContainer">
                    <h4>
                        <strong>Bride Options</strong>
                    </h4>
                    <ul className="bridalListContainer">
                        <li>
                            <strong>Starting at $100 -</strong> Bride{" "}
                            <strong>ONLY</strong>, Lash and Makeup Application -
                            1.5hr
                        </li>
                        <p className="mustHave">
                            <i>*MUST HAVE COMPLETED BRIDE TRIAL*</i>
                        </p>
                        <li>
                            <strong>Starting at $150 -</strong> Bride Trial -
                            2hr
                        </li>
                    </ul>
                </div>
                {/* Bride and Mother Of Bride Options */}
                <div className="optionsContainer">
                    <h4>
                        <strong>Bride and Mother of Bride Options</strong>
                    </h4>
                    <ul className="bridalListContainer">
                        <li>
                            <strong>Starting at $185 -</strong> Makeup
                            Application - 1.5hr{" "}
                            <i className="mustHave">
                                *DOES NOT INCLUDE LASHES*
                            </i>
                        </li>
                        <p className="mustHave">
                            <i>*MUST HAVE COMPLETED BRIDE TRIAL*</i>
                        </p>
                    </ul>
                </div>
                {/* Bridesmaid Options */}
                <div className="optionsContainer">
                    <h4>
                        <strong>Bridesmaid Options</strong>
                    </h4>
                    <p>
                        <i className="mustHave">*UP TO 3 BRIDESMAID*</i>
                    </p>
                    <ul className="bridalListContainer">
                        <li>
                            <strong>Starting at $110/per person -</strong> Lash
                            and Makeup Application - 45 mins
                        </li>
                    </ul>
                </div>
                {/* Bridal Package */}
                <div className="optionsContainer">
                    <h4>
                        <strong>Bridal Package</strong>
                    </h4>
                    <p>
                        Includes Bride, Bride Trial, Mother Of The Bride, 4
                        Bridesmaids
                    </p>
                    <ul className="bridalListContainer">
                        <li>Bride Trial - 2hr</li>
                        <li>Bride - 1.5hr</li>
                        <li>Mother of Bride - 1hr</li>
                        <li>Bridesmaids - 3hrs</li>
                    </ul>
                    <strong>Starting at $585</strong>
                    <p>
                        <i className="mustHave">*INCLUDES LASHES*</i>
                    </p>
                    <p className="mustHave">
                        <i>*MUST HAVE COMPLETED BRIDE TRIAL*</i>
                    </p>
                </div>
            </div>
        </div>
    );
}
