# Arquitectura de Componentes - TODO App

## Estructura de Carpetas

```
src/
├── components/
│   ├── business/          # Componentes específicos del negocio
│   │   ├── Tasks.tsx      # Lógica de tareas
│   │   └── index.ts       # Barrel exports
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
│       │   └── index.ts
│       └── organisms/     # Componentes complejos de UI
│           ├── TaskList.tsx
│           ├── TaskModal.tsx
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
