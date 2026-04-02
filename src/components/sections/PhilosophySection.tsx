import Image from "next/image";
export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative overflow-hidden md:px-32 lg:px-16 pt-5 md:pt-0 lg:pt-0 border-b border-[var(--color-border)]" aria-label="Our Philosophy">
      
      {/* Vertical grid lines */}
      <div className="hidden md:block absolute left-10 md:left-32 lg:left-32 top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-60 z-auto md:z-10" />
      <div className="hidden md:block absolute left-[6rem] md:left-[10.5rem] lg:left-[10.5rem] top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-40 z-10" />
      <div className="hidden md:block absolute right-10 md:right-32 lg:right-32 top-0 w-[1px] h-full border-r border-[var(--color-border)] opacity-40 z-10" />

      {/* Desktop vertical dashed line */}
      <div className="hidden md:block absolute z-20 top-20 left-[calc((10.5rem+8rem)/2)] -translate-x-1/2 flex flex-col items-center">
        <div className="w-[4px] h-[4px] bg-[#c0735a] mb-2" />
        <span className="text-[10px] font-mono tracking-[0.2em] mb-3">01</span>
        <div className="flex flex-col items-center gap-[3px]">
          {Array.from({ length: 110 }).map((_, i) => (
            <div key={i} className="w-[10px] h-[2px] bg-[#c0735a]" />
          ))}
        </div>
      </div>

      {/* Mobile top bar: ■ 01 || */}
      <div className="md:hidden flex items-center gap-2 px-6 py-3 border-b border-[var(--color-border)]">
        <div className="w-[8px] h-[8px] bg-[#c0735a] flex-shrink-0" />
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-charcoal)]">01</span>
        <div className="flex gap-[2px] flex-1">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="w-[2px] h-[6px] bg-[#c0735a] flex-shrink-0" />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:px-[7rem]">
        {/* Left image */}
        <div className="lg:col-span-4 relative h-72 lg:h-auto min-h-[400px]">
          <Image
            src="/images/2.png"
            alt="Architectural detail with diagonal sculpture"
            fill
            className="object-cover object-center lg:px-8 md:px-8 lg:py-8 md:py-8"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
        {/* Right content */}
        <div className="lg:col-span-8 flex flex-col justify-center md:px-8 lg:px-16 lg:py-16 md:py-20 px-[4rem]">
          <div className="mb-8 mb:mt-0 lg:mt-0 mt-10">
            <span className="text-[var(--color-muted)] uppercase tracking-[0.2em] text-[10px] font-medium font-sans">
              About the FIRM
            </span>
          </div>
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-charcoal)] leading-[1.15] mb-12 max-w-3xl"
            style={{ fontWeight: 400 }}
          >
            We advise where the stakes are highest and the
            margin for error is smallest.
          </h2>
          <div className="space-y-4 lg:ml-auto lg:w-[65%] border-t border-transparent pt-4">
            <p className="font-sans text-[13px] md:text-[14px] leading-[1.8] tracking-wide">
              Our clients are individuals and families with significant wealth, complex 
              international structures, and affairs that span multiple jurisdictions, advisors, and asset classes.
            </p>
            <p className="font-sans text-[13px] md:text-[14px] leading-[1.8] tracking-wide">
              We do not manage assets. We do not sell financial products. We provide 
              independent counsel and hands-on execution across the full spectrum of our 
              clients' private affairs — from capital deployment and M&A to international 
              structuring and the resolution of distressed or disputed matters.
            </p>
            <p className="font-sans text-[13px] md:text-[14px] leading-[1.8] tracking-wide">
              We work alongside our clients' existing professional teams — their lawyers, 
              accountants, bankers, and investment managers — ensuring alignment, 
              identifying gaps, and resolving issues that fall between the cracks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}