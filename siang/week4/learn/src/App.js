import './css/App.css';
// import './Signin.css'
import React, { Fragment } from 'react';
import TransferApp from './day4/TransferApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router } from 'react-router-dom';
import RouterApp from './day5/ReactRouter';

function App() {
  return (
    <Router>
      <RouterApp />
    </Router>
  );
}

export default App;
