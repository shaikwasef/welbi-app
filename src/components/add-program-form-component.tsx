import React, { useState } from 'react'
import {
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Styles from '../Styles/components/form-component.module.scss'
import { LevelOfCare, Ambulation } from '../interfaces/resident-list.interface'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import SnackBarComponent from './snackbar-component'
import { returnResidentFormStatus } from '../helpers/helpers'
import { apiEndPoints } from '../api-constants'
import axios, { AxiosError } from 'axios'
import { config } from '../helpers/api-helper'
import { IApiError } from '../interfaces'

export default function AddProgramFormComponent() {
  const [name, setName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [room, setRoom] = useState('')
  const [birthDate, setBirthDate] = useState<Dayjs | null>(dayjs(null))
  const [moveInDate, setMoveInDate] = useState<Dayjs | null>(dayjs(null))
  const [status, setStatus] = useState<LevelOfCare>(LevelOfCare.INDEPENDENT)
  const [ambulation, setAmbulation] = useState<Ambulation>(
    Ambulation.NOLIMITATIONS,
  )
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Failure!! please check form')

  const submitForm = async (e: any) => {
    e.preventDefault()
    if (
      returnResidentFormStatus(
        name,
        firstName,
        lastName,
        room,
        birthDate,
        moveInDate,
      )
    ) {
      setOpen(true)
    } else {
      try {
        const postApiUrl = apiEndPoints.WELBI_RESIDENT_LIST
        await axios.post(
          postApiUrl,
          {
            name: name,
            birthDate: birthDate?.toISOString(),
            moveInDate: moveInDate?.toISOString(),
            levelOfCare: status,
            ambulation: ambulation,
            firstName: firstName,
            lastName: lastName,
            room: room,
          },
          config,
        )
        setMessage('Success')
        setOpen(true)
        setName('')
        setFirstName('')
        setLastName('')
        setRoom('')
        setBirthDate(null)
        setMoveInDate(null)
      } catch (e) {
        const err = e as AxiosError<IApiError, any>
        console.log(err)
        setMessage(err.message)
        setOpen(true)
      }
    }
  }

  return (
    <>
      <form className={Styles.form} onSubmit={submitForm}>
        <TextField
          label="Name"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value)
          }}
        />
        <TextField
          label="First Name"
          value={firstName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(event.target.value)
          }}
        />
        <TextField
          label="Last Name"
          value={lastName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(event.target.value)
          }}
        />
        <TextField
          label="Room"
          value={room}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setRoom(event.target.value)
          }}
        />
        <Select
          defaultValue={status}
          value={status}
          onChange={(event: SelectChangeEvent) =>
            setStatus(event.target.value as LevelOfCare)
          }
        >
          {Object.values(LevelOfCare).map((option: string, index: number) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <Select
          defaultValue={ambulation}
          value={ambulation}
          onChange={(event: SelectChangeEvent) =>
            setAmbulation(event.target.value as Ambulation)
          }
        >
          {Object.values(Ambulation).map((option: string, index: number) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DatePicker
              disableFuture
              label="Birth Date"
              openTo="year"
              views={['year', 'month', 'day']}
              value={birthDate}
              onChange={(v: Dayjs | null) => setBirthDate(v)}
              renderInput={(params: any) => <TextField {...params} />}
            />
            <DatePicker
              disableFuture
              label="Move In Date"
              openTo="year"
              views={['year', 'month', 'day']}
              value={moveInDate}
              onChange={(v: Dayjs | null) => setMoveInDate(v)}
              renderInput={(params: any) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <Button type="submit" onClick={submitForm} variant="contained">
          SUBMIT
        </Button>
      </form>
      <SnackBarComponent open={open} message={message} setOpen={setOpen} />
    </>
  )
}
