import React from 'react';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import Icon from '@mui/material/Icon';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:300
  }));




export default function AboutMe() {
  return (
<Box sx={{ width: '100%'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2.5}>
            <Item><ConstructionOutlinedIcon color='primary' fontSize='large'></ConstructionOutlinedIcon>
            <h1 style={{fontSize:25}}>Front End</h1>
            <p style={{fontSize:19}}>React</p>
            <p style={{fontSize:19}}>JavaScript</p>
            <p style={{fontSize:19}}>HTML</p>
            <p style={{fontSize:19}}>CSS</p>
            <p style={{fontSize:19}}>MUI</p>
            <p style={{fontSize:19}}>Bootstrap</p>
            
            </Item>
       
        </Grid>
        <Grid item xs={2.5}>
        <Item><ConstructionOutlinedIcon color='primary' fontSize='large'></ConstructionOutlinedIcon>
            <h1 style={{fontSize:25}}>Back End</h1>
            <p style={{fontSize:19}}>Flask</p>
            <p style={{fontSize:19}}>Python</p>
            <p style={{fontSize:19}}>PostgreSQL</p>
            <p style={{fontSize:19}}>RestfulAPI</p>
            <p style={{fontSize:19}}>Postman</p>
            <p style={{fontSize:19}}>Heroku</p>
            
            </Item>
        </Grid>
        <Grid item xs={2.5}>
        <Item><ConstructionOutlinedIcon color='primary' fontSize='large'></ConstructionOutlinedIcon>
            <h1 style={{fontSize:25}}>Tools</h1>
            <p style={{fontSize:19}}>Git</p>
            <p style={{fontSize:19}}>Github</p>
            <p style={{fontSize:19}}>Visual Studio Code</p>
            <p style={{fontSize:19}}>npm</p>
            <p style={{fontSize:19}}>Formik</p>
            <p style={{fontSize:19}}>Yup</p>
            
            </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>4</Item>
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



