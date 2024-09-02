import "../../App.css";
import './RepairTechniques.css'

interface ItemType {
  ItemImg?: string;
  itemTitle: string;
  itemTextFirst: string;
  itemTextSecond: string;
  itemTextThird: string;
  itemTextFourth: string;
  itemTextFifth: string;
  itemTextSixth?: string;
  itemTextSeven?: string;
}

const RepairTechniquesItem: React.FC<ItemType> = ({
  ItemImg,
  itemTitle,
  itemTextFirst,
  itemTextSecond,
  itemTextThird,
  itemTextFourth,
  itemTextFifth,
  itemTextSixth,
  itemTextSeven,
}) => {
  return (
    <li className="repair__techniques__item">
      <div className="repair__techniques__item__top__block">
        <div className="repair__techniques__item__top__img__block">
          <span className="repair__techniques__item__top__line"></span>
          <img
            className="repair__techniques__item__top__img"
            src={ItemImg}
            alt="Technique icon"
          />
          <span className="repair__techniques__item__top__line"></span>
        </div>
        <h3 className="repair__techniques__item__top__title">{itemTitle}</h3>
      </div>
      <div className="repair__techniques__item__bottom__block">
        <ul className="repair__techniques__item__bottom__list">
          <li className="repair__techniques__item__bottom__item">
            {itemTextFirst}
          </li>
          <li className="repair__techniques__item__bottom__item">
            {itemTextSecond}
          </li>
          <li className="repair__techniques__item__bottom__item">
            {itemTextThird}
          </li>
          <li className="repair__techniques__item__bottom__item">
            {itemTextFourth}
          </li>
          <li className="repair__techniques__item__bottom__item">
            {itemTextFifth}
          </li>
          <li className="repair__techniques__item__bottom__item">
            {itemTextSixth}
          </li>
          <li className="repair__techniques__item__bottom__item repair__techniques__item__bottom__item__last">
            {itemTextSeven}
          </li>
        </ul>
        <button className="repair__techniques__item__bottom__button">
          подробности и цены
        </button>
      </div>
    </li>
  );
};

export default RepairTechniquesItem;
