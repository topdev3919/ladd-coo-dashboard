export function AboutSection() {
  return (
    <section id="about" className="relative md:px:32 lg:px-16 border-t border-b border-[var(--color-border)]" aria-label="About">
      
      {/* Vertical grid lines */}
      <div className="absolute left-10 md:left-32 lg:left-32 top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-60 z-10" />
      <div className="hidden md:block absolute left-[6rem] md:left-[10.5rem] lg:left-[10.5rem] top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-40 z-10" />
      <div className="absolute right-10 md:right-32 lg:right-32 top-0 w-[1px] h-full border-r border-[var(--color-border)] opacity-40 z-10" />

        {/* Horizontal dash pattern (_ _ _) */}
        <div className="hidden md:block absolute z-20 top-16 bottom-16 left-[calc((10.5rem+8rem)/2)] -translate-x-1/2 flex flex-col items-center justify-start gap-[1px]">
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className="w-[10px] h-[2px] bg-[#c0735a]" />
          ))}
        </div>
       <div className="md:hidden absolute top-10 left-1/2 -translate-x-1/2 flex gap-[2px]">
       {Array.from({ length: 60 }).map((_, i) => (
       <div key={i} className="w-[2px] h-[6px] bg-[#c0735a]" />
       ))}
       </div>

      <div className="lg:pl-16 md:pl-16 md:pr-16">
        <div className="pl-[3rem] pr-[3rem] md:px-16 lg:px-24 py-16 md:py-20 bg-[#b5bc9d]">
          
          <p
            className="font-serif text-2xl md:text-3xl lg:text-4xl text-black leading-[1.3] mb-8"
            style={{ fontWeight: 300 }}
          >
            We operate as an extension of our clients&apos; interests —{" "}
            <strong className="font-medium">advising, coordinating, and executing</strong>{" "}
            where the complexity demands a single, trusted point of contact.
          </p>

          {/* Body */}
          <p className="font-sans text-sm text-black max-w-2xl leading-relaxed">
            Whether the matter concerns a transaction, a restructure, a dispute or and opportunity — our role is to ensure the outcome is resolved efficiently, discreetly, and in the client's favour.
          </p>

        </div>
      </div>
    </section>
  );
}