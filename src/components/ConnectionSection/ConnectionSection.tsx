import "./ConnectionSection.css";
import "../../App.css";
import Button from "../Button/Button";

import ConnectionInfoImg from "../../assets/Images/connection__info__img.png";

const ConnectionSection = () => {
  return (
    <section className="connection">
      <div className="connection__container container">
        <h1 className="connection__title">ВЫЗВАТЬ МАСТЕРА</h1>
        <form className="connection__form">
          <div className="connection__line"></div>
          <div className="connection__field">
            <label className="connection__label">Выберите устройство:</label>
            <select id="device" className="connection__select">
              <option defaultValue={""}>Выбрать</option>
              <option value="device1">Устройство 1</option>
              <option value="device2">Устройство 2</option>
              <option value="device3">Устройство 3</option>
            </select>
          </div>
          <div className="connection__field">
            <label className="connection__label">Выберите производителя:</label>
            <select id="manufacturer" className="connection__select">
              <option defaultValue={""}>Выбрать</option>
              <option value="manufacturer1">Производитель 1</option>
              <option value="manufacturer2">Производитель 2</option>
              <option value="manufacturer3">Производитель 3</option>
            </select>
          </div>
          <div className="connection__field">
            <label className="connection__label">Ваше имя *</label>
            <input
              type="text"
              id="name"
              className="connection__input"
              placeholder="Имя"
            />
          </div>
          <div className="connection__field">
            <label className="connection__label">Ваш телефон *</label>
            <input
              type="tel"
              id="phone"
              className="connection__input"
              placeholder="+7 (_) "
              pattern="[0-9]{3} [0-9]{3}-[0-9]{2}-[0-9]{2}"
            />
          </div>
          <div className="connection__field">
            <label className="connection__label">Опишите проблему:</label>
            <textarea
              id="message"
              className="connection__textarea"
              placeholder="Текст сообщения"
            ></textarea>
          </div>
          <div className="connection__checkbox">
            <input
              type="checkbox"
              id="agreement"
              className="connection__checkbox__input"
            />
            <label className="connection__checkbox__label">
              Даю согласие на обработку моих персональных данных и принимаю{" "}
              <span className="connection__policy__span">
                политику конфиденциальности
              </span>
            </label>
          </div>
          <div className="connection__button__position">
            <Button title="Отправить" ButtonPaddingY={18} ButtonWidth={224} />
          </div>
        </form>
        <div className="connection__info__block">
          <img
            className="connection__info__img"
            src={ConnectionInfoImg}
            alt="Connection Information image"
          />
          <div className="connection__info__text__block">
            <p className="connection__info">
              Мастера сервисного центра Geko Corp оперативно и гарантированно
              устранят любые проблемы, вызванные програмными или аппаратными
              сбоями. В случае выявления неисправностей, которые невозможно
              обнаружить при первоначальной диагностике, мастер обязательно
              согласует с вами возникшие дополнительные расходы, так что вы
              всегда будете уверены в конечной стоимости ремонта.
            </p>
            <p className="connection__info">
              Вы можете рассчитать предварительную стоимость ремонта по ценам в
              нашем прайс-листе. Если вы не нашли нужную услугу, свяжитесь с
              нами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionSection;
