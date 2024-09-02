import './RepairComputer.css'

import Philips from "../../assets/Images/Philips.png";
import Apple from "../../assets/Images/Apple.png";
import Toshiba from "../../assets/Images/Toshiba.png";
import Hp from "../../assets/Images/HP.png";
import Lenovo from "../../assets/Images/Lenovo.png";
import Xiaomi from "../../assets/Images/Xiaomi.png";
import Huawei from "../../assets/Images/Huawei.png";
import Lg from "../../assets/Images/LG.png";
import Sony from "../../assets/Images/Sony.png";
import Dell from "../../assets/Images/Dell.png";
import Samsung from "../../assets/Images/Samsung.png";
import Asus from "../../assets/Images/Asus.png";
import Vaio from "../../assets/Images/Vaio.png";
import Acer from "../../assets/Images/Acer.png";

const RepairComputer = () => {
  return (
    <section className="repair__computer">
      <div className="repair__computer__background">
        <div className="container repair__computer__container">
          <h2 className="repair__computer__title">
            Мы ремонтируем компьютеры и ноутбуки любых марок и неисправности
            любой сложности
          </h2>
          <div className="repair__computer__sponsors__block">
            <a
              href="https://www.philips.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Philips}
                alt="Philips sponsor img"
              />
            </a>
            <a
              href="https://www.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Apple}
                alt="Apple sponsor img"
              />
            </a>
            <a
              href="https://www.toshiba.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Toshiba}
                alt="Toshiba sponsor img"
              />
            </a>
            <a
              href="https://www.hp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Hp}
                alt="HP sponsor img"
              />
            </a>
            <a
              href="https://www.lenovo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Lenovo}
                alt="Lenovo sponsor img"
              />
            </a>
            <a
              href="https://www.mi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Xiaomi}
                alt="Xiaomi sponsor img"
              />
            </a>
            <a
              href="https://www.huawei.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Huawei}
                alt="Huawei sponsor img"
              />
            </a>
            <a
              href="https://www.lg.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Lg}
                alt="LG sponsor img"
              />
            </a>
            <a
              href="https://www.sony.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Sony}
                alt="Sony sponsor img"
              />
            </a>
            <a
              href="https://www.dell.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Dell}
                alt="Dell sponsor img"
              />
            </a>
            <a
              href="https://www.samsung.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Samsung}
                alt="Samsung sponsor img"
              />
            </a>
            <a
              href="https://www.asus.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Asus}
                alt="Asus sponsor img"
              />
            </a>
            <a
              href="https://www.vaio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Vaio}
                alt="Vaio sponsor img"
              />
            </a>
            <a
              href="https://www.acer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="repair__computer__sponsors__img"
                src={Acer}
                alt="Acer sponsor img"
              />
            </a>
          </div>
          <h4 className="repair__computer__subtitle">
            В своей работе мы используем только лицензионное программное
            обеспечение и оригинальные комплектующие от официальных
            дистрибьюторов
          </h4>
        </div>
      </div>
    </section>
  );
};

export default RepairComputer;
