import "./App.css";
import MainBody from "./components/MainBody";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import SkillsTitle from "./components/SkillsTitle";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import FlipCard from "./components/FlipCard";
import ResumeScannerComputer from "../src/ResumeScannerComputer.PNG";
import PokemonConsole from "../src/PokemonConsole.png";
import PokemonComputer from "../src/PokemonComputer.png";

const cards = [
  {
    id: "1",
    variant: "hover",
    front: <img  src={ResumeScannerComputer} alt={" resume scanner project"} width='400px' height='600px'/>,
    back: (
      <>
        <h1>Resume Scanner</h1>
        <p>
          Application that scans resume and multiple job descriptions to provide
          the matching and missing keyword/phrases to get through the applicant
          tracking system.
        </p>
        <p>React, Flask, Python, JavaScript, PostgreSQL, Postman</p>
        {/* <a href=></a> add link of resume scanner and link to code*/}
      </>
    ),
  },
  {
    id: "2",
    variant: "hover",
    front: <img src={PokemonComputer} alt={" pokemon application"} width='400px' height='600px'/>,
    back: "Back",
  },
  {
    id: "3",
    variant: "hover",
    front: <img src={PokemonComputer} alt={" pokemon application"} className="" />,
    back: "Back",
  },
];

function App() {
  return (
    <main sx={{}}>
      <NavBar></NavBar>
      <MainBody />
      <SkillsTitle />
      <AboutMe />
      <Experience />
      <div className="container">
        <div className="row h-100">
          <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
            {cards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
}

export default App;
