"use server";

import { redirect } from "next/navigation";
import {
  contactSchema,
  intakeSchema,
  type ContactInput,
  type IntakeInput,
} from "@/lib/validation";
import { getDb, schema } from "@/lib/db";
import { renderKeyValueHtml, sendLeadEmail } from "@/lib/email";

export type FormState = {
  ok: boolean;
  errors?: Record<string, string>;
  formError?: string;
};

export async function submitContact(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "");
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors };
  }

  const data: ContactInput = parsed.data;

  try {
    const db = getDb();
    if (db) {
      await db.insert(schema.contactSubmissions).values({
        firstName: data.firstName,
        lastName: data.lastName,
        company: data.company,
        email: data.email,
        phone: data.phone || null,
        website: data.website || null,
        revenueRange: data.revenueRange,
        yearsInBusiness: data.yearsInBusiness,
        interest: data.interest,
        challenge: data.challenge,
      });
    } else {
      console.info("[contact] DATABASE_URL not set — skipping DB insert", {
        email: data.email,
      });
    }

    await sendLeadEmail({
      subject: `New contact · ${data.firstName} ${data.lastName} — ${data.company}`,
      html: renderKeyValueHtml("New contact form submission", [
        ["Name", `${data.firstName} ${data.lastName}`],
        ["Company", data.company],
        ["Email", data.email],
        ["Phone", data.phone || ""],
        ["Website", data.website || ""],
        ["Revenue", data.revenueRange],
        ["Years in business", data.yearsInBusiness],
        ["Interest", data.interest],
        ["Challenge", data.challenge],
      ]),
    });
  } catch (err) {
    console.error("[contact] submit failed", err);
    return {
      ok: false,
      formError: "Something went wrong. Please try again in a moment.",
    };
  }

  redirect("/thank-you?kind=contact");
}

export async function submitIntake(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = intakeSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "");
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors };
  }

  const data: IntakeInput = parsed.data;

  try {
    const db = getDb();
    if (db) {
      await db.insert(schema.intakeSubmissions).values({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        website: data.website || null,
        industry: data.industry,
        yearsInBusiness: data.yearsInBusiness,
        revenueRange: data.revenueRange,
        teamSize: data.teamSize,
        usesAi: data.usesAi,
        aiGoals: data.aiGoals,
        unclearAbout: data.unclearAbout || null,
        currentSystems: data.currentSystems || null,
        nextStep: data.nextStep,
      });
    } else {
      console.info("[intake] DATABASE_URL not set — skipping DB insert", {
        email: data.email,
      });
    }

    await sendLeadEmail({
      subject: `New AI Assessment intake · ${data.fullName} — ${data.company}`,
      html: renderKeyValueHtml("New AI Assessment intake", [
        ["Name", data.fullName],
        ["Email", data.email],
        ["Phone", data.phone],
        ["Company", data.company],
        ["Website", data.website || ""],
        ["Industry", data.industry],
        ["Years in business", data.yearsInBusiness],
        ["Revenue", data.revenueRange],
        ["Team size", data.teamSize],
        ["Uses AI today", data.usesAi],
        ["AI goals", data.aiGoals],
        ["Unclear about", data.unclearAbout || ""],
        ["Current systems", data.currentSystems || ""],
        ["Preferred next step", data.nextStep],
      ]),
    });
  } catch (err) {
    console.error("[intake] submit failed", err);
    return {
      ok: false,
      formError: "Something went wrong. Please try again in a moment.",
    };
  }

  redirect("/thank-you?kind=intake");
}
