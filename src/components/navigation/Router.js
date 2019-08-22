import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/LoginComponent";
import PrivateRoute from "../../routes/PrivateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <PrivateRoute exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
