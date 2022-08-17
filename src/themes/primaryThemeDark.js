import { createTheme } from '@mui/material/styles';


export const themeOptions = {
  
    palette: {
      type: 'dark',
      mode: 'dark',
        background: {
          default: "#25262A"
        },
      primary: {
        main: '#7deaa2',
      },
      secondary: {
        main: '#c5c5c5',
      },
      warning: {
        main: '#ff9800',
      },
      success: {
        main: '#4ca7af',
      },
    },
    // typography: {
    //   h1: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   h2: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   h3: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   h4: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   h5: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   h6: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   subtitle1: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   subtitle2: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   body1: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   body2: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   button: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   caption: {
    //     fontFamily: 'Droid Serif',
    //   },
    //   overline: {
    //     fontFamily: 'Droid Serif',
  };


const theme=createTheme(themeOptions);
export default theme