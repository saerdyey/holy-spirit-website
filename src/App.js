import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Nav from './components/Nav'
import Home from './components/home/Home'
import GeneralInfo from './components/ourbarangay/GeneralInfo'
import History from './components/ourbarangay/History'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/holy-spirit" exact component={Home}/>
        <Route path="/holy-spirit/general-info" exact component={GeneralInfo}/>
        <Route path="/holy-spirit/history" exact component={History}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
