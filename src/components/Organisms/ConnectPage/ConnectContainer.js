import "./connectContainer.css";
import NavBar from "../../Molecules/ReusableMolecules/NavBar/NavBar";
import Footer from "../../Molecules/ReusableMolecules/Footer/Footer";
import PageContainer from "../../Molecules/ConnectMolecules/PageContainer"

export default function ConnectContainer() {
  return (
    <div className="connectPageContainer">
      <NavBar />
      <PageContainer />
      <Footer />
    </div>
  )
}