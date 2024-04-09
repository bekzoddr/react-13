import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Timer from "../timer/Timer";

export default class Hero extends Component {
  render() {
    return (
      <>
        <div className="hero">
          <Navbar />
          <div className="hero_body">
            <h1 className="title">
              Первый курс <br /> по компьютерной сборке
            </h1>
            <Timer />
          </div>
        </div>
        <div className="hero__bottom">
          <button>Заказать курс</button>
          <div className="amount">
            <div className="count first">
              <h4>Учеников всего:</h4>
              <h2>200</h2>
            </div>
            <div className="count">
              <h4>Успешно закончили курс:</h4>
              <h2>190</h2>
            </div>
          </div>
          <div className="statistic">
            <div className="count">
              <h4>Заработано учениками:</h4>
              <h2>400 000₽</h2>
            </div>
            <div className="selectors">
              <div className="selector_1"></div>
              <div className="selector_2"></div>
            </div>
            <div className="price">
              <h4>0</h4>
              <h4>1 000 000₽</h4>
            </div>
          </div>
        </div>
      </>
    );
  }
}
