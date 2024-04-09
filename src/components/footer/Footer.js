import React, { Component } from "react";
import { IoLogoVk } from "react-icons/io";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <div className="footer__title">
          <h1>Статьи каждую неделю</h1>
          <p>
            Больше 90% учеников прошли полный курс и смогли <br /> собрать свой
            первый компьютер
          </p>
        </div>
        <form className="form">
          <input placeholder="E-mail" type="email" />
          <button>Подписаться</button>
        </form>
        <div className="icons">
          <IoLogoVk className="icon" />
          <FaYoutube className="icon" />
          <FaFacebookF className="icon" />
          <FaInstagram className="icon" />
        </div>
        <h4>Templates #18. More on Figma.info</h4>
      </footer>
    );
  }
}
