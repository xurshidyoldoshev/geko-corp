import "../../App.css";
import "./CustomerSection.css";

import CustomerCard from "../CustomerCard/CustomerCard";
import { LeftButtonIcon, RightButtonIcon } from "../../assets/icon";

const CustomerSection = () => {
  return (
    <section className="customer">
      <div className="contact__us__background">
        <div className="container customer__container">
          <div className="customer__title__block">
            <button className="customer__button">
              <LeftButtonIcon />
            </button>
            <h2 className="customer__title">ОТЗЫВЫ КЛИЕНТОВ</h2>
            <button className="customer__button">
              <RightButtonIcon />
            </button>
          </div>
          <ul className="customer__list">
            <CustomerCard
              itemDepartment="А"
              itemDate="01 июня 2021"
              itemInfo="Самый лучший сервис! Перестали открываться программы. Пригласила мастера в выходной день. Мастер приехал за 40 минут. Устранил все вирусы, установил новый пакет программ, бессрочный антивирус, почистил от пыли системный блок. Недорого. Составлен договор, все официально. Спасибо! При необходимости в будущем буду обращаться только в эту компанию."
              itemSubtitle="Читать весь отзыв"
              itemTitleFirst="Александр"
              itemTitleSecond="михайловский"
            />
            <CustomerCard
              itemDepartment="И"
              itemDate="16 февраля 2021"
              itemInfo="Надежный проверенный сервис. Обращалась пару раз, для меня удобно что есть выезд на дом, пришлось вызвать мастера первый раз когда племянник напортачил, мастер за 20 минут все исправил, теперь только каждый год продлеваю антивирус, все удобно и не дорого! Рекомендую!"
              itemTitleFirst="Иван"
              itemTitleSecond="коротков"
            />
            <CustomerCard
              itemDepartment="Е"
              itemDate="23 декабря 2020"
              itemInfo="Спасибо за вашу работу! Теперь компьютер работает как надо, все отлично. Очень приятно что мастер по просьбе поставил родительский контроль на компьютер. Мастер с диспетчером бесплатно меня консультируют по телефону в любой день. Побольше бы таких добросовестных компаний. Спасибо!"
              itemTitleFirst="елена"
              itemTitleSecond="плотникова"
            />
          </ul>
          <h5 className="customer__link__text">
            Мы на
            <a
              className="customer__link"
              target="_blank"
              href="https://www.otzovik.com"
            >
              {" "}
              www.otzovik.com
            </a>
          </h5>
          <h5 className="customer__link__text">
            Мы на
            <a
              className="customer__link"
              target="_blank"
              href="https://www.irecommend.ru"
            >
              {" "}
              www.irecommend.ru
            </a>
          </h5>
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
