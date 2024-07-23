import type { Config } from "drizzle-kit"

export default {
  schema: "./src/db/schema/*",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
  out: "./drizzle",
} satisfies Config
