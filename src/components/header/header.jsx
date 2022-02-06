import React from 'react';
import { Link } from 'react-router-dom';
import {Navigation} from '../../const'

import "./style.scss";

const Header = () => {
  const navigation = Object.values(Navigation);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__functionality functionality">
          <div className="functionality__search">
            <label className="functionality__label" htmlFor="search">
              <svg className="functionality__icon" width="27" height="27">
                <use xlinkHref="#search"></use>
              </svg>
              <span className="visually-hidden">Поиск</span>
            </label>

            <input className="functionality__input" placeholder="Поиск" type="text" id="search" name="search"/>
          </div>

          <ul className="functionality__icons-list">
            <li className="functionality__item">
              <Link className="functionality__link functionality__link--profile" to="#">
                <svg className="functionality__icon" width="24" height="27">
                  <use xlinkHref="#profile"></use>
                </svg>
                <span className="visually-hidden">Профиль</span>
              </Link>
            </li>

            <li className="functionality__item">
              <Link className="functionality__link functionality__link--favorites" to="#">
                <svg className="functionality__icon" width="30" height="27">
                  <use xlinkHref="#favorites"></use>
                </svg>
                <span className="visually-hidden">Понравившиеся</span>
              </Link>
            </li>

            <li className="functionality__item">
              <Link className="functionality__link functionality__link--basket" to="#">
                <svg className="functionality__icon" width="25" height="27">
                  <use xlinkHref="#basket"></use>
                </svg>
                <span className="visually-hidden">Корзина</span>
                {/* {basket.length !== 0 && <span className="functionality__count">{count}</span>} */}
                <span className="functionality__count">4</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="header__navigation navigation">
          <img className="navigation__img" src="/img/logo.svg" alt="Логотип" width="160" height="50" />
          <ul className="navigation__list">
            {navigation.map((title, i) => (
              <li key={title + i} className="navigation__item">
                <Link to="#" className="navigation__link">
                  {title} {i+1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
