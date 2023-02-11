import {
  Box,
  Chip,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from '@mui/material'

interface PropsInterface {
  listItems: string[]
  setState: React.Dispatch<React.SetStateAction<string[]>>
  currentState: string[]
  label: string
}

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export default function MultiSelectComponent(props: PropsInterface) {
  const { listItems, setState, currentState, label } = props
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
        <Select
          multiple
          label={label}
          value={currentState}
          onChange={(event: SelectChangeEvent<typeof listItems>) => {
            const {
              target: { value },
            } = event
            setState(typeof value === 'string' ? value.split(',') : value)
          }}
          input={<OutlinedInput label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {listItems.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
