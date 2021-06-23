import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies(props) {
  return (
    <>
      <SearchForm />
      <MoviesCardList />
    </>
  )
};