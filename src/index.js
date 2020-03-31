import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { FirebaseAppProvider, SuspenseWithPerf  } from 'reactfire';

const firebaseConfig = {
  
    apiKey: "AIzaSyD5ah9wfyK6-GeBcrreqQNnAiG7LghJUoU",
    authDomain: "barber-home-70092.firebaseapp.com",
    databaseURL: "https://barber-home-70092.firebaseio.com",
    projectId: "barber-home-70092",
    storageBucket: "barber-home-70092.appspot.com",
    messagingSenderId: "1098035281709",
    appId: "1:1098035281709:web:8ce74a84bd9c770799dda4",
    measurementId: "G-3C5YH2LPL0"
  
};
ReactDOM.render(
  
    (
      <FirebaseAppProvider firebaseConfig
      ={firebaseConfig
      }>
      
      <SuspenseWithPerf fallback={'cargando.....'}>
      <App />
      </SuspenseWithPerf>
      

      </FirebaseAppProvider>
 
      ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
