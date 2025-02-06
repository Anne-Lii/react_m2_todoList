import './Todo.css'

const Todo = ({todo} : {todo: any}) => {

  //colorchange on status
  const statusColor = todo.status ==='Ej påbörjad' ? 'rgb(252, 128, 128)' :todo.status ==='Påbörjad' ? 'rgb(230, 173, 87)' : 'rgb(106, 236, 113)'

  return (
    <section>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
        <p style={{color : statusColor}}><strong>{todo.status}</strong></p>
    </section>
  )
}

export default Todo
