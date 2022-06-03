import classNames from "classnames";

import loadingImage from "./assets/loader.svg";

import "./custom-button.css";

export const Button = ({
  children,
  onClick,
  disabled,
  isLoading,
  imgSrc,
  imgAlt,
  className,
  isSubmit,
}) => {
  const onClickButton = (e) => {
    e.stopPropagation();
    onClick?.();
  };

  return (
    <button
      className={classNames("button", [className], { disabled: disabled })}
      type={isSubmit ? "submit" : "button"}
      onClick={onClickButton}
      disabled={disabled || isLoading}
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className={classNames("button-image", { noData: !children })}
        />
      )}
      {children}
      {isLoading && (
        <img src={loadingImage} alt="loading" className="loading-image" />
      )}
    </button>
  );
};
