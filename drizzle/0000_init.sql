CREATE TABLE IF NOT EXISTS "contact_submissions" (
  "id" serial PRIMARY KEY NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  "company" text NOT NULL,
  "email" text NOT NULL,
  "phone" text,
  "website" text,
  "revenue_range" text NOT NULL,
  "years_in_business" text NOT NULL,
  "interest" text NOT NULL,
  "challenge" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "intake_submissions" (
  "id" serial PRIMARY KEY NOT NULL,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL,
  "full_name" text NOT NULL,
  "email" text NOT NULL,
  "phone" text NOT NULL,
  "company" text NOT NULL,
  "website" text,
  "industry" text NOT NULL,
  "years_in_business" text NOT NULL,
  "revenue_range" text NOT NULL,
  "team_size" text NOT NULL,
  "uses_ai" text NOT NULL,
  "ai_goals" text NOT NULL,
  "unclear_about" text,
  "current_systems" text,
  "next_step" text NOT NULL
);
