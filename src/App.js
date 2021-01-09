import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Nav from './components/Nav'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <h1>Hello World!</h1>
    </div>
    </Router>
  );
}

export default App;
