import React from 'react';
import './Header.css';
import logo from '../../images/logo-header.svg';
import Navigation from '../Navigation/Navigation';
import { Route, Switch, Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className='header'>
        <Switch>
          <Route exact path="/">
            <div className='header__wrapper'>
            <div className='header__container'>
              <Link><img className='header__logo' src={logo} alt='Логотип проекта'></img></Link>
              <Navigation /> 
            </div>   
            </div>
          </Route>

          <Route exact path="/profile">
            <div className='header__container'>
              <Link><img className='header__logo' src={logo} alt='Логотип проекта'></img></Link>
              <Navigation /> 
            </div>   
          </Route>    
        </Switch>  
      
    </header>
  )
};