import { faker } from "@faker-js/faker"
import { db } from "."
import { users } from "./schemas"

async function seedData() {
  // Create 20 users
  await Promise.all(
    Array.from({ length: 20 }).map(async () => {
      await db.insert(users).values({
        message: faker.lorem.sentence(),
        country: faker.location.country(),
        longitude: faker.location.longitude(),
        latitude: faker.location.latitude(),
      })
    }),
  )

  console.log("Data seeded successfully")
}

seedData().catch(console.error)
