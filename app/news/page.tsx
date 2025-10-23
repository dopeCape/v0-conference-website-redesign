"use client"

const news = [
  {
    id: 1,
    date: "2025-12-15",
    title: "Conference Schedule Released",
    category: "Announcement",
    content:
      "The full conference schedule is now available. Download the agenda to plan your sessions and networking opportunities.",
    link: "#",
  },
  {
    id: 2,
    date: "2025-12-10",
    title: "Early Bird Registration Extended",
    category: "Reminder",
    content:
      "Due to high demand, early bird registration has been extended until December 20, 2025. Secure your spot at the discounted rate.",
    link: "#",
  },
  {
    id: 3,
    date: "2025-12-05",
    title: "New Speakers Announced",
    category: "Update",
    content:
      "We're excited to announce three additional keynote speakers from leading institutions across Asia, Europe, and Africa.",
    link: "#",
  },
  {
    id: 4,
    date: "2025-11-28",
    title: "Transportation Guide Available",
    category: "Information",
    content:
      "Comprehensive transportation and accommodation guide for attendees is now available on the Venue & Travel page.",
    link: "#",
  },
  {
    id: 5,
    date: "2025-11-20",
    title: "Conference Theme Unveiled",
    category: "Announcement",
    content:
      "This year's theme 'Global Connections, Collective Growth' emphasizes collaboration and innovation in higher education.",
    link: "#",
  },
  {
    id: 6,
    date: "2025-11-15",
    title: "Registration Now Open",
    category: "Announcement",
    content: "Conference registration is officially open. Early bird rates available until December 20, 2025.",
    link: "#",
  },
]

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">News & Updates</h1>
          <p className="text-lg text-gray-600">
            Stay informed with the latest announcements, updates, and reminders about the conference.
          </p>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-pink-600"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                <div>
                  <span className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <time className="text-sm text-gray-500 whitespace-nowrap">
                  {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                </time>
              </div>
              <p className="text-gray-700 mb-4">{item.content}</p>
              <a href={item.link} className="text-pink-600 hover:text-pink-700 font-medium text-sm">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
