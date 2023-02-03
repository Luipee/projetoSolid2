import { expect, test } from 'vitest'
import {  Appointment } from '../entities/appointment'
const startsAt = new Data()
const endsAt = new Data()

endsAt.setDate(endsAt.getDate() + 1)
 

  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt, 
    endsAt
  })

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
}) 
test ('create an appoitment', () => {
  const startsAt   =new Data()