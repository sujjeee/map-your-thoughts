import { tagColorMap } from "@/lib/constants"
import { sql } from "drizzle-orm"
import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core"
import { createInsertSchema } from "drizzle-zod"
import { z } from "zod"

const tagKeys = Object.keys(tagColorMap) as [string, ...string[]]

export const users = sqliteTable("users", {
  id: integer("id").primaryKey().notNull(),
  message: text("message", { length: 500 }).notNull(),
  country: text("country").notNull(),
  longitude: real("longitude").notNull(),
  latitude: real("latitude").notNull(),
  timestamp: text("timestamp").default(sql`CURRENT_TIMESTAMP`),
  tag: text("tag", { enum: tagKeys }),
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
  tag: z.enum(tagKeys, {
    message: "Please select a tag",
  }),
})
