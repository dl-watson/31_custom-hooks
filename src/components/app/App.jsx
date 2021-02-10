import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../../containers/Main";
import Details from "../details/Details";
import { ThemeProvider } from "../../providers/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/details/:name" component={Details} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
