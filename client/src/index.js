import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from "./components/LogIn";
import Ingredients from './components/ingredients';
import NavBar from './components/navbar';
import ErrorPage from './components/errorPage';
import Root from './components/Root';

import CurrentUserProvider from "./contexts/CurrentUser";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentUserProvider>
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Root/>} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
  </CurrentUserProvider>
);

