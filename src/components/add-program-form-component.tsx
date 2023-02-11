import React, { useState } from 'react'
import { Button, Stack, TextField } from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Styles from '../Styles/components/form-component.module.scss'
import { LevelOfCare } from '../interfaces/resident-list.interface'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import SnackBarComponent from './snackbar-component'
import { returnProgramFormStatus } from '../helpers/helpers'
import { apiEndPoints } from '../api-constants'
import axios, { AxiosError } from 'axios'
import { config } from '../helpers/api-helper'
import { IApiError } from '../interfaces'
import { facilitatorsList, hobbies, tagsList } from '../constants/constants'
import MultiSelectComponent from './multi-select-component'
import SelectComponent from './select-component'

export default function AddProgramFormComponent() {
  const [name, setName] = useState('')
  const [isRepeated, setIsRepeated] = useState<string>('')
  const [personHobbies, setPersonHobbies] = useState<string[]>([])
  const [levelOfCare, setLevelOfCare] = useState<string[]>([])
  const [facilitators, setFacilitators] = useState<string[]>([])
  const [dimension, setDimension] = useState<string>('')
  const [tags, setTags] = useState<string[]>([])
  const [allDay, setAllDay] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(null))
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(null))

  const [open, setOpen] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('Failure!! please check form')

  const submitForm = async (e: any) => {
    e.preventDefault()

    if (
      returnProgramFormStatus(
        name,
        personHobbies,
        levelOfCare,
        facilitators,
        dimension,
        tags,
        location,
        startDate,
        endDate,
        allDay,
        isRepeated,
      )
    ) {
      setOpen(true)
    } else {
      try {
        const postApiUrl = apiEndPoints.WELBI_PROGRAM_LIST
        await axios.post(
          postApiUrl,
          {
            name: name,
            isRepeated: 'true' === isRepeated,
            hobbies: personHobbies,
            levelOfCare: levelOfCare,
            facilitators: facilitators,
            dimension: dimension,
            tags: tags,
            allDay: 'true' === allDay,
            location: location,
            start: startDate?.toISOString(),
            end: endDate?.toISOString(),
          },
          config,
        )
        setMessage('Success')
        setOpen(true)
        setName('')
        setIsRepeated('')
        setPersonHobbies([])
        setLevelOfCare([])
        setFacilitators([])
        setDimension('')
        setTags([])
        setAllDay('')
        setLocation('')
        setStartDate(null)
        setEndDate(null)
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
        <SelectComponent
          label={'Is Repeated'}
          currentState={isRepeated}
          listItems={['true', 'false']}
          setState={setIsRepeated}
        />
        <MultiSelectComponent
          label={'Hobbies'}
          listItems={hobbies}
          setState={setPersonHobbies}
          currentState={personHobbies}
        />
        <MultiSelectComponent
          label={'Level of care'}
          listItems={Object.values(LevelOfCare)}
          setState={setLevelOfCare}
          currentState={levelOfCare}
        />
        <MultiSelectComponent
          label={'Facilitators'}
          listItems={facilitatorsList}
          setState={setFacilitators}
          currentState={facilitators}
        />
        <TextField
          label="Dimension"
          value={dimension}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDimension(event.target.value)
          }}
        />
        <MultiSelectComponent
          label={'Tags'}
          listItems={tagsList}
          setState={setTags}
          currentState={tags}
        />
        <SelectComponent
          label={'All day avalability'}
          currentState={allDay.toString()}
          listItems={['true', 'false']}
          setState={setAllDay}
        />
        <TextField
          label="Location"
          value={location}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setLocation(event.target.value)
          }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack spacing={3}>
            <DatePicker
              disableFuture
              label="Birth Date"
              openTo="year"
              views={['year', 'month', 'day']}
              value={startDate}
              onChange={(v: Dayjs | null) => setStartDate(v)}
              renderInput={(params: any) => <TextField {...params} />}
            />
            <DatePicker
              disableFuture
              label="Move In Date"
              openTo="year"
              views={['year', 'month', 'day']}
              value={endDate}
              onChange={(v: Dayjs | null) => setEndDate(v)}
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
