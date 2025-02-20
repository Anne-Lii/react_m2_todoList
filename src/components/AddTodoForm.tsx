import './AddTodoForm.css'
import React, { useState } from 'react';

interface AddTodoFormProps {
  onAddTodo: (newTodo: { title: string, description: string, status: string }) => void;
}

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Ej påbörjad');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    //object to store errors
    let validationErrors: { title?: string; description?: string } = {};

    if (title.trim().length < 0) {
      validationErrors.title = 'Du måste fylla i en rubrik';
    }
    if (title.trim().length < 3) {
      validationErrors.title = 'Rubriken måste vara minst tre bokstäver';
    }
    if (description.trim().length < 0) {
      validationErrors.title = 'Du måste skriva en beskrivning';
    }
    if (description.trim().length > 200) {
      validationErrors.description = 'Beskrivningen får ej vara mer än 200 tecken lång.';
    }
      
    //uppdate error state if there are errors and cancel submit
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    //reset prior errors if no errors
    setErrors({});

    const newTodo = { title, description, status };
    onAddTodo(newTodo);

    //Clear form fields after submitting
    setTitle('');
    setDescription('');
    setStatus('Ej påbörjad');
  };

  return (
    <form className='AddForm' onSubmit={handleSubmit} noValidate>
      <label>Rubrik:</label>
      <br />
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          if (errors.title && e.target.value.trim().length >= 3) {
            //Clear error when ok
            setErrors(prevErrors => ({ ...prevErrors, title: undefined }));
          }
        }}
        required
      />
      {errors.title && <div className="error">{errors.title}</div>}

      <br />
      <label>Beskrivning:</label>
      <br />
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          if (errors.description && e.target.value.length <= 200) {
            //Clear error when ok
            setErrors(prevErrors => ({ ...prevErrors, description: undefined }));
          }
        }}
        required
      />
      {errors.description && <div className="error">{errors.description}</div>}

      <br />
      <label>Status:</label>
      <br />
      <select value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option>Ej påbörjad</option>
        <option>Pågående</option>
        <option>Avklarad</option>
      </select>

      <br />
      <button type="submit">Spara</button>
    </form>
  );
};

export default AddTodoForm;
