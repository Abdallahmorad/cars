"use client";

const CustomButton = ({
  title,
  styleContainer,
  handleClick,
  btnType,
  hover,
}) => {
  return (
    <button
      type={btnType}
      disabled={false}
      className={`${styleContainer} ${hover} transition-all duration-100  `}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
