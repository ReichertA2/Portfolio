import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div sx={{}}>
      <Accordion
        // sx={{
        //   width: "15%",
        //   margin: "auto",
        //   marginRight: "18%",
        //   marginTop: "1%",
        // }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Coding Temple
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            <p>Full Stack Developer</p>
            04/2022 - 06/2022
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Technologies: Python, JavaScript ES6, HTML, CSS, Object Oriented
            Programming, Regex, Flask, React, MUI, Git/GitHub, Jupyter Notebook,
            Node.JS, Postgres, SQL, Postman, RESTful APIs, Formik, Yup
            <li>
              Created a full stack reading list application that allows users to
              browse, add, and remove books from their reading list utilizing
              API wrappers, reducer, Formik, Yup, and custom react hooks.
            </li>
            <li>
              Generated a web application that allows users to search by city to
              obtain weather information by using the Open Weather API with
              JavaScript with Axios.
            </li>
            <li>
              Built an API for a book website to allow users to create a reading
              list using RESTful API in flask.
            </li>
            <li>
              Crafted a multi-page flask application for a pokemon battle that
              used SQL to create the user and pokemon database and configured
              the app to include registration, edit profile, and login.
            </li>
            <li>
              Produced a car dealership database using ERD with elephantSQL.
            </li>
            <li>
              Programmed a BlackJack game with Python OOP (Object Oriented
              Programming) in Visual Studio Code.
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
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
            <li>
              Analyze and track data creating productivity and output reports
              for stakeholders and management.
            </li>
            <li>
              Create targets and release limits on limiting properties for
              Diesel and Mogas to mitigate quality disputes.
            </li>
            <li>
              Enhanced bias algorithms for properties to execute bias updates
              for chemical components.
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
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
            <p>Statistical Quality Control (SQC) Coordinator</p>
            01/2018 - 03/2020
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Successfully implemented new SQC program with zero incidences</p>
            <li>
              Led the Proficiency Testing Program (PTP) where samples are logged
              in, distributed to designated labs, data reported to PTP program
              (ASTM, NEG, Texas Regional), and reports submitted to the lab.
            </li>
            <li>
              Constructed, monitored, and maintained limits and trends on 199
              SQC charts as needed.
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
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
            <p>Quality Specialist (Synthetics/Catalyst)</p>
            01/2017 - 01/2018
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>
              Managed 10 full slates of testing daily, assigned workload, and
              coordinated with sampler to obtain material.
            </li>
            <li>
              Lead a team of 6 laboratory technicians and chemists responsible
              for the analysis of samples and data produced.
            </li>
            <li>Held a record of zero instances of test failures.</li>
            <li>
              Reduced the allowance of waivers to ensure overall quality output
              standards are met.
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        // sx={{ width: "15%", margin: "auto", marginRight: "18%" }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ExxonMobil
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            <p>Chemist</p>
            08/2015 - 01/2017
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>
              Assigned to lead special projects and auditing processes, found
              issues with smoke point and viscosity tests, and worked with the
              technology team to ensure correct outcomes.
            </li>
            <li>
              Decreased equipment incidences by adding an extra standard to
              ensure the maintenance schedule is followed.
            </li>
            <li>
              Adapted and improved in house test methods to improve quality and
              deliver test results on time.
            </li>
            <li>Trained technicians on new testing methods.</li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        // sx={{ width: "15%", margin: "auto", marginRight: "18%" }}
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            ExxonMobil
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            <p>Laboratory Technician</p>
            03/2015 - 08/2015
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>Analyzed petroleum samples using ASTM and ExxonMobil QP&G.</li>
            <li>
              Utilized error -checking tools to ensure data is reported
              correctly.
            </li>
            <li>
              Performed and maintained daily SQC for each instrument, calibrated
              ICP and Carbon-LECO and other instruments.
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        // sx={{ width: "15%", margin: "auto", marginRight: "18%" }}
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Intertek</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            <p>Crude Assay Supervisor</p>
            01/2012 - 03/2015
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>
              Coordinated with the training department to cross train
              technicians on the full complement of tests.
            </li>
            <li>
              Analyzed data and reported results directly to clients –
              ExxonMobil, Chevron, and Western Refining.
            </li>

            <li>
              Ran and reviewed SQC data to ensure instruments are working
              properly.
            </li>
            <li>
              Integrated Google documents to better manage the paperwork flow,
              communications and manage the testing schedule, confirm testing
              methods, obtain client approvals, input data, and improve
              turnaround time.
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        // sx={{ width: "15%", margin: "auto", marginRight: "18%" }}
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Intertek</Typography>
          <Typography sx={{ color: "text.secondary" }}>
            <p>Chemist</p>
            01/2010 - 01/2012
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <li>Performed maintenance on ICP-MS equipment.</li>

            <li>
              Performed full slate testing such as API, sulfur content and
              kinematic viscosity.
            </li>
            <li>
              Prepared test solutions and reagents for laboratory testing.
            </li>
            <li>
              Calibrated and performed testing on CHNS analyzer instrument to
              determine sample elemental composition.
            </li>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
