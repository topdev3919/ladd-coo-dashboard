export function CtaBannerSection() {
  return (
    <section className="relative bg-[var(--color-cream)] border-t border-b border-[var(--color-border)]" aria-label="Discretion statement">
      <div className="absolute left-10 md:left-32 lg:left-32 top-0 w-[px] h-full border-l border-[var(--color-border)] opacity-60 z-10" />
      <div className="hidden md:flex absolute left-[6rem] md:left-[10.5rem] lg:left-[10.5rem] top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-40 z-10" />
      <div className="absolute right-10 md:right-32 lg:right-32 top-0 w-[1px] h-full border-r border-[var(--color-border)] opacity-40 z-10" />
      <div className="bg-[#b5bc9d] md:mx-20 lg:mx-[8rem] py-24 md:py-32 px-10 md:px-20">
        {/* Left vertical SERVICES + line */}
        <div className="hidden md:flex absolute z-20 left-[calc(8rem-2rem)] md:left-[9rem] flex flex-col items-center">
          {/* Pattern line */}
          <div className="flex flex-col items-center gap-[3px]">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="w-[10px] h-[2px] bg-[#c0735a]" />
            ))}
          </div>
        </div>

        <div className="md:hidden absolute z-20 left-[1rem] flex flex-col items-center">
          {/* Pattern line */}
          <div className="flex flex-col items-center gap-[3px]">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="w-[10px] h-[2px] bg-[#c0735a]" />
            ))}
          </div>
        </div>

        
        <div className="max-w-[1200px] mx-auto px-10 md:px-0 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7">
              <h2 
                className="font-serif text-3xl md:text-3xl lg:text-4xl text-[#1a1a1a] leading-[1.1] italic"
                style={{ fontWeight: 300 }}
              >
                Discretion is not a policy. <br />
                It is the nature of the work.
              </h2>
            </div>

            {/* Right Side: Description (Niche shifted) */}
            <div className="lg:col-span-5 lg:mt-48 space-y-8">
              <p className="font-sans text-[13px] md:text-[14px] text-[#1a1a1a]/80 leading-[1.8] max-w-md">
                Our clients engage us because the matters they face are too consequential for 
                rigid institutional processes and too complex for any single advisor. We operate 
                with a permanent obligation of confidentiality — not because it is expected, but 
                because the work demands it. The details of our engagements, our client 
                relationships, and the outcomes we achieve are never disclosed.
              </p>

              {/* Orange Foundation Text */}
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#d97706] font-medium leading-relaxed max-w-[200px]">
                THIS IS NOT A FEATURE OF OUR SERVICE. IT IS THE FOUNDATION OF IT.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}