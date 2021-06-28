import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Navigation.css';
import logo from '../../images/profile-logo.svg'

export default function Navigation(props) {
  return (
    <div className='navigation__container'>
      <Switch>
        <Route exact path="/">
          <div className='navigation__container_type_login'>
          <Link to="/signup" className="navigation__link navigation__link_type_signup">Регистрация</Link>
          <Link to="/signin" className="navigation__link navigation__link_type_signin">Войти</Link>
          </div>
        </Route>

        <Route exact path="/profile">
          <div className="navigation__link navigation__link_type_movies-container">
            <Link to="/movies" className="navigation__link navigation__link_type_movies">Фильмы</Link>
            <Link to="/saved-movies" className="navigation__link navigation__link_type_saved-movies">Сохранённые фильмы</Link>
          </div>
          <div className="navigation__container-profile">
            <Link to="/profile" className="navigation__link navigation__link_type_profile">Аккаунт</Link>
            <img className="navigation__link_logo" src={logo} alt='logo' />
          </div>
        </Route>

        <Route exact path="/movies">
        <div className="navigation__container_type_movies">
            <Link to="/movies" className="navigation__link navigation__link_type_movies">Фильмы</Link>
            <Link to="/saved-movies" className="navigation__link navigation__link_type_saved-movies">Сохранённые фильмы</Link>
          </div>
          <div className="navigation__container-profile">
            <Link to="/profile" className="navigation__link navigation__link_type_profile">Аккаунт</Link>
            <img className="navigation__link_logo" src={logo} alt='logo' />
          </div>
        </Route>

        <Route exact path="/saved-movies">
        <div className="navigation__container_type_movies">
            <Link to="/movies" className="navigation__link navigation__link_type_movies">Фильмы</Link>
            <Link to="/saved-movies" className="navigation__link navigation__link_type_saved-movies">Сохранённые фильмы</Link>
          </div>
          <div className="navigation__container-profile">
            <Link to="/profile" className="navigation__link navigation__link_type_profile">Аккаунт</Link>
            <img className="navigation__link_logo" src={logo} alt='logo' />
          </div>
        </Route>

      </Switch>
    </div>
  )
};