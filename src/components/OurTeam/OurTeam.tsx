import '../../App.css'
import './OurTeam.css'

import OurTeamItem from "../OurTeamItem/OurTeamItem";
import ItemImg from "../../assets/Images/OurTeamItemImg.png";

const OurTeam = () => {
  return (
    <section className="our__team">
      <div className="container our__team__container">
        <h2 className="our__team__title">наша команда</h2>
        <div className="our__team__line"></div>
        <p className="our__team__text">
          В команде мастеров компьютерного сервиса Geko объединились
          профессионалы, которые хорошо знают и любят свое дело. Огромный опыт,
          современная техническая база и коллективный потенциал позволяют нам
          оперативно и качественно решать любые проблемы, возникшие с вашей
          компьютерной техникой.
        </p>
        <ul className="our__team__list">
          <OurTeamItem
            itemImg={ItemImg}
            itemName="Сергей Александров"
            itemText="Опыт работы – 10 лет"
          />
          <OurTeamItem
            itemImg={ItemImg}
            itemName="Сергей Александров"
            itemText="Опыт работы – 10 лет"
          />
          <OurTeamItem
            itemImg={ItemImg}
            itemName="Сергей Александров"
            itemText="Опыт работы – 10 лет"
          />
          <OurTeamItem
            itemImg={ItemImg}
            itemName="Сергей Александров"
            itemText="Опыт работы – 10 лет"
          />
        </ul>
      </div>
    </section>
  );
};

export default OurTeam;
