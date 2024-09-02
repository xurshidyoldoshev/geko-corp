import './HowWeWork.css'

import Button from "../Button/Button";

import HowWeWorkImg from '../../assets/Images/HowWeWorkImg.png'

interface HowWeWorkDataType {
  number: number;
  text: string;
}

const HowWeWork: React.FC = () => {
  const HowWeWorkData: HowWeWorkDataType[] = [
    {
      number: 1,
      text: "Для вызова специалиста оформите заявку на нашем сайте или по телефону, обязательно укажите марку и модель устройства, подробно опишите проблему: это даст возможность специалисту подготовить нужные детали и инструменты для ремонта.",
    },
    {
      number: 2,
      text: "Наш специалист прибудет по указанному адресу в течение часа, или вы можете договориться о любом удобном для вас времени.",
    },
    {
      number: 3,
      text: "Мастер бесплатно проведет диагностику вашего компьютера для выявления причины неисправности, предложит перечень необходимых работ и согласует с вами стоимость ремонта.",
    },
    {
      number: 4,
      text: "Мастер проведет работы по ремонту и настройке вашего компьютера. По окончании работ подписывается договор и акт выполненных работ.",
    },
    {
      number: 5,
      text: "На все выполненные работы и комплектующие предоставляется гарантия сроком минимум на 1 год, при условии соблюдения клиентом наших рекомендаций по пользованию техникой.",
    },
  ];
  return (
    <section className="how__we__work">
      <div className="container how__we__work__container">
        <h2 className="how__we__work__title">Как мы работаем</h2>
        <ul className="how__we__work__list">
          {HowWeWorkData.map((item, index) => (
            <li key={index} className="how__we__work__item">
              <div className="how__we__work__item__number__block">
                <span className="how__we__work__item__number">
                  {item.number}
                </span>
              </div>
              <p className="how__we__work__item__text">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="when__to__call__professional__button__block how__we__work__link__block">
          <Button
            title="вызвать мастера"
            ButtonPaddingY={18}
            ButtonWidth={321}
          />
          <a className="how__we__work__link" href="/price-list">Посмотреть прайс-лист</a>
        </div>
        <img className="how__we__work__img" src={HowWeWorkImg} alt="How We Work image" />
      </div>
    </section>
  );
};

export default HowWeWork;
