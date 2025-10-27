import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Gauge, Wind, Shield, Wrench, Mail, Phone, MapPin } from "lucide-react";

export function Button({ as = "button", className = "", children, ...props }) {
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

export function Card({ className = "", children }) {
  return (
    <div className={"rounded-2xl border border-white/10 bg-zinc-900/40 p-6 shadow-xl " + className}>{children}</div>
  );
}

const BRAND = {
  name: "Aurex Aerospace",
  tagline: "Hybrid-Electric UAS, Purpose-Built for Mission First.",
  colors: {
    primary: "#E53935",
    dark: "#0B0B0C",
    light: "#F3F4F6",
  },
};

function AurexLogo({ className = "w-16 h-auto" }) {
  return <img src="/aurex-logo.png" alt="Aurex Aerospace Logo" className={className} draggable={false} />;
}

const VARIANTS = [
  { name: "Aurex HEPS-600", weightClass: "600 lb class", propulsion: "Hybrid Electric Propulsion System (turbine generator)", highlights: ["Heavy-lift logistics & ISR", "Modular payload architecture", "Runway-independent ops (VTOL/STOL capable)"], },
  { name: "Aurex HEPS-330", weightClass: "330 lb class", propulsion: "Hybrid Electric Propulsion System (turbine generator)", highlights: ["Balanced endurance & payload", "Interchangeable mission bays", "Field-serviceable power module"], },
  { name: "Aurex HEPS-55", weightClass: "55 lb class", propulsion: "Hybrid Electric Propulsion System (turbine generator)", highlights: ["Part 107-friendly", "Rapid deployment kit", "Shared avionics across family"], },
];

const FEATURES = [
  { icon: Cpu, title: "HEPS Architecture", text: "Turbine-driven generator powering high-voltage electric propulsion." },
  { icon: Gauge, title: "Mission Modularity", text: "Common avionics and swappable mission bays across all variants." },
  { icon: Wind, title: "Fieldability", text: "Rugged, modular, rapidly deployable systems for austere ops." },
  { icon: Shield, title: "Safety & Compliance", text: "Redundant systems, monitoring, and compliance-ready designs." },
];

const NAV = [
  { id: "platforms", label: "Platforms" },
  { id: "heps", label: "HEPS" },
  { id: "capabilities", label: "Capabilities" },
  { id: "contact", label: "Contact" },
];

export default function AurexSite() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <AurexLogo className="h-9 w-auto" />
            <span className="font-extrabold tracking-wide text-zinc-100">{BRAND.name}</span>
          </div>
        </div>
      </header>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,57,53,0.25),transparent_60%)]" />
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <AurexLogo className="mx-auto h-24 w-auto" />
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              The Aurex UAS Family
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-300">{BRAND.tagline}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}