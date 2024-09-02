import "../../App.css";
import "./Hero.css";

import {
  Rightwards,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
  HamburgerIcon,
  HamburgerCloseIcon,
} from "../../assets/icon";
import HeaderLogoImg from "../../assets/Images/header-logo.png";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import { useEffect, useState } from "react";

function Hero() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const CloseModal = (
    e: React.MouseEvent<HTMLDivElement | HTMLButtonElement | SVGElement>
  ): void => {
    const target = e.target as HTMLElement;

    if (
      target.classList.contains("modal__wrapper") ||
      target.classList.contains("HamburgerCloseButton") ||
      target.closest(".HamburgerCloseButton")
    ) {
      setClosing(true);
    }
  };

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        setModalIsOpen(false);
        setClosing(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [closing]);

  return (
    <div className="header">
      <div className="header__background">
        <div className="header__content container">
          <div className="header__logo__block">
            <a className="header__logo__block__link" href="/">
              <img
                className="header__logo"
                src={HeaderLogoImg}
                alt="header logo img"
              />
            </a>
            <div className="header__social__media__mobile">
              <a target="_blank" href="https://instagram.com">
                <InstagramIcon />
              </a>
              <a target="_blank" href="https://whatsapp.com">
                <WhatsappIcon />
              </a>
              <a target="_blank" href="https://telegram.com">
                <TelegramIcon />
              </a>
            </div>
          </div>
          <div className="header__nav__block">
            <div className="header__contact__block">
              <div className="header__contact__phoneNumber__block">
                <div className="header__contact__phoneNumber">
                  <Rightwards />
                  <a
                    className="header__contact__phoneNumber__link"
                    href="tel:+74951354547"
                  >
                    +7 (495) 135-45-47
                  </a>
                </div>
                <div className="header__contact__phoneNumber">
                  <Rightwards />
                  <a
                    className="header__contact__phoneNumber__link"
                    href="tel:+79653187014"
                  >
                    +7 (965) 318-70-14
                  </a>
                </div>
              </div>
              <div className="header__social__media">
                <a target="_blank" href="https://instagram.com">
                  <InstagramIcon />
                </a>
                <a target="_blank" href="https://whatsapp.com">
                  <WhatsappIcon />
                </a>
                <a target="_blank" href="https://telegram.com">
                  <TelegramIcon />
                </a>
              </div>
              <button className="HamburgerButton" onClick={openModal}>
                <HamburgerIcon />
              </button>
            </div>
            <Navigation />
          </div>
        </div>
        <div className="header__info__block container">
          <h1 className="header__info__title">
            ОПЕРАТИВНАЯ КОМПЬЮТЕРНАЯ ПОМОЩЬ
          </h1>
          <p className="hero__info__description">
            Ремонт любой сложности ПК, ноутбуков и техники Apple для дома и
            офиса
          </p>
          <p className="header__info__subtitle">Срочный выезд мастера</p>
          <Button
            title="вызвать мастера"
            ButtonPaddingY={16}
            ButtonWidth={280}
          />
        </div>
      </div>
      {modalIsOpen && (
        <div className="modal__wrapper" onClick={CloseModal}>
          <div className={`modal ${closing ? "close" : "open"}`}>
            <div className="header__nav__block">
              <div className="header__contact__block">
                <div className="header__contact__phoneNumber__block">
                  <div className="header__contact__phoneNumber">
                    <Rightwards />
                    <a
                      className="header__contact__phoneNumber__link"
                      href="tel:+74951354547"
                    >
                      +7 (495) 135-45-47
                    </a>
                  </div>
                  <div className="header__contact__phoneNumber">
                    <Rightwards />
                    <a
                      className="header__contact__phoneNumber__link"
                      href="tel:+79653187014"
                    >
                      +7 (965) 318-70-14
                    </a>
                  </div>
                </div>
                <div className="header__social__media">
                  <a target="_blank" href="https://instagram.com">
                    <InstagramIcon />
                  </a>
                  <a target="_blank" href="https://whatsapp.com">
                    <WhatsappIcon />
                  </a>
                  <a target="_blank" href="https://telegram.com">
                    <TelegramIcon />
                  </a>
                </div>
                <button
                  onClick={(e) => CloseModal(e)}
                  className="HamburgerCloseButton"
                >
                  <HamburgerCloseIcon />
                </button>
              </div>
              <Navigation />
            </div>
            <div className="header__logo__block">
              <a className="header__logo__block__link" href="/">
                <img
                  className="header__logo"
                  src={HeaderLogoImg}
                  alt="header logo img"
                />
              </a>
              <div className="header__social__media__mobile">
                <a target="_blank" href="https://instagram.com">
                  <InstagramIcon />
                </a>
                <a target="_blank" href="https://whatsapp.com">
                  <WhatsappIcon />
                </a>
                <a target="_blank" href="https://telegram.com">
                  <TelegramIcon />
                </a>
              </div>
            </div>
            <ul className="modal__nav__list">
              <li>
                <a href="/">главная</a>
              </li>
              <li>
                <a href="/about">о компании</a>
              </li>
              <li>
                <a href="/contact">контакты</a>
              </li>
              <li>
                <a href="/price-list">прайс-лист</a>
              </li>
              <li>
                <a href="/reviews">отзывы</a>
              </li>
              <li>
                <a href="/blog">блог</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
