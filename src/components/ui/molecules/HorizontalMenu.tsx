import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  id: number;
  label: string;
  path: string;
}


//  Usa Bootstrap y resalta la pestaña activa según la ruta.

const menuItems: MenuItem[] = [
  { id: 1, label: 'Mis datos', path: '/datos' },
  { id: 2, label: 'Mis tareas', path: '/tareas' },
  { id: 3, label: 'Mis devoluciones', path: '/devoluciones' },
  { id: 4, label: 'Mis comunicaciones', path: '/comunicaciones' },
  { id: 5, label: 'Mis mejores amigos', path: '/mejores-amigos' },
];

const HorizontalMenu: React.FC = React.memo(() => {
  const location = useLocation();

  return (
    <nav className="horizontal-menu" aria-label="Menú principal">
      <ul className="horizontal-menu__tabs">
        {menuItems.map((item) => (
          <li className="horizontal-menu__tab" key={item.id}>
            <Link
              className={`horizontal-menu__link${location.pathname === item.path ? ' horizontal-menu__link--active' : ''}`}
              to={item.path}
              aria-current={location.pathname === item.path ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
});

export default HorizontalMenu;
