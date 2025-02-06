import './Todo.css'


const Todo = ({todo} : {todo: any}) => {

  //colorchange on status
  const statusColor = todo.status ==='Ej påbörjad' ? 'rgb(250, 78, 78)' :todo.status ==='Pågående' ? 'rgb(252, 240, 81)' : 'rgb(106, 236, 113)'

  return (
    <section>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <p style={{color : statusColor}}>{todo.status}</p>

        <form>
          <label htmlFor="status">Ändra status: </label>
          <br/>
          <select name="status" id="status" defaultValue={todo.status}>
            <option>Ej påbörjad</option>
            <option>Pågående</option>
            <option>Avklarad</option>
          </select>
        </form>

    </section>
  )
}

export default Todo
