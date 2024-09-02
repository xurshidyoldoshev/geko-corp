import "../../App.css";
import "./ContactUs.css";
import ContactUsItem from "../ContactUsItem/ContactUsItem";

import { MessageIcon } from "../../assets/icon";
import PercentIcon from "../../assets/Images/PercentIcon.svg";
import WalletIcon from "../../assets/Images/WalletIcon.svg";
import DocumentIcon from "../../assets/Images/DocumentIcon.svg";
import FourPeopleIcon from "../../assets/Images/FourPeopleIcon.svg";
import ItemSettingIcon from "../../assets/Images/ItemSettingIcon.svg";
import LaptopClockIcon from "../../assets/Images/LaptopClockIcon.svg";
import CheckedBoxIcon from "../../assets/Images/CheckedBoxIcon.svg";
import WindowsIcon from "../../assets/Images/WindowsIconTwo.svg";
import TwoPeopleIcon from "../../assets/Images/TwoPeopleIcon.svg";

const ContactUs = () => {
  return (
    <>
      <section className="contact__us">
        <div className="contact__us__background">
          <div className="container contact__us__container">
            <div className="contact__us__line"></div>
            <div className="contact__us__block">
              <MessageIcon />
              <p className="contact__us__text">
                Мы ориентированы на долгосрочное сотрудничество с нашими
                клиентами и работаем по принципу “домашнего доктора” для вашей
                компьютерной техники, поэтому обеспечиваем вас технической
                поддержкой и консультациями по всем вопросам, даже самым мелким.
              </p>
            </div>
            <div className="contact__us__line">
              <h4 className="contact__us__subtitle">получить консультацию</h4>
              <MessageIcon />
            </div>
            <h4 className="contact__us__subtitle__mobile">получить консультацию</h4>
          </div>
        </div>
        <div className="contact__us__list__block container">
          <h2 className="contact__us__list__title">
            ПОЧЕМУ СТОИТ ОБРАТИТЬСЯ К НАМ
          </h2>
          <ul className="contact__us__list">
            <ContactUsItem
              itemImg={PercentIcon}
              itemText="ремонтных работ выполняются на месте в день обращения"
            />
            <ContactUsItem
              itemImg={WalletIcon}
              itemText="Демократичные цены, отсутствие скрытых услуг и доплат"
            />
            <ContactUsItem
              itemImg={DocumentIcon}
              itemText="Гарантия на ремонтные работы и комплектующие один год"
            />
            <ContactUsItem
              itemImg={FourPeopleIcon}
              itemText="Все мастера – дипломированные специалисты с опытом работы более 8 лет"
            />
            <ContactUsItem
              itemImg={ItemSettingIcon}
              itemText="Современное профессиональное оборудование для диагностики и ремонта"
            />
            <ContactUsItem
              itemImg={LaptopClockIcon}
              itemText="При необходимости проведем ремонт вечером или в выходной день"
            />
            <ContactUsItem
              itemImg={CheckedBoxIcon}
              itemText="Все запчасти только от официальных дистрибьюторов"
            />
            <ContactUsItem
              itemImg={WindowsIcon}
              itemText="Лицензионные ключи на программное обеспечение по оптовой цене "
            />
            <ContactUsItem
              itemImg={TwoPeopleIcon}
              itemText="9 из 10 обратившихся рекомендуют нас друзьям и знакомым "
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
