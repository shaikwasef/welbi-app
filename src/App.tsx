import { useState } from 'react'
import { ApplicationTaskButtons, SelectedComponent } from './components'
import { applicationTasks } from './constants/constants'
import './App.css'
import { Tasks } from './constants/tasks.enum'
import logo from './assets/welbi_logo.png'

export function App() {
  const handleTaskChange = (selectedTask: Tasks) => {
    setTask(selectedTask)
  }
  const [task, setTask] = useState<Tasks>(applicationTasks[0])

  return (
    <div className="appContainer">
      <img src={logo} alt="Logo" className="appLogo" />
      <ApplicationTaskButtons
        tasks={applicationTasks}
        currentTask={task}
        handleClick={handleTaskChange}
      />
      <SelectedComponent selectedTask={task} />
    </div>
  )
}
