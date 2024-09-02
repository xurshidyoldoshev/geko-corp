import "../../App.css";

interface ButtonType {
  title: string;
  ButtonWidth?: number;
  ButtonPaddingY?: number;
}

const Button: React.FC<ButtonType> = ({
  title,
  ButtonWidth,
  ButtonPaddingY,
}) => {
  return (
    <button
      className="CustomButton"
      style={{
        width: `${ButtonWidth}px`,
        padding: `${ButtonPaddingY || 0}px 0px`,
      }}
    >
      <span className="CustomButton__title">{title}</span>
    </button>
  );
};

export default Button;
