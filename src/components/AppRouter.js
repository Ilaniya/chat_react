import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CHAT_ROUTE } from "../utills/consts";
import { LOGIN_ROUTE } from "../utills/consts";
import { privateRoutes } from "./routes";
import { publicRoutes } from "./routes";

const AppRouter = () => {
  const isUserLogin = false;
  return isUserLogin ? (
    <Switch>
      {privateRoutes.map((path, component) => (
        <Route path={path} component={component} exact={true} />
      ))}
      <Redirect to={CHAT_ROUTE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((path, component) => (
        <Route path={path} component={component} exact={true} />
      ))}
      <Redirect to={LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
