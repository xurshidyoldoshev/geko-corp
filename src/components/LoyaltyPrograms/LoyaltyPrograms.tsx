import "./LoyaltyProgramms.css";

import FivePercent from "../../assets/Images/FivePercent.svg";
import TenPercent from "../../assets/Images/TenPercent.svg";

const LoyaltyPrograms = () => {
  return (
    <section className="loyalty__programms">
      <div className="container loyalty__programms__container">
        <h2 className="loyalty__programms__title">Программы лояльности</h2>
        <ul className="loyalty__programms__list">
          <li className="contact__us__item loyalty__programms__item">
            <img
              className="contact__us__item__icon loyalty__programms__item__icon"
              src={FivePercent}
              alt="Percent icon"
            />
            <p className="contact__us__item__text loyalty__programms__item__text">
              Подписчикам на наши группы в соцсетях скидка 5% на все виды работ
            </p>
          </li>
          <li className="contact__us__item loyalty__programms__item">
            <img
              className="contact__us__item__icon loyalty__programms__item__icon"
              src={TenPercent}
              alt="Percent icon"
            />
            <p className="contact__us__item__text loyalty__programms__item__text">
              При повторном обращении в наш сервис скидка 10% на все виды работ
            </p>
          </li>
          <li className="contact__us__item loyalty__programms__item">
            <img
              className="contact__us__item__icon loyalty__programms__item__icon"
              src={TenPercent}
              alt="Percent icon"
            />
            <p className="contact__us__item__text loyalty__programms__item__text">
              Пенсионерам предоставляется скидка 10% на все виды работ
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LoyaltyPrograms;
