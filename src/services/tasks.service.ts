import { Task, CreateTaskRequest } from '../types/task.types';
import { API_ENDPOINTS, DEFAULT_DESCRIPTION, MESSAGES } from '../constants/tasks.constants';

export class TasksService {
  static async fetchTasks(): Promise<Task[]> {
    const response = await fetch(API_ENDPOINTS.TODOS_WITH_LIMIT);
    
    if (!response.ok) {
      throw new Error(MESSAGES.ERRORS.LOAD_TASKS);
    }
    
    const data: Task[] = await response.json();
    return data.map(task => ({
      ...task,
      description: DEFAULT_DESCRIPTION,
    }));
  }

  static async createTask(taskData: CreateTaskRequest): Promise<Task> {
    const response = await fetch(API_ENDPOINTS.TODOS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });

    if (!response.ok) {
      throw new Error(MESSAGES.ERRORS.ADD_TASK);
    }

    const data: Task = await response.json();
    return {
      ...data,
      description: taskData.description || DEFAULT_DESCRIPTION,
    };
  }

  static async deleteTask(taskId: number): Promise<void> {
    const response = await fetch(`${API_ENDPOINTS.TODOS}/${taskId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(MESSAGES.ERRORS.DELETE_TASK);
    }
  }
}
