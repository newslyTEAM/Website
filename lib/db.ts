import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

let cached: NeonHttpDatabase<typeof schema> | null = null;

export function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  if (!cached) {
    const sql = neon(url);
    cached = drizzle(sql, { schema });
  }
  return cached;
}

export { schema };
