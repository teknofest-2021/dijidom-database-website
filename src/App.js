import "./App.css";
import Navbar from "./components/js/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/js/Home";
import Ambients from "./components/pages/js/Ambients";
import Plants from "./components/pages/js/Plants";
import PlantTypes from "./components/pages/js/PlantTypes";
import Soils from "./components/pages/js/Soils";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/ambients' exact component={Ambients} />
      <Route path='/plants' exact component={Plants} />
      <Route path='/plantTypes' exact component={PlantTypes} />
      <Route path='/soils' exact component={Soils} />
      </Switch>
    </Router>
  );
}

export default App;
