import React from 'react';
import { Task } from '../../types/task.types';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (task: Task) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-muted">No hay tareas disponibles</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={onDeleteTask} 
        />
      ))}
    </div>
  );
};
