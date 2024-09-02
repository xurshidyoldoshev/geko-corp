import './ComputerServiceTextSection.css'

import { ComputerServiceTextSectionIcon } from "../../assets/icon";

const ComputerServiceTextSection = () => {
  return (
    <section className="computer__service__text__section">
      <div className="contact__us__background">
        <div className="container computer__service__text__section__container">
          <ComputerServiceTextSectionIcon />
          <p className="computer__service__text__section__info">
            Компьютерный сервис Geko Corp предоставляет услугу срочного
            выездного ремонта как домашней, так и офисной компьютерной техники в
            Москве и ближнем Подмосковье.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComputerServiceTextSection;
