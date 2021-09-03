import React from 'react';
import { Switch,Route } from 'react-router';
import './App.css';
import HomePage from './pages/homepage.component';

const HatPage=()=>(
<div>
  <h1>Hats page</h1>
</div>
);

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop/hats' component={HatPage}/>
      </Switch>
     
    </div>
  );
}

export default App;
