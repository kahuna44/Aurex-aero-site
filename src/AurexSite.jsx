// src/AurexSite.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Gauge, Wind, Shield, Wrench, Mail, Phone, MapPin } from "lucide-react";

/* =========== UI PRIMITIVES =========== */
function Button({ as = "button", className = "", children, ...props }) {
  const Comp = as;
  return (
    <Comp
      className={
        "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 " +
        className
      }
      {...props}
    >
      {children}
    </Comp>
  );
}

function Card({ className = "", children }) {
  return (
    <div className={"rounded-2xl border border-white/10 bg-zinc-900/40 p-6 shadow-xl " + className}>{children}</div>
  );
}

/* =========== BRAND DATA =========== */
const BRAND = {
  name: "Aurex Aerospace",
  tagline: "Hybrid-Electric UAS, Purpose-Built for Mission First.",
  colors: {
    primary: "#E53935", // phoenix red
    dark: "#0B0B0C",
    light: "#F3F4F6",
  },
};

/* =========== LOGO =========== */
/** Place your logo at: /public/aurex-logo.png */
function AurexLogo({ className = "w-16 h-auto" }) {
  return <img src="/aurex-logo.png" alt="Aurex Aerospace Logo" className={className} draggable={false} />;
}

/* =========== DATA =========== */
const VARIANTS = [
  {
    name: "Aurex HEPS-600",
    weightClass: "600 lb class",
    propulsion: "Hybrid Electric Propulsion System (turbine generator)",
    highlights: [
      "Heavy-lift logistics & ISR",
      "Modular payload architecture",
      "Runway-independent ops (VTOL/STOL capable platform family)",
    ],
    specs: {
      MaxTakeoffWeight: "~600 lb class (TBD)",
      Endurance: "TBD",
      Range: "TBD",
      Payload: "TBD",
    },
  },
  {
    name: "Aurex HEPS-330",
    weightClass: "330 lb class",
    propulsion: "Hybrid Electric Propulsion System (turbine generator)",
    highlights: [
      "Balanced endurance & payload",
      "Interchangeable mission bays",
      "Field-serviceable power module",
    ],
    specs: {
      MaxTakeoffWeight: "~330 lb class (TBD)",
      Endurance: "TBD",
      Range: "TBD",
      Payload: "TBD",
    },
  },
  {
    name: "Aurex HEPS-55",
    weightClass: "55 lb class",
    propulsion: "Hybrid Electric Propulsion System (turbine generator)",
    highlights: ["Part 107-friendly weight class", "Rapid deployment kit", "Shared avionics with the family"],
    specs: {
      MaxTakeoffWeight: "≤55 lb (TBD)",
      Endurance: "TBD",
      Range: "TBD",
      Payload: "TBD",
    },
  },
];

const FEATURES = [
  {
    icon: Cpu,
    title: "HEPS Architecture",
    text:
      "Turbine-driven generator feeding high-voltage bus with intelligent power management for quiet, efficient electric thrust and long on-station times.",
  },
  {
    icon: Gauge,
    title: "Mission Modularity",
    text:
      "Common avionics, swappable mission bays, and unified GCS across the family to reduce training and logistics burden.",
  },
  {
    icon: Wind,
    title: "Fieldability",
    text:
      "Ruggedized airframes with quick-attach wings/booms and hot-swap power modules for austere operations.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    text:
      "Redundant power paths, health monitoring, and ops documentation aligned with regulatory pathways for each weight class.",
  },
];

