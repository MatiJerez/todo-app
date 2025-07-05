export interface Task {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
  description: string;
}

export interface CreateTaskRequest {
  title: string;
  description: string;
  completed: boolean;
}

export interface TasksState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}
