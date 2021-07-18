import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC0cDkgFI28OaJZ1kmWjOQJam30PISM_9A",
  authDomain: "cart-30060.firebaseapp.com",
  projectId: "cart-30060",
  storageBucket: "cart-30060.appspot.com",
  messagingSenderId: "345670806906",
  appId: "1:345670806906:web:17f1df913d71c450b5fac3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

