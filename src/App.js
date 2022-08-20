import './App.css';
import MainBody from './components/MainBody';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import SkillsTitle from './components/SkillsTitle';
import Contact from './components/Contact';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import FlipCard from "./components/FlipCard";
import ResumeScanner from "../src/ResumeScanner.PNG"
import Pokemon from "../src/Pokemon.PNG"
import Pokemon2 from "../src/Pokemon2.PNG"

const cards = [
  {
    id: "1",
    variant: "hover",
    front: <img src={ResumeScanner} alt={" resume scanner project"} />,
    back: <h1>Resume Scanner</h1>
  },
  {
    id: "2",
    variant: "hover",
    front: <img src={Pokemon} alt={" pokemon application"} />,
    back: "Back"
  },
  {
    id: "3",
    variant: "hover",
    front: <img src={Pokemon2} alt={" pokemon application"} />,
    back: "Back"
  }
];





function App() {
  return (
    <main sx= {{}}>
      
      <NavBar></NavBar>
      <MainBody />
      <SkillsTitle/>
      <AboutMe/>
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
