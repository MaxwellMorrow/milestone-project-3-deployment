import React from 'react';
import ReactDOM from 'react-dom/client';
import './styleSheets/index.css';
import './styleSheets/mobile.css';
import './styleSheets/tablet.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from "./components/LogIn";
import ErrorPage from './components/errorPage';

import SignUp from './components/signUp';
import CurrentUserProvider from "./contexts/CurrentUser";
import Inventory from "./components/inventory"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentUserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </Router>
  </CurrentUserProvider>
);

