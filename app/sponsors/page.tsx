"use client"

const sponsors = [
  {
    id: 1,
    name: "INTI International University",
    logo: "/images/inti-logo.png",
    tier: "Platinum",
    description: "Host institution and primary sponsor of the conference.",
  },
  {
    id: 2,
    name: "Global Education Alliance",
    logo: "/generic-sponsor-logo.png",
    tier: "Gold",
    description: "Supporting international collaboration and innovation in higher education.",
  },
  {
    id: 3,
    name: "Asia Pacific University Network",
    logo: "/generic-sponsor-logo.png",
    tier: "Gold",
    description: "Committed to advancing excellence in Asian higher education.",
  },
  {
    id: 4,
    name: "Digital Learning Solutions",
    logo: "/generic-sponsor-logo.png",
    tier: "Silver",
    description: "Providing innovative technology solutions for modern education.",
  },
  {
    id: 5,
    name: "International Education Foundation",
    logo: "/generic-sponsor-logo.png",
    tier: "Silver",
    description: "Supporting cross-cultural educational initiatives worldwide.",
  },
]

const sponsorshipPackages = [
  {
    tier: "Platinum",
    price: "Custom",
    benefits: [
      "Logo on all conference materials",
      "Speaking opportunity",
      "Booth at conference",
      "10 complimentary registrations",
      "Social media promotion",
    ],
  },
  {
    tier: "Gold",
    price: "$15,000",
    benefits: [
      "Logo on conference materials",
      "Booth at conference",
      "6 complimentary registrations",
      "Social media mention",
      "Newsletter feature",
    ],
  },
  {
    tier: "Silver",
    price: "$8,000",
    benefits: ["Logo on website", "3 complimentary registrations", "Social media mention", "Newsletter feature"],
  },
]

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Partners & Sponsors</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are grateful to our sponsors and partners who make this conference possible.
          </p>
        </div>

        {/* Current Sponsors */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Sponsors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <div className="h-24 mb-4 flex items-center justify-center bg-gray-100 rounded">
                  <img
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{sponsor.name}</h3>
                <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded mb-3 w-fit">
                  {sponsor.tier}
                </span>
                <p className="text-gray-600 text-sm">{sponsor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Packages */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Sponsorship Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipPackages.map((pkg) => (
              <div
                key={pkg.tier}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-r from-pink-600 to-rose-600 px-6 py-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{pkg.tier}</h3>
                  <p className="text-3xl font-bold">{pkg.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-pink-600 font-bold mt-1">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                    Inquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
