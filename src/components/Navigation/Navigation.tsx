import "./Navigation.css";
import "../../App.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__item__link" to="/">
            главная
          </NavLink>
        </li>
        <span className="nav__item__link__border"></span>
        <li className="nav__item">
          <NavLink className="nav__item__link" to="/about">
            о нас
          </NavLink>
        </li>
        <span className="nav__item__link__border"></span>
        <li
          className="nav__item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavLink className="nav__item__link" to="/service">
            услуги
          </NavLink>
          {isDropdownOpen && (
            <ul className="nav__dropdown">
              <li className="nav__dropdown__item">
                <NavLink to="/">Ремонт компьютеров</NavLink>
              </li>
              <li className="nav__dropdown__item">
                <NavLink to="/">Ремонт ноутбуков</NavLink>
              </li>
              <li className="nav__dropdown__item">
                <NavLink to="/">Ремонт моноблоков</NavLink>
              </li>
              <li className="nav__dropdown__item">
                <NavLink to="/">Ремонт техники Apple</NavLink>
              </li>
              <li className="nav__dropdown__item">
                <NavLink to="/">Сборка и апгрейд компьютеров</NavLink>
              </li>
              <li className="nav__dropdown__item">
                <NavLink to="/">Установка ОС и программ</NavLink>
              </li>
              <li className="nav__dropdown__item">
                <NavLink to="/">Удаление вирусов</NavLink>
              </li>
              <li className="nav__dropdown__item">
                <NavLink to="/">Настройка интернета</NavLink>
              </li>
              <li className="nav__dropdown__item">
                <NavLink to="/">Корпоративным клиентам</NavLink>
              </li>
            </ul>
          )}
        </li>
        <span className="nav__item__link__border"></span>
        <li className="nav__item">
          <NavLink className="nav__item__link" to="/price-list">
            прайс-лист
          </NavLink>
        </li>
        <span className="nav__item__link__border"></span>
        <li className="nav__item">
          <NavLink className="nav__item__link" to="/reviews">
            отзывы
          </NavLink>
        </li>
        <span className="nav__item__link__border"></span>
        <li className="nav__item">
          <NavLink className="nav__item__link" to="/blog">
            блог
          </NavLink>
        </li>
        <span className="nav__item__link__border"></span>
        <li className="nav__item">
          <NavLink className="nav__item__link" to="/contact">
            контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
