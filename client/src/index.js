import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import './styleSheets/index.css';
import './styleSheets/mobile.css';
import './styleSheets/tablet.css';
import "bootstrap/dist/css/bootstrap.min.css";

import LogIn from "./components/LogIn";
import ErrorPage from './components/errorPage';
import SignUp from './components/signUp';
import Construction from "./components/construction"
import CurrentUserProvider from "./contexts/CurrentUser";
import InventoryOrdering from "./components/inventoryCRUD/InventoryOrdering"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CurrentUserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/inventory' element={<InventoryOrdering/>}/>
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/construction' element={< Construction/>} />
      </Routes>
    </Router>
  </CurrentUserProvider>
);

