
import './App.css'
import { useState, useEffect } from 'react'

//interface todos
interface TodoInterface {
  _id: string, 
  title: string,
  description: string,
  status: string
}

function App() {

  //states for the component
  const [todos, setTodos] = useState<TodoInterface | []>([]); 
  const [loading, setLoading] = useState<boolean>(false);
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

      setTodos(data);

    } catch (error) {

      setError('Failure fetching todos');

    } finally {

      setLoading(false);

    }
  }


  return (
    <main>
      <h2>Checklist:</h2>
    </main>
  )
}

export default App
