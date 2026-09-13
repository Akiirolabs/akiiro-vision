import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const supportTickets = sqliteTable("support_tickets", {
  id: text("id").primaryKey(),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"),
  source: text("source").notNull().default("website-agent"),
  createdAt: text("created_at").notNull(),
});
