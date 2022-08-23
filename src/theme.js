import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#4897D8',
    },
    secondary: {
      main: '#FFDB5C',
    },
    error: {
      main: '#FA6E59',
    },
  },
});

export default theme;
