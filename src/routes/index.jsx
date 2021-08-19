import { Switch, Route, Redirect } from "react-router-dom";
import PageHome from "../pages/Home";
import PageLogin from "../pages/Login";
import PageRegister from "../pages/Register";
import PageGroups from "../pages/Groups";
import PerfilPage from "../pages/Perfil";
import { Dashboard } from "../pages/Dashboard";
import Contact from "../pages/Contact";

import { useEffect, useContext } from "react";
import { AuthTokenContext } from "../providers/Auth";

const Routes = () => {
  const { authN, setAuthN } = useContext(AuthTokenContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      return setAuthN(true);
    }
  }, [authN]);

  return (
    <Switch>
      <Route exact path="/">
        <PageHome AuthN={authN} />
      </Route>
      <Route path="/login">
        <PageLogin AuthN={authN} setAuthN={setAuthN} />
      </Route>
      <Route path="/register">
        <PageRegister AuthN={authN} />
      </Route>
      <Route path="/dashboard">
        <Dashboard AuthN={authN} />
      </Route>
      <Route path="/groups">
        <PageGroups AuthN={authN} />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/perfil">
        {authN ? <PerfilPage /> : <Redirect to="/login" />}
      </Route>
    </Switch>
  );
};
export default Routes;
