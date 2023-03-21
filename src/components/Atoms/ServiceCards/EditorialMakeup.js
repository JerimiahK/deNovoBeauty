import "./editorialMakeup.css";
import { Carousel } from "react-bootstrap";
import Pic1 from "../../../Assets/Pictures/EditorialMakeup/Editorial.avif";
import Pic2 from "../../../Assets/Pictures/EditorialMakeup/Editorial2.avif";

export default function EditorialMakeupCard() {
    return (
        <div className="editorialMakeupContainer">
            <div className="editorialCarouselContainer">
                <h3>Editorial Makeup</h3>
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
            <div>
                <h3>Editorial Makeup Information</h3>
                {/* Basic Application */}
                <div className="optionsContainer">
                    <h5>Basic Application</h5>
                    <ul className="editorialListContainer">
                        <li>
                            <strong>$85 -</strong> Basic Makeup application -
                            1hr <i>*lashes not included*</i>
                        </li>
                    </ul>
                    <p>
                        Total For Bride Only: <strong>$265</strong>
                    </p>
                </div>
                {/* GLAM Application */}
                <div className="optionsContainer">
                    <h5>GLAM Applications</h5>
                    <ul className="editorialListContainer">
                        <li>
                            <strong>$125 -</strong> GLAM application - 1.5hr{" "}
                            <i>*lashes included</i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
