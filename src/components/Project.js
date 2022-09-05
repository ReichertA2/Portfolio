import { React, useState } from "react";
import FlipCard from "./FlipCard";
import ResumeScannerComputer3 from "../../src/ResumeScannerComputer3.png";
import PokemonComputer from "../../src/PokemonComputer.png";
import WorkIcon from "@mui/icons-material/Work";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import Button from "@mui/material/Button";
import ReadingList from "../../src/ReadingList.png";
import Carosel from "./Carosel";
import ReadingListLandingPage from "../ReadingListLandingPage.PNG"
import Register from "../Register.PNG"
import ReadingListLogin from "../ReadingListLogin.PNG"
import ReadingListInventory from "../ReadingListInventory.PNG"
import SubjectFilter from "../SubjectFilter.PNG"
import BrowseBooks from "../BrowseBooks.PNG"
import PokemonMadness from "../PokemonMadness.PNG"
import TrainingGrounds from "../TrainingGrounds.PNG"
import PokemonTeam from "../PokemonTeam.PNG"
import PokemonBattle from "../PokemonBattle.PNG"
import RegisterPokemon from "../RegisterPokemon.PNG"
import LoginPokemon from "../LoginPokemon.PNG"
import EditProfilePokemon from "../EditProfilePokemon.PNG"
import ResumeScannerLandingPage from "../ResumeScannerLandingPage.PNG"
import RegisterResume from "../RegisterResume.PNG"
import LoginResume from "../LoginResume.PNG"
import EditProfileResume from "../EditProfileResume.PNG"
import ResumeScannerPage from "../ResumeScannerPage.PNG"
import ResumeResults from "../ResumeResults.PNG"
import ResumeAccountProfile from "../ResumeAccountProfile.PNG"
import ResumeContactUs from "../ResumeContactUs.PNG"

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
      URL:["https://github.com/ReichertA2/React-Project.git",],
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
          // onClick={() => renderCarosel("1")}
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
    URL:["https://github.com/ReichertA2/Resume-Scanner.git","https://github.com/ReichertA2/Resume-Scanner-API.git"],
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
    URL:["https://github.com/ReichertA2/Single-Page-App-Flask-.git",""],
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
const images = [
  [
    {
      label: "Story Keeper",
      imgPath:
        ReadingListLandingPage,
    },
    {
      label: "Register",
      imgPath:
        Register,
    },
    {
      label: "Login",
      imgPath:
        ReadingListLogin,
    },
    // {
    //   label: "Edit Profile",
    //   imgPath:
    //     EditProfilePokemon,
    // },
    {
      label: "Browse Books",
      imgPath:
        BrowseBooks,
    },
    {
      label: "Reading List",
      imgPath:
        ReadingListInventory,
    },
    {
      label: "Subject Filter",
      imgPath:
        SubjectFilter,
    },
  ],
  [
    {
      label: "Resume Scanner",
      imgPath:
        ResumeScannerLandingPage,
    },
    {
      label: "Register",
      imgPath:
        RegisterResume,
    },
    {
      label: "Login",
      imgPath:
        LoginResume,
    },
    {
      label: "Edit Profile",
      imgPath:
        EditProfileResume,
    },
    {
      label: "Scanning Page",
      imgPath:
        ResumeScannerPage,
    },
    {
      label: "Results",
      imgPath:
        ResumeResults,
    },
    // {
    //   label: "User Profile",
    //   imgPath:
    //     ResumeAccountProfile,
    // },
    {
      label: "Contact Us",
      imgPath:
        ResumeContactUs,
    },
  ],
  [
    {
      label: "PokemonMadness",
      imgPath:
        PokemonMadness,
    },
    {
      label: "Register",
      imgPath:
        RegisterPokemon,
    },
    {
      label: "Login",
      imgPath:
        LoginPokemon,
    },
    {
      label: "Edit Profile",
      imgPath:
        EditProfilePokemon,
    },
    {
      label: "Training Grounds",
      imgPath:
        TrainingGrounds,
    },
    {
      label: "Pokemon Team",
      imgPath:
        PokemonTeam,
    },
    {
      label: "Pokemon Battle",
      imgPath:
        PokemonBattle,
    },
  ],
];

export default function Project() {
  const [project1, setProject1] = useState(false);
  const [project2, setProject2] = useState(false);
  const [project3, setProject3] = useState(false);

  const renderCarosel = (id) => {
    console.log("test", id);
    if (id == 1) {
      setProject1(true);
      setProject2(false);
      setProject3(false);
    } else if (id == 2) {
      setProject1(false);
      setProject2(true);
      setProject3(false);
    } else if (id == 3) {
      setProject1(false);
      setProject2(false);
      setProject3(true);
    }
  };

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
              <FlipCard
                key={card.id}
                card={card}
                renderCarosel={renderCarosel}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{margin:'auto', width:'100%', marginTop:'-50px'}}>
      {project1 ? <Carosel  images={images[0]} URL={cards[0].URL} /> : ""}
      {project2 ? <Carosel images={images[1]} URL={cards[1].URL} /> : ""}
      {project3 ? <Carosel images={images[2]} URL={cards[2].URL} /> : ""}
      </div>
      {/* <Carosel /> */}
    </section>
  );
}
