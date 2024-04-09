import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="nav__links">
          <li className="nav__link">Главная</li>
          <li className="nav__link">Курсы</li>
          <li className="nav__link">Расписание</li>
          <li className="nav__link">Преподаватели</li>
          <li className="nav__link">Рассылка</li>
          <li className="nav__link">Контакты</li>
        </ul>
        <button className="nav__btn">Зайти в кабинет</button>
      </div>
    );
  }
}
