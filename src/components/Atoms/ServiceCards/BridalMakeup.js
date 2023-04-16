import "./bridalMakeup.css";
import Carousel from "react-bootstrap/Carousel";
import Pic3 from "../../../Assets/Pictures/BridalMakeup/BridalMakeup.png";
import Pic1 from "../../../Assets/Pictures/BridalMakeup/BridalMakeup3.avif";
import Pic2 from "../../../Assets/Pictures/BridalMakeup/Pic2.jpeg"

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
                            <strong>
                                Bride <strong>ONLY</strong> - 1.5hr - Starting
                                at $100 -
                            </strong> Congratulations! It's your big day, and I am so
                            excited to be a part of it! This makeup service is
                            just for the bride, and the bride only! After
                            completing our bride trial, we get you ready for
                            your perfect wedding day! The service includes
                            lashes and a 1hr and 30 min application! Travel fee
                            is based on location.
                        </li>
                        <p className="mustHave">
                            <i>*MUST HAVE COMPLETED BRIDE TRIAL*</i>
                        </p>
                        <li>
                            <strong>
                                Bride Trial - 2hr - Starting at $150 -
                            </strong>{" "}
                            The Bride Trial is for brides trying out their
                            makeup looks for their big day! This service has
                            extra time built in to try different techniques and
                            products to create a beautiful, flawless wedding
                            look that will last all day and night! This service
                            also includes lashes which you can pick from!
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
                            <strong>
                                Bride and Mother of the Bride - 1.5hr - Starting
                                at $185 -
                            </strong>{" "}
                            This service is for the mother of the bride and the
                            beautiful bride herself! Get your glam on together
                            for your most important day! The service includes
                            lashes for the bride. Lashes for the mother of the
                            bride can be requested for an additional cost.
                            Travel fee is based on location.
                        </li>
                        <i className="mustHave">*DOES NOT INCLUDE LASHES*</i>
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
                            <strong>
                                Bridesmaids - 45mins - Starting at $110/per
                                person -
                            </strong>{" "}
                            This service is per bridesmaid up to three! If you
                            have more than three, I suggest taking a look at our
                            Wedding Party service! This includes lashes for each
                            bridesmaid. Each bridesmaid will have a look that
                            has been approved by the bride for her big day!
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
                    <p>
                        Everyone gets the glam experience! This service includes
                        the wedding day application, the mother of the bride,
                        and up to four bridesmaids! Each application comes with
                        lashes, if requested by the bride! Bridesmaids can be
                        added on at an extra cost. Contact me for your quote if
                        you have more than 4 bridesmaids! Check out our Group
                        and Party service if you want to do a bachelorette party
                        too!
                    </p>
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
