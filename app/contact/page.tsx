import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about The AI Growth Program, coaching, or follow-on consulting? Reach out and we'll point you in the right direction.",
};

const touchpoints = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@newslyglobal.com",
    href: "mailto:hello@newslyglobal.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "By appointment",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Serving clients across the U.S.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what your business needs"
        lede="Have questions about The AI Growth Program, coaching, or follow-on consulting? Reach out and our team will point you in the right direction."
      />

      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16 items-start">
            <div>
              <h2
                className="text-[1.5rem] md:text-[1.75rem] text-navy mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Direct channels
              </h2>
              <ul className="space-y-5">
                {touchpoints.map((t) => (
                  <li key={t.label} className="flex items-start gap-4">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy/5 text-navy">
                      <t.icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="text-[0.75rem] uppercase tracking-[0.14em] text-slate font-semibold">
                        {t.label}
                      </div>
                      {t.href ? (
                        <a
                          href={t.href}
                          className="text-navy text-[1rem] font-medium"
                        >
                          {t.value}
                        </a>
                      ) : (
                        <div className="text-navy text-[1rem] font-medium">
                          {t.value}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 rounded-lg border border-line bg-bg">
                <div className="eyebrow mb-3">Ready to apply?</div>
                <p className="text-[0.9375rem] text-slate leading-relaxed">
                  If you already know you want in, you can{" "}
                  <a href="/assessment/start" className="text-navy font-semibold underline underline-offset-4 decoration-gold/70">
                    apply for the program
                  </a>{" "}
                  directly. Otherwise, send us a note and we'll set up a discovery call.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
