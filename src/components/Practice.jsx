export default function Practice() {
  return (
    <section id="services" className="relative bg-[#F5EFE6] py-16 px-6 overflow-hidden">

      {/* Header */}
      <div className="relative max-w-6xl mx-auto text-center mb-24">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#4B2E2E]">
          Services
        </h2>
      </div>

      {/* Cards */}
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
          {/* Column 1: Civil Litigation (centered vertically) */}
          <div className="flex justify-center md:justify-start">
            
            <FamilyLawCard />
          </div>

          {/* Column 2: Family Law & Corporate Advisory (stacked) */}
          <div className="flex flex-col gap-16 justify-start">
            
            <CivilLitigationCard />
            
            <ContractDraftingCard />
          </div>

          {/* Column 3: Contract Drafting (centered vertically) */}
          <div className="flex justify-center md:justify-end">
            
            <CorporateAdvisoryCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// Civil Litigation - Bold accent bar
function CivilLitigationCard() {
  return (
    <div className="bg-[#EFE8DD] rounded-b-full shadow-sm p-10 text-center w-full max-w-md transition-all duration-300 hover:-translate-y-2 hover:shadow-md border-l-4 border-t-4 border-[#C8A951]">
      <h3 className="text-2xl font-semibold text-[#4B2E2E] mb-4">Civil Litigation</h3>
      <p className="text-[#5E4633] mb-6 leading-relaxed">Handling civil litigation matters including land and property disputes, landlord–tenant disputes, and related civil claims with strategic legal representation and documentation.</p>
      <button className="inline-flex items-center gap-2 text-[#4B2E2E] font-medium">
        Learn More
        <span className="bg-[#C8A951] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">→</span>
      </button>
    </div>
  );
}

// Family Law - Soft gradient background
function FamilyLawCard() {
  return (
    <div className="bg-gradient-to-br from-[#EFE8DD] to-[#F5EFE6] rounded-t-full shadow-sm p-10 text-center w-full max-w-md transition-all duration-300 hover:-translate-y-2 hover:shadow-md border-l-4 border-burgundy">
      <h3 className="text-2xl font-semibold text-[#4B2E2E] mb-4">Family Law</h3>
      <p className="text-[#5E4633] mb-6 leading-relaxed">Advising and representing clients in divorce proceedings, marriage-related legal issues, and other family disputes with a practical and confidential approach.</p>
      <button className="inline-flex items-center gap-2 text-[#4B2E2E] font-medium">
        Learn More
        <span className="bg-[#4B2E2E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">→</span>
      </button>
    </div>
  );
}

// Corporate Advisory - Top accent stripe
function CorporateAdvisoryCard() {
  return (
    <div className="relative rounded-t-full shadow-sm overflow-hidden w-full max-w-md transition-all duration-300 hover:-translate-y-2 hover:shadow-md border-r-4 border-burgundy">
      <div className="bg-[#EFE8DD] p-10 text-center">
        <h3 className="text-2xl font-semibold text-[#4B2E2E] mb-4">Corporate Advisory</h3>
        <p className="text-[#5E4633] mb-6 leading-relaxed">Offering professional services in contract review, contract drafting, and legal advisory for individuals and businesses to ensure legally sound and enforceable agreements.</p>
        <button className="inline-flex items-center gap-2 text-[#4B2E2E] font-medium">
          Learn More
          <span className="bg-[#4B2E2E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">→</span>
        </button>
      </div>
    </div>
  );
}

// Contract Drafting - Minimal border frame
function ContractDraftingCard() {
  return (
    <div className="bg-[#EFE8DD] rounded-t-full shadow-sm p-10 text-center w-full max-w-md transition-all duration-300 hover:-translate-y-2 hover:shadow-md border-b-4 border-r-4 border-gold">
      <h3 className="text-2xl font-semibold text-[#4B2E2E] mb-4">Criminal law</h3>
      <p className="text-[#5E4633] mb-6 leading-relaxed">Providing legal assistance in domestic violence, regular and anticipatory bail, FIR quashing, and MACT matters, ensuring effective representation, claim recovery, and strong criminal defense.</p>
      <button className="inline-flex items-center gap-2 text-[#4B2E2E] font-medium">
        Learn More
        <span className="bg-[#4B2E2E] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">→</span>
      </button>
    </div>
  );
}

