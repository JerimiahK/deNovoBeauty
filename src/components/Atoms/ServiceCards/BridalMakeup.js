import "./bridalMakeup.css";
import Carousel from "react-bootstrap/Carousel";
import Pic3 from "../../../Assets/Pictures/BridalMakeup/BridalMakeup.png";
import Pic1 from "../../../Assets/Pictures/BridalMakeup/BridalMakeup3.avif";
import Pic2 from "../../../Assets/Pictures/BridalMakeup/BridalMakeup4.avif";

export default function BridalMakeupCard() {
    return (
        <div className="bridalMakeupContainer">
            <div className="bridalCarouselContainer">
                <h3>Bridal Makeup</h3>
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
                    <Carousel.Item>
                        <img
                            className="d-block w-100 bridalImg"
                            src={Pic2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
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
                <h3>Bridal Makeup Information</h3>
                <h6>
                    <i>
                        <strong>$50 Deposit To Hold Wedding Day</strong>
                    </i>
                </h6>
                <h6>
                    <i>
                        <strong>$50 Travel Fee Depending On Location</strong>
                    </i>
                </h6>
                {/* Bride Options */}
                <div className="optionsContainer">
                    <h5>Bride Options</h5>
                    <ul className="bridalListContainer">
                        <li>
                            <strong>$180 -</strong> Bride <strong>ONLY</strong>,
                            Lash and Makeup Application - 1.5hr
                        </li>
                        <li>
                            <strong>$85 -</strong> Bridal Trial - 1.5hr
                        </li>
                    </ul>
                    <p>
                        Total For Bride Only: <strong>$265</strong>
                    </p>
                </div>
                {/* Mother Of Bride Options */}
                <div className="optionsContainer">
                    <h5>Mother Of Bride Options</h5>
                    <ul className="bridalListContainer">
                        <li>
                            <strong>$85 -</strong> Makeup Application - 1.5hr{" "}
                            <i>*does not include lashes*</i>
                        </li>
                    </ul>
                    <p>
                        Total For Mother of Bride: <strong>$85</strong>
                    </p>
                </div>
                {/* Bridesmaid Options */}
                <div className="optionsContainer">
                    <h5>Bridesmaid Options</h5>
                    <p>
                        <i>*up to 3 bridesmaids*</i>
                    </p>
                    <ul className="bridalListContainer">
                        <li>
                            <strong>$110/per person -</strong> Lash and Makeup
                            Application - 45 mins
                        </li>
                    </ul>
                    <p>
                        Total For 2 Bridesmaids: <strong>$220</strong>
                    </p>
                    <p>
                        Total For 3 Bridesmaids: <strong>$330</strong>
                    </p>
                </div>
                {/* Bridal Package */}
                <div className="optionsContainer">
                    <h5>Bridal Package</h5>
                    <p>
                        Includes Bride, Bride Trial, MOB, 4 Bridesmaids,
                        Customized Facial
                    </p>
                    <ul className="bridalListContainer">
                        <li>Bride</li>
                        <li>Bride Trial - 3hr</li>
                        <li>
                            Mother of Bride - 1hr <i>*includes lashes*</i>
                        </li>
                        <li>
                            Bridesmaids - 3hrs <i>*includes lashes*</i>
                        </li>
                        <li>Customized Facial</li>
                    </ul>
                    <p>
                        Total For Bridal Package: <strong>$850</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}
