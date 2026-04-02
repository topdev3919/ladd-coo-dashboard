import Image from "next/image";

const primaryServices = [
  {
    number: "I",
    title: "Capital Allocation & Investment Advisory",
    description:
      "Providing a full cycle of asset allocation support, managing execution and discretionary deployment across asset classes and advisory funds across highest-conviction single managers.",
  },
  {
    number: "II",
    title: "Mergers, Acquisitions & Corporate Clients",
    description:
      "Buy-to-side advisory spanning the complete transaction lifecycle from initial mandate, transaction management, due diligence, negotiation, and post-close transition management.",
  },
  {
    number: "III",
    title: "Co-investment & Syndication",
    description:
      "Principals at this level require the decision of capital. Direct Co-investment, Club Deals, and primary allocations to select opportunities within a principal's core asset strategy.",
  },
  {
    number: "IV",
    title: "International Tax & Structuring",
    description:
      "Cross-border planning and structuring that considers all client, assets, and jurisdictions. We act as an advisor rather than as a provider, with access to a network of international law firms.",
  },
];

const additionalServices = [
  {
    title: "Debt Recovery & Asset Tracing",
    description:
      "Discrete, professional, and effective debt recovery and asset tracing with extensive use of intelligence networks and litigation expertise.",
  },
  {
    title: "Dispute Resolution",
    description:
      "Strategy and execution across all disputes. Coordinating specialists, coordinating functions, and driving toward resolution.",
  },
  {
    title: "Family Governance",
    description:
      "Long-term family governance, continuity planning, and family structure administration.",
  },
  {
    title: "Real Estate & Asset Brokering",
    description:
      "Identification, acquisition, and disposition of significant real estate assets. Access to off-market properties for the ultra-high-net-worth.",
  },
  {
    title: "Family & Trustees",
    description:
      "Establishment of individual trusts, foundations, and structures in appropriate jurisdictions as well as ongoing administration.",
  },
  {
    title: "Migration & Residency",
    description:
      "Coordinating all aspects of international migration planning across jurisdictions and family members.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden md:px:32 lg:px-16 border-b border-[var(--color-border)]" aria-label="Services">
      <div className="absolute left-[1.5rem] md:left-32 lg:left-32 top-0 w-[px] h-full border-l border-[var(--color-border)] opacity-60 z-10" />
      <div className="hidden md:block absolute left-[6rem] md:left-[10.5rem] lg:left-[10.5rem] top-0 w-[1px] h-full border-l border-[var(--color-border)] opacity-40 z-10" />
      <div className="absolute right-[1.5rem] md:right-32 lg:right-32 top-0 w-[1px] h-full border-r border-[var(--color-border)] opacity-40 z-10" />
      <div className="hidden md:block absolute z-20 top-[70px] md:top-[70px] left-[calc((10.5rem+8rem)/2)] -translate-x-1/2 flex flex-col items-center">

        {/* Dot */}
        <div className="w-[4px] h-[4px] bg-[#c0735a] mb-2" />

        {/* Number */}
        <span className="text-[10px] font-mono tracking-[0.2em] mb-3">
          02
        </span>
      </div>

      <div className="md:hidden flex items-center gap-2 px-6 py-3 border-b border-[var(--color-border)] relative z-20 bg-[var(--color-cream)]">
        <div className="w-[8px] h-[8px] bg-[#c0735a] flex-shrink-0" />
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-charcoal)]">02</span>
        <div className="flex gap-[2px] flex-1 items-center">
          {Array.from({ length: 70 }).map((_, i) => (
            <div key={i} className="w-[2px] h-[6px] bg-[#c0735a] flex-shrink-0" />
          ))}
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-muted)] flex-shrink-0">
          SERVICES
        </span>
      </div>

      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 md:px-[3rem]!">
        <div className="md:col-span-5 flex flex-col px-6 md:px-10 lg:px-16 py-12 md:py-16">
          <div className="hidden md:flex mb-4 mx-2">
            <span
              className="text-[var(--color-muted)] uppercase tracking-[0.2em] text-[10px] font-medium font-sans"
              style={{ paddingLeft: "2.5rem" }}
            >
              SERVICES
            </span>
          </div>
          <h1
            className="font-serif text-5xl md:text-5xl lg:text-5xl xl:text-5xl leading-[1.05] text-[var(--color-charcoal)] mb-8"
            style={{ fontWeight: 300, paddingLeft: "2.5rem" }}
          >
            Advisory <br /> & execution
          </h1>
        </div>
        <div className="md:col-span-7 w-full overflow-hidden">
          <div className="relative mx-6 md:mx-0 md:mt-8 md:ml-[5.8rem]">
            <Image
              src="/images/3.png"
              alt="architectural sculpture"
              width={600}
              height={400}
              className="object-cover md:object-contain object-center"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Primary services grid */}
      <div className="px-6 md:px-10 lg:px-16 mt-8">
        {/* Left vertical SERVICES + line */}
        <div className="hidden md:flex absolute z-20 left-[calc(8rem-2rem)] md:left-[7.2rem] md:pt-24 flex flex-col items-center">

          {/* Vertical text */}
          <span className="text-[10px] font-mono tracking-[0.2em] rotate-[90deg] mb-10 text-[var(--color-muted)]">
            SERVICES
          </span>

          {/* Pattern line */}
          <div className="flex flex-col items-center gap-[3px]">
            {Array.from({ length: 150 }).map((_, i) => (
              <div key={i} className="w-[10px] h-[2px] bg-[#c0735a]" />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[var(--color-border)]  md:ml-[2.5rem]">
          {primaryServices.map((service, index) => (
            <div
              key={service.number}
              className={[
                "px-4 md:px-6 lg:px-12 py-12 md:py-16",
                index % 2 === 0 ? "md:col-span-5" : "md:col-span-7",
                index % 2 === 0
                  ? "border-b border-[var(--color-border)] md:border-r md:border-r-[var(--color-border)]"
                  : "border-b border-[var(--color-border)]",
                index >= primaryServices.length - 2 ? "md:border-b-0" : "",
              ].join(" ")}
            >
              <div
                className={[
                  "flex flex-col md:flex-row items-start gap-4 md:gap-6",
                  index % 2 !== 0 ? "md:pl-[3rem]" : "",
                ].join(" ")}
              >
                <span className="font-serif text-sm text-red-600 mt-1 w-6 flex-shrink-0">
                  {service.number}
                </span>
                <div>
                  <h3
                    className="font-serif text-xl md:text-2xl text-[var(--color-charcoal)] mb-4 leading-snug"
                    style={{ fontWeight: 400 }}
                  >
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-[var(--color-muted)] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional services grid */}
      <div className="px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-b border-[var(--color-border)] md:ml-[2.5rem]">
          {additionalServices.map((service, index) => (
            <div
              key={service.title}
              className={[
                "px-4 md:px-6 lg:px-12 py-12 md:py-16",
                index % 3 !== 2
                  ? "md:border-b border-[var(--color-border)] lg:border-b lg:border-r lg:border-r-[var(--color-border)]"
                  : "md:border-b border-[var(--color-border)]",
                index >= additionalServices.length - 3 ? "lg:border-b-0" : "",
              ].join(" ")}
            >
              <h4
                className="font-serif text-lg text-[var(--color-charcoal)] mb-2"
                style={{ fontWeight: 400 }}
              >
                {service.title}
              </h4>
              <p className="font-sans text-xs text-[var(--color-muted)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: image left + clients intro right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 md:px-10 lg:px-16 py-12 md:py-10">
        {/* Left vertical SERVICES + line */}
        <div className="hidden md:flex absolute z-20 left-[calc(8rem-2rem)] md:left-[8.7rem] md:pt-8 flex flex-col items-center">
          <div className="w-[4px] h-[4px] bg-[#c0735a] mb-2" />
          <span className="text-[10px] font-mono tracking-[0.2em] mb-3">
            03
          </span>
        </div>
        <div className="md:hidden flex items-center gap-2 px-6 py-3 border-b border-[var(--color-border)] relative z-20 bg-[var(--color-cream)]">
        <div className="w-[8px] h-[8px] bg-[#c0735a] flex-shrink-0" />
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-charcoal)]">03</span>
        <div className="flex gap-[2px] flex-1 items-center">
          {Array.from({ length: 80 }).map((_, i) => (
            <div key={i} className="w-[2px] h-[6px] bg-[#c0735a] flex-shrink-0" />
          ))}
        </div>
        <span className="text-[10px] font-mono tracking-[0.2em] text-[var(--color-muted)] flex-shrink-0">
          WHO WE SERVE
        </span>
      </div>
        <div className="lg:col-span-5 relative h-64 lg:h-96 md:left-4 lg-left-4 md:ml-[1.5rem]">
          <Image
            src="/images/4.png"
            alt="Architectural columns"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center md:px-10 lg:px-16 lg:py-16">
          <div className="hidden md:flex items-center gap-3 mb-6">
            <span className="text-[var(--color-muted)] uppercase tracking-[0.2em] text-[10px] font-medium font-sans">
              WHO WE SERVE
            </span>
          </div>
          <p
            className="font-serif text-3xl p-10 md:p-0 lg:p-0 md:text-3xl lg:text-4xl text-[var(--color-charcoal)] leading-[1.15]"
            style={{ fontWeight: 200 }}
          >
            Our clients are{" "}
            <em className="italic">
              entrepreneurs, principals, and multi-generational families
            </em>{" "}
            managing significant private wealth across multiple jurisdictions.
          </p>
        </div>
      </div>
    </section>
  );
}