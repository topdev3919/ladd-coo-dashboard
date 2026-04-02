const industries = [
  "Technology & Software", "Real Estate & Development", "Energy & Natural Resources", "Financial Services",
  "Healthcare & Life Sciences", "Infrastructure & Logistics", "Consumer & Luxury Goods", "Private Equity & Venture Capital",
  "Industrials & Manufacturing", "Hospitality & Entertainment", "Defence & Aerospace", "Media & Telecommunications"
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative bg-[var(--color-cream)] lg:py-12 md:py-12 relative overflow-hidden border-b border-[var(--color-border)]" aria-label="Industries">
      <div className="absolute left-[1.5rem] md:left-32 lg:left-32 top-0 w-[px] h-full border-l border-[var(--color-border)] opacity-60 z-10" />
      <div className="hidden md:flex absolute left-[6rem] md:left-[10.5rem] lg:left-[10.5rem] top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-40 z-10" />
      <div className="absolute right-[1.5rem] md:right-32 lg:right-32 top-0 w-[1px] h-full border-r border-[var(--color-border)] opacity-40 z-10" />
      <div className="md:hidden flex items-center gap-2 px-6 py-3 border-b border-[var(--color-border)] relative z-20 bg-[var(--color-cream)] z-20 mx-auto">
        <div className="w-[8px] h-[8px] bg-[#c0735a] flex-shrink-0" />
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-charcoal)]">04</span>
        <div className="flex gap-[2px] items-center">
          {Array.from({ length: 70 }).map((_, i) => (
            <div key={i} className="w-[2px] h-[6px] bg-[#c0735a] flex-shrink-0" />
          ))}
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-muted)] flex-shrink-0">
          INDUSTRIES
        </span>
      </div>

      <div className="hidden md:flex absolute z-20 top-[70px] md:top-[55px] left-[calc((10.5rem+8rem)/2)] -translate-x-1/2 flex flex-col items-center">
        {/* Dot */}
        <div className="w-[4px] h-[4px] bg-[#c0735a] mb-2" />

        {/* Number */}
        <span className="text-[10px] font-mono tracking-[0.2em] mb-3">
          04
        </span>
      </div>
      <div className="px-10 md:px-20 lg:px-[12rem]">
        <div className="hidden md:flex mb-16 pl-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-muted)] font-medium">
            Industries
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-0 md:pl-4">
          {industries.map((industry) => (
            <div key={industry} className="group border-b border-[var(--color-border)] py-8">
              <h3 className="font-sans text-[13px] md:text-[14px] text-[var(--color-charcoal)] leading-snug tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}