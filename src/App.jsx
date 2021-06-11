import { Box, CssBaseline } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Certifications from './pages/Certifications';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

const App = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Box style={{ minHeight: '100vh' }}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/certifications' component={Certifications} />
              <Route exact path='/projects' component={Projects} />

              <Route component={NotFound} />
            </Switch>
          </Box>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default App;
