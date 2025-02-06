import './Todo.css'


const Todo = ({todo} : {todo: any}) => {

  //colorchange on status
  const statusColor = todo.status ==='Ej påbörjad' ? 'rgb(252, 128, 128)' :todo.status ==='Påbörjad' ? 'rgb(230, 173, 87)' : 'rgb(106, 236, 113)'

  return (
    <section>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p style={{color : statusColor}}><strong>{todo.status}</strong></p>

        <form>
          <label htmlFor="status">Ändra status: </label>
          <br/>
          <select name="status" id="status" defaultValue={todo.status}>
          <option value="">-- Välj status --</option>
            <option>Ej påbörjad</option>
            <option>Påbörjad</option>
            <option>Avklarad</option>
          </select>
        </form>

    </section>
  )
}

export default Todo
