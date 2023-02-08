import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Styles from '../Styles/components/application-task-buttons.module.scss'
import { Tasks } from '../constants/tasks.enum'

interface PropsInterface {
  tasks: Array<Tasks>
  currentTask: Tasks
  handleClick: (value: Tasks) => void
}

export default function ApplicationTaskButtons(props: PropsInterface) {
  const { tasks, currentTask, handleClick } = props

  return tasks.length > 1 ? (
    <div className={Styles.form}>
      <FormControl>
        <FormLabel className={Styles.formLabel}>TASKS</FormLabel>
        <RadioGroup
          row={true}
          value={currentTask}
          onClick={(event: any) => {
            const el = event.target as HTMLInputElement
            // bugs trigger twice
            if (el.textContent) {
              return
            }
            const value = el.getAttribute('value')
            handleClick(value as Tasks)
          }}
        >
          {tasks.map((task, index) => (
            <FormControlLabel
              key={index}
              value={task}
              control={<Radio />}
              label={task}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  ) : (
    <div />
  )
}
