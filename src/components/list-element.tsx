import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Styles from '../Styles/components/list-element.module.scss'

interface PropsInterface {}

export default function ListElement(props: PropsInterface) {
  return (
    <Card className={Styles.card}>
      <CardContent>
        <Typography variant="h5" component="div">
          name
        </Typography>
        <Typography className={Styles.description}>description</Typography>
      </CardContent>
    </Card>
  )
}
