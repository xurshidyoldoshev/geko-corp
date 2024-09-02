import "../../App.css";
import './NotWorkingSection.css'

import BackroundImage from "../../assets/Images/notWorkingBgImg.png";
import NotWorkingItem from "../NotWorkingItem/NotWorkingItem";

const NotWorkingSection = () => {
  return (
    <section className="not__working">
      <div className="not__working__background">
        <div className="container not__working__container">
          <h2 className="not__working__title">НЕ РАБОТАЕТ КОМПЬЮТЕР?</h2>
          <div className="not__working__line"></div>
          <div className="not__working__block">
            <div className="not__working__block__img__block">
              <img
                className="not__working__block__img"
                src={BackroundImage}
                alt="bg image"
              />
            </div>
            <span className="not__working__block__line"></span>
            <ul className="not__working__list">
              <NotWorkingItem
                itemNum={1}
                itemText="Вызовите мастера для бесплатной диагностики в удобное для вас время"
              />
              <NotWorkingItem
                itemNum={2}
                itemText="Узнайте причину неисправности, перечень необходимых работ и стоимость ремонта"
              />
              <NotWorkingItem
                itemNum={3}
                itemText="Платите по окончанию выполнения ремонта и подписания договора"
              />
              <NotWorkingItem
                itemNum={4}
                itemText="Получите гарантию 1 год на произведенные работы"
              />
            </ul>
          </div>
          <div className="not__working__line">
            <h4 className="not__working__more__info">подробнее</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotWorkingSection;
