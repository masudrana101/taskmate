import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";
import "./TaskList.css";
import "./AddTask.css";

export const TaskList = ({tasks, setTasks}) => {
  const [show, setShow] = useState([true]);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <section className="tasklist">
      <ul>
        <div className="header">
           <h1>Task List </h1>
          <button className="trigger" onClick={() => setShow(!show)}>{show ? "Hidd" : "show"}{" "}</button>
        </div>
        {show && tasks.map((task) => (
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
