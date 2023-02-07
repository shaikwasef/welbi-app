import Styles from '../Styles/components/list-container.module.scss'
import { useState } from 'react'
import ListElement from './list-element'

interface PropsInterface {}

export default function ListContainer(props: PropsInterface) {
  const [list, setLists] = useState<any[]>([])

  return (
    <div className={Styles.repositoryContainer}>
      <ListElement />
    </div>
  )
}
