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

const cards = [
  {
    id: "1",
    variant: "hover",
    front: "Hover",
    back: "Back"
  },
  {
    id: "2",
    variant: "click",
    front: "Click",
    back: "Back"
  },
  {
    id: "3",
    variant: "focus",
    front: "Focus",
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
