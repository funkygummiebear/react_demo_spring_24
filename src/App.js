import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import './App.css';
import Nav from './components/Nav';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App">
      <Home />
      <NasaPhoto />
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
