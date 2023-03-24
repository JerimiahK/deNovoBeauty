import "./editorialMakeup.css";
import { Carousel } from "react-bootstrap";
import Pic1 from "../../../Assets/Pictures/EditorialMakeup/Editorial.avif";
import Pic2 from "../../../Assets/Pictures/EditorialMakeup/Editorial2.avif";

export default function EditorialMakeupCard() {
    return (
        <div className="editorialMakeupContainer">
            <div className="editorialCarouselContainer">
                <h1>
                    <strong>Editorial Makeup</strong>
                </h1>
                <Carousel className="servicesCarousel">
                    {/* Item 1 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 editorialImg"
                            src={Pic1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    {/* Item 2 */}
                    <Carousel.Item>
                        <img
                            className="d-block w-100 editorialImg"
                            src={Pic2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="editorialOptionsContainer">
                <h2>
                    <strong>Editorial Makeup Information</strong>
                </h2>
                {/* Basic Application */}
                <div className="optionsContainer">
                    <h4>
                        <strong>Editorial Options</strong>
                    </h4>
                    <p className="editorialListContainer">
                        All Editorial Makeup is meant to be personalized, so
                        prices and options will vary depending on project and
                        budget size. I am willing to work with you on your
                        budget so please don't hesitate to reach out and contact
                        me to discuss a project! Projects could include
                        corporate head shots, makeup features, and more!
                    </p>
                </div>
            </div>
        </div>
    );
}
