import { createTheme } from '@mui/material/styles';

export const themeOptions = {
    palette: {
      type: 'dark',
      
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
  };

const theme=createTheme(themeOptions);
export default theme