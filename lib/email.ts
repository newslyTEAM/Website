type SendArgs = {
  subject: string;
  html: string;
  from?: string;
  to?: string;
};

export async function sendLeadEmail({
  subject,
  html,
  from = process.env.LEAD_EMAIL_FROM ?? "Newsly Global <noreply@newslyglobal.com>",
  to = process.env.LEAD_EMAIL_TO ?? "hello@newslyglobal.com",
}: SendArgs): Promise<{ ok: boolean; id?: string; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.info("[email] RESEND_API_KEY not set — skipping send", {
      to,
      subject,
    });
    return { ok: true, id: "skipped" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ from, to, subject, html }),
    });
    if (!res.ok) {
      const text = await res.text();
      console.error("[email] send failed", res.status, text);
      return { ok: false, error: `Resend ${res.status}` };
    }
    const data = (await res.json()) as { id?: string };
    return { ok: true, id: data.id };
  } catch (err) {
    console.error("[email] send error", err);
    return { ok: false, error: (err as Error).message };
  }
}

export function renderKeyValueHtml(title: string, rows: Array<[string, string]>) {
  const escape = (s: string) =>
    s.replace(/[&<>"']/g, (c) =>
      c === "&"
        ? "&amp;"
        : c === "<"
          ? "&lt;"
          : c === ">"
            ? "&gt;"
            : c === '"'
              ? "&quot;"
              : "&#39;",
    );
  const items = rows
    .filter(([, v]) => v && v.trim().length > 0)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border-bottom:1px solid #E2E8F0;color:#475569;font-size:13px;width:180px">${escape(k)}</td><td style="padding:8px 12px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:14px">${escape(v)}</td></tr>`,
    )
    .join("");
  return `<!doctype html><html><body style="margin:0;background:#F8FAFC;font-family:-apple-system,system-ui,sans-serif">
  <div style="max-width:640px;margin:32px auto;background:white;border:1px solid #E2E8F0;border-radius:12px;overflow:hidden">
    <div style="padding:20px 24px;background:#0F172A;color:#F8FAFC">
      <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#C8A46B">Newsly Global</div>
      <div style="margin-top:4px;font-size:18px;font-weight:600">${escape(title)}</div>
    </div>
    <table style="width:100%;border-collapse:collapse">${items}</table>
  </div>
  </body></html>`;
}
