import "./Testimonials.css";
import TestimonialsBox from "../../../Molecules/TestimonialsBox/TestimonialsBox";
import HomeWhy from "../../../Atoms/Text/HomePage/TestimonialText/Why";

export default function Testimonials() {
  return (
    <section className="testimonialContainer">
      <HomeWhy />
      <TestimonialsBox />
    </section>
  );
}