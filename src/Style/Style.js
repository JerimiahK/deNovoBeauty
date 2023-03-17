// import HeroHome from "../components/Atoms/Pictures/heroHome";
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
  // navbar: {
  //   display: "flex",
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-evenly",
  //   height: "10vh",
  //   width: "70vw",
  //   paddingTop: 20,
  // },
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
    background: "#FFFFFF",
  },
  bookButton: {
    background: "#FFFFFF",
    border: "2px solid black",
    boxShadow: "0 0 8px 5px white",
    color: "#0d0d0d",
    margin: "2px",
    fontSize: 15,
    fontFamily: "'Roboto', sans-serif",
    height: 80,
    width: 190,
    borderRadius: "0",
    textAlign: "center",
  },
  // Homepage Testimonials Styling
  testimonialContainer: {
    height: "100vh",
  },
};