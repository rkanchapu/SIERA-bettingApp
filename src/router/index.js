import React from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import Betslip from "../screens/Betslip";
import Events from '../screens/Events';
import UnderConstruction from '../screens/UnderConstruction'
import paths from "./paths";


export default function Router() {
  const location = useLocation();

  const pages = [
    {
      pageLink: paths.home,
      view: Events,
      displayName: "Events",
    },
    {
      pageLink: paths.betslip,
      view: Betslip,
      displayName: "Betslip",
    },
    {
      pageLink: paths.underConstruction,
      view: UnderConstruction,
      displayName: "Under construction",
    }
  ]
  return (
    <Switch location={location}>
      {pages.map((page, index) => {
        return (
          <Route
            exact
            path={page.pageLink}
            render={({ match }) => <page.view />}
            key={index}
          />
        );
      })}
      <Redirect to="/" />
    </Switch>
  );
}
