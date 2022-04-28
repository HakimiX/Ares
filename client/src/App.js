import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from "./components/Nav";
import Home from "./components/Home";
import Persons from "./components/Persons";
import Person from "./components/Person";
import Companies from "./components/Companies";
import Company from "./components/Company";
import Addresses from "./components/Addresses";


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
            <Route path="/companies" exact component={Companies}/>
            <Route path="/companies/:id" exact component={Company}/>
            <Route path="/addresses" exact component={Addresses}/>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
