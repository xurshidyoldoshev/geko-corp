import ComputerServiceTextSection from "../../components/ComputerServiceTextSection/ComputerServiceTextSection";
import CustomerSection from "../../components/CustomerSection/CustomerSection";
import HowWeWork from "../../components/HowWeWork/HowWeWork";
import LoyaltyPrograms from "../../components/LoyaltyPrograms/LoyaltyPrograms";
import OurPartner from "../../components/OurPartner/OurPartner";
import OurTeam from "../../components/OurTeam/OurTeam";
import PaymentMethods from "../../components/PaymentMethods/PaymentMethods";
import RepairComputer from "../../components/RepairComputer/RepairComputer";

function About() {
  return (
    <>
      <section className="computer__service">
        <div className="computer__service__title">
          Компьютерный сервис Geko Corp
        </div>
        <div className="computer__service__background">
          <div className="container computer__service__container">
            <p className="computer__service__text__first">
              В компьютерном сервисе Geko Corp объединились профессионалы,
              которые хорошо знают и любят свое дело. Огромный опыт, современная
              техническая база и коллективный потенциал позволяют нам оперативно
              и качественно решать любые проблемы, возникшие с вашей
              компьютерной техникой. Мы ремонтируем любые виды техники:
              компьютеры, ноутбуки, моноблоки, планшеты, технику Apple,
              оказываем сопутствующие услуги.
            </p>
            <div className="contact__us__line contact__us__line__space"></div>
            <p className="computer__service__text__second">
              Наша главная цель – предоставление качественного сервиса для
              компьютерной техники, без «подводных камней», связанных с обманом
              клиента. Мы выставляем честные цены без накруток, которые
              согласовываем с заказчиком до начала работ. Наш прайс всегда
              актуален, размещен на сайте и мы его строго придерживаемся.
            </p>
            <div className="contact__us__line contact__us__line__space"></div>
            <p className="computer__service__text__three">
              Мы ориентированы на долгосрочное сотрудничество с нашими клиентами
              и на рекомендации. Просим вас после ремонта, выполненного нашими
              специалистами, оставить честный отзыв о нашей работе на
              независимых сайтах
              <a
                className="customer__link"
                target="_blank"
                href="https://www.otzovik.com"
              >
                {" "}
                www.otzovik.com{" "}
              </a>
              и
              <a
                className="customer__link"
                target="_blank"
                href="https://www.irecommend.ru"
              >
                {" "}
                www.irecommend.ru
              </a>
              , это будет вашим вкладом в нашу борьбу с недобросовестными
              мастерскими-однодневками.
            </p>
          </div>
        </div>
      </section>
      <OurTeam />
      <ComputerServiceTextSection />
      <HowWeWork />
      <RepairComputer />
      <PaymentMethods />
      <CustomerSection />
      <LoyaltyPrograms />
      <OurPartner />
    </>
  );
}

export default About;
