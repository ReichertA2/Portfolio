import './App.css';
import MainBody from './components/MainBody';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import SkillsTitle from './components/SkillsTitle';
import Contact from './components/Contact';
import Project from './components/Project'






function App() {
  return (
    <main sx= {{}}>
      
      <NavBar></NavBar>
      <MainBody />
      <SkillsTitle/>
      <AboutMe/>
      <Experience />
      <Project />
      <Contact />
    
    
      

      
    </main>
  );
}

export default App;
