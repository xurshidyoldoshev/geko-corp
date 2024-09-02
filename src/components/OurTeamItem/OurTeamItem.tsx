interface OurTeamItemType {
  itemImg: string;
  itemName: string;
  itemText: string;
}

const OurTeamItem: React.FC<OurTeamItemType> = ({
  itemImg,
  itemName,
  itemText,
}) => {
  return (
    <li className="our__team__item">
      <img className="out__team__item__img" src={itemImg} alt="item img" />
      <h4 className="our__team__item__name">{itemName}</h4>
      <p className="our__team__item__text">{itemText}</p>
    </li>
  );
};

export default OurTeamItem;
