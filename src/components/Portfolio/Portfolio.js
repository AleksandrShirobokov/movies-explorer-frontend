import React from 'react';
import './Portfolio.css';

export default function Portfolio(props) {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a
            href='https://github.com/AleksandrShirobokov/how-to-learn'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'>
            Статичный сайт
          </a>
          <p className='portfolio__arrow'>↗</p>
        </li>
        <li className='portfolio__item'>
          <a
            href='https://aleksandrshirobokov.github.io/russian-travel/index.html#'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'>
            Адаптивный сайт
          </a>
          <p className='portfolio__arrow'>↗</p>
        </li>
        <li className='portfolio__item'>
          <a
            href='http://krasavchik.students.nomoredomains.icu/'
            target='_blank'
            rel='noreferrer'
            className='portfolio__link'>
            Одностраничное приложение
          </a>
          <p className='portfolio__arrow'>↗</p>
        </li>
      </ul>
    </section>
  )
};