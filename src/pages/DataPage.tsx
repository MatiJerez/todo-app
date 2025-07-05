import React, { useState } from "react";
import { FormGroup, FormControl, Button, Alert, FormLabel, FormText } from 'react-bootstrap';

// Expresión regular simple para validar emails
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Expresión regular para teléfonos internacionales (ej: +5491123456789 o 01123456789)
const phoneRegex = /^(\+?\d{7,15})$/;

// Función de validación
const validate = (name: string, email: string, phone: string) => {
  const errors: { [key: string]: string } = {};
  if (!name.trim()) errors.name = "El nombre es obligatorio.";
  if (!email.trim()) errors.email = "El email es obligatorio.";
  else if (!emailRegex.test(email)) errors.email = "Ingrese un email válido.";
  if (!phone.trim()) errors.phone = "El teléfono es obligatorio.";
  else if (!phoneRegex.test(phone)) errors.phone = "Teléfono inválido (solo números, puede incluir + y entre 7 y 15 dígitos).";
  return errors;
};

// Componente reutilizable para campos de entrada
const InputField = ({
  label,
  type,
  value,
  onChange,
  error,
  ...props
}: {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  [key: string]: any;
}) => (
  <FormGroup className="mb-3">
    <FormLabel>{label}</FormLabel>
    <FormControl
      type={type}
      value={value}
      onChange={onChange}
      isInvalid={!!error}
      {...props}
    />
    {error && <FormText className="text-danger">{error}</FormText>}
  </FormGroup>
);

const DataPage: React.FC = () => {
  const [fields, setFields] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [updated, setUpdated] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
    setErrors({});
    setUpdated(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(fields.name, fields.email, fields.phone);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await fetch('URL_DEL_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      if (response.ok) setUpdated(true);
      else setSubmitError("Hubo un error al enviar los datos. Intente nuevamente.");
    } catch {
      setSubmitError("Hubo un error al enviar los datos. Intente nuevamente.");
    }
  };

  return (
    <div className="wrapper-component">
      <h3 className="d-flex title-page">Mis datos</h3>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit} noValidate>
            {submitError && (
              <Alert variant="danger" onClose={() => setSubmitError(null)} dismissible>
                {submitError}
              </Alert>
            )}
            {updated && (
              <Alert variant="success" onClose={() => setUpdated(false)} dismissible>
                Datos actualizados correctamente.
              </Alert>
            )}
            <InputField
              label="Nombre"
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Nombre"
              aria-label="Nombre"
              required
            />
            <InputField
              label="Email"
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Email"
              aria-label="Email"
              required
            />
            <InputField
              label="Teléfono"
              type="tel"
              name="phone"
              value={fields.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="Teléfono"
              aria-label="Teléfono"
              required
              pattern="\+?\d{7,15}"
              inputMode="tel"
            />
            <div className="mt-4">
              <Button type="submit" className="btn-primary" disabled={Object.keys(errors).length > 0}>
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
