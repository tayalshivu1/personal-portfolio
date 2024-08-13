import logo from "./logo.svg";
import "./App.css";
import { NavBarComponent } from "./components/NavBar";
import { BannerComponent } from "./components/Banner";
import { SkillsComponent } from "./components/Skills";
import { ProjectsComponent } from "./components/Projects";
import { FooterComponent } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <BannerComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
