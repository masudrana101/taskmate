import { useState } from 'react';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import './App.css';



function App() {
   const [tasks, setTasks] = useState([
    { id: 1114, name: "This is a sample.", completed: true },
    { id: 1115, name: "This is a sample 2.", completed: true },
    { id: 1116, name: "This is a sample 3.", completed: false }
  ]);
  

  return (
    <div className={"App"}>
      <Header/>
      <AddTask tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
      <Footer/>

 
    </div>
  );
}

export default App;
