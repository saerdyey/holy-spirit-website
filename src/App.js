import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Nav from './components/Nav'
import Home from './components/home/Home'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
      <Route path="/holy-spirit" exact component={Home}/>
      </Switch>
      <h1>Hello World!</h1>
    </div>
    </Router>
  );
}

export default App;
