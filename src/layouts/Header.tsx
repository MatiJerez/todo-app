import React from 'react';
import { Logo, SearchButton, LoginButton, CartButton, MenuIcon } from '../components/ui/atoms';
import { HorizontalMenu } from '../components/ui/molecules';

/**
 * Header principal de la aplicación.
 * Incluye navegación superior y menú horizontal.
 */
const Header: React.FC = React.memo(() => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <MenuIcon />
          <SearchButton />
        </div>
        <Logo />
        <div className="d-flex align-items-center gap-2">
          <LoginButton />
          <CartButton />
        </div>
      </div>
    </nav>
    <HorizontalMenu />
  </header>
));

export default Header;
