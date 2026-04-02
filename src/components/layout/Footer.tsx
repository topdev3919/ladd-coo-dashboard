import { cn } from "@/lib/utils";

const footerLinks = {
  firm: ["About", "Services", "Clients", "Industries", "Presence"],
  contact: ["office@laddco.com"],
  offices: [
    "New York",
    "Palm Beach",
    "George Town",
    "London",
    "Zürich",
    "Dubai",
    "Singapore",
    "Hong Kong",
    "Sydney",
  ],
};

export function Footer() {
  return (
    <footer
      className="relative bg-[var(--color-charcoal)] text-[var(--color-cream)] w-full"
      id="contact"
    >
      {/* Vertical grid lines */}
      <div className="hidden md:flex absolute left-10 md:left-32 top-0 w-[1px] h-full bg-[var(--color-border)] opacity-60 z-10" />
      <div className="hidden md:flex absolute left-[6rem] md:left-[10.5rem] top-0 w-[1px] h-full bg-[var(--color-border)] opacity-40 z-10" />
      <div className=" hidden md:flex absolute right-10 md:right-32 top-0 w-[1px] h-full bg-[var(--color-border)] opacity-40 z-10" />

      {/* Request bar */}
      <div className="w-full">
        <div className="md:mx-32">
          <div className="bg-[var(--color-sage-light)] flex items-center h-10 relative overflow-hidden">
            {/* gradient overlay */}
            <div
              className="absolute top-0 right-0 h-full pointer-events-none"
              style={{
                width: "70%",
                background: "linear-gradient(to right, transparent, #101010)",
              }}
            />

            <a
              href="#contact"
              className="px-6 flex items-center gap-5 font-sans text-[10px] font-medium tracking-[0.15em] text-[var(--color-charcoal)] hover:opacity-70 transition-opacity relative z-10"
            >
              <span className="w-1.5 h-1.5 bg-[#c0735a] rounded-sm inline-block mr-2" />

              Request an Introduction →
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 md:pl-[12rem] md:pr-32 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* LEFT */}
          <div className="md:col-span-5 flex flex-col justify-between gap-16 pr-6">
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-4 -ml-[2px]">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src="/images/logo.png" alt="logo" className="w-full h-auto object-cover"/>
                </div>
                <span className="font-serif text-lg tracking-tight text-white">
                  Ladd &amp; Co.
                </span>
              </div>

              {/* Tagline */}
              <p
                className="font-mono text-[11px] leading-[2.1] tracking-[0.08em] max-w-sm"
                style={{ color: "#c0735a" }}
              >
                ADVISORY AND EXECUTION FOR FAMILIES,
                <br />
                PRINCIPALS, AND PRIVATE INSTITUTIONS WITH
                <br />
                INTERESTS THAT DEMAND DISCRETION.
              </p>

              {/* Login */}
              <a
                href="#"
                className="font-mono text-[10px] tracking-[0.25em] text-white hover:opacity-60 transition-opacity uppercase"
              >
                Client Login
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-white hover:opacity-60 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a href="#" className="text-white hover:opacity-60 transition-opacity">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {/* Firm */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-6">
                Firm
              </h4>
              <ul className="space-y-4">
                {footerLinks.firm.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[12px] text-white hover:opacity-60 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact + Offices */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-6">
                Contact
              </h4>
              <ul className="space-y-4">
                {footerLinks.contact.map((item) => (
                  <li key={item}>
                    <a
                      href={`mailto:${item}`}
                      className="text-[12px] text-white hover:opacity-60"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="text-[10px] uppercase tracking-[0.25em] text-white/40 mt-12 mb-6">
                Offices
              </h4>
              <ul className="space-y-3">
                {footerLinks.offices.map((office) => (
                  <li key={office} className="text-[12px] text-white/60">
                    {office}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 px-6 md:pl-[12rem] md:pr-32 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
            Copyright © {new Date().getFullYear()} Ladd &amp; Co. All rights reserved.
          </p>

          <a className="font-mono text-[10px] text-white/40 tracking-widest uppercase">
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
}