import React from "react";
//import "./App.css";
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component'
import { Route,Switch} from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
    <Header/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage} />
      </Switch>
      
    </div>
  );
}
