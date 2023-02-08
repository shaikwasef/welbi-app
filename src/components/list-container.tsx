import Styles from '../Styles/components/list-container.module.scss'
import useApiGet from '../helpers/hooks/use-api-get'
import ListElement from './list-element'
import { Tasks } from '../constants/tasks.enum'
import { getApiForTask } from '../helpers/api-helper'
import { IResidentList, IProgramList } from '../interfaces'

interface PropsInterface {
  selectedTask: Tasks
}

export default function ListContainer(props: PropsInterface) {
  const { selectedTask } = props
  const [listData, error, loading] = useApiGet<IResidentList & IProgramList>(
    getApiForTask(selectedTask),
  )

  return (
    <div className={Styles.listContainer}>
      {listData.map((listItem) => (
        <ListElement
          name={listItem.name}
          room={listItem.room}
          location={listItem.location}
          attendance={listItem.attendance}
        />
      ))}
    </div>
  )
}
