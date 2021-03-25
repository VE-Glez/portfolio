import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ArticlePreviewComponentMaster from "./pages/frontendmentor/ArticlePreviewComponentMaster";
import CodingBootcampTestimonialsSliderMaster from "./pages/frontendmentor/CodingBootcampTestimonialsSliderMaster";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route
          exact
          path="/projects/APCM"
          component={ArticlePreviewComponentMaster}
        />
        <Route
          exact
          path="/projects/CBTSM"
          component={CodingBootcampTestimonialsSliderMaster}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
