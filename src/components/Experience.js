import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { shadows } from "@mui/system";
import Box from "@mui/material/Box";



export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    
  };

  return (
    <Box style={{ background:'#2D2F33', marginBottom:100}} >
    <div style={{marginTop:100, background: '#2D2F33'}} >
      <div sx={{marginTop:100}}>
        <section id="experience">
          <h1 className='' style={{fontSize:25, textAlign: 'center', backgroundColor: '#2D2F33'}}>Experience</h1>

          {/* <h1 style={{fontSize:25, color:'#7deaa2', marginTop:100}} className="text-green-400 p-4 px-44 text-2xl">Experience</h1> */}
          </section>
        {/* <Button  sx={{marginLeft:"25%"}} variant="contained">
      Resume
    </Button> */}
      </div>
      <div style={{marginBottom:100}} className="w-3/6 p-3 inline-block ml-96" >
        {/* <p className="text-green-400">Resume </p> */}
        <Accordion
          sx={{
            border:'none',
           
            
            // width:'50%',
            backgroundImage:
              "linear-gradient(to top, #222325, #242527, #26272a, #282a2c, #2a2c2f, #2b2d30, #2c2e32, #2d2f33, #2d2f33, #2d2f33, #2d2f33, #2d2f33)",
            // boxShadow: 3
          }}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, }}>
              Coding Temple
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Full Stack Developer
              <p>04/2022 - 06/2022</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Technologies: Python, JavaScript ES6, HTML, CSS, Object Oriented
              Programming, Regex, Flask, React, MUI, Git/GitHub, Jupyter
              Notebook, Node.JS, Postgres, SQL, Postman, RESTful APIs, Formik,
              Yup
              <ul className="custom-list p-5">
                <li>
                  Created a full stack reading list application that allows
                  users to browse, add, and remove books from their reading list
                  utilizing API wrappers, reducer, Formik, Yup, and custom react
                  hooks.
                </li>
                <li>
                  Generated a web application that allows users to search by
                  city to obtain weather information by using the Open Weather
                  API with JavaScript with Axios.
                </li>
                <li>
                  Built an API for a book website to allow users to create a
                  reading list using RESTful API in flask.
                </li>
                <li>
                  Crafted a multi-page flask application for a pokemon battle
                  that used SQL to create the user and pokemon database and
                  configured the app to include registration, edit profile, and
                  login.
                </li>
                <li>
                  Produced a car dealership database using ERD with elephantSQL.
                </li>
                <li>
                  Programmed a BlackJack game with Python OOP (Object Oriented
                  Programming) in Visual Studio Code.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundImage:
              "linear-gradient(to right top, #2d2f33, #2b2d30, #292a2d, #27282b, #252628, #252628, #252628, #252628, #27282b, #292a2d, #2b2d30, #2d2f33)",
          }}
          // sx={{ width: "15%", margin: "auto", marginRight: "18%" }}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              ExxonMobil
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Blending and Demurrage Analyst
              <p>03/2020 - 03/2022</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="custom-list p-5">
                <li>
                  Analyze and track data creating productivity and output
                  reports for stakeholders and management.
                </li>
                <li>
                  Create targets and release limits on limiting properties for
                  Diesel and Mogas to mitigate quality disputes.
                </li>
                <li>
                  Enhanced bias algorithms for properties to execute bias
                  updates for chemical components.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundImage:
              "linear-gradient(to right top, #2d2f33, #2b2d30, #292a2d, #27282b, #252628, #252628, #252628, #252628, #27282b, #292a2d, #2b2d30, #2d2f33)",
          }}
          // sx={{ width: "15%", margin: "auto", marginRight: "18%" }}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              ExxonMobil
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Statistical Quality Control (SQC) Coordinator
              <p>01/2018 - 03/2020</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              
                Successfully implemented new SQC program with zero incidences
              
              <ul className="custom-list p-5">
                <li>
                  Led the Proficiency Testing Program (PTP) where samples are
                  logged in, distributed to designated labs, data reported to
                  PTP program (ASTM, NEG, Texas Regional), and reports submitted
                  to the lab.
                </li>
                <li>
                  Constructed, monitored, and maintained limits and trends on
                  199 SQC charts as needed.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            backgroundImage:
            "linear-gradient(to bottom, #222325, #242527, #26272a, #282a2c, #2a2c2f, #2b2d30, #2c2e32, #2d2f33, #2d2f33, #2d2f33, #2d2f33, #2d2f33)",
          }}
          // sx={{ width: "15%", margin: "auto", marginRight: "18%" }}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              ExxonMobil
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Quality Specialist (Synthetics/Catalyst)
              <p>01/2017 - 01/2018</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="custom-list p-5">
                <li>
                  Managed 10 full slates of testing daily, assigned workload,
                  and coordinated with sampler to obtain material.
                </li>
                <li>
                  Lead a team of 6 laboratory technicians and chemists
                  responsible for the analysis of samples and data produced.
                </li>
                <li>Held a record of zero instances of test failures.</li>
                <li>
                  Reduced the allowance of waivers to ensure overall quality
                  output standards are met.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        
        
        
      </div>
      
    </div>
    </Box>
    
  );
}

// 28272A
// 2D2F33
