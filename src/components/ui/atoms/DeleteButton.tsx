import React from "react";
import trashIcon from "../../assets/trashIcon.svg";

interface DeleteButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = React.memo(
  ({ onClick, className = "", ariaLabel = "Eliminar" }) => (
    <button
      type="button"
      className={`btn delete-button d-flex justify-content-center ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src={trashIcon} alt="Eliminar" />
    </button>
  )
);

export default DeleteButton;
