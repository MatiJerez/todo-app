import React, { useState } from "react";
import cartIcon from "../../assets/cart.svg";

interface CartButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const CartButton: React.FC<CartButtonProps> = ({
  onClick,
  className = "",
  ...props
}) => {
  // Estado local para el número de items (hardcodeado)
  // eslint-disable-next-line
  const [itemCount, setItemCount] = useState(4);

  return (
    <button
      type="button"
      className={`btn ${className}`}
      aria-label="Abrir carrito"
      onClick={onClick}
      {...props}
      style={{ position: "relative" }}
    >
      <img src={cartIcon} alt="" aria-hidden="true" />
      {/* Badge con el número de items */}
      {itemCount > 0 && (
        <span
          className="cart"
        >
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;
