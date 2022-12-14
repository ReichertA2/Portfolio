import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

const Item = styled(Paper)(({ theme }) => ({
  background: "#25262A",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,

  height: 300,
  width: 200,
  marginLeft: 270,
  showGridLines: false,
  border: "none",
  boxShadow: "none",
  //   border: "none",
  //   boxShadow: "none",

  //   backgroundColor: theme.palette.background.default

  //   marginTop: 80,
}));

export default function AboutMe() {
  return (
    <Box style={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 1, md: 3 }}>
        <Grid item xs={1.56}>
          <Item sx={{ height: 25, gridRow: "span 1" }}></Item>
        </Grid>
        <Grid item xs={1.55}>
          <Item
            sx={{
              // width: "50%",
              height: 45,
              fontSize: 25,
              fontWeight: "bold",
              // display: "inline-block",
            }}
          >
            Skills
          </Item>
        </Grid>
        <Grid item xs={1.8}>
          <Item
            sx={{
              height: 25,
              width: "75%",
              fontSize: 25,
              fontWeight: "bold",
            }}
          ></Item>
        </Grid>

        <Grid item xs={4}>
          <Item
            sx={{
              gridRow: "span 1",
              height: 25,
              width: "75%",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            About Me
          </Item>
        </Grid>
      </Grid>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 1, md: 3 }}>
        <Grid item xs={1.56}>
          <Item style={{}}>
            <i
              style={{ fontSize: 30, color: "#7deaa2", marginBottom: 15 }}
              class="fa-solid fa-laptop-code"
            ></i>
            <h1 style={{ fontSize: 20, marginBottom: 15, color: "#fff" }}>
              Front End
            </h1>
            <p style={{ fontSize: 15, marginBottom: 10 }}>React</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>JavaScript</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>HTML</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>CSS</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>MUI</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Bootstrap</p>
          </Item>
        </Grid>
        <Grid item xs={1.55}>
          <Item>
            {/* <FontAwesomeIcon icon="fa-solid fa-laptop-code" /> */}
            <i
              style={{ fontSize: 30, color: "#7deaa2", marginBottom: 15 }}
              class="fa-solid fa-terminal "
            ></i>

            {/* fa-counter-background-color */}
            {/* <ConstructionOutlinedIcon
              color="primary"
              fontSize="large"
            ></ConstructionOutlinedIcon> */}
            <h1 style={{ fontSize: 20, marginBottom: 15, color: "#fff" }}>
              Back End
            </h1>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Flask</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Python</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>PostgreSQL</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>RestfulAPI</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Postman</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Heroku</p>
          </Item>
        </Grid>
        <Grid item xs={1.8}>
          <Item>
            <ConstructionOutlinedIcon
              color="primary"
              fontSize="large"
              style={{ marginBottom: 10 }}
            ></ConstructionOutlinedIcon>
            <h1 style={{ fontSize: 20, marginBottom: 15, color: "#fff" }}>
              Tools
            </h1>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Git</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Github</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Visual Studio Code</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>npm</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Formik</p>
            <p style={{ fontSize: 15, marginBottom: 10 }}>Yup</p>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item
            style={{
              width: "75%",
              // margin: "0px auto",
              // backgroundColor: "purple",
            }}
          >
            <section id="aboutMe">
              <div style={{}}>
                <Button style={{ fontSize: 20 }}>Developer</Button>
                <p style={{ color: "#86888d", }} className="opacity-80">
                  As a Full Stack Developer, I am creative, innovative and
                  passionate about bringing solutions to challenging issues. I
                  will continue to strive to improve and be better as a
                  developer. Building the right team has always been essential
                  to my continued success. I am interested in either both
                  Front-End and Back-end. Enjoy how front-end brings the beauty
                  of an application and love how backend makes the connection.
                  Cannot wait to join your team!!
                </p>
                <Link
                  style={{ textDecoration: "none" }}
                  href="https://www.linkedin.com/in/aydee-reichert"
                >
                  <Button style={{ marginTop: 15 }} variant="outlined">
                    <LinkedInIcon sx={{ marginRight: "0.5rem" }} />
                    Lets Connect
                  </Button>
                </Link>
              </div>
            </section>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

//     <section id="aboutMe">
//         <Button>HTML</Button>
//         <Button>CSS</Button>
//         <Button>Python</Button>
//         <Button>JavaScript</Button>
//         <Button>Flask</Button>
//         <Button>React</Button>
//         <Button>PostgreSQL</Button>
//         <div style={{marginLeft:'50rem', width:'25%'}}>
//         <h1 style={{fontSize:'2.1875rem'}}>About Me</h1>
//         <Button >Developer</Button>
//         <p style={{color:'#606266'}} className="opacity-80">As a Full Stack Developer, I am creative, innovative and passionate about bringing solutions to challenging issues. I will continue to strive to improve and be better as a developer. Building the right team has always been essential to my continued success. I am interested in either both Front-End and Back-end. Enjoy how front-end brings the beauty of an application and love how backend makes the connection. Cannot wait to join your team!!</p>
//         </div>

//     </section>
//   )
// }
