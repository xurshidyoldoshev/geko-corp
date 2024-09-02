import "../../App.css";
import "./Footer.css";

import {
  FooterBottomIcon,
  FooterClockIcon,
  FooterLocationIcon,
  FooterMailIcon,
  FooterRightIcon,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
} from "../../assets/icon";
import Logo from "../../assets/Images/header-logo.png";

const Footer = () => {
  return (
    <div className="contact__us__background">
      <div className="container footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="/">
              <img
                className="footer__item__logo"
                src={Logo}
                alt="header logo"
              />
            </a>
            <div className="header__social__media footer__social__media">
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
            <div className="footer__item">
              <span className="footer__item__title">ИП Шумихин М.А.</span>
              <span className="footer__item__title">ИНН/ОГРНИП:</span>
              <span className="footer__item__title">
                141800214410/320623400028827
              </span>
            </div>
            <p className="footer__item__text">
              Обращаем ваше внимание на то, что данный интернет-сайт носит
              исключительно информационный характер и ни при каких условиях не
              является публичной офертой, определяемой положениями Статьи 437
              (2) Гражданского кодекса Российской Федерации.
            </p>
          </li>
          <li className="footer__item">
            <ul className="footer__item__list__head">
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/">
                  Главная
                </a>
              </li>
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/about">
                  О компании
                </a>
              </li>
              <li className="footer__item__head__item">
                <a
                  className="footer__item__head__item__link"
                  href="/price-list"
                >
                  прайс-лист
                </a>
              </li>
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/reviews">
                  ОТЗЫВЫ
                </a>
              </li>
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/blog">
                  БЛОГ
                </a>
              </li>
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/contact">
                  КОНТАКТЫ
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__item">
            <ul className="footer__item__list__service">
              <li className="footer__item__head__item">
                <span className="footer__item__head__item__link">Услуги</span>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Ремонт компьютеров
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Ремонт моноблоков
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Ремонт техники APPLE
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Сборка и апгрейд компьютеров
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Установка ОС и программ
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Удаление вирусов
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Настройка интернета
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Корпоративным клиентам
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__item">
            <div className="footer__item__number__block">
              <FooterRightIcon />
              <a className="footer__item__number" href="tel:+74951354547">
                +7 (495) 135-45-47
              </a>
            </div>
            <div className="footer__item__number__block">
              <FooterRightIcon />
              <a className="footer__item__number" href="tel:+79653187014">
                +7 (965) 318-70-14
              </a>
            </div>
            <div className="footer__item__number__block">
              <FooterLocationIcon />
              <span className="footer__item__service__item__link">
                г. Москва, ул. Люблинская 141, офис 319Б
              </span>
            </div>
            <div className="footer__item__number__block">
              <FooterMailIcon />
              <span className="footer__item__service__item__link">
                info@remont-geko.ru
              </span>
            </div>
            <div className="footer__item__number__block">
              <FooterClockIcon />
              <span className="footer__item__service__item__link">
                10:00 - 20:00 (без выходных)
              </span>
            </div>
            <div className="header__social__media footer__social__media">
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
          </li>
        </ul>
        <div className="contact__us__line contact__us__line__mobile"></div>
        <ul className="footer__list footer__list__mobile">
          <li className="footer__item footer__item__mobile">
            <ul className="footer__item__list__head">
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/">
                  Главная
                </a>
              </li>
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/about">
                  О компании
                </a>
              </li>
              <li className="footer__item__head__item">
                <a
                  className="footer__item__head__item__link"
                  href="/price-list"
                >
                  прайс-лист
                </a>
              </li>
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/reviews">
                  ОТЗЫВЫ
                </a>
              </li>
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/blog">
                  БЛОГ
                </a>
              </li>
              <li className="footer__item__head__item">
                <a className="footer__item__head__item__link" href="/contact">
                  КОНТАКТЫ
                </a>
              </li>
            </ul>
          </li>
          <li className="footer__item footer__item__mobile">
            <ul className="footer__item__list__service">
              <li className="footer__item__head__item">
                <span className="footer__item__head__item__link">Услуги</span>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Ремонт компьютеров
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Ремонт моноблоков
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Ремонт техники APPLE
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Сборка и апгрейд компьютеров
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Установка ОС и программ
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Удаление вирусов
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Настройка интернета
                </a>
              </li>
              <li className="footer__item__service__item">
                <a className="footer__item__service__item__link" href="/">
                  Корпоративным клиентам
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="contact__us__line"></div>
        <div className="footer__mobile__text__block">
          <span className="footer__mobile__title">ИП Шумихин М.А.</span>
          <span className="footer__mobile__title">ИНН/ОГРНИП:</span>
          <span className="footer__mobile__title">
            141800214410/320623400028827
          </span>
          <p className="footer__mobile__text">
            Обращаем ваше внимание на то, что данный интернет-сайт носит
            исключительно информационный характер и ни при каких условиях не
            является публичной офертой, определяемой положениями Статьи 437 (2)
            Гражданского кодекса Российской Федерации.
          </p>
        </div>
        <div className="footer__bottom__block">
          <div className="footer__bottom__title__block">
            <FooterBottomIcon />
            <p className="footer__bottom__title">
              {" "}
              <span className="footer__bottom__title__year">2021</span>{" "}
              remont-geko.ru
            </p>
          </div>
          <div className="footer__end__block">
            <span className="footer__end__title">Карта сайта</span>
            <div className="footer__end__line"></div>
            <span className="footer__end__title">
              Политика конфиденциальности
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
