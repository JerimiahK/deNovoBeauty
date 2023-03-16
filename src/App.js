import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Connect from "./pages/Connect";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </>
  );
}

export default App;
