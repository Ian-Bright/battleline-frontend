import { Route, Switch } from "react-router-dom";
import { RootLocation } from "./Locations";
import Home from "./views/Home";

const ROUTES = [
  {
    component: Home,
    exact: true,
    path: RootLocation,
  },
];

export default function Routes() {
  return (
    <Switch>
      {ROUTES.map(({ component, exact, path }) => (
        <Route component={component} exact={exact} path={path} />
      ))}
    </Switch>
  );
}
