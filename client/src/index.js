import React from 'react';
import ReactDOM from 'react-dom/client';
import './styleSheets/index.css';
import './styleSheets/mobile.css';
import './styleSheets/tablet.css';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from "./components/LogIn";
import Ingredients from './components/ingredients';
import ErrorPage from './components/errorPage';
import Root from './components/Root';

import CurrentUserProvider from "./contexts/CurrentUser";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentUserProvider>
   <App/>
  </CurrentUserProvider>
);

