import React from "react";
import searchIcon from "../../assets/searchIcon.svg";

interface SearchButtonProps {
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

const SearchButton: React.FC<SearchButtonProps> = React.memo(
  ({ onClick, className = "", ariaLabel = "Buscar" }) => (
    <button
      type="button"
      className={`btn search-button ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <img src={searchIcon} alt="Buscar" />
    </button>
  )
);

export default SearchButton;