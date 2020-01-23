import React from 'react';
import NavBar from './components/navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import NlpGettingStarted from './components/nlp_getting_started';
import Home from './components/home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route path='/home' component={Home}/>
        <Route path='/nlp-getting-started' component={NlpGettingStarted}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
