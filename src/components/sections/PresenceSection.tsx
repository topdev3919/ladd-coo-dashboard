const offices = [
  { city: "New York, New York", region: "UNITED STATES" },
  { city: "Palm Beach, Florida", region: "UNITED STATES" },
  { city: "George Town", region: "CAYMAN ISLANDS" },
  { city: "London", region: "UNITED KINGDOM" },
  { city: "Zürich", region: "SWITZERLAND" },
  { city: "Dubai", region: "UNITED ARAB EMIRATES" },
  { city: "Singapore", region: "REPUBLIC OF SINGAPORE" },
  { city: "Hong Kong", region: "SAR, CHINA" },
  { city: "Sydney, New South Wales", region: "AUSTRALIA" },
];

export function PresenceSection() {
  return (
    <section id="presence" className="relative bg-[var(--color-cream)] md:py-10 lg:py-10 relative overflow-hidden" aria-label="Global Presence">
      <div className="absolute left-[1.5rem] md:left-32 lg:left-32 top-0 w-[px] h-full border-l border-[var(--color-border)] opacity-60 z-10" />
      <div className="hideen md:flex absolute left-[6rem] md:left-[10.5rem] lg:left-[10.5rem] top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-40 z-10" />
      <div className="absolute right-[1.5rem] md:right-32 lg:right-32 top-0 w-[1px] h-full border-r border-[var(--color-border)] opacity-40 z-10" />
      <div className="hidden md:flex absolute z-20 top-[70px] md:top-[45px] left-[calc((10.5rem+8rem)/2)] -translate-x-1/2 flex flex-col items-center">

        {/* Dot */}
        <div className="w-[4px] h-[4px] bg-[#c0735a] mb-2" />

        {/* Number */}
        <span className="text-[10px] font-mono tracking-[0.2em] mb-3">
          05
        </span>
      </div>
      <div className="px-6 md:px-20 lg:px-[12rem]">
        {/* Overline Heading */}
        <div className="hidden md:flex mb-10 pl-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] font-medium">
            Presence
          </span>
        </div>


        <div className="md:hidden flex items-center gap-2 px-6 py-3 border-b border-[var(--color-border)] relative z-20 bg-[var(--color-cream)] z-20 mx-auto">
        <div className="w-[8px] h-[8px] bg-[#c0735a] flex-shrink-0" />
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-charcoal)]">04</span>
        <div className="flex gap-[2px] items-center">
          {Array.from({ length: 70 }).map((_, i) => (
            <div key={i} className="w-[2px] h-[6px] bg-[#c0735a] flex-shrink-0" />
          ))}
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-muted)] flex-shrink-0">
          PRESENCE
        </span>
      </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-0 p-10 md:p-0 lg:p-0">
          {offices.map((office) => (
            <div key={office.city} className="border-b border-[var(--color-border)] py-10 md:pl-3 lg:pl-3">
              <h3 className="font-serif text-xl md:text-2xl text-[var(--color-charcoal)] mb-2 leading-tight" style={{ fontWeight: 400 }}>
                {office.city}
              </h3>
              <p className="font-sans text-[10px] tracking-[0.1em] uppercase text-[#d97706] font-medium">
                {office.region}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}