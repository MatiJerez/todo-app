export const TASKS_LIMIT = 3;
export const DEFAULT_DESCRIPTION = 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna";

export const API_ENDPOINTS = {
  TODOS: 'https://jsonplaceholder.typicode.com/todos',
  TODOS_WITH_LIMIT: `https://jsonplaceholder.typicode.com/todos?_limit=${TASKS_LIMIT}`,
} as const;

export const MESSAGES = {
  ERRORS: {
    LOAD_TASKS: 'Error al cargar tareas',
    ADD_TASK: 'No se pudo agregar la tarea',
    DELETE_TASK: 'No se pudo eliminar la tarea',
    TITLE_REQUIRED: 'El título de la tarea es obligatorio.',
  },
  CONFIRMATIONS: {
    DELETE_TASK: '¿Seguro que quieres eliminar esta tarea?',
  },
} as const;
