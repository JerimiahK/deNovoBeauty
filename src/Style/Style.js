import HeroHome from "../Assets/Pictures/heroHome2.jpg";

export const style = {
  // Navbar Styling
  navbarContainer: {
    background: "linear-gradient(0deg, #fff 40%, #000 100%)",
    borderBottom: "2px solid #000",
    width: "100vw",
    position: "sticky",
    top: 0,
    display: "flex",
    justifyContent: "center",
  },
  // Homepage Header Styling
  heroContainer: {
    backgroundImage: `url(${HeroHome})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  logoImage: {
    width: "100%",
    height: "auto",
  },
  buttonContainer: {
    background: "#e2cdfa",
    borderRadius: 10,
  },
  bookButton: {
    background: "#e2cdfa",
    border: "2px solid black",
    boxShadow: "0 0 10px 5px #e2cdfa",
    color: "#0d0d0d",
    margin: "2px",
    fontSize: 15,
    fontFamily: "'Gotu', sans-serif",
    height: 80,
    width: 190,
    borderRadius: 10,
    textAlign: "center",
  },
  // Homepage Testimonials Styling
  testimonialContainer: {
    height: "100vh",
  },
};