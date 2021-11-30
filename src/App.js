import "./styles.css";
import "./styles2.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home.js";
import Trails from "./home/trails/Trails.js";
import Moto from "./home/moto/Moto.js";
import Ebike from "./home/ebike/Ebike.js";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/home.html" component={Home} />

        <Route exact path="/moto/moto.html">
          <Moto />
        </Route>

        <Route exact path="/trail/trail.html">
          <Trails />
        </Route>

        <Route exact path="/ebike/ebike.html">
          <Ebike />
        </Route>

        <Route path="/">
          <h1>Error 404: File Not Found :-(</h1>
        </Route>
      </Switch>
    </Router>
  );
}
