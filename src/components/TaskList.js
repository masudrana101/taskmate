import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";
import "./TaskList.css";
import "./AddTask.css";

export const TaskList = () => {
  const [task, setTask] = useState([
    { id: 1114, name: "This is a sample.", completed: true },
    { id: 1115, name: "This is a sample 2.", completed: true },
    { id: 1116, name: "This is a sample 3.", completed: false },
  ]);
  const [show, setShow] = useState([true]);

  function handleDelete(id) {
    setTask(task.filter((task) => task.id !== id));
  }

  return (
    <section className="tasklist">
      <ul>
        <div className="header">
           <h1>Task List </h1>
          <button className="trigger" onClick={() => setShow(!show)}>{show ? "Hidd" : "show"}{" "}</button>
      
        </div>
        {show && task.map((task) => (
              <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
        ))}
        
      </ul>





      <BoxCard result="success">
        <p className="title">This is a box</p>
        <p className="description">
          This box is created to demonstrate CSS variables and box shadows.
        </p>
      </BoxCard>

      <BoxCard result="warning">
        <p className="title">This is a box</p>
        <p className="description">
          This box is created to demonstrate CSS variables and box shadows.
        </p>
      </BoxCard>



    </section>
  );
};

export default TaskList;
