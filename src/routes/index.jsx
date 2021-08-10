import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Home</h1>
      </Route>
      <Route path="/login">
        <h1>Login</h1>
      </Route>
      <Route path="/signup">
        <h1>Cadastro</h1>
      </Route>
      <Route path="/dashboard">
        <h1>Dashboard</h1>
      </Route>
    </Switch>
  );
};
export default Routes;
