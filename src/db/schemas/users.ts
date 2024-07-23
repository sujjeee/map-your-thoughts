import { sqliteTable, text, real, integer } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
  message: text("message").notNull(),
  country: text("country"),
  longitude: real("longitude"),
  latitude: real("latitude"),
})
