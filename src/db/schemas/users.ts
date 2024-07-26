import { sql } from "drizzle-orm"
import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createInsertSchema } from "drizzle-zod"

export const users = sqliteTable("users", {
  id: integer("id").primaryKey().notNull(),
  message: text("message", { length: 500 }).notNull(),
  country: text("country").notNull(),
  longitude: real("longitude").notNull(),
  latitude: real("latitude").notNull(),
  timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
})

const baseUsersSchema = createInsertSchema(users)

export const usersSchema = baseUsersSchema.extend({
  message: baseUsersSchema.shape.message.min(3, "Please type a message"),
  country: baseUsersSchema.shape.country.min(
    2,
    "Please provide a country name",
  ),
  latitude: baseUsersSchema.shape.latitude.min(1, "Invalid latitude"),
  longitude: baseUsersSchema.shape.longitude.min(1, "Invalid longitude "),
})
