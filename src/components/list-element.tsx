import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IResident } from '../interfaces'
import Styles from '../Styles/components/list-element.module.scss'

interface PropsInterface {
  name: string
  attendance: Array<IResident>
  location?: string
  room?: string
}

export default function ListElement(props: PropsInterface) {
  const { name, attendance, room, location } = props
  return (
    <Card className={Styles.listElement}>
      <CardContent>
        <Typography variant="h5">Name : {name}</Typography>
        <div className={Styles.listInfo}>
          {location ? (
            <Typography>Location : {location ? location : '-'}</Typography>
          ) : (
            <Typography>Room : {room ? room : '-'}</Typography>
          )}
          <Typography>Attendance : {attendance.length}</Typography>
        </div>
      </CardContent>
    </Card>
  )
}
