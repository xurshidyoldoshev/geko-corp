import "../../App.css";
import RepairTechniquesItem from "../../components/RepairTechniquesItem/RepairTechniquesItem";

import ComputerIcon from "../../assets/Images/ComputerIcon.svg";
import LaptopIcon from "../../assets/Images/LaptopIcon.svg";
import MainBlockIcon from "../../assets/Images/MainBlock.svg";
import AppleIcon from "../../assets/Images/AppleIcon.svg";
import SettingIcon from "../../assets/Images/SettingIcon.svg";
import WindowsIcon from "../../assets/Images/WindowsIcon.svg";
import VirusIcon from "../../assets/Images/VirusIcon.svg";
import WifiIcon from "../../assets/Images/WifiIcon.svg";
import CorporateIcon from "../../assets/Images/CorporateIcon.svg";
import NotWorkingSection from "../../components/NotWorkingSection/NotWorkingSection";
import ConnectionSection from "../../components/ConnectionSection/ConnectionSection";
import ContactUs from "../../components/ContactUs/ContactUs";
import CustomerSection from "../../components/CustomerSection/CustomerSection";
import OurTeam from "../../components/OurTeam/OurTeam";
import AlertSection from "../../components/AlertSection/AlertSection";
import WhenToCallProfessional from "../../components/WhenToCallProfessional/WhenToCallProfessional";

function Home() {
  return (
    <>
      <section className="repair__techniques">
        <div className="container repair__techniques__container">
          <ul className="repair__techniques__list">
            <RepairTechniquesItem
              ItemImg={ComputerIcon}
              itemTitle="РЕМОНТ КОМПЬЮТЕРОВ"
              itemTextFirst="Замена блока питания"
              itemTextSecond="Замена материнской платы"
              itemTextThird="Замена жесткого диска"
              itemTextFourth="Замена видеокарты"
              itemTextFifth="Восстановление данных"
              itemTextSixth="Чистка компьютера от пыли"
              itemTextSeven="и другое..."
            />
            <RepairTechniquesItem
              ItemImg={LaptopIcon}
              itemTitle="РЕМОНТ ноутбуков"
              itemTextFirst="Ремонт залитого ноутбука"
              itemTextSecond="Замена клавиатуры"
              itemTextThird="Замена экрана"
              itemTextFourth="Замена термопасты"
              itemTextFifth="Чистка от пыли"
              itemTextSixth="Замена жесткого диска"
              itemTextSeven="и другое..."
            />
            <RepairTechniquesItem
              ItemImg={MainBlockIcon}
              itemTitle="РЕМОНТ моноблоков"
              itemTextFirst="Ремонт материнской платы"
              itemTextSecond="Замена комплектующих"
              itemTextThird="Замена видеокарты"
              itemTextFourth="Замена DVD-привода"
              itemTextFifth="Замена комплектующих"
              itemTextSixth="Чистка моноблока от пыли"
              itemTextSeven="и другое..."
            />
            <RepairTechniquesItem
              ItemImg={AppleIcon}
              itemTitle="РЕМОНТ техники Apple"
              itemTextFirst="Ремонт MacPro"
              itemTextSecond="Ремонт iMac"
              itemTextThird="Ремонт MacBook"
              itemTextFourth="Ремонт MacMini"
              itemTextFifth="Ремонт материнской платы"
              itemTextSixth="Замена матрицы"
              itemTextSeven="и другое..."
            />
            <RepairTechniquesItem
              ItemImg={SettingIcon}
              itemTitle="сборка и апгрейд компьютеров"
              itemTextFirst="Сборка компьютера под заказ"
              itemTextSecond="Установка жесткого диска"
              itemTextThird="Замена оперативной памяти"
              itemTextFourth="Замена материнской платы"
              itemTextFifth="Замена звуковой карты"
              itemTextSixth="Замена видеокарты"
              itemTextSeven="и другое..."
            />
            <RepairTechniquesItem
              ItemImg={WindowsIcon}
              itemTitle="установка ос и программ"
              itemTextFirst="Windows XP / 7 / 8 / 10"
              itemTextSecond="MacOS"
              itemTextThird="Антивирус"
              itemTextFourth="Офисные программы"
              itemTextFifth="Графические программы"
              itemTextSixth="Работа с ПО клиента"
              itemTextSeven="и другое..."
            />
            <RepairTechniquesItem
              ItemImg={VirusIcon}
              itemTitle="удаление вирусов"
              itemTextFirst="Чистка компьютера от вирусов"
              itemTextSecond="Чистка ноутбука от вирусов"
              itemTextThird="Баннеры-вымогатели"
              itemTextFourth="Майнеры"
              itemTextFifth="Всплывающая реклама"
              itemTextSixth="Эротические баннеры"
              itemTextSeven="и другое..."
            />
            <RepairTechniquesItem
              ItemImg={WifiIcon}
              itemTitle="настройка интернета"
              itemTextFirst="Подключение проводного и беспроводного интернета"
              itemTextSecond="Прокладка интернет-кабелей"
              itemTextThird="Настройка роутера"
              itemTextFourth="Настройка Wi-Fi адаптора"
              itemTextFifth="Настройка ADSL интернета"
              itemTextSeven="и другое..."
            />
            <RepairTechniquesItem
              ItemImg={CorporateIcon}
              itemTitle="корпоративным клиентам"
              itemTextFirst="Создание локальной сети"
              itemTextSecond="Настройка облачных сервисов"
              itemTextThird="Настройка серверов"
              itemTextFourth="Обслуживание серверов"
              itemTextFifth="Обслуживание компьютеров"
              itemTextSixth="IT-поддержка"
              itemTextSeven="и другое..."
            />
          </ul>
        </div>
      </section>
      <NotWorkingSection />
      <ConnectionSection />
      <ContactUs />
      <CustomerSection />
      <OurTeam />
      <AlertSection />
      <WhenToCallProfessional/>
    </>
  );
}

export default Home;
