import { MESSAGES } from '../constants/tasks.constants';

export const confirmDelete = (message: string = MESSAGES.CONFIRMATIONS.DELETE_TASK): boolean => {
  return window.confirm(message);
};

export const validateTaskTitle = (title: string): { isValid: boolean; error?: string } => {
  if (!title.trim()) {
    return {
      isValid: false,
      error: MESSAGES.ERRORS.TITLE_REQUIRED,
    };
  }
  
  return { isValid: true };
};

export const resetForm = (...setters: Array<(value: string) => void>): void => {
  setters.forEach(setter => setter(''));
};
