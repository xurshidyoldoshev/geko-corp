interface ContactUsItemType {
  itemText: string;
  itemImg: string;
}

const ContactUsItem: React.FC<ContactUsItemType> = ({ itemText, itemImg }) => {
  return (
    <li className="contact__us__item">
      <img
        className="contact__us__item__icon"
        src={itemImg}
        alt="Percent icon"
      />
      <p className="contact__us__item__text">{itemText}</p>
    </li>
  );
};

export default ContactUsItem;
