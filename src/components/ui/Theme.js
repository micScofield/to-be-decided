import { createTheme } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

export default theme;
