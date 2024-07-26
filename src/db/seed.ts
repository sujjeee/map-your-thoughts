import { faker } from "@faker-js/faker"
import { db } from "."
import { users } from "./schemas"
import { tagColorMap } from "@/lib/constants"

async function seedData() {
  // Create 20 users
  // await Promise.all(
  //   Array.from({ length: 20 }).map(async () => {
  //     await db.insert(users).values({
  //       message: faker.lorem.sentence(),
  //       country: faker.location.country(),
  //       tag: faker.helpers.arrayElement(Object.keys(tagColorMap)),
  //       longitude: faker.location.longitude(),
  //       latitude: faker.location.latitude(),
  //     })
  //   }),
  // )
  const usersData = [
    {
      id: 1,
      message: "What are you building today?",
      country: "India",
      longitude: 78.00780004953151,
      latitude: 27.18116007506319,
      timestamp: "2024-07-24 12:27:24",
      __drizzlerowid__: 1,
    },
    {
      id: 2,
      message:
        "404 job not found. Tech layoffs hit hard, but staying optimistic.",
      country: "Germany",
      longitude: 13.405,
      latitude: 52.52,
      timestamp: "2024-07-25T17:45:00Z",
      __drizzlerowid__: 2,
    },
    {
      id: 3,
      message:
        "My code doesn't work, I have no idea why. My code works, I have no idea why.",
      country: "India",
      longitude: 72.5714,
      latitude: 23.0225,
      timestamp: "2024-07-25T13:10:00Z",
      __drizzlerowid__: 3,
    },
    {
      id: 4,
      message:
        "Production server crashed again. Turns out someone pushed directly to main. Ugh.",
      country: "India",
      longitude: 76.2711,
      latitude: 9.9312,
      timestamp: "2024-07-25T16:00:00Z",
      __drizzlerowid__: 4,
    },
    {
      id: 5,
      message:
        "Our startup just pivoted for the 5th time this year. I'm getting dizzy.",
      country: "India",
      longitude: 78.4867,
      latitude: 17.385,
      timestamp: "2024-07-25T14:20:00Z",
      __drizzlerowid__: 5,
    },
    {
      id: 6,
      message:
        "Why do programmers prefer dark mode? Because light attract bugs!",
      country: "India",
      longitude: 77.5946,
      latitude: 12.9716,
      timestamp: "2024-07-25T11:15:00Z",
      __drizzlerowid__: 6,
    },
    {
      id: 7,
      message:
        "Just got laid off. Silver lining: I no longer have to deal with our legacy codebase.",
      country: "India",
      longitude: 88.3639,
      latitude: 22.5726,
      timestamp: "2024-07-25T11:55:00Z",
      __drizzlerowid__: 7,
    },
    {
      id: 8,
      message:
        "Accidentally pushed API keys to public repo. Heart attack averted, crisis managed.",
      country: "United States",
      longitude: -122.4194,
      latitude: 37.7749,
      timestamp: "2024-07-25T08:00:00Z",
      __drizzlerowid__: 8,
    },
    {
      id: 9,
      message:
        "Finally fixed a bug that's been haunting our team for weeks. Time for a victory dance!",
      country: "India",
      longitude: 80.2707,
      latitude: 13.0827,
      timestamp: "2024-07-25T09:45:00Z",
      __drizzlerowid__: 9,
    },
    {
      id: 10,
      message:
        "Spent 3 hours debugging only to realize I forgot a semicolon. Classic Monday.",
      country: "India",
      longitude: 72.8777,
      latitude: 19.076,
      timestamp: "2024-07-25T10:30:00Z",
      __drizzlerowid__: 10,
    },
    {
      id: 11,
      message:
        "Third coffee of the day. Bug still not fixed. Considering a career in goat farming.",
      country: "Brazil",
      longitude: -46.6333,
      latitude: -23.5505,
      timestamp: "2024-07-25T19:00:00Z",
      __drizzlerowid__: 11,
    },
    {
      id: 12,
      message: "Why do Java developers wear glasses? Because they don't C#!",
      country: "India",
      longitude: 77.1025,
      latitude: 28.7041,
      timestamp: "2024-07-25T15:30:00Z",
      __drizzlerowid__: 12,
    },
    {
      id: 13,
      message:
        "Client wants to add a 'small feature'. Turns out it requires rewriting half the app.",
      country: "Canada",
      longitude: -79.3832,
      latitude: 43.6532,
      timestamp: "2024-07-25T12:25:00Z",
      __drizzlerowid__: 13,
    },
    {
      id: 14,
      message:
        "Spent all day optimizing a function. Improved runtime by 0.01 seconds. Worth it?",
      country: "Netherlands",
      longitude: 4.9041,
      latitude: 52.3676,
      timestamp: "2024-07-25T14:55:00Z",
      __drizzlerowid__: 14,
    },
    {
      id: 15,
      message:
        "Our AI model achieved 99% accuracy! On the training data. 10% on real-world data. Back to the drawing board.",
      country: "Japan",
      longitude: 139.6917,
      latitude: 35.6895,
      timestamp: "2024-07-25T06:40:00Z",
      __drizzlerowid__: 15,
    },
    {
      id: 16,
      message:
        "Just found out our 'cutting-edge' tech stack is now considered legacy. Time flies.",
      country: "Sweden",
      longitude: 18.0686,
      latitude: 59.3293,
      timestamp: "2024-07-25T15:10:00Z",
      __drizzlerowid__: 16,
    },
    {
      id: 17,
      message: "Why do programmers hate nature? It has too many bugs.",
      country: "United Kingdom",
      longitude: -0.1276,
      latitude: 51.5074,
      timestamp: "2024-07-25T16:40:00Z",
      __drizzlerowid__: 17,
    },
    {
      id: 18,
      message:
        "Just realized I've been spelling 'function' as 'funtion' all day. No wonder nothing worked.",
      country: "Poland",
      longitude: 21.0122,
      latitude: 52.2297,
      timestamp: "2024-07-25T13:50:00Z",
      __drizzlerowid__: 18,
    },
    {
      id: 19,
      message:
        "Dockerized our app. Now it works on my machine AND your machine!",
      country: "Singapore",
      longitude: 103.8198,
      latitude: 1.3521,
      timestamp: "2024-07-25T09:30:00Z",
      __drizzlerowid__: 19,
    },
    {
      id: 20,
      message:
        "Why did the developer go broke? Because he used up all his cache!",
      country: "Australia",
      longitude: 151.2093,
      latitude: -33.8688,
      timestamp: "2024-07-25T07:15:00Z",
      __drizzlerowid__: 20,
    },
    {
      id: 21,
      message:
        "My code is so clean, it doesn't need comments. Future me will understand, right?",
      country: "Israel",
      longitude: 34.7818,
      latitude: 32.0853,
      timestamp: "2024-07-25T18:20:00Z",
      __drizzlerowid__: 21,
    },
    {
      id: 22,
      message:
        "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
      country: "South Korea",
      longitude: 126.978,
      latitude: 37.5665,
      timestamp: "2024-07-25T08:25:00Z",
      __drizzlerowid__: 22,
    },
    {
      id: 23,
      message:
        "Just got promoted to Senior Bug Creator. I mean, Senior Developer.",
      country: "Finland",
      longitude: 24.9384,
      latitude: 60.1699,
      timestamp: "2024-07-25T16:15:00Z",
      __drizzlerowid__: 23,
    },
    {
      id: 24,
      message:
        "Lost my job to AI. Plot twist: I'm the one who developed it. Task failed successfully?",
      country: "France",
      longitude: 2.3522,
      latitude: 48.8566,
      timestamp: "2024-07-25T17:30:00Z",
      __drizzlerowid__: 24,
    },
    {
      id: 25,
      message:
        "Tried pair programming today. Turns out two confused developers are better than one!",
      country: "Ireland",
      longitude: -6.2603,
      latitude: 53.3498,
      timestamp: "2024-07-25T14:35:00Z",
      __drizzlerowid__: 25,
    },
    {
      id: 26,
      message:
        "Refactored the entire codebase. Now no one understands it, including me.",
      country: "Switzerland",
      longitude: 8.5417,
      latitude: 47.3769,
      timestamp: "2024-07-25T15:50:00Z",
      __drizzlerowid__: 26,
    },
    {
      id: 27,
      message: "Running ML application on device is the future.",
      country: "Australia",
      longitude: 144.97056389253203,
      latitude: -37.8249150314295,
      timestamp: "2024-07-25 07:16:47",
      __drizzlerowid__: 27,
    },
    {
      id: 28,
      message: "If you are looking for a pretty girl visit us ;)",
      country: "Czechia",
      longitude: 16.606140180774617,
      latitude: 49.195530219532344,
      timestamp: "2024-07-25 07:52:16",
      __drizzlerowid__: 28,
    },
    {
      id: 29,
      message:
        "Just gave round 1 of interview, they taking too much time to call me for round 2 :(. ",
      country: "India",
      longitude: 77.16130942661279,
      latitude: 28.650980415427124,
      timestamp: "2024-07-25 08:22:10",
      __drizzlerowid__: 29,
    },
    {
      id: 30,
      message: "Well this is cool, ",
      country: "India",
      longitude: 88.38156639694473,
      latitude: 22.522235835655195,
      timestamp: "2024-07-25 10:45:23",
      __drizzlerowid__: 30,
    },
    {
      id: 31,
      message: "Great project, good job sujjeee",
      country: "Egypt",
      longitude: 29.94430451683664,
      latitude: 31.20038626878563,
      timestamp: "2024-07-25 10:46:00",
      __drizzlerowid__: 31,
    },
    {
      id: 32,
      message: "Cool one",
      country: "Vietnam",
      longitude: 106.66363384902104,
      latitude: 10.783135630874872,
      timestamp: "2024-07-25 13:40:35",
      __drizzlerowid__: 32,
    },
    {
      id: 33,
      message: "#RutoMustGo",
      country: "Kenya",
      longitude: 36.848804035654595,
      latitude: -1.3237520868291743,
      timestamp: "2024-07-25 13:57:28",
      __drizzlerowid__: 33,
    },
    {
      id: 34,
      message:
        "Why it feels that you need to suck someone's D to get a job offer with more than 10 years of exp being a web dev :(",
      country: "Colombia",
      longitude: -74.06932345849462,
      latitude: 4.740303662765231,
      timestamp: "2024-07-25 15:44:41",
      __drizzlerowid__: 34,
    },
    {
      id: 35,
      message: "I've got so much to do, yet I'm procrastinating.",
      country: "Tunisia",
      longitude: 10.135364131865236,
      latitude: 36.815344429072674,
      timestamp: "2024-07-25 17:15:49",
      __drizzlerowid__: 35,
    },
    {
      id: 36,
      message: "Do emojis work? 🤔",
      country: "United Kingdom",
      longitude: -0.033233758371567425,
      latitude: 51.513227192778615,
      timestamp: "2024-07-25 17:25:35",
      __drizzlerowid__: 36,
    },
    {
      id: 37,
      message: "i miss this shitty country of mine. ",
      country: "Germany",
      longitude: 6.756408303762688,
      latitude: 51.41958372611434,
      timestamp: "2024-07-25 20:54:49",
      __drizzlerowid__: 37,
    },
  ]

  await Promise.all(
    usersData.map(async (user) => {
      await db.insert(users).values({
        id: user.id,
        message: user.message,
        country: user.country,
        longitude: user.longitude,
        latitude: user.latitude,
        timestamp: user.timestamp,
        tag: "other",
      })
    }),
  )

  console.log("Data seeded successfully")
}

seedData().catch(console.error)
