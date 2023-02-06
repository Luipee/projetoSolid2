import { describe, expect, it } from "vitest"
import { Appointment } from "../entities/appointment"
import { getFutureDate } from "../tests/utils/get-future-tests"
import { CreateAppointment } from "./create-appointment"
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointment"

describe('Create Appointment', () => {
  it('should be able to create an appointment' , async () => {
    const startsAt = getFutureDate('2024-02-04')
    const endsAt = getFutureDate('2024-02-05')

    const appointmentsRepository = new InMemoryAppointmentsRepository()
    const createAppointment = new CreateAppointment(
      appointmentsRepository
    )

    await createAppointment.execute({
      customer:'John Doe', 
      startsAt,
      endsAt
    })

    expect(createAppointment.execute({
      customer: 'John Doe',
      startsAt: getFutureDate('2024-02-04'),
      endsAt: getFutureDate('2024-02-08')
   })).rejects.toBeInstanceOf(Error)
  })
})