import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActiveLastBreadcrumb from "./components/ActiveLastBreadcrumb";
import GeneralNavbar from "./components/GeneralNavbar";
import Certifications from "./pages/Certifications";
import ArticlePreviewComponentMaster from "./pages/frontendmentor/ArticlePreviewComponentMaster";
import BaseApparelComingSoonMaster from "./pages/frontendmentor/BaseApparelComingSoonMaster";
import CodingBootcampTestimonialsSliderMaster from "./pages/frontendmentor/CodingBootcampTestimonialsSliderMaster";
import FourCardFeatureSectionMaster from "./pages/frontendmentor/FourCardFeatureSectionMaster";
import IntroComponentSignupFormMaster from "./pages/frontendmentor/IntroComponentSignupFormMaster";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

const routes = [
  { path: "/projects/ICSFM", component: IntroComponentSignupFormMaster },
  { path: "/projects/BACSM", component: BaseApparelComingSoonMaster },
  { path: "/projects/FCFSM", component: FourCardFeatureSectionMaster },
  { path: "/projects/APCM", component: ArticlePreviewComponentMaster },
  {
    path: "/projects/CBTSM",
    component: CodingBootcampTestimonialsSliderMaster,
  },
];

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GeneralNavbar />
        <ActiveLastBreadcrumb />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/certifications" component={Certifications} />
          <Route exact path="/projects" component={Projects} />
          {routes.map(({ path, component }, key) => (
            <Route exact key={key} path={path} component={component} />
          ))}
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
