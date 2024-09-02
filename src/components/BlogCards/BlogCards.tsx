import "./BlogCards.css";

import BlogCardsImgOne from "../../assets/Images/BlogCardsImgOne.png";
import BlogCardsImgTwo from "../../assets/Images/BlogCardsImgTwo.png";
import BlogCardsImgThree from "../../assets/Images/BlogCardsImgThree.png";
import BlogCardsImgFour from "../../assets/Images/BlogCardsImgFour.png";
import BlogCardsImgFive from "../../assets/Images/BlogCardsImgFive.png";
import BlogCardsImgSix from "../../assets/Images/BlogCardsImgSix.png";
import BlogCardsImgSeven from "../../assets/Images/BlogCardsImgSeven.png";
import BlogCardsImgEight from "../../assets/Images/BlogCardsImgEight.png";
import BlogCardsImgNine from "../../assets/Images/BlogCardsImgNine.png";
import { LeftButtonIcon, RightButtonIcon } from "../../assets/icon";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const BlogCards: React.FC = () => {
  const navigate = useNavigate()
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useContext must be used within a ContextProvider");
  }

  const { setBlogCardData } = context;

  const handleSinglePage = (id: string) => {
    const findedData = blogCardsData.find((item) => item.id === id);
    setBlogCardData(findedData!);
    setTimeout(() => {
      navigate('/single-page:id')
    }, 500);
  };

  const blogCardsData: BlogCard[] = [
    {
      id: "1",
      img: BlogCardsImgOne,
      text: "Как продлить жизнь ноутбуку: 10 правил грамотного использования",
    },
    {
      id: "2",
      img: BlogCardsImgTwo,
      text: "Что делать,если компьютер медленно работает",
    },
    {
      id: "3",
      img: BlogCardsImgThree,
      text: "Компьютерный вирус. способы заражения и методы защиты",
    },
    {
      id: "4",
      img: BlogCardsImgFour,
      text: "Система резервного копирования, что это?",
    },
    {
      id: "5",
      img: BlogCardsImgFive,
      text: "ЧИСТКА НОУТБУКОВ",
    },
    {
      id: "6",
      img: BlogCardsImgSix,
      text: "Если пролили жидкость на ноутбук, что делать?",
    },
    {
      id: "7",
      img: BlogCardsImgSeven,
      text: "ВОССТАНОВЛЕНИЕ УДАЛЕННЫХ ДАННЫХ",
    },
    {
      id: "8",
      img: BlogCardsImgEight,
      text: "как часто надо проводить профилактику",
    },
    {
      id: "9",
      img: BlogCardsImgNine,
      text: "НАСТРОЙКА роутера и домашней сети",
    },
  ];
  return (
    <section className="blog__cards">
      <div className="container blog__cards__container">
        <h2 className="blog__cards__title">Блог</h2>
        <ul className="blog__cards__list">
          {blogCardsData.map((card, index) => (
            <li
              onClick={() => handleSinglePage(card.id as string)}
              id={`${card.id}`}
              key={index}
              className="blog__cards__item"
            >
              <img
                src={card.img}
                alt="Blog post"
                className="blog__cards__img"
              />
              <p className="blog__cards__text">{card.text}</p>
            </li>
          ))}
        </ul>
        <div className="blog__cards__button__block">
          <button className="customer__button blog__cards__button">
            <LeftButtonIcon />
          </button>
          <button className="customer__button blog__cards__button">
            <RightButtonIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogCards;
