import "./app.scss";
import Logo from "./pages/logo/logo";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { BrowserRouter as Router,
Switch,
Route,
Redirect} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "./authContext/AuthContext";

function App() {
  const {user} = useContext(AuthContext) ;
  return (
    <Router>
   <Switch>
    <Route path="/" exact>
      {user ? <Home type="movie"/> : <Redirect to="/register" />}
    </Route>
    <Route path="/register">
     {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Logo /> : <Redirect to="/" />}</Route>
{user && (
<>
    <Route path="/movies">
      <Home type="movie"/>
    </Route>
    <Route path="/series">
      <Home type="series"/>
    </Route>
   
    <Route path="/watch">
      <Watch/>
    </Route>

</>

)}
   </Switch>
   </Router>
  );
}

export default App;
