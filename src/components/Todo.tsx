import './Todo.css'



const Todo = ({todo, onStatusUpdate} : {todo: any, onStatusUpdate: Function}) => {

  //colorchange on status
  const statusColor = todo.status ==='Ej påbörjad' ? 'rgb(250, 78, 78)' :todo.status ==='Pågående' ? 'rgb(252, 240, 81)' : 'rgb(106, 236, 113)'

  //Updates status 
  const statusUpdate = async (event : any)=> {
    let newStatus = event.target.value;

    const newStatusTodo = {...todo, status: newStatus}; /* Copying the old values and just change status to newStatus */
    try {
      const res = await fetch('https://m2-api-1.onrender.com/task/' + todo._id, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(newStatusTodo)
      });

      if (!res.ok) {
        throw Error();
      }

      onStatusUpdate(); //triggers parent component to fetchData
      
    } catch (error) {
      console.error('Error updating status:', error);
    }
  
  }

  //remove todo
  const removeTodo = async (event : any)=> { 

    try {
      const res = await fetch('https://m2-api-1.onrender.com/task/' + todo._id, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        },
        
      });

      if (res.status!== 200) {
        throw new Error('Failed to delete task');
      }

      onStatusUpdate(); //triggers parent component to fetchData
      
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  
  }

  return (
    <section>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <p style={{color : statusColor}}>{todo.status}</p>

        <form>
          <label htmlFor="status">Ändra status: </label>
          <br/>
          <select name="status" id="status" defaultValue={todo.status} onChange={statusUpdate}>
            <option>Ej påbörjad</option>
            <option>Pågående</option>
            <option>Avklarad</option>
          </select>
        </form>

        <div className='remove_btn' onClick={removeTodo}>Ta bort</div>

    </section>
  )
}

export default Todo
