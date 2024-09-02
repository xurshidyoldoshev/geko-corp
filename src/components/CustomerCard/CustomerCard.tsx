import "../../App.css";
import '../CustomerSection/CustomerSection.css'

interface CustomerCardType {
  itemDepartment: string;
  itemTitleFirst: string;
  itemTitleSecond: string;
  itemDate: string;
  itemInfo: string;
  itemSubtitle?: string;
}

const CustomerCard: React.FC<CustomerCardType> = ({
  itemDepartment,
  itemDate,
  itemInfo,
  itemSubtitle,
  itemTitleFirst,
  itemTitleSecond,
}) => {
  return (
    <li className="customer__item">
      <div className="customer__item__title__block">
        <div className="customer__item__department__block">
          <span className="customer__item__department">{itemDepartment}</span>
        </div>
        <div>
          <h3 className="customer__item__title">{itemTitleFirst}</h3>
          <h3 className="customer__item__title">{itemTitleSecond}</h3>
        </div>
      </div>
      <div className="customer__item__date__block">
        <div className="customer__item__date__line">
          <h4 className="customer__item__date">{itemDate}</h4>
        </div>
      </div>
      <p className="customer__item__info">{itemInfo}</p>
      <span className="customer__item__info__subtitle">{itemSubtitle}</span>
    </li>
  );
};

export default CustomerCard;
