import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Logo: React.FC = React.memo(() => (
  <Link to="/" aria-label="Ir a inicio">
    <img src={logo} alt="Logo de la aplicación" className="logo" />
  </Link>
));

export default Logo;