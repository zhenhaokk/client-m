import React, { useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default App;
