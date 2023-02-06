import  {expect,test} from 'vitest'
import { Appointment } from './appointment'
import { getFutureDate } from '../tests/utils/get-future-tests'

  test('create an appointment', () => {
  const startsAt = getFutureDate('2024-02-04')
  const endsAt = getFutureDate('2024-02-05')
     
const appointment = new Appointment({
  customer: 'John Doe',
  startsAt,
  endsAt
})
  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
})

test('create an appointment', () => {
  const startsAt = getFutureDate('2024-02-04')
  const endsAt = getFutureDate('2024-02-03')

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt
    })
  }).toThrow()
})

test('cannot create an appointment with end date before start date', () => {
  const startsAt = new Date()
  const endsAt = new Date()

  startsAt.setDate(startsAt.getDate() -1)
  endsAt.setDate(endsAt.getDate() +3)

  expect(() => {
    return new Appointment({
      customer:'John Doe',
      startsAt,
      endsAt
    })
  }).toThrow()
})