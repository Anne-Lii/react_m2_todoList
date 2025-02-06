
import './App.css'
import { useState, useEffect } from 'react'
import Todo from './components/Todo'
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

      setError('Failure fetching todos');

    } finally {

      setLoading(false);

    }
  }


  return (
    <main>
      <h1>Checklist:</h1>

      <div className='add_task_btn'> + Add task</div>

      {loading && <p>Laddar...</p>}
      {error && <p>{error}</p>} 

      <div className='todos'>
        { todos && todos.map((todo) => (
            <Todo todo = {todo} key={todo._id}/>
          ))}
      </div>

    </main>
  )
}

export default App
