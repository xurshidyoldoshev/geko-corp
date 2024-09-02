import {
  PeopleTalking,
  RightButtonIcon,
  WhenToCallProfessionalButtonIcon,
} from "../../assets/icon";
import "./OurPartner.css";

const OurPartner = () => {
  return (
    <section className="our__partner">
      <div className="contact__us__background">
        <div className="container our__partner__container">
          <div className="our__partner__info__block">
            <PeopleTalking />
            <div>
              <h3 className="our__partner__title">Станьте нашим партнером</h3>
              <p className="our__partner__text">
                При рекомендации нас друзьям и знакомым мы из собственных
                средств выплатим вам 10% от суммы реализованного заказа
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our__partner__button__container">
        <button className="CustomButton when__to__call__professional__button">
          <span className="when__to__call__professional__button__text">
            получить консультацию
          </span>
          <WhenToCallProfessionalButtonIcon />
        </button>
      </div>
    </section>
  );
};

export default OurPartner;
