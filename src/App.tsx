import { useState } from 'react'
import { ApplicationTaskButtons } from './components'
import { applicationTasks } from './constants/constants'
import './App.css'
import { Tasks } from './constants/tasks.enum'

export function App() {
  const handleTaskChange = (selectedTask: Tasks) => {
    setTask(selectedTask)
  }
  const [task, setTask] = useState<Tasks>(applicationTasks[0])

  return (
    <div className="appContainer">
      <ApplicationTaskButtons
        tasks={applicationTasks}
        defaultTask={task}
        handleClick={handleTaskChange}
      />
    </div>
  )
}
