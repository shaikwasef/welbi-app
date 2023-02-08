import { IApiError } from '../interfaces/use-api.interface'
import Styles from '../Styles/components/error-components.module.scss'

interface PropsInterface {
  error: IApiError
}
export default function ErrorComponent(props: PropsInterface) {
  const { error } = props
  return (
    <div className={Styles.errorContainer}>
      <h4>{error.status && `Status : ${error.status}`}</h4>
      <h4>Message : {error.message}</h4>
    </div>
  )
}
