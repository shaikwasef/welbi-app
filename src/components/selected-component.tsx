import { Tasks } from '../constants/tasks.enum'
import ListContainer from './list-container'

interface PropsInterface {
  selectedTask: Tasks
}

export default function SelectedComponent(props: PropsInterface) {
  const { selectedTask } = props

  if (selectedTask !== Tasks.ENROLL) {
    return <ListContainer selectedTask={selectedTask} />
  }
  return <div>Enroll</div>
}
