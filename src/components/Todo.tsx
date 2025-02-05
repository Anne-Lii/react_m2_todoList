

const Todo = ({todo} : {todo: any}) => {
  
  //colorchange on status
  const statusColor = todo.status ==='Ej påbörjad' ? 'red' :todo.status ==='Påbörjad' ? 'orange' : 'green'

  return (
    <section>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
        <p style={{color : statusColor}}><strong>{todo.status}</strong></p>
    </section>
  )
}

export default Todo
