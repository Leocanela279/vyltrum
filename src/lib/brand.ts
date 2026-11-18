/** Vyltrum company content — White Mono system */
export const brand = {
  name: "Vyltrum",
  domain: "vyltrum.eu",
  email: "hello@vyltrum.eu",
  region: "Europe",
  tagline: "Systems that become products.",
  description:
    "Vyltrum is a technology company based in Europe. We are building the parent layer — a house for products that will ship under their own names, with the same craft and engineering DNA.",
  model:
    "Vyltrum is the house. What we release under it will carry its own name, its own surface, and the same standard of craft — never rushed into the world unfinished.",
  foundations: [
    {
      title: "Domain",
      detail: "vyltrum.eu is registered and ready for the company site.",
    },
    {
      title: "Structure",
      detail: "Parent company first. Products under the house, named independently when they launch.",
    },
    {
      title: "Focus",
      detail: "Technology products and systems. Details announced as each one takes shape.",
    },
  ],
  fonts: {
    display: "JetBrains Mono",
    mono: "JetBrains Mono",
  },
  palette: [
    { name: "Snow", hex: "#FFFFFF", role: "Canvas", token: "snow" },
    { name: "Mist", hex: "#F5F5F4", role: "Quiet surface", token: "mist" },
    { name: "Ink", hex: "#111111", role: "Text / primary CTA", token: "ink" },
    { name: "Steel", hex: "#6B6B6B", role: "Secondary text", token: "steel" },
    { name: "Hairline", hex: "#E5E5E5", role: "Borders", token: "hairline" },
    { name: "Lift", hex: "#2A2A2A", role: "CTA gradient start", token: "lift" },
  ],
} as const;
