import { Tasks } from '../constants/tasks.enum'
import FormComponent from './form-component'
import ListContainer from './list-container'

interface PropsInterface {
  selectedTask: Tasks
}

export default function SelectedComponent(props: PropsInterface) {
  const { selectedTask } = props
  if (selectedTask === Tasks.ENROLL) {
    return <FormComponent />
  }
  return <ListContainer selectedTask={selectedTask} />
}
