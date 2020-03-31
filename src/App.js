import React from 'react';

import Navbar from './shared/navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Personajes from './pages/personajes';
import {
  useFirebaseApp
} from 'reactfire'
import TyC from './component/TyC';



function App() {
  const firebase = useFirebaseApp;
  console.log(firebase)
  return (
    <Router>
      <Navbar/>
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/TyC" component={TyC} />
         <Route exact path="/Personajes" component={Personajes} />
      </Switch>
      
    </Router>

  );
}

export default App;
