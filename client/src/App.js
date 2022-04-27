import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./components/Home";
import Persons from "./components/Persons";
import Person from "./components/Person";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/persons" exact component={Persons} />
            <Route path="/persons/:id" component={Person}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
