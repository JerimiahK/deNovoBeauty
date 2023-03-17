import HomeHeader from "../components/Organisms/HomePage/Header/Header";
import Testimonials from "../components/Organisms/HomePage/Testimonials/Testimonials";
import NavBar from "../components/Molecules/NavBar/NavBar";
import Footer from "../components/Molecules/Footer/Footer";

export default function Homepage() {
  return (
    <>
      <HomeHeader />
      <NavBar />
      <Testimonials />
      <Footer />
    </>
  );
}
