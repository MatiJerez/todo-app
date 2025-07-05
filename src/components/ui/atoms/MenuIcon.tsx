import React from "react";
import menuIcon from "../../assets/menuIcon.svg";

interface MenuIconProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const MenuIcon: React.FC<MenuIconProps> = React.memo(
  ({ onClick, className = "", ariaLabel = "Abrir menú" }) => (
    <button
      type="button"
      className={`btn menu-button ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src={menuIcon} alt="Menú" />
    </button>
  )
);

export default MenuIcon;
