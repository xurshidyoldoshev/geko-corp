import "../../App.css";
import "./AlertSection.css";

import { AlertIcon } from "../../assets/icon";

const AlertSection = () => {
  return (
    <section className="alert">
      <div className="contact__us__background">
        <div className="alert__container container">
          <div className="alert__text__block">
            <div className="alert__icon__wrapper">
              <AlertIcon />
            </div>
            <p className="alert__text">
              Жаль, нельзя заранее предугадать будущую поломку в компьютере. Она
              становится заметной, лишь когда тот окончательно перестает
              работать. Важно вовремя обратиться в сервисный центр для
              предоставления компьютерной помощи как только замечена
              неисправность. Это избавит вас от лишних затрат и стрессовых
              ситуаций.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertSection;
