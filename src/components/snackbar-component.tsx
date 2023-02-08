import { Alert, Snackbar } from '@mui/material'

interface PropsInterface {
  open: boolean
  message: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SnackBarComponent(props: PropsInterface) {
  const { open, message, setOpen } = props

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      {message === 'Success' ? (
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Success!!!
        </Alert>
      ) : (
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      )}
    </Snackbar>
  )
}
