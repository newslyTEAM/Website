"use client";

import { useActionState } from "react";
import { Input, Label, Select, Textarea, FieldError } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { submitContact, type FormState } from "@/app/actions/submit";
import {
  contactInterests,
  revenueRanges,
  yearsInBusinessRanges,
} from "@/lib/validation";

const initial: FormState = { ok: false };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);
  const err = state.errors ?? {};

  return (
    <form
      action={formAction}
      className="bg-white rounded-lg border border-line p-7 md:p-10 shadow-[var(--shadow-soft)] space-y-7"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            required
            aria-invalid={!!err.firstName}
            aria-describedby={err.firstName ? "firstName-err" : undefined}
          />
          <FieldError id="firstName-err" message={err.firstName} />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input
            id="lastName"
            name="lastName"
            autoComplete="family-name"
            required
            aria-invalid={!!err.lastName}
            aria-describedby={err.lastName ? "lastName-err" : undefined}
          />
          <FieldError id="lastName-err" message={err.lastName} />
        </div>
      </div>

      <div>
        <Label htmlFor="company">Company name</Label>
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

      <div className="grid gap-5 md:grid-cols-2">
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
        <div>
          <Label htmlFor="phone" optional>
            Phone
          </Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
      </div>

      <div>
        <Label htmlFor="website" optional>
          Website
        </Label>
        <Input id="website" name="website" type="url" autoComplete="url" placeholder="https://" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <Label htmlFor="revenueRange">Annual revenue</Label>
          <Select id="revenueRange" name="revenueRange" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {revenueRanges.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </Select>
          <FieldError id="revenueRange-err" message={err.revenueRange} />
        </div>
        <div>
          <Label htmlFor="yearsInBusiness">Years in business</Label>
          <Select id="yearsInBusiness" name="yearsInBusiness" required defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {yearsInBusinessRanges.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </Select>
          <FieldError id="yearsInBusiness-err" message={err.yearsInBusiness} />
        </div>
      </div>

      <div>
        <Label htmlFor="interest">What are you interested in?</Label>
        <Select id="interest" name="interest" required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {contactInterests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </Select>
        <FieldError id="interest-err" message={err.interest} />
      </div>

      <div>
        <Label htmlFor="challenge">What is your biggest challenge right now?</Label>
        <Textarea
          id="challenge"
          name="challenge"
          rows={5}
          required
          aria-invalid={!!err.challenge}
          aria-describedby={err.challenge ? "challenge-err" : undefined}
          placeholder="A short honest answer helps us point you in the right direction."
        />
        <FieldError id="challenge-err" message={err.challenge} />
      </div>

      {state.formError ? (
        <p className="text-red-700 text-[0.875rem]" role="alert">
          {state.formError}
        </p>
      ) : null}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
        <p className="text-[0.8125rem] text-slate">
          We read every message. Expect a personal reply within one business day.
        </p>
        <Button type="submit" variant="primary" size="lg" withArrow disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}
