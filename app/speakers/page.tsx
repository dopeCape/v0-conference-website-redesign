"use client"

import { SiteHeader } from "@/components/site-header"

const speakers = [
  {
    id: 1,
    name: "Prof. Dr. Joseph Lee",
    title: "Vice Chancellor",
    institution: "INTI International University",
    bio: "Prof. Dr. Joseph Lee is the Vice Chancellor of INTI International University and a visionary leader in higher education. He will deliver the opening remarks and welcome address at the conference.",
    image: "/professional-man-speaker.jpg",
    linkedin: "#",
    website: "#",
  },
  {
    id: 2,
    name: "Minister of Higher Education",
    title: "Guest of Honour",
    institution: "Malaysia",
    bio: "The Minister of Higher Education Malaysia will deliver remarks as the Guest of Honour at the Opening Ceremony, highlighting Malaysia's leadership and achievements in higher education.",
    image: "/professional-woman-speaker.jpg",
    linkedin: "#",
    website: "#",
  },
  {
    id: 3,
    name: "CEO of MQA",
    title: "Chief Executive Officer",
    institution: "Malaysian Qualifications Agency",
    bio: "The CEO of MQA will deliver a special keynote address on Day 3, sharing insights on quality assurance and the future of higher education in Malaysia and the Asia Pacific region.",
    image: "/professional-man-speaker.jpg",
    linkedin: "#",
    website: "#",
  },
  {
    id: 4,
    name: "CEO of EMGS",
    title: "Chief Executive Officer",
    institution: "Educational Management Group Services",
    bio: "The CEO of EMGS will deliver a special keynote address on Day 3, discussing the role of educational management and strategic partnerships in advancing higher education excellence.",
    image: "/professional-woman-speaker.jpg",
    linkedin: "#",
    website: "#",
  },
]

export default function SpeakersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Conference Speakers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the distinguished leaders shaping the future of higher education in Asia Pacific and beyond.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative h-64 w-full bg-gray-200">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                <p className="text-sm font-semibold text-pink-600 mb-1">{speaker.title}</p>
                <p className="text-sm text-gray-600 mb-4">{speaker.institution}</p>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">{speaker.bio}</p>
                <div className="flex gap-3">
                  <a href={speaker.linkedin} className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                    LinkedIn
                  </a>
                  <a href={speaker.website} className="text-pink-600 hover:text-pink-700 text-sm font-medium">
                    Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
