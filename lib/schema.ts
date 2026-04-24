import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  website: text("website"),
  revenueRange: text("revenue_range").notNull(),
  yearsInBusiness: text("years_in_business").notNull(),
  interest: text("interest").notNull(),
  challenge: text("challenge").notNull(),
});

export const intakeSubmissions = pgTable("intake_submissions", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company").notNull(),
  website: text("website"),
  industry: text("industry").notNull(),
  yearsInBusiness: text("years_in_business").notNull(),
  revenueRange: text("revenue_range").notNull(),
  teamSize: text("team_size").notNull(),
  usesAi: text("uses_ai").notNull(),
  aiGoals: text("ai_goals").notNull(),
  unclearAbout: text("unclear_about"),
  currentSystems: text("current_systems"),
  nextStep: text("next_step").notNull(),
});
