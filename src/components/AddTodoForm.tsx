import './AddTodoForm.css'
import React, { useState } from 'react';

interface AddTodoFormProps {
  onAddTodo: (newTodo: { title: string, description: string, status: string }) => void;
}

const AddTodoForm = ({ onAddTodo }: AddTodoFormProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Ej påbörjad');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (title.length < 3) {

        alert('Rubriken måste vara minst tre bokstäver');
        return;
    }
      
    if (description.length > 200) {

        alert('Beskrivning får ej vara mer än 200 tecken långt.');
        return;
    }

    const newTodo = { title, description, status };
    onAddTodo(newTodo);

    //Clear form fields after submitting
    setTitle('');
    setDescription('');
    setStatus('Ej påbörjad');
  };

  return (
    <form className='AddForm' onSubmit={handleSubmit}>
      <label>Rubrik:</label>
      <br/>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      
      <br />
      <label>Beskrivning:</label>
      <br />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      
      <br />
      <label>Status:</label>
      <br />
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option>Ej påbörjad</option>
          <option>Pågående</option>
          <option>Avklarad</option>
        </select>
      
      <br />
      <button type="submit">Spara </button>

    </form>
  );
};

export default AddTodoForm;
