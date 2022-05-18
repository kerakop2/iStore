import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import inst from "../assets/inst.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";

const MainPage = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav-center">
          <Link to="/products">
            <img src="https://www.istore.kg/static/img/iphone.svg" alt="" />
          </Link>
          <Link to="/products">
            <img src="https://www.istore.kg/static/img/macbook.svg" alt="" />
          </Link>
          <Link to="/products">
            <img src="https://www.istore.kg/static/img/ipad.svg" alt="" />
          </Link>
          <Link to="/products">
            <img src="https://www.istore.kg/static/img/watch.svg" alt="" />
          </Link>
          <Link to="/products">
            <img src="https://www.istore.kg/static/img/iMac.svg" alt="" />
          </Link>
        </div>
      </div>

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner car">
          <Link to="products">
            <div className="carousel-item active">
              <img
                src="https://istore.kg/media/mainpageslider/cashabck-promotion.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://istore.kg/media/mainpageslider/iphone-13-green-pc-price.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://istore.kg/media/mainpageslider/buy-ipad-air-4-2022-pc.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://istore.kg/media/mainpageslider/buy-macbook-pro-14-16-pc.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://istore.kg/media/mainpageslider/buy-watch-series-7-pc.webp"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </Link>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="main">
        <div className="main-card">
          <div className="main-card1">
            <div className="main-card-word">
              <h1>iMac</h1>
              <p>Прирожденный Apple.</p>
              <h3>149600c</h3>
            </div>
            <Link to="products">
              <div className="main-card-photo">
                <img
                  src="https://www.istore.kg/media/main_page/iMac-24-inch.webp"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="main-card">
          <div className="main-card1">
            <div className="main-card-word">
              <h1>iPad Pro</h1>
              <p>Высший уровень iPad.</p>
              <h3>95480c</h3>
            </div>
            <Link to="products">
              <div className="main-card-photo-ipad">
                <img
                  src="https://www.istore.kg/media/main_page/iPad-Pro_Jv7XK80.webp"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="main-card">
          <div className="main-card1">
            <div className="main-card-word">
              <h1>Watch</h1>
              <p>Показывают Максимум.</p>
              <h3>76050c</h3>
            </div>
            <Link to="products">
              <div className="main-card-photo-watch">
                <img
                  src="https://www.istore.kg/media/main_page/apple-watch-stainless-steel.webp"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="main-card">
          <div className="main-card1">
            <div className="main-card-word">
              <h1>MacBook Pro</h1>
              <p>Быстрая обработка графики.</p>
              <h3>459400c</h3>
            </div>
            <Link to="products">
              <div className="main-card-photo-mac">
                <img
                  src="https://www.istore.kg/media/category/MacBook-Pro-16-M1-MAX.webp"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="main-card">
          <div className="main-card1">
            <div className="main-card-word">
              <h1>iPhone 13 Pro</h1>
              <p>Новый дизайн.</p>
              <h3>107315c</h3>
            </div>
            <Link to="products">
              <div className="main-card-photo-iphone">
                <img
                  src="https://www.istore.kg/media/products/iphone-13-pro-max-green-select.webp"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mac">
        <div className="mac-name">
          <h2>Выберите свой Mac.</h2>
          <p>Суперсила. Профессионалов</p>
        </div>
        <div className="mac-photo">
          <video src="https://www.istore.kg/media/main_page/air-monterey-large_2x_MvdbApr.mp4">
            <source src="https://www.istore.kg/media/main_page/air-monterey-large_2x_MvdbApr.mp4" />
          </video>
        </div>
      </div>
      <div className="footer">
        <div className="footer-logo">
          <img
            src="https://www.istore.kg/static/_image/istore_logo.png"
            alt=""
          />
          <p>Магазин техники Apple в Бишкеке</p>
          <img src={inst} alt="" />
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
          <h4>Режим работы</h4>
          <p>Пн - Вс 10:00 - 20:00</p>
        </div>

        <div className="footer-product">
          <div className="footer-prod">
            <ul>
              <li>Продукция</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Гаджеты</li>
            </ul>
          </div>
          <div className="footer-about">
            <ul>
              <li>8 лет с Вами!</li>
              <li>О нас</li>
              <li>Почему iStore</li>
              <li>Услуги</li>
              <li>Обратная связь</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