const NAV = [
  { id: "platforms", label: "Platforms" },
  { id: "heps", label: "HEPS" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];

/* =========== MAIN SITE =========== */
export default function AurexSite() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <AurexLogo className="h-9 w-auto" />
            <span className="font-extrabold tracking-wide text-zinc-100">{BRAND.name}</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm font-medium text-zinc-300 hover:text-white">
                {n.label}
              </a>
            ))}
            <Button as="a" href="#contact" className="bg-red-600 text-white">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Button>
          </nav>
          <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 md:hidden">
            <div className="mx-auto max-w-7xl p-4">
              <div className="flex flex-col gap-3">
                {NAV.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className="text-sm font-medium text-zinc-300"
                    onClick={() => setOpen(false)}
                  >
                    {n.label}
                  </a>
                ))}
                <Button as="a" href="#contact" className="bg-red-600 text-white" onClick={() => setOpen(false)}>
                  Request a Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,57,53,0.25),transparent_60%)]" />
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <AurexLogo className="mx-auto h-24 w-auto" />
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">The Aurex UAS Family</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">{BRAND.tagline}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button as="a" href="#platforms" className="bg-red-600 text-white">
                Explore Platforms
              </Button>
              <Button as="a" href="#heps" className="bg-white/10 text-white">
                Learn about HEPS
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">Platforms</h2>
            <p className="mt-2 text-zinc-400">A common hybrid-electric architecture across three weight classes.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {VARIANTS.map((v, idx) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-red-600/10 p-2">
                    <AurexLogo className="h-8 w-auto" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{v.name}</h3>
                    <p className="text-sm text-zinc-400">{v.weightClass}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-zinc-300">{v.propulsion}</p>

                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-300">
                  {v.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  {Object.entries(v.specs).map(([k, val]) => (
                    <div key={k} className="rounded-lg border border-white/10 bg-black/40 p-3">
                      <div className="text-xs uppercase tracking-wide text-zinc-400">{k.replace(/([A-Z])/g, " $1")}</div>
                      <div className="font-semibold text-white">{val}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <Button as="a" href="#contact" className="bg-red-600 text-white">
                    Discuss Requirements
                  </Button>
                  <Button as="a" href="#heps" className="bg-white/10 text-white">
                    Powertrain Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HEPS Explainer */}
      <section id="heps" className="relative border-y border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white">Hybrid Electric Propulsion System (HEPS)</h2>
            <p className="mt-4 text-zinc-300">
              HEPS combines a compact turbine generator with high-efficiency electric propulsion. The turbine maintains
              battery state-of-charge and provides sustained power for long endurance while electric motors deliver
              quiet, responsive thrust for takeoff, cruise, and precision maneuvering.
            </p>
            <ul className="mt-6 space-y-3 text-zinc-300">
              <li className="flex gap-3">
                <Gauge className="mt-0.5 h-5 w-5" /> Extended on-station via optimized generator set and energy
                management.
              </li>
              <li className="flex gap-3">
                <Wind className="mt-0.5 h-5 w-5" /> Reduced acoustic signature vs. conventional turbines during key
                phases.
              </li>
              <li className="flex gap-3">
                <Wrench className="mt-0.5 h-5 w-5" /> Line-replaceable power module for fast field maintenance.
              </li>
            </ul>
          </div>

          <Card className="md:mt-8">
            <h3 className="text-xl font-semibold text-white">Reference Architecture (notional)</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-300">
              <li>Turbine genset → high-voltage DC bus</li>
              <li>Battery pack (buffer) with BMS → DC bus</li>
              <li>Inverters → distributed electric motors</li>
              <li>Supervisory power controller (power sharing &amp; health)</li>
              <li>Optional external power for silent startup</li>
            </ol>
            <p className="mt-4 text-xs text-zinc-400">
              Note: All figures and specs are placeholders and will be replaced with validated engineering data.
            </p>
          </Card>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white">Capabilities</h2>
          <p className="mt-2 text-zinc-400">Modular by design, mission-ready from day one.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {FEATURES.map((f) => (
            <Card key={f.title}>
              <f.icon className="h-6 w-6 text-red-500" />
              <div className="mt-3 text-lg font-semibold text-white">{f.title}</div>
              <p className="mt-2 text-sm text-zinc-300">{f.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
            <p className="mt-2 text-zinc-400">Tell us about your mission profile and operating environment.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            <Card className="md:col-span-3">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm text-zinc-300">Name</label>
                  <input
                    className="rounded-xl border border-white/10 bg-black/60 p-3 text-sm text-white placeholder-zinc-500"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    <label className="text-sm text-zinc-300">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-xl border border-white/10 bg-black/60 p-3 text-sm text-white placeholder-zinc-500"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-zinc-300">Organization</label>
                    <input
                      className="w-full rounded-xl border border-white/10 bg-black/60 p-3 text-sm text-white placeholder-zinc-500"
                      placeholder="Agency / Company"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-sm text-zinc-300">Message</label>
                  <textarea
                    rows={4}
                    className="rounded-xl border border-white/10 bg-black/60 p-3 text-sm text-white placeholder-zinc-500"
                    placeholder="Mission needs, payloads, environments…"
                  />
                </div>
                <Button className="bg-red-600 text-white">Send Inquiry</Button>
                <p className="text-xs text-zinc-500">
                  This is a static demo form. Wire to your backend or a service like Formspree when deploying.
                </p>
              </form>
            </Card>
            <div className="md:col-span-2">
              <Card>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Mail className="h-4 w-4" /> ops@aurex.aero
                </div>
                <div className="mt-2 flex items-center gap-2 text-zinc-300">
                  <Phone className="h-4 w-4" /> +1 (555) 000-0000
                </div>
                <div className="mt-2 flex items-center gap-2 text-zinc-300">
                  <MapPin className="h-4 w-4" /> Headquarters • TBD
                </div>
                <p className="mt-4 text-sm text-zinc-400">Replace with your real contact details before launch.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-zinc-400 md:flex-row">
          <div className="flex items-center gap-2">
            <AurexLogo className="h-5 w-auto" /> <span>{new Date().getFullYear()} © {BRAND.name}</span>
          </div>
          <div className="flex gap-4">
            <a href="#heps" className="hover:text-white">Technology</a>
            <a href="#platforms" className="hover:text-white">Platforms</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
