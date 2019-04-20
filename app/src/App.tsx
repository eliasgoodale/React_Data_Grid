import React, {StatelessComponent} from 'react';
import { Layout1 } from './components';

import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import {indigo, blueGrey} from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: indigo[300],
    },
  }
});


const App: StatelessComponent = () =>
  
  <MuiThemeProvider theme={theme}>
  <CssBaseline/>
    
  <Layout1/>


  </MuiThemeProvider>

export default App;
