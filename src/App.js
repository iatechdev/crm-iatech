import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Register_two from './components/Register_two';
import Register_three from './components/Register_three';
import Customerinfo from './components/Customerinfo'
import Customerinfocontinuo from './components/Customerinfocontinuo';
import Billing from './components/Billing';
import Billing_two from './components/Billing_two';
import Ticket from './components/Ticket';


function App() {
  return (
    <Router> 
      <Route exact path="/" exact component={Login}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/register_two" exact component={Register_two}/>
      <Route path="/register_three" exact component={Register_three}/>
      <Route path="/customerinfo" exact component={Customerinfo}/>
      <Route path="/customerinfocontinuo" exact component={Customerinfocontinuo}/>
      <Route path="/billing" exact component={Billing}/>
      <Route path="/billing_two" exact component={Billing_two}/>
      <Route path="/ticket" exact component={Ticket}/>
    </Router>
  );
}

export default App;
