import { Switch, Route } from "react-router-dom";
import PageHome from "../pages/Home";
import PageLogin from "../pages/Login";
import PageRegister from "../pages/Register";
import PageGroups from "../pages/Groups";
import { Dashboard } from "../pages/Dashboard";

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
      </Route>
      <Route path="/groups">
        <PageGroups />
      </Route>
      <Route path="/contact">
        <h1>Contato</h1>
      </Route>
      <Route path="/perfil">
        <h1>Perfil</h1>
      </Route>
    </Switch>
  );
};
export default Routes;
