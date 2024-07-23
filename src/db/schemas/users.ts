import { sqliteTable, text, real } from "drizzle-orm/sqlite-core"

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  message: text("message").notNull(),
  country: text("country"),
  longitude: real("longitude"),
  latitude: real("latitude"),
})
