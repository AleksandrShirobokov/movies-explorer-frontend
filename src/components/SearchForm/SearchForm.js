import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchForm(props) {
  
  return (
    <section className='search'>
      <form className='search__form'>
        <input placeholder='Фильм' className='search__input' required='true' />
        <button type='submit' className='search__button'>Поиск</button>
      </form>
      {<FilterCheckbox />}
    </section>
  )
};