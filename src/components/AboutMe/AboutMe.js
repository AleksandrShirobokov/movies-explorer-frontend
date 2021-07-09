import React from 'react';
import photo from '../../images/portfolio-photo.jpg';
import './AboutMe.css';

export default function AboutMe(props) {
  return (
    <section className='about-me'>
      <h2 id='student' className='about-me__title'>Студент</h2>
      <div className='about-me__description'>
        <div className='about-me__text-section'>
          <p className='about-me__name'>Александр</p>
          <p className='about-me__role'>Фронтенд-разработчик, 25 лет</p>
          <p className='about-me__brief'>Всем привет! Я родился и живу в небольшом поселке на острове Сахалин. 
          После школы поступил в Хабаровский "Политен", где и закончил бакалавриат и следом магистратуру по специальности "Логистика".
          В данный момент работаю и совмещаю обучение в Яндекс.Практикум. Люблю мотоциклы и футбол. 
          </p>
          <div className="about-me__links">
            <a href="https://www.instagram.com/shirobokov_a_i/" target="_blank" rel="noreferrer" className="about-me__link">Instagram</a>
            <a href="https://github.com/AleksandrShirobokov" target="_blank" rel="noreferrer" className="about-me__link">Github</a>
          </div>
        </div>
        <img src={photo} alt='Александр' className='about-me__photo' />
      </div>
    </section>
  )
};