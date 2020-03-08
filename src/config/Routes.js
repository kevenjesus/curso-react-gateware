import React from "react";
import { GlobalStyle } from "config/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "Pages/Login";
import Users from "Pages/Users";

export default function Routes() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}
