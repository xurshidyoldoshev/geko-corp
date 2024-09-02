interface SinglePageTextType {
  itemTitle: string;
  itemText: string;
}

const SinglePageText: React.FC<SinglePageTextType> = ({
  itemText,
  itemTitle,
}) => {
  return (
    <div className="single__page__text__block">
      <h3 className="single__page__info__title">{itemTitle}</h3>
      <p className="single__page__info">{itemText}</p>
    </div>
  );
};

export default SinglePageText;
