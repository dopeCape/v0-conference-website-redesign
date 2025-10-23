"use client"

const pressReleases = [
  {
    id: 1,
    date: "2025-12-01",
    title: "IAUP 60th Anniversary Conference Brings Together Global University Leaders",
    excerpt:
      "The International Association of University Presidents announces the 60th Anniversary Conference and Semi-Annual Meeting in Putrajaya, Malaysia.",
    link: "#",
  },
  {
    id: 2,
    date: "2025-11-15",
    title: "Conference Theme Emphasizes Global Collaboration and Innovation",
    excerpt:
      "This year's conference focuses on 'Global Connections, Collective Growth' with emphasis on AI integration and inclusive education.",
    link: "#",
  },
]

const mediaKitItems = [
  {
    name: "Conference Logo",
    description: "High-resolution conference logo in multiple formats",
    download: "#",
  },
  {
    name: "Event Branding Guidelines",
    description: "Complete visual identity and branding guidelines",
    download: "#",
  },
  {
    name: "Social Media Templates",
    description: "Ready-to-use templates for social media promotion",
    download: "#",
  },
  {
    name: "Press Release Template",
    description: "Template for media coverage and announcements",
    download: "#",
  },
]

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Media Kit & Press</h1>
          <p className="text-lg text-gray-600">
            Resources for media coverage and promotional materials for the conference.
          </p>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Press Releases</h2>
          <div className="space-y-4">
            {pressReleases.map((release) => (
              <div key={release.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                <time className="text-sm text-gray-500">
                  {new Date(release.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">{release.title}</h3>
                <p className="text-gray-700 mb-4">{release.excerpt}</p>
                <a href={release.link} className="text-pink-600 hover:text-pink-700 font-medium">
                  Read full release →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit Downloads */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Downloadable Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mediaKitItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href={item.download}
                  className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Media Contact */}
        <div className="mt-16 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-8 border border-pink-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Media Contact</h2>
          <p className="text-gray-700 mb-4">
            For media inquiries, interview requests, or additional information, please contact:
          </p>
          <div className="space-y-2">
            <p className="text-gray-900">
              <strong>Email:</strong>{" "}
              <a href="mailto:media@iaup-conference.org" className="text-pink-600 hover:text-pink-700">
                media@iaup-conference.org
              </a>
            </p>
            <p className="text-gray-900">
              <strong>Phone:</strong> +60 3-8318-5000
            </p>
            <p className="text-gray-900">
              <strong>Address:</strong> INTI International University, Putrajaya, Malaysia
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
