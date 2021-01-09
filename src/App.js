import React from "react";
import "./App.css";
import HomePage from './pages/homepage/homepage.component'

import { Route,Switch} from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <HomePage/>
    </div>
  );
}
