import {
  Select,
  MenuItem,
  InputLabel,
  SelectChangeEvent,
  FormControl,
  Box,
} from '@mui/material'

interface PropsInterface {
  listItems: string[]
  setState: React.Dispatch<React.SetStateAction<string>>
  currentState: string | boolean
  label: string
}

export default function SelectComponent(props: PropsInterface) {
  const { listItems, currentState, setState, label } = props

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          label={label}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={
            typeof currentState === 'string'
              ? currentState
              : currentState.toString()
          }
          onChange={(event: SelectChangeEvent) => setState(event.target.value)}
        >
          {listItems.map((option: string, index: number) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
