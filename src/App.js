import "./App.css";
import Navbar from "./components/js/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/js/Home";
import Ambients from "./components/pages/js/Ambients";
import Plants from "./components/pages/js/Plants";
import Soils from "./components/pages/js/Soils";
import Orientation from "./components/pages/js/Orientation";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/ambients' exact component={Ambients} />
      <Route path='/plants' exact component={Plants} />
      <Route path='/soils' exact component={Soils} />
      <Route path='/orientation' exact component={Orientation} />
      </Switch>
    </Router>
  );
}

export default App;
