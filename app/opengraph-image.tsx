import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #080808 0%, #111111 48%, #1c1c1c 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(249,115,22,0.5), transparent 28%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.36em",
              textTransform: "uppercase",
              color: "#fdba74",
            }}
          >
            Y.V. Group
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 840 }}>
            <div style={{ display: "flex", fontSize: 72, lineHeight: 1.02, fontWeight: 700 }}>
              Asesoro y protejo tus inversiones inmobiliarias.
            </div>
            <div style={{ display: "flex", fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,0.72)" }}>
              Administración de propiedad horizontal, avaluós, inversiones y asesoría inmobiliaria en Antioquia.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 26,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <div style={{ display: "flex" }}>{siteConfig.location}</div>
            <div style={{ display: "flex", color: "#fb923c" }}>{siteConfig.email}</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
