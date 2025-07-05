# TODO App con React y TypeScript

Aplicación web para la gestión de tareas (TODOs) que permite a los usuarios ver, agregar y eliminar tareas. El proyecto está construido con React, TypeScript y se integra con una API REST para la persistencia de datos.

## ✨ Características Principales

-   **CRUD de Tareas**: Funcionalidad completa para Crear, Leer y Eliminar tareas.
-   **Integración con API REST**: Carga y gestiona tareas desde [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
-   **Paginación**: Navega a través de la lista de tareas de forma eficiente.
-   **Manejo de Estados**: Muestra indicadores de carga y mensajes de error.
-   **Validación de Formularios**: Asegura que los datos ingresados por el usuario sean válidos.
-   **Diseño Responsivo**: Interfaz adaptable a diferentes tamaños de pantalla.

## 🛠️ Stack Tecnológico

-   **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
-   **Estilos**: [Bootstrap](https://getbootstrap.com/), [SCSS](https://sass-lang.com/)
-   **Cliente HTTP**: [Axios](https://axios-http.com/)
-   **Herramientas de Desarrollo**: [Create React App](https://create-react-app.dev/), [ESLint](https://eslint.org/)

## 🚀 Cómo Empezar

Sigue estos pasos para tener una copia local del proyecto funcionando.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16 o superior).

### Instalación

1.  Clona el repositorio:
    ```sh
    git clone https://github.com/MatiJerez/todo-app.git
    ```
2.  Navega al directorio del proyecto:
    ```sh
    cd todo-app
    ```
3.  Instala las dependencias:
    ```sh
    npm install
    ```

## ⚙️ Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

-   `npm start`: Inicia la aplicación en modo de desarrollo. Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.
-   `npm test`: Lanza el corredor de pruebas en modo interactivo.
-   `npm run build`: Compila la aplicación para producción en la carpeta `build`.
           # Funciones de utilidad reutilizables
```

# Arquitectura de Componentes - TODO App

## Estructura de Carpetas

```
src/
├── components/
│   ├── business/          # Componentes específicos del negocio
│   │   ├── TasksManager.tsx    # Lógica de gestión de tareas
│   │   ├── NewTaskModal.tsx    # Modal para crear nuevas tareas
│   │   └── index.ts            # Barrel exports
│   └── ui/                # Componentes de interfaz reutilizables
│       ├── atoms/         # Componentes básicos indivisibles
│       │   ├── Logo.tsx
│       │   ├── SearchButton.tsx
│       │   ├── LoginButton.tsx
│       │   ├── CartButton.tsx
│       │   ├── MenuIcon.tsx
│       │   ├── DeleteButton.tsx
│       │   └── index.ts
│       ├── molecules/     # Componentes compuestos por atoms
│       │   ├── HorizontalMenu.tsx
│       │   ├── TaskItem.tsx    # Componente individual de tarea
│       │   └── index.ts
│       └── organisms/     # Componentes complejos de UI
│           ├── TaskList.tsx         # Lista de tareas
│           ├── TaskModal.tsx        # Modal de tareas
│           ├── LoadingSpinner.tsx   # Spinner de carga
│           ├── Pagination.tsx       # Componente de paginación
│           └── index.ts
├── layouts/               # Componentes de estructura general
│   ├── Header.tsx         # Header principal
│   └── index.ts
├── pages/                 # Páginas principales de la aplicación
│   ├── DataPage.tsx       # Página de datos personales
│   ├── TasksPage.tsx      # Página de tareas
│   ├── ReturnsPage.tsx    # Página de devoluciones
│   ├── CommunicationsPage.tsx  # Página de comunicaciones
│   ├── BestFriendsPage.tsx     # Página de mejores amigos
│   └── index.ts
├── hooks/                 # Custom hooks
├── services/              # Servicios y APIs
├── types/                 # Definiciones de tipos
├── utils/                 # Funciones utilitarias
└── styles/                # Estilos globales
```

### 🏗️ Principios de Arquitectura Aplicados

#### 1. **Atomic Design Pattern**
- **Atoms**: Componentes básicos e indivisibles (buttons, inputs, icons)
- **Molecules**: Componentes compuestos por atoms (search bar, menu)
- **Organisms**: Componentes complejos de UI (forms, lists)

#### 2. **Separación de Responsabilidades**
- **UI Components**: Componentes puramente visuales y reutilizables
- **Business Components**: Componentes con lógica específica del negocio
- **Pages**: Componentes de nivel página que orquestan otros componentes
- **Layouts**: Componentes de estructura general (header, footer, sidebars)

#### 3. **Importaciones Limpias**
- Barrel exports (`index.ts`) para importaciones agrupadas
- Rutas relativas optimizadas
- Imports destructured para mejor tree-shaking

### 📋 Ventajas de la Nueva Estructura

1. **Reutilización**: Componentes UI claramente separados y reutilizables
2. **Mantenibilidad**: Código organizado por responsabilidad
3. **Escalabilidad**: Fácil agregar nuevos componentes siguiendo el patrón
4. **Testing**: Componentes aislados más fáciles de testear
5. **Colaboración**: Estructura clara para equipos de desarrollo

### 🔄 Guía de Uso

#### Crear un nuevo componente UI:
```typescript
// Para un nuevo atom
src/components/ui/atoms/NewButton.tsx

// Para una nueva molecule
src/components/ui/molecules/NewSearchBar.tsx
```

#### Crear un nuevo componente de negocio:
```typescript
// Para lógica específica del dominio
src/components/business/NewFeature.tsx
```

#### Crear una nueva página:
```typescript
// Para una nueva ruta/página
src/pages/NewPage.tsx
```

### 📦 Imports Recomendados

```typescript
// Importar múltiples atoms
import { Logo, SearchButton, LoginButton } from '../ui/atoms';

// Importar páginas
import { DataPage, TasksPage } from '../pages';

// Importar componentes de negocio
import { TasksList } from '../business';
```

### 🛠️ Próximos Pasos

1. **Testing**: Agregar tests unitarios para cada componente
2. **Storybook**: Documentar componentes UI con Storybook
3. **TypeScript**: Mejorar tipado en interfaces y props
4. **Performance**: Implementar lazy loading para páginas
5. **Accessibility**: Auditoria de accesibilidad en componentes

---

*Esta estructura sigue las mejores prácticas de desarrollo frontend y facilita el mantenimiento y escalabilidad del proyecto.*
