import { Switch, Route } from "react-router-dom";
import PageHome from "../pages/Home";
import PageLogin from "../pages/Login";
import PageRegister from "../pages/Register";

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
        <h1>Dashboard</h1>
      </Route>
      <Route path="/groups">
        <h1>Groups</h1>
      </Route>
    </Switch>
  );
};
export default Routes;
