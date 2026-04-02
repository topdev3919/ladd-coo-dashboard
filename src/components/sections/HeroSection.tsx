import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden md:px-32 lg:px-16"
      style={{ paddingTop: "88px" }}
      aria-label="Hero"
    >
      {/* Vertical grid lines */}
      <div className="absolute left-10 md:left-32 lg:left-32 top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-60 z-10" />
      <div className="hidden md:block absolute left-[6rem] md:left-[10.5rem] lg:left-[10.5rem] top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-40 z-10" />
      <div className="absolute right-10 md:right-32 lg:right-32 top-0 w-[1px] h-full border-r border-[var(--color-border)] opacity-40 z-10" />
      <div className="absolute z-20 top-[128px] md:top-[150px] left-[calc((10.5rem+8rem)/2)] -translate-x-1/2">
        <div className="w-1.5 h-1.5 bg-[#c0735a]" />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-12"
        style={{ minHeight: "calc(100vh - 88px)" }}
      >
        {/* Left content */}
        <div className="md:col-span-7 flex flex-col lg:px-6 md:px-10 lg:px-16 lg:py-12 md:py-16">
          <h1
            className="font-serif text-5xl md:text-5xl lg:text-5xl xl:text-5xl leading-[1.05] text-[var(--color-charcoal)] mb-8"
            style={{ fontWeight: 400, paddingLeft: "4rem" }}
          >
            Advisory and execution for{" "}
            <em className="italic">families, principals,</em> and{" "}
            <em className="italic">private institutions</em> with interests that
            demand discretion.
          </h1>

          <p
            className="font-sans text-sm text-[var(--color-muted)] max-w-md leading-relaxed"
            style={{ paddingLeft: "4rem" }}
          >
            Ladd &amp; Co. is a private advisory practice. We represent clients across
            transactions, capital strategy, structuring, and the management of sensitive
            matters across jurisdictions.
          </p>
        </div>

        {/* Right image */}
        <div className="md:col-span-5 relative h-64 md:h-auto self-stretch lg:py-6 md:py-8 md:px-16 z-50 md:z-auto">
          <div className="hidden md:block relative w-full h-full">
            <Image
              src="/images/1.png"
              alt="Abstract architectural sculpture"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
            />
          </div>
          {/* Mobile image */}
          <div className="block md:hidden relative w-full h-[570px] overflow-hidden">
          <Image
          src="/images/1.png"
          alt="Abstract architectural sculpture"
          fill
          className="object-cover object-[50%_85%]"
          />
          </div>
        </div>
      </div>
    </section>
  );
}