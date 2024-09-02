import "./Header.css";
import "../../App.css";

import {
  Rightwards,
  InstagramIcon,
  TelegramIcon,
  WhatsappIcon,
  HamburgerIcon,
} from "../../assets/icon";
import HeaderLogoImg from "../../assets/Images/header-logo.png";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="header__background__color">
        <div className="header__content container">
          <div className="header__logo__block">
            <a className="header__logo__block__link" href="/">
              <img
                className="header__logo"
                src={HeaderLogoImg}
                alt="header logo img"
              />
            </a>
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
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
