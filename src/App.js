import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ConnectPage from "./pages/ConnectPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/connect" element={<ConnectPage />} />
      </Routes>
    </>
  );
}

export default App;
