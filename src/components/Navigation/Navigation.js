import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './Navigation.css';

export default function Navigation(props) {
  return (
    <div className='navigation__container navigation__container_type_login'>
      <Switch>
        <Route exact path="/">
          <Link to="/signup" className="navigation__link navigation__link_type_signup">Регистрация</Link>
          <Link to="/signin" className="navigation__link navigation__link_type_signin">Войти</Link>
        </Route>

        <Route exact path="/profile">
          <Link to="/movies" className="navigation__link navigation__link_type_movies">Фильмы</Link>
          <Link to="/saved-movies" className="navigation__link navigation__link_type_saved-movies">Сохранённые фильмы</Link>
        </Route>
      </Switch>
    </div>
  )
};