import { Box, CssBaseline } from '@material-ui/core';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Certifications from './pages/Certifications';
// import Home from './pages/Home';
import Home2 from './pages/Home2';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
// import Projects from './pages/Projects';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(243, 236, 12)',
    },
  },
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Box
              style={{
                minHeight: '100vh',
                maxWidth: '100vw',
                overflow: 'hidden',
              }}
            >
              <Switch>
                <Route exact path='/' component={Home2} />
                <Route
                  exact
                  path='/certifications'
                  component={Certifications}
                />
                <Route exact path='/about-me' component={About} />

                <Route component={NotFound} />
              </Switch>
            </Box>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
