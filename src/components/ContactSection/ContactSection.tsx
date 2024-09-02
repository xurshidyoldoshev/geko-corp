import {
  FooterClockIcon,
  FooterLocationIcon,
  FooterMailIcon,
  PhoneIcon,
} from "../../assets/icon";
import Button from "../Button/Button";
import "./ContactSection.css";

interface ContactItemDataType {
  img: string;
  title: string;
}

const ContactSection: React.FC = () => {
  const ContactItemData = [
    {
      img: <FooterLocationIcon />,
      title: "г. Москва, ул. Люблинская 141, офис 319Б",
    },
    {
      img: <FooterClockIcon />,
      title: "10:00 - 20:00 (без выходных)",
    },
    {
      img: <PhoneIcon />,
      title: "+7 (495) 135-45-47",
    },
    {
      img: <PhoneIcon />,
      title: "+7 (965) 318-70-14",
    },
    {
      img: <FooterMailIcon />,
      title: "info@remont-geko.ru",
    },
  ];
  return (
    <section className="contact__section">
      <div className="container contact__section__container">
        <h2 className="contact__section__title">Контакты</h2>
        <iframe
          className="contact__section__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95373631590413!3d-37.8162794420141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57740ef0761a2c1!2sFederation+Square!5e0!3m2!1sen!2sau!4v1610589040028!5m2!1sen!2sau"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
        <div className="contact__section__info__block">
          <ul className="contact__section__list">
            {ContactItemData.map((item, index) => (
              <li className="contact__section__item" key={index}>
                <div className="contact__section__item__img">{item.img}</div>
                <div className="contact__section__item__title">
                  {item.title}
                </div>
              </li>
            ))}
          </ul>
          <div className="contact__section__form__block">
            <p className="contact__section__text">
              Если у вас возникли проблемы с компьютерной техникой или вы
              заметили странности в ее работе, пожалуйста, свяжитесь с нами,
              используя форму обратной связи ниже. Также вы можете позвонить нам
              по указанным номерам телефона или написать на электронную почту.
              Мы гарантируем быстрое и качественное решение проблем с вашей
              техникой.
            </p>
            <h3 className="contact__section__form__title">Напишите нам</h3>
            <form className="leave__feedback__form">
              <div className="leave__feedback__form__group">
                <label className="leave__feedback__form__label">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="leave__feedback__form__input"
                  placeholder="Имя"
                  required
                />
              </div>
              <div className="leave__feedback__form__group">
                <label className="leave__feedback__form__label">
                  Ваш e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="leave__feedback__form__input"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="leave__feedback__form__group">
                <label className="leave__feedback__form__label">
                  Ваш отзыв
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  className="leave__feedback__form__textarea"
                  placeholder="Текст отзыва"
                  required
                ></textarea>
              </div>
              <div className="leave__feedback__form__group leave__feedback__form__consent">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  className="leave__feedback__form__checkbox"
                  required
                />
                <label className="leave__feedback__form__label--checkbox">
                  Даю согласие на обработку моих персональных данных и принимаю{" "}
                  <b>политику конфиденциальности</b>
                </label>
              </div>
              <Button title="Отправить" ButtonPaddingY={18} ButtonWidth={224} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
