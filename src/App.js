import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctor Appointment',
          day: 'Deb 5th at 2:30pm',
          remainder: true,
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: 'Deb 6th at 1:30pm',
          remainder: true,
      },
      {
          id: 3,
          text: 'Food Shooping',
          day: 'Deb 5th at 2:30pm',
          remainder: false,
      }
  ])
 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
    {...task, remainder: !task.remainder} : task))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length >0 ? <Tasks tasks = {tasks} 
      onDelete={deleteTask}
      onToggle = {toggleReminder}/>: 'No Tasks to show'}
    </div>
    
  );
}

export default App;
 