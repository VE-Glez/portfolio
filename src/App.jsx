import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActiveLastBreadcrumb from "./components/ActiveLastBreadcrumb";
import GeneralNavbar from "./components/GeneralNavbar";
import Certifications from "./pages/Certifications";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import routes from "./utils/routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GeneralNavbar />
        {/* <ActiveLastBreadcrumb /> */}
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
