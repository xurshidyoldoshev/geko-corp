import "./PaymentMethods.css";
import WalletIcon from "../../assets/Images/WalletImg.png";
import VisaIcon from "../../assets/Images/PaymentLogos.png";
import SberbankIcon from "../../assets/Images/Sberbank.png";
import DigitalMoneyIcon from "../../assets/Images/DigitalMoney.png";

interface PaymentMethodsType {
  title: string;
  img: string;
}

const PaymentMethods: React.FC = () => {
  const PaymentMethodData: PaymentMethodsType[] = [
    {
      title: "Наличными мастеру",
      img: WalletIcon,
    },
    {
      title: "Банковской картой",
      img: VisaIcon,
    },
    {
      title: "Перевод сбербанк онлайн",
      img: SberbankIcon,
    },
    {
      title: "Электронные деньги",
      img: DigitalMoneyIcon,
    },
  ];
  return (
    <section className="payment__methods">
      <div className="container payment__methods__container">
        <h2 className="payment__methods__title">Способы оплаты</h2>
        <p className="payment__methods__text">
          Мы работаем с частными и юридическими лицами. Вы можете оплатить
          работу наших специалистов любым удобным для вас способом.
        </p>
        <div className="payment__methods__individuals">
          <h3 className="payment__methods__individuals__title">
            Физические лица
          </h3>
          <ul className="payment__methods__individuals__list">
            {PaymentMethodData.map((item, index) => (
              <li key={index} className="payment__methods__individuals__item">
                <h4 className="payment__methods__individuals__item__text">
                  {item.title}
                </h4>
                <img
                  className="payment__methods__individuals__item__img"
                  src={item.img}
                  alt={item.title}
                />
              </li>
            ))}
          </ul>
          <p className="payment__methods__info">
            Оплата производится по окончании ремонта, после подписания договора
            и акта сдачи-приемки работ.
          </p>
          <h3 className="payment__methods__individuals__title">
            Юридические лица
          </h3>
          <h4 className="payment__methods__subtitle">Безналичный расчет</h4>
          <p className="payment__methods__subtitle__info">
            Оплата производится в соответствии с условиями заключенного
            договора.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
