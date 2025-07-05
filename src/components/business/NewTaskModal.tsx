import React, { Dispatch, SetStateAction, useCallback } from "react";
import { Modal, Button, Form } from "react-bootstrap";

interface NewTaskModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  handleAddTask: () => void;
  newTaskTitle: string;
  setNewTaskTitle: Dispatch<SetStateAction<string>>;
  newTaskDescription: string;
  setNewTaskDescription: Dispatch<SetStateAction<string>>;
}

//  Modal para crear una nueva tarea.
const NewTaskModal: React.FC<NewTaskModalProps> = ({
  showModal,
  setShowModal,
  handleAddTask,
  newTaskTitle,
  setNewTaskTitle,
  newTaskDescription,
  setNewTaskDescription,
}) => {
  // Limpia los campos al cerrar el modal
  const handleClose = useCallback(() => {
    setShowModal(false);
    setNewTaskTitle("");
    setNewTaskDescription("");
  }, [setShowModal, setNewTaskTitle, setNewTaskDescription]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddTask();
  };

  return (
    <Modal
      className="new-task-modal"
      show={showModal}
      onHide={handleClose}
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Añadir tarea</Modal.Title>
      </Modal.Header>
      <Form className="new-task-form" onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-4" controlId="taskTitle">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre"
              value={newTaskTitle}
              onChange={e => setNewTaskTitle(e.target.value)}
              autoFocus
              required
            />
          </Form.Group>
          <Form.Group controlId="taskDescription">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Descripción"
              value={newTaskDescription}
              onChange={e => setNewTaskDescription(e.target.value)}
              className="custom-textarea"
              rows={3}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default NewTaskModal;
