import "./PriceList.css";
import AccordionComponent from "../../components/AccordionComponent/AccordionComponent";
import {
  PriceListLeftIcon,
  PriceListRightIcon,
  WhenToCallProfessionalButtonIcon,
} from "../../assets/icon";

function PriceList() {
  const accordionItems: AccordionItem[] = [
    {
      id: 1,
      title: "Ремонт компьютеров",
      content: (
        <ul className="accordion__section__list">
          <li className="accordion__section__item">
            <span>1. Диагностика проблемы.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>2. Замена комплектующих.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>3. Чистка от пыли.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>4. Установка операционной системы.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>5. Настройка программного обеспечения.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>6. Восстановление данных.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>7. Устранение вирусов.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>8. Оптимизация работы системы.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>9. Тестирование производительности.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>10. Консультация пользователя.</span>
            <span>? руб.</span>
          </li>
        </ul>
      ),
    },
    {
      id: 2,
      title: "Ремонт ноутбуков",
      content: (
        <ul className="accordion__section__list">
          <li className="accordion__section__item">
            <span>1. Замена экрана.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>2. Замена клавиатуры.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>3. Ремонт разъема питания.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>4. Замена батареи.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>5. Устранение перегрева.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>6. Восстановление данных.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>7. Установка программного обеспечения.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>8. Оптимизация работы системы.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>9. Диагностика неисправностей.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>10. Консультация пользователя.</span>
            <span>? руб.</span>
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Ремонт моноблоков",
      content: (
        <ul className="accordion__section__list">
          <li className="accordion__section__item">
            <span>1. Замена экрана.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>2. Настройка сенсорной панели.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>3. Замена жесткого диска.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>4. Устранение проблем с питанием.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>5. Восстановление операционной системы.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>6. Устранение вирусов.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>7. Настройка подключения к сети.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>8. Оптимизация работы системы.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>9. Установка драйверов.</span>
            <span>? руб.</span>
          </li>
          <li className="accordion__section__item">
            <span>10. Консультация пользователя.</span>
            <span>? руб.</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="price__list">
      <h2 className="price__list__title">Прайс-лист</h2>
      <div className="price__list__background">
        <div className="container price__list__container">
          <div className="price__list__choice__block">
            <h2 className="price__list__choice__title">Физическим лицам</h2>
            <div className="price__list__choice__button__block">
              <PriceListLeftIcon />
              <div className="price__list__choice__button__frame"></div>
              <PriceListRightIcon />
            </div>
            <h2 className="price__list__choice__title price__list__choice__title__color">
              Корпоративным клиентам
            </h2>
          </div>
        </div>
      </div>
      <div className="container accordion__section">
        <p className="accordion__section__text">
          Наши цены на услуги по компьютерной помощи окончательны, то есть не
          включают скрытых надбавок, которые в дальнейшем могут привести к
          значительному увеличению стоимости ремонта. После бесплатной
          диагностики окончательная смета работ составляется специалистом из
          нижеуказанных цен плюс стоимость комплектующих в случае необходимости
          их замены.
        </p>
        <ul className="accordion__section__list">
          <li className="accordion__section__item">
            <span>Выезд мастера</span>
            <span>бесплатно</span>
          </li>
          <li className="accordion__section__item">
            <span>Диагностика</span>
            <span>бесплатно</span>
          </li>
        </ul>
        <h3 className="accordion__section__hardware__title">
          Аппаратная часть
        </h3>
      </div>
      <AccordionComponent items={accordionItems} />
      <div className="container">
        <p className="accordion__section__text accordion__section__text__second">
          Если вы не нашли интересующую вас услугу или у вас возникли вопросы,
          свяжитесь с нами по телефону или с помощью формы обратной связи. Наш
          специалист предоставит вам исчерпывающую информацию и поможет найти
          нестандартное решение для любой проблемы с вашей компьютерной
          техникой.
        </p>
        <div className="our__partner__button__container">
          <button className="CustomButton when__to__call__professional__button">
            <span className="when__to__call__professional__button__text">
              получить консультацию
            </span>
            <WhenToCallProfessionalButtonIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default PriceList;
