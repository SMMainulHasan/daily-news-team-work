import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to="/">
          <Home />
        </Route>
        <Route exact to="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
