import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import styled from "styled-components";

// context
import { ViewportProvider } from 'context/ViewportContext';

// pages
import Home from "pages/Home";

const App = () => {
  return (
    <ViewportProvider>
      <Router>
        <Route
          render={({ location }) => {
            return (
              <Switch location={location}>
                <Route path="/" component={Home} />
              </Switch>
            );
          }}
        />
      </Router>
    </ViewportProvider>
  );
};

export default App;