import "./testimonialsSection.css";
import TestimonialsBox from "../TestimonialsBox/TestimonialsBox";
import HomeWhy from "../../../Atoms/Text/HomePage/TestimonialText/TestimonialText";

export default function Testimonials() {
    return (
        <section className="testimonialContainer">
            <HomeWhy />
            <TestimonialsBox />
        </section>
    );
}
