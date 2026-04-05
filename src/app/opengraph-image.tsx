import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kay — Senior UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Subtle gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at center, rgba(147,130,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* K monogram */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            border: "2px solid rgba(255,255,255,0.15)",
            background: "rgba(255,255,255,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 36,
              fontWeight: 600,
              color: "white",
            }}
          >
            K
          </span>
        </div>

        {/* Name */}
        <span
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-1px",
            marginBottom: 12,
          }}
        >
          Hey, I&apos;m Kay
        </span>

        {/* Role */}
        <span
          style={{
            fontSize: 28,
            fontWeight: 500,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 40,
          }}
        >
          Senior UX Designer
        </span>

        {/* Three experience pills */}
        <div style={{ display: "flex", gap: 16 }}>
          {[
            { label: "AI Chat Interview", color: "#9382FF" },
            { label: "Spanish Game", color: "#50DCB4" },
            { label: "Case Studies", color: "#FFB450" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  background: item.color,
                }}
              />
              <span
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
