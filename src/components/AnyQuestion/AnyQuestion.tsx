import Button from "../Button/Button";
import "./AnyQuestion.css";

const AnyQuestion = () => {
  return (
    <section className="any__question">
      <div className="container any__question__container">
        <h2 className="any__question__title">Возникли вопросы?</h2>
        <p className="any__question__text">
          Мы с радостью ответим на любой вопрос о вашей технике. Позвоните или
          напишите нам.
        </p>
        <div className="any__question__form__block">
          <form className="any__question__form__call">
            <div className="any__question__input__block">
              <label className="any__question__label connection__label">
                Ваше имя *
              </label>
              <input
                type="text"
                className="any__question__input connection__input"
              />
            </div>
            <div className="any__question__input__block">
              <label className="any__question__label connection__label">
                Ваше имя *
              </label>
              <input
                type="tel"
                className="any__question__input connection__input"
                placeholder="+7 (_) "
              />
            </div>
            <div className="connection__checkbox any__question__checkbox__block">
              <input
                type="checkbox"
                className="any__question__input connection__checkbox__input"
              />
              <label className="any__question__label connection__checkbox__label">
                Даю согласие на обработку моих персональных данных и принимаю{" "}
                <b>политику конфиденциальности</b>
              </label>
            </div>
            <Button
              title="заказать звонок"
              ButtonPaddingY={18}
              ButtonWidth={254}
            />
          </form>
          <div className="any__question__form__frame"></div>
          <form className="leave__feedback__form any__question__form__send">
            <div className="leave__feedback__form__group">
              <label className="leave__feedback__form__label any__question__form__label">
                Ваше имя *
              </label>
              <input
                type="text"
                className="leave__feedback__form__input"
                placeholder="Имя"
              />
            </div>
            <div className="leave__feedback__form__group">
              <label className="leave__feedback__form__label any__question__form__label">
                Ваше имя *
              </label>
              <input
                type="email"
                className="leave__feedback__form__input"
                placeholder="E-mail"
              />
            </div>
            <div className="leave__feedback__form__group">
              <label className="leave__feedback__form__label any__question__form__label">
                Ваш вопрос
              </label>
              <textarea
                className="leave__feedback__form__textarea"
                placeholder="Текст вопроса"
              ></textarea>
            </div>
            <div className="leave__feedback__form__group leave__feedback__form__group leave__feedback__form__consent">
              <input
                className="leave__feedback__form__checkbox"
                type="checkbox"
              />
              <label className="leave__feedback__form__label--checkbox">
                Даю согласие на обработку моих персональных данных и принимаю{" "}
                <b>политику конфиденциальности</b>
              </label>
            </div>
            <Button title="Отправить" ButtonPaddingY={18} ButtonWidth={184} />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AnyQuestion;
