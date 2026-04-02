const clientCategories = [
  { label: "Ultra-High-Net-Worth Individuals & Families" },
  { label: "Institutional & Sovereign Investors" },
  { label: "Single & Multi-Family Offices" },
  { label: "Private Equity & Venture Principals" },
  { label: "Private Holding Companies" },
  { label: "Family-Owned Enterprises" },
];

export function ClientsSection() {
  return (
    <section id="clients" className="relative bg-[var(--color-cream)] md:py-5 lg:py-5" aria-label="Our Clients">
      <div className="absolute left-[1.5rem] md:left-32 lg:left-32 top-0 w-[px] h-full border-l border-[var(--color-border)] opacity-60 z-10" />
      <div className="hidden md:flex absolute left-[6rem] md:left-[10.5rem] lg:left-[10.5rem] top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-40 z-10" />
      <div className="absolute right-[1.5rem] md:right-32 lg:right-32 top-0 w-[1px] h-full border-r border-[var(--color-border)] opacity-40 z-10" />

      {/* Left vertical SERVICES + line */}
      <div className="hidden md:flex absolute z-20 left-[calc(8rem-2rem)] md:left-[7.2rem] md:pt-8 flex flex-col items-center">

        {/* Vertical text */}
        <span className="text-[10px] font-mono tracking-[0.2em] rotate-[90deg] mb-10 text-[var(--color-muted)]">
          CLIENTS
        </span>

        {/* Pattern line */}
        <div className="flex flex-col items-center gap-[3px]">
          {Array.from({ length: 110 }).map((_, i) => (
            <div key={i} className="w-[10px] h-[2px] bg-[#c0735a]" />
          ))}
        </div>
      </div>

      <div className="md:hidden flex items-center gap-3 px-6 py-3 border-b border-[var(--color-border)] relative z-20 bg-[var(--color-cream)]">
        <div className="flex gap-[2px] mx-auto items-center">
          {Array.from({ length: 90 }).map((_, i) => (
            <div key={i} className="w-[2px] h-[6px] bg-[#c0735a] flex-shrink-0" />
          ))}
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-muted)] flex-shrink-0">
          CLIENTS
        </span>
      </div>

      <div className="px-6 md:pl-[10.5rem] md:pr-32 lg:pl-[10.5rem] lg:pr-32">

        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-20">
          <div className="hidden lg:block lg:col-span-6"></div>
          <div className="lg:col-span-6 space-y-8 p-8 md:p-5 lg:p-5">
            <p className="font-sans text-[13px] md:text-[14px] text-black leading-[1.8] tracking-wide max-w-xl">
              Many have complex holding structures, diverse asset portfolios, and professional
              teams that require a senior point of coordination.
            </p>
            <p className="font-sans text-[13px] md:text-[14px] leading-[1.8] tracking-wide max-w-xl">
              We also act for institutional investors, sovereign entities, and private offices
              requiring independent advisory on specific transactions or matters.
            </p>
          </div>
        </div>

        {/* Client Categories Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[var(--color-border)]">
         {clientCategories.map((category, index) => (
           <div key={category.label} className={[ "flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5 py-12 px-6 md:px-10 md:border-b border-[var(--color-border)]",
           index >= clientCategories.length - 2 ? "md:border-b-0" : "",
           ].join(" ")}>
             <span className="flex-shrink-0 w-6 h-[1px] bg-red-400" />
            <span className="font-serif text-xl md:text-[26px] text-[var(--color-charcoal)] leading-tight tracking-tight">
             {category.label}
           </span>
          </div>
        ))}
       </div>
      </div>
    </section>
  );
}