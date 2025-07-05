import React from "react";
import { Spinner, Alert } from "react-bootstrap";
import NewTaskModal from "./NewTaskModal";
import { DeleteButton } from "../ui/atoms";
import { Pagination } from "../ui";
import { useTasks, usePagination } from "../../hooks";
import { Task } from "../../types/task.types";

const TASKS_PER_PAGE = 4;

const TasksManager: React.FC = () => {
  const {
    tasks,
    loading,
    error,
    setError,
    addTask,
    deleteTask,
  } = useTasks();

  const {
    currentPage,
    totalPages,
    currentItems: currentTasks,
    goToPage,
  } = usePagination({ items: tasks, itemsPerPage: TASKS_PER_PAGE });

  const [showModal, setShowModal] = React.useState(false);
  const [newTaskTitle, setNewTaskTitle] = React.useState("");
  const [newTaskDescription, setNewTaskDescription] = React.useState("");

  const handleAddTask = async () => {
    const success = await addTask(newTaskTitle, newTaskDescription);
    if (success) {
      setShowModal(false);
      setNewTaskTitle("");
      setNewTaskDescription("");
    }
  };

  const handleDelete = (task: Task) => {
    if (window.confirm("¿Seguro que quieres eliminar esta tarea?")) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="wrapper-component">
      <h3 className="d-flex title-page">Mis tareas</h3>
      {error && (
        <Alert variant="danger" onClose={() => setError(null)} dismissible>
          {error}
        </Alert>
      )}
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <div>
          {tasks.length > 0 ? (
            <div>
              {currentTasks.map((item) => (
                <div className="card mb-3" key={item.id}>
                  <div className="card-body">
                    <div className="item-title fw-bold">{item.title}</div>
                    <div className="row align-items-center">
                      <div className="col-10 item-description text-muted">
                        {item.description}
                      </div>
                      <div className="col-2 text-end">
                        <DeleteButton onClick={() => handleDelete(item)} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Mostrar paginación solo si hay más de 4 tareas */}
              {tasks.length > TASKS_PER_PAGE && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={goToPage}
                />
              )}
            </div>
          ) : (
            <p className="text-center text-muted">No hay tareas disponibles</p>
          )}
        </div>
      )}
      <button
        className="btn btn-primary mt-5"
        onClick={() => setShowModal(true)}
      >
        Añadir tarea
      </button>
      <NewTaskModal
        showModal={showModal}
        setShowModal={setShowModal}
        handleAddTask={handleAddTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskDescription={newTaskDescription}
        setNewTaskDescription={setNewTaskDescription}
      />
    </div>
  );
};

export default TasksManager;
