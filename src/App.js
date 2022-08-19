import './App.css';
import MainBody from './components/MainBody';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import SkillsTitle from './components/SkillsTitle';
import Contact from './components/Contact';






function App() {
  return (
    <div sx= {{}}>
      
      <NavBar></NavBar>
      <MainBody />
      <SkillsTitle/>
      <AboutMe/>
      <Experience />
      <Contact />
    
    
      

      
    </div>
  );
}

export default App;
