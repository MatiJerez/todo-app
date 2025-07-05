import React from "react";
import loginIcon from "../../assets/loginIcon.svg";

interface LoginButtonProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const LoginButton: React.FC<LoginButtonProps> = React.memo(
  ({ onClick, className = "", ariaLabel = "Iniciar sesión" }) => (
    <button
      type="button"
      className={`btn login-button ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src={loginIcon} alt="Iniciar sesión" />
    </button>
  )
);

export default LoginButton;
