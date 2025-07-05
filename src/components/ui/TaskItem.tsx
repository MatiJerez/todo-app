import React from 'react';
import { Task } from '../../types/task.types';
import DeleteButton from '../../components/ui/atoms/DeleteButton';

interface TaskItemProps {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <div className="card mb-3" key={task.id}>
      <div className="card-body">
        <div className="item-title fw-bold">{task.title}</div>
        <div className="row align-items-center">
          <div className="col-10 item-description text-muted">
            {task.description}
          </div>
          <div className="col-2 text-end">
            <DeleteButton onClick={() => onDelete(task)} />
          </div>
        </div>
      </div>
    </div>
  );
};
