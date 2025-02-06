
import './App.css'
import { useState, useEffect } from 'react'
import Todo from './components/Todo'
import AddTodoForm from './components/AddTodoForm'

//interface todos
interface TodoInterface {
  _id: string, 
  title: string,
  description: string,
  status: string
}

function App() {

  //states for the component
  const [todos, setTodos] = useState<TodoInterface[] | []>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  //call function fetchData with useEffect
  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      setLoading(true); //loading when fetching data

      const res = await fetch('https://m2-api-1.onrender.com/task')

      if (!res.ok) {
        throw Error('Failure' + res.status);
      }

      const data = await res.json();

      //Get only tasks-array from API
      if (Array.isArray(data.tasks)) {
        setTodos(data.tasks);
      } else {
        throw new Error('Unexpected data format');
      }

    } catch (error) {

      setError('There is no todos...');

    } finally {

      setLoading(false);

    }
  }

  const addTodo = async (newTodo: { title: string, description: string, status: string }) => {
    try {
      const res = await fetch('https://m2-api-1.onrender.com/task', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      });

      if (!res.ok) {
        throw new Error('Failed to add task');
      }

      fetchData(); //Re-fetch todos after adding a new one
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const ShowAddForm = () => {
    setShowForm(!showForm);
  };


  return (
    <main>
      <h1>Checklist:</h1>

      <div className='add_task_btn' onClick={ShowAddForm}> + Lägg till </div>
      {showForm && <AddTodoForm onAddTodo={addTodo} />}

      {loading && <p>Laddar...</p>}
      {error && <p>{error}</p>} 

      <div className='todos'>
        { todos && todos.map((todo) => (
            <Todo todo = {todo} key={todo._id} onStatusUpdate={fetchData}/>
          ))}
      </div>

    </main>
  )
}

export default App
