import Specialist from '#models/specialist'
import { faker } from '@faker-js/faker'

export default class SpecialistSeeder {
  async run() {
    for (let i = 0; i < 10; i++) {
      await Specialist.create({
        nombreCompleto: faker.person.fullName(),
        especialidad: faker.person.jobTitle(),
        registroProfesional: faker.string.alphanumeric(8).toUpperCase(),
        isActive: faker.datatype.boolean(),
      })
    }
  }
}
