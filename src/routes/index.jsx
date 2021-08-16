import { Switch, Route } from "react-router-dom";
import PageHome from "../pages/Home";
import PageLogin from "../pages/Login";
import PageRegister from "../pages/Register";
import Dashboard from "../pages/dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>
      <Route path="/login">
        <PageLogin />
      </Route>
      <Route path="/register">
        <PageRegister />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
        Dashboard
      </Route>
    </Switch>
  );
};
export default Routes;
