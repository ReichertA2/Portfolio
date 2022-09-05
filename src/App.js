import "./App.css";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import SkillsTitle from "./components/SkillsTitle";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

import Project from "./components/Project";





function App() {

  return (
    <main sx={{}}>
      <NavBar></NavBar>
      <MainBody />
      <SkillsTitle />
      <Experience />
      <Project />



      <Contact />
    </main>
  );
}

export default App;
