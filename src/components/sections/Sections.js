import React, { Component } from "react";
import image from "../../assets/images/pro.png";
import image2 from "../../assets/images/circleHalf.svg";
import image3 from "../../assets/images/circle__half.svg";
import image4 from "../../assets/images/circle__half.png";
import image5 from "../../assets/images/bottom.svg";
import { ICONS, MCI, STOCK, STOCK2, PERSONS } from "../../static/Index";
export default class Sections extends Component {
  render() {
    let section = ICONS?.map((el) => (
      <div key={el.id} className="info">
        <img src={el.icon} alt={el.title} />
        <h2>{el.title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus eget
          velit quisque accumsan amet tortor. Velit, volutpat egestas fringilla
          mi porttitor tempus. Placerat dui.
        </p>
      </div>
    ));
    let imageMci = MCI?.map((el, image) => (
      <img key={el.id} src={el.image} alt="image" />
    ));
    let rightInfo = STOCK2?.map((el) => (
      <div key={el.id} className="infos__right">
        <p>{el.title}</p>
        <h3>
          Красивая часть курса, <br /> которая помогает в успехе
        </h3>
      </div>
    ));
    let leftInfo = STOCK?.map((el) => (
      <div key={el.id} className="infos__left">
        <p>{el.title}</p>
        <h3>
          Красивая часть курса, <br /> которая помогает в успехе
        </h3>
      </div>
    ));
    let person = PERSONS?.map((el) => (
      <div key={el.id} className="person__info">
        <img src={el.img} alt="" />
        <h2>{el.title}</h2>
        <p>{el.text}</p>
        <button>Биография</button>
      </div>
    ));
    return (
      <section className="sections">
        <div className="section1">
          <img src={image} alt="image" />
          <div className="title">
            <h1>Чем мы занимаемся?</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              neque, dignissim et feugiat <br /> elit augue in suspendisse
              egestas. Dictum vestibulum mi et sed nunc, orci fermentum <br />{" "}
              vestibulum, morbi. Et neque, adipiscing sapien sem senectus
              praesent aenean consequat. <br /> Aenean facilisi turpis aliquet
              fringilla. Nunc sem felis sed interdum feugiat mattis elit, <br />{" "}
              sollicitudin. Quam pharetra rhoncus risus, cursus id elementum
              aliquet. Nullam turpis
              <br />
              arcu malesuada arcu interdum placerat nisi, lobortis.{" "}
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="title">
            <div className="title__logo">
              <img src={image2} alt="image" />
              <h1>Быстрый старт</h1>
            </div>
            <p>
              Больше 90% учеников прошли полный курс и смогли <br /> собрать
              свой первый компьютер
            </p>
          </div>
          <div className="percents__number">
            <h2>100%</h2>
            <h2>75%</h2>
            <h2>50%</h2>
            <h2>Итог</h2>
          </div>
          <div className="percents">
            <div className="first"></div>
            <div className="second"></div>
            <div className="third"></div>
            <div className="fourth"></div>
          </div>
        </div>
        <div className="section3">
          <div className="title">
            <h1>Получите профессию прямо сейчас</h1>
          </div>
          <div className="infos">{section}</div>
        </div>
        <div className="section4">
          <div className="title">
            <div className="title__logo">
              <img src={image3} alt="image" />
              <h1>Партнеры - топовые бренды</h1>
            </div>
          </div>
          <div className="images">{imageMci}</div>
        </div>
        <div className="section5">
          <div className="title">
            <img src={image4} alt="image" />
            <h1>Программа обучения</h1>
            <p>
              Больше 90% учеников прошли полный курс и смогли <br /> собрать
              свой первый компьютер
            </p>
          </div>
          <div className="table">
            <div className="left">{leftInfo}</div>
            <div className="stock"></div>
            <div className="right">{rightInfo}</div>
          </div>
        </div>
        <div className="section6">
          <div className="title">
            <img src={image5} alt="image" />
            <h1>Ваши преподаватели</h1>
          </div>
          <div className="infos">{person}</div>
        </div>
      </section>
    );
  }
}
