import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);




function SwipeableTextMobileStepper({images, URL}) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const renderLinks = (url) => {
    console.log("url",url);
    if (url){
      window.open(url);
    }
  }


  return (
    <Box sx={{ maxWidth: 500, flexGrow: 1, margin:'0px auto' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
          
        }}
      >
        <Typography style={{fontWeight: 'bold', width:"88%"}}>{images[activeStep].label}</Typography>
        <a
          href={URL[0]}
          style={{ textDecoration: "none", color: '#7deaa2', width:"10%"  }}
          onClick={() =>
            renderLinks(URL[1])
          }
        >
          {" "}
          <GitHubIcon sx={{'&:hover': { color: '#7deaa2' } }}  />
        </a>
        {/* <Link
            sx={{ textDecoration: "none", '&:hover': { color: '#7deaa2' }, width:"10%" }}
            href={URL}
          >
            <GitHubIcon sx={{'&:hover': { color: '#7deaa2' } }}  />
            
          </Link> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 500,
                  overflow: 'hidden',
                  width: '100%',
                 
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;