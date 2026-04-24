import { z } from "zod";

const trimmed = (min: number, label: string) =>
  z.string().trim().min(min, `${label} is required`);

export const revenueRanges = [
  "Under $1M",
  "$1M – $3M",
  "$3M – $5M",
  "$5M – $7M",
  "$7M – $10M",
  "$10M+",
] as const;

export const yearsInBusinessRanges = [
  "Under 3 years",
  "3 – 6 years",
  "7 – 10 years",
  "10+ years",
] as const;

export const teamSizeRanges = [
  "1 – 5",
  "6 – 20",
  "21 – 50",
  "51 – 200",
  "200+",
] as const;

export const contactInterests = [
  "AI Assessment",
  "Consulting",
  "Courses",
  "Other",
] as const;

export const nextStepPreferences = [
  "Consulting",
  "Courses",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  firstName: trimmed(1, "First name").max(120),
  lastName: trimmed(1, "Last name").max(120),
  company: trimmed(1, "Company name").max(200),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  revenueRange: z.enum(revenueRanges),
  yearsInBusiness: z.enum(yearsInBusinessRanges),
  interest: z.enum(contactInterests),
  challenge: trimmed(1, "Biggest challenge").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const intakeSchema = z.object({
  fullName: trimmed(1, "Full name").max(200),
  email: z.string().trim().email("Enter a valid email"),
  phone: trimmed(1, "Phone").max(40),
  company: trimmed(1, "Company").max(200),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  industry: trimmed(1, "Industry").max(200),
  yearsInBusiness: z.enum(yearsInBusinessRanges),
  revenueRange: z.enum(revenueRanges),
  teamSize: z.enum(teamSizeRanges),
  usesAi: z.enum(["Yes", "Some", "No", "Not sure"]),
  aiGoals: trimmed(1, "AI goals").max(2000),
  unclearAbout: z.string().trim().max(2000).optional().or(z.literal("")),
  currentSystems: z.string().trim().max(2000).optional().or(z.literal("")),
  nextStep: z.enum(nextStepPreferences),
});

export type IntakeInput = z.infer<typeof intakeSchema>;
