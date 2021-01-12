import React,{useState,useEffect} from "react";
import "./App.css";
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component'
import SignInAndSignOutPage from './pages/sign-in-and-sign-up/sign-in-up.component'
import { Route,Switch} from 'react-router-dom'
import {auth} from './firebase/firebase.utils';

export default function App() {

  const [currentUser,setCurrentUser]=useState(null);
  

  useEffect(()=>{
   const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
     setCurrentUser(user);
     console.log(user)
   })
   return () => {
     unsubscribeFromAuth();
   }
  },[])
  return (
    <div className="App">
    <Header currentUser={currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignOutPage} />
 
      </Switch>
      
    </div>
  );
}
