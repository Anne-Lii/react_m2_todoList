
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

  const fetchData = async () => {
    try {
      setLoading(true); //loading when fetching data

      const res = await fetch('https://m2-api-1.onrender.com/task')
    } catch (error) {
      
    }
  }


  return (
    <main>
      <h2>Checklist:</h2>
    </main>
  )
}

export default App
