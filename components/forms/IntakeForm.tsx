"use client";

import { useActionState } from "react";
import { Input, Label, Select, Textarea, FieldError, FieldHint } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { submitIntake, type FormState } from "@/app/actions/submit";
import {
  nextStepPreferences,
  revenueRanges,
  teamSizeRanges,
  yearsInBusinessRanges,
} from "@/lib/validation";

const initial: FormState = { ok: false };

export function IntakeForm() {
  const [state, formAction, pending] = useActionState(submitIntake, initial);
  const err = state.errors ?? {};

  return (
    <form
      action={formAction}
      className="bg-white rounded-lg border border-line p-7 md:p-10 shadow-[var(--shadow-soft)] space-y-10"
      noValidate
    >
      <Fieldset
        eyebrow="About you"
        title="Who should we be in touch with?"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Label htmlFor="fullName">Full name</Label>
            <Input
              id="fullName"
              name="fullName"
              autoComplete="name"
              required
              aria-invalid={!!err.fullName}
              aria-describedby={err.fullName ? "fullName-err" : undefined}
            />
            <FieldError id="fullName-err" message={err.fullName} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-invalid={!!err.email}
              aria-describedby={err.email ? "email-err" : undefined}
            />
            <FieldError id="email-err" message={err.email} />
          </div>
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={!!err.phone}
            aria-describedby={err.phone ? "phone-err" : undefined}
          />
          <FieldError id="phone-err" message={err.phone} />
        </div>
      </Fieldset>

      <Fieldset eyebrow="About your business" title="Tell us about your company.">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              name="company"
              autoComplete="organization"
              required
              aria-invalid={!!err.company}
              aria-describedby={err.company ? "company-err" : undefined}
            />
            <FieldError id="company-err" message={err.company} />
          </div>
          <div>
            <Label htmlFor="website" optional>
              Website
            </Label>
            <Input id="website" name="website" type="url" autoComplete="url" placeholder="https://" />
          </div>
        </div>

        <div>
          <Label htmlFor="industry">Industry</Label>
          <Input
            id="industry"
            name="industry"
            required
            aria-invalid={!!err.industry}
            aria-describedby={err.industry ? "industry-err" : undefined}
            placeholder="e.g. Professional services, manufacturing, healthcare"
          />
          <FieldError id="industry-err" message={err.industry} />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <Label htmlFor="yearsInBusiness">Years in business</Label>
            <Select id="yearsInBusiness" name="yearsInBusiness" required defaultValue="">
              <option value="" disabled>Select</option>
              {yearsInBusinessRanges.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </Select>
            <FieldError id="yearsInBusiness-err" message={err.yearsInBusiness} />
          </div>
          <div>
            <Label htmlFor="revenueRange">Revenue range</Label>
            <Select id="revenueRange" name="revenueRange" required defaultValue="">
              <option value="" disabled>Select</option>
              {revenueRanges.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </Select>
            <FieldError id="revenueRange-err" message={err.revenueRange} />
          </div>
          <div>
            <Label htmlFor="teamSize">Team size</Label>
            <Select id="teamSize" name="teamSize" required defaultValue="">
              <option value="" disabled>Select</option>
              {teamSizeRanges.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </Select>
            <FieldError id="teamSize-err" message={err.teamSize} />
          </div>
        </div>
      </Fieldset>

      <Fieldset eyebrow="AI today" title="What's happening right now?">
        <div>
          <Label htmlFor="usesAi">Do you currently use any AI tools?</Label>
          <Select id="usesAi" name="usesAi" required defaultValue="">
            <option value="" disabled>Select</option>
            <option>Yes</option>
            <option>Some</option>
            <option>No</option>
            <option>Not sure</option>
          </Select>
          <FieldError id="usesAi-err" message={err.usesAi} />
        </div>

        <div>
          <Label htmlFor="aiGoals">What do you want AI to help with?</Label>
          <Textarea
            id="aiGoals"
            name="aiGoals"
            rows={4}
            required
            aria-invalid={!!err.aiGoals}
            aria-describedby={err.aiGoals ? "aiGoals-err" : undefined}
            placeholder="A few plain-language goals are fine."
          />
          <FieldError id="aiGoals-err" message={err.aiGoals} />
        </div>

        <div>
          <Label htmlFor="unclearAbout" optional>
            What feels most unclear right now?
          </Label>
          <Textarea
            id="unclearAbout"
            name="unclearAbout"
            rows={3}
            placeholder="Optional — but useful for us."
          />
        </div>

        <div>
          <Label htmlFor="currentSystems" optional>
            What systems do you use today?
          </Label>
          <Textarea
            id="currentSystems"
            name="currentSystems"
            rows={3}
            placeholder="e.g. CRM, ERP, ticketing, spreadsheets, custom tools"
          />
        </div>

        <div>
          <Label htmlFor="nextStep">Best next step preference</Label>
          <Select id="nextStep" name="nextStep" required defaultValue="">
            <option value="" disabled>Select</option>
            {nextStepPreferences.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </Select>
          <FieldHint>We'll confirm the right step based on your assessment.</FieldHint>
          <FieldError id="nextStep-err" message={err.nextStep} />
        </div>
      </Fieldset>

      {state.formError ? (
        <p className="text-red-700 text-[0.875rem]" role="alert">
          {state.formError}
        </p>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-line">
        <p className="text-[0.8125rem] text-slate max-w-sm">
          By submitting, your intake goes to our team. We'll confirm details and
          schedule your discovery call by email.
        </p>
        <Button type="submit" variant="primary" size="lg" withArrow disabled={pending}>
          {pending ? "Submitting..." : "Submit application"}
        </Button>
      </div>
    </form>
  );
}

function Fieldset({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="eyebrow mb-3">{eyebrow}</div>
      <h2
        className="text-[1.25rem] md:text-[1.375rem] text-navy leading-tight mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </div>
  );
}
