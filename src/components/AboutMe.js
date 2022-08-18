import React from 'react';
import Button from "@mui/material/Button";


export default function AboutMe() {
  return (
    <section id="aboutMe">
        <Button>HTML</Button>
        <Button>CSS</Button>
        <Button>Python</Button>
        <Button>JavaScript</Button>
        <Button>Flask</Button>
        <Button>React</Button>
        <Button>PostgreSQL</Button>
        <div style={{marginLeft:'50rem', width:'25%'}}>
        <h1 style={{fontSize:'2.1875rem'}}>About Me</h1>
        <Button >Developer</Button>
        <p style={{color:'#606266'}} className="opacity-80">As a Full Stack Developer, I am creative, innovative and passionate about bringing solutions to challenging issues. I will continue to strive to improve and be better as a developer. Building the right team has always been essential to my continued success. I am interested in either both Front-End and Back-end. Enjoy how front-end brings the beauty of an application and love how backend makes the connection. Cannot wait to join your team!!</p>
        </div>
        
    </section>
  )
}



