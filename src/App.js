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
import ResumeScannerComputer3 from "../src/ResumeScannerComputer3.png";
import PokemonComputer from "../src/PokemonComputer.png";
import WorkIcon from "@mui/icons-material/Work";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Button from "@mui/material/Button";
import Project from "./components/Project";

const cards = [
  {
    id: "1",
    variant: "hover",
    front: <img src={PokemonComputer} alt={"reading list"} />,
    back: (
      <div style={{ textAlign: "center" }}>
        <AutoStoriesIcon
          fontSize="large"
          style={{ color: "#7deaa2" }}
        ></AutoStoriesIcon>
        <h1 style={{ fontSize: 20 }}>Reading List</h1>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: 400,
          }}
        >
          Application allows user the ability to browse, remove, and add books
          to their reading list. App includes theme switch that user can use to
          switch from day and night colors.
        </p>
        <p style={{ fontSize: 14 }}>
          API, React, JavaScript, MUI, CSS, HTML, Yup, Formik
        </p>
        <Button style={{}} variant="outlined" onClick={()=>window.open('https://github.com/ReichertA2/React-Project.git')}>
          Featured Project
        </Button>

        {/* <a href=></a> add link of resume scanner and link to code*/}
      </div>
    ),
  },
  {
    id: "2",
    variant: "hover",
    front: <img src={ResumeScannerComputer3} alt={" resume scanner"} />,
    back: (
      <div style={{ textAlign: "center" }}>
        <WorkIcon fontSize="large" style={{ color: "#7deaa2" }}></WorkIcon>
        <h1 style={{ fontSize: 20 }}>Resume Scanner</h1>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: 400,
          }}
        >
          Application scans resume and multiple job descriptions to provide
          matching and missing keyword/phrases to help user get through the
          applicant tracking system.
        </p>
        <p style={{ fontSize: 14 }}>
          Flask, React, PostgreSQL, MUI, CSS, HTML, Formik, Yup
        </p>
        {/* <a href="https://github.com/" onclick={window.open('https://github.com/ReichertA2/Resume-Scanner-API.git')}
        >
          Featured Project
        </a> */}
        
          <a
            href="https://github.com/ReichertA2/Resume-Scanner.git"
            style={{textDecoration: "none"}}
            onClick={() => window.open("https://github.com/ReichertA2/Resume-Scanner-API.git")}
          > <Button style={{}} variant="outlined">
          Featured Project
        </Button></a>
        

        {/* <a href=></a> add link of resume scanner and link to code*/}
      </div>
    ),
  },
  {
    id: "3",
    variant: "hover",
    front: (
      <img src={PokemonComputer} alt={" pokemon application"} className="" />
    ),
    back: (
      <div style={{ textAlign: "center" }}>
        <CatchingPokemonIcon
          fontSize="large"
          style={{ color: "#7deaa2" }}
        ></CatchingPokemonIcon>
        <h1 style={{ fontSize: 20 }}>PokemonMADNESS</h1>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: 400,
          }}
        >
          Multipage Flask application that includes user authentication where
          user can pick top 5 pokemons to battle it out in a pokemon game. App
          also allows user to pick their own avatars.
        </p>
        <p style={{ fontSize: 14 }}>
          Flask, Python, PostgreSQL, Postman, API, CSS, HTML, CRUD
        </p>
        <Button style={{}} variant="outlined" onClick={()=>window.open('https://github.com/ReichertA2/Single-Page-App-Flask-.git')}>
          Featured Project
        </Button>
        {/* <a href=></a> add link of resume scanner and link to code*/}
      </div>
    ),
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
      <Project />
      <div className="container" style={{}}>
        <div>
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
