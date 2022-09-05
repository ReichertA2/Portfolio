import React from "react";
import FlipCard from "./FlipCard";
import ResumeScannerComputer3 from "../../src/ResumeScannerComputer3.png";
import PokemonComputer from "../../src/PokemonComputer.png";
import WorkIcon from "@mui/icons-material/Work";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Button from "@mui/material/Button";
import ReadingList from "../../src/ReadingList.png";
import Carosel from "./Carosel";


const renderCarosel = (id) => {
  console.log("test");
};

const cards = [
  {
    id: "1",
    variant: "hover",
    imgSrc: ReadingList,
    imgAlt: "reading list",
    projectTitle: "Reading List",
    projectDesc:
      "Application allows user the ability to browse, remove, and add books to their reading list. App includes theme switch that user can use to switch from day and night colors.",
    projectTools: "API, React, JavaScript, MUI, CSS, HTML, Yup, Formik",
    icon: (
      <AutoStoriesIcon
        fontSize="large"
        style={{ color: "#7deaa2" }}
      ></AutoStoriesIcon>
    ),

    back: (
      <div style={{ textAlign: "center" }}>
        {/* <Button style={{}} variant="outlined" onClick={()=>window.open('https://github.com/ReichertA2/React-Project.git')}>
          Featured Project
        </Button> */}
        <Button
          style={{}}
          variant="outlined"
          onClick={() => renderCarosel("1")}
        >
          Featured Project
        </Button>

        {/* <a href=></a> add link of resume scanner and link to code*/}
      </div>
    ),
  },
  {
    id: "2",
    variant: "hover",
    imgSrc: ResumeScannerComputer3,
    imgAlt: "resume scanner",
    projectTitle: "Resume Scanner",
    projectDesc:
      "Application scans resume and multiple job descriptions to provide matching and missing keyword/phrases to help user get through the applicant tracking system.",
    projectTools: "Flask, React, PostgreSQL, MUI, CSS, HTML, Formik, Yup",
    icon: <WorkIcon fontSize="large" style={{ color: "#7deaa2" }}></WorkIcon>,

    back: (
      <div style={{ textAlign: "center" }}>
        {/* <a href="https://github.com/" onclick={window.open('https://github.com/ReichertA2/Resume-Scanner-API.git')}
        >
          Featured Project
        </a> */}

        <a
          href="https://github.com/ReichertA2/Resume-Scanner.git"
          style={{ textDecoration: "none" }}
          onClick={() =>
            window.open("https://github.com/ReichertA2/Resume-Scanner-API.git")
          }
        >
          {" "}
          <Button style={{}} variant="outlined">
            Featured Project
          </Button>
        </a>

        {/* <a href=></a> add link of resume scanner and link to code*/}
      </div>
    ),
  },
  {
    id: "3",
    variant: "hover",
    imgSrc: PokemonComputer,
    imgAlt: "pokemon application",
    projectTitle: "PokemonMADNESS",
    projectDesc:
      "Multipage Flask application that includes user authentication where user can pick top 5 pokemons to battle it out in a pokemon game. App also allows user to pick their own avatars.",
    projectTools: "Flask, Python, PostgreSQL, Postman, API, CSS, HTML, CRUD",
    icon: (
      <CatchingPokemonIcon
        fontSize="large"
        style={{ color: "#7deaa2" }}
      ></CatchingPokemonIcon>
    ),

    back: (
      <div style={{ textAlign: "center" }}>
        <Button
          style={{}}
          variant="outlined"
          onClick={() =>
            window.open(
              "https://github.com/ReichertA2/Single-Page-App-Flask-.git"
            )
          }
        >
          Featured Project
        </Button>
        {/* <a href=></a> add link of resume scanner and link to code*/}
      </div>
    ),
  },
];

export default function Project() {
  return (
    <section id="project" style={{}}>
      <div style={{ fontSize: 25, textAlign: "center", fontWeight: "bold" }}>
        {" "}
        Projects{" "}
      </div>

      <div className="container" style={{}}>
        <div>
          <div class="col d-flex flex-column flex-md-row justify-content-around align-items-center">
            {cards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
      {/* <Carosel /> */}

    </section>
  );
}
