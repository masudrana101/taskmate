import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

export const TaskList = ({info}) => {
  const [task, setTask] = useState([
      { id: 1, name: "This is a sample.", completed: false },
      { id: 11, name: "This is a sample 2.", completed: false },
      { id: 111, name: "This is a sample 3.", completed: true }
    ]);
    const [show, setShow] = useState([true]);
    
     
    function handleDelete(id) {
      setTask(task.filter((task) => task.id !== id));
    }


  return (
    <section className="tasklist">
      <h1>Task List </h1>
      <ul>
      <button  className= 'trigger' onClick={() => setShow(!show)}>Toggle</button>
      { show && task.map((task) => (
        <TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete}/>
            
        ))}
      </ul>    
      <BoxCard result="success">
        <p className="title">This is a box</p>
        <p className="description">This box is created to demonstrate CSS variables and box shadows.</p>
      </BoxCard>
  

       <BoxCard result="warning">
        <p className="title">This is a box</p>
        <p className="description">This box is created to demonstrate CSS variables and box shadows.</p>
      </BoxCard>
    
    </section>
  )
}

export default TaskList;
