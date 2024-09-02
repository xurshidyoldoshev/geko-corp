import "../../App.css";

interface NotWorkingItemType {
  itemNum: number;
  itemText: string;
}

const NotWorkingItem: React.FC<NotWorkingItemType> = ({
  itemNum,
  itemText,
}) => {
  return (
    <li className="not__working__item">
      <div className="not__working__item__block">
        <div className="not__working__item__number__block">
          <span className="not__working__item__number">{itemNum}</span>
        </div>
        <div className="not__working__item__info__block">
          <p className="not__working__item__info">{itemText}</p>
        </div>
      </div>
    </li>
  );
};

export default NotWorkingItem;
