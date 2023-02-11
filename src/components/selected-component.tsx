import { Tasks } from '../constants/tasks.enum'
import AddResidentFormComponent from './add-resident-form-component'
import AddProgramFormComponent from './add-program-form-component'
import FormComponent from '../components/attend-form-component'
import ListContainer from './list-container'

interface PropsInterface {
  selectedTask: Tasks
}

export default function SelectedComponent(props: PropsInterface) {
  const { selectedTask } = props
  if (selectedTask === Tasks.ATTEND) {
    return <FormComponent />
  }
  if (selectedTask === Tasks.ADD_RESIDENT) {
    return <AddResidentFormComponent />
  }
  if (selectedTask === Tasks.ADD_PROGRAM) {
    return <AddProgramFormComponent />
  }
  return <ListContainer selectedTask={selectedTask} />
}
