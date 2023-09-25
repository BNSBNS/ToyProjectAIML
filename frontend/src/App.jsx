import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './App.css';

import Header from "./components/header/Header";

import Home from "./components/home/Home";
import About from "./components/about/About";



function App() {
  return (
    <div className="App">
      <Header />
 
    </div>
  );
}

export default App;
