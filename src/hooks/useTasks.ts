import { useState, useCallback, useEffect } from 'react';
import { Task, TasksState } from '../types/task.types';
import { TasksService } from '../services/tasks.service';
import { MESSAGES } from '../constants/tasks.constants';

export interface UseTasksReturn extends TasksState {
  setError: (error: string | null) => void;
  addTask: (title: string, description: string) => Promise<boolean>;
  deleteTask: (id: number) => Promise<void>;
  refreshTasks: () => Promise<void>;
}

export const useTasks = (): UseTasksReturn => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await TasksService.fetchTasks();
      setTasks(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addTask = useCallback(async (title: string, description: string): Promise<boolean> => {
    if (!title.trim()) {
      setError(MESSAGES.ERRORS.TITLE_REQUIRED);
      return false;
    }
    
    setError(null);
    
    try {
      const newTask = await TasksService.createTask({
        title,
        description,
        completed: false,
      });
      
      setTasks(prev => [...prev, newTask]);
      return true;
    } catch (err) {
      setError((err as Error).message);
      return false;
    }
  }, []);

  const deleteTask = useCallback(async (id: number): Promise<void> => {
    try {
      await TasksService.deleteTask(id);
      setTasks(prev => prev.filter(task => task.id !== id));
    } catch (err) {
      setError((err as Error).message);
    }
  }, []);

  const refreshTasks = useCallback(async () => {
    await fetchTasks();
  }, [fetchTasks]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    loading,
    error,
    setError,
    addTask,
    deleteTask,
    refreshTasks,
  };
};
