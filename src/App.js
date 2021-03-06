import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Nav from './components/Nav'
import Home from './components/home/Home'
import GeneralInfo from './components/ourbarangay/GeneralInfo'
import History from './components/ourbarangay/History'
import Maps from './components/ourbarangay/Maps'
import Forms from './components/ourbarangay/Forms'
import ContactUs from './components/ourbarangay/ContactUs'
import Footer from './components/Footer'
import BrgyIdForm from './components/ourbarangay/forms/BrgyIdForm'
import AdminDashboard from './components/admin/dashboard/AdminDashboard'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/holy-spirit" exact component={Home}/>
        <Route path="/holy-spirit/general-info" exact component={GeneralInfo}/>
        <Route path="/holy-spirit/history" exact component={History}/>
        <Route path="/holy-spirit/maps" exact component={Maps}/>
        <Route path="/holy-spirit/forms" exact component={Forms}/>
        <Route path="/holy-spirit/contact" exact component={ContactUs}/>
        <Route path="/holy-spirit/brgyid-form" exact component={BrgyIdForm}/>
        <Route path="/holy-spirit/admin" exact component={AdminDashboard}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
