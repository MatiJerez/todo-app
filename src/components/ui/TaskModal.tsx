import React, { useState, useCallback } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BaseModalProps } from '../../types/common.types';
import { resetForm } from '../../utils/task.utils';

interface TaskModalProps extends BaseModalProps {
  onAddTask: (title: string, description: string) => Promise<boolean>;
}

export const TaskModal: React.FC<TaskModalProps> = ({
  showModal,
  setShowModal,
  onAddTask,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = useCallback(() => {
    setShowModal(false);
    resetForm(setTitle, setDescription);
  }, [setShowModal]);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    const success = await onAddTask(title, description);
    
    if (success) {
      handleClose();
    }
    setIsSubmitting(false);
  }, [title, description, onAddTask, handleClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSubmit();
    }
  }, [handleSubmit]);

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Añadir Nueva Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Título *</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el título de la tarea"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isSubmitting}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Ingresa la descripción de la tarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isSubmitting}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={isSubmitting}>
          Cancelar
        </Button>
        <Button 
          variant="primary" 
          onClick={handleSubmit}
          disabled={isSubmitting || !title.trim()}
        >
          {isSubmitting ? 'Agregando...' : 'Agregar Tarea'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
