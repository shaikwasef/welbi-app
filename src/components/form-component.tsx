import {
  Alert,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
} from '@mui/material'
import axios, { AxiosError } from 'axios'
import React, { useState } from 'react'
import { apiEndPoints } from '../api-constants'
import { config } from '../helpers/api-helper'
import { IApiError } from '../interfaces'
import { Status } from '../interfaces/resident-list.interface'
import Styles from '../Styles/components/form-component.module.scss'

export default function FormComponent() {
  const [residentId, setResidentId] = useState('')
  const [programId, setProgramId] = useState('')
  const [status, setStatus] = useState<Status>(Status.ACTIVE)
  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Failure!! please check form')

  const submitForm = async (e: any) => {
    e.preventDefault()
    if (!residentId.length || !programId.length) {
      setOpen(true)
    } else {
      try {
        const postApiUrl = `${apiEndPoints.WELBI_POST_PROGRAM}/${programId}/attend`
        await axios.post(
          postApiUrl,
          {
            residentId: parseInt(residentId),
            status: status,
          },
          config,
        )
        setMessage('Success')
        setOpen(true)
        setResidentId('')
        setProgramId('')
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
          label="Program ID"
          value={programId}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setProgramId(event.target.value)
          }}
        />
        <TextField
          label="Registration ID"
          value={residentId}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setResidentId(event.target.value)
          }}
        />
        <Select
          defaultValue={status}
          value={status}
          onChange={(event: SelectChangeEvent) =>
            setStatus(event.target.value as Status)
          }
        >
          {Object.values(Status).map((option: string, index: number) => (
            <MenuItem value={option} key={index}>
              {option}
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" onClick={submitForm} variant="contained">
          SUBMIT
        </Button>
      </form>
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
    </>
  )
}
