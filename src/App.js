import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import TopMenu from './components/TopMenu';
import Product from './pages/Product'
function App() {
  return (
    <Router>
    <div className="App">
      <TopMenu />
      <Product />
   
    </div>
    </Router>
  );
}

export default App;
