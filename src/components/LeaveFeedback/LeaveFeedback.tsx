import Button from "../Button/Button";
import "./LeaveFeedback.css";

const LeaveFeedback = () => {
  return (
    <section className="leave__feedback">
      <div className="leave__feedback__background">
        <div className="container leave__feedback__container">
          <h2 className="leave__feedback__title">Оставить отзыв</h2>
          <form className="leave__feedback__form">
            <div className="leave__feedback__form__group">
              <label className="leave__feedback__form__label">Ваше имя *</label>
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
              <label className="leave__feedback__form__label">Ваш e-mail</label>
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
              <label className="leave__feedback__form__label">Ваш отзыв</label>
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
                Даю согласие на обработку моих персональных данных и принимаю
                политику конфиденциальности
              </label>
            </div>
            <div className="leave__feedback__button__block">
              <Button title="Отправить" ButtonPaddingY={18} ButtonWidth={224} />
            </div>
          </form>
        </div>
      </div>
      <div className="container">
        <h3 className="leave__feedback__subtitle">Благодарим за оставленный отзыв!</h3>
      </div>
    </section>
  );
};

export default LeaveFeedback;
