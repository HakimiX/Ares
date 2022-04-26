import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Example from "./Example";

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <h3>Welcome</h3>
          <Route exact path="/" component={Example} />
        </div>
      </div>
    </Router>
  );
}

export default App;
