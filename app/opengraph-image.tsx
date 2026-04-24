import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Newsly Global — Clarity before AI. Growth after.";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundImage:
            "radial-gradient(65% 60% at 85% 0%, rgba(200,164,107,0.22), transparent 60%), radial-gradient(65% 60% at 0% 100%, rgba(47,93,140,0.35), transparent 60%)",
          backgroundColor: "#0F172A",
          color: "#F8FAFC",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              backgroundColor: "#0F172A",
              border: "1px solid #C8A46B",
              borderRadius: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F8FAFC",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, fontWeight: 600 }}>Newsly Global</div>
            <div
              style={{
                fontSize: 12,
                color: "rgba(248,250,252,0.6)",
                textTransform: "uppercase",
                letterSpacing: 3,
              }}
            >
              AI Clarity
            </div>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 13,
              color: "#C8A46B",
              textTransform: "uppercase",
              letterSpacing: 4,
              fontWeight: 600,
            }}
          >
            AI Readiness for Established Businesses
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -1.5,
              lineHeight: 1.05,
              maxWidth: 960,
            }}
          >
            Know if your business is ready for AI — before you waste time or money.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(248,250,252,0.65)",
          }}
        >
          <div style={{ display: "flex" }}>newslyglobal.com</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "#C8A46B" }}>$1,495</span>
            <span>AI Assessment</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
