
export const TaskCard = ({task, handleDelete, info}) => {
  return (
      <li key={task.id} className={task.completed ? "completed" :  "incompleted"}>
            <span>{task.id} - {task.name} - {info}</span>
            <button onClick={() => handleDelete(task.id)} className='Delete'>Delete</button>
      </li>
    
  )
}
  