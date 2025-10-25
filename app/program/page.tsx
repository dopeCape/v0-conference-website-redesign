"use client"

import { SiteHeader } from "@/components/site-header"

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      <main className="pt-20 sm:pt-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Program Schedule</h1>
          <p className="mt-2 text-gray-600">12–14 January 2026 · Marriott Hotel Putrajaya</p>

          <div className="mt-8 space-y-8">
            {/* Day 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-pink-600 to-rose-400 text-white p-6">
                <h2 className="text-2xl font-bold">Day 1 · Monday · 12 January 2026</h2>
                <p className="text-sm mt-1 text-white/90">Marriott Hotel Putrajaya</p>
              </div>
              <div className="p-6 divide-y divide-gray-100">
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">3:00 – 6:00 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Registration</div>
                    <div className="text-gray-600 text-sm">Main Garden Ballroom</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">6:00 – 8:30 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Cocktail Reception</div>
                    <div className="text-gray-600 text-sm">Networking and refreshments</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-rose-600 to-amber-500 text-white p-6">
                <h2 className="text-2xl font-bold">Day 2 · Tuesday · 13 January 2026</h2>
                <p className="text-sm mt-1 text-white/90">Marriott Hotel Putrajaya</p>
              </div>
              <div className="p-6 divide-y divide-gray-100">
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">8:30 – 9:30 AM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Opening Ceremony</div>
                    <div className="text-gray-600 text-sm">
                      Welcome Remarks by INTI Leaders · IAUP Leadership Address
                    </div>
                    <div className="text-gray-600 text-sm">Foyer</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">9:30 – 10:00 AM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Keynote Address 1</div>
                    <div className="text-gray-600 text-sm">
                      Global Connections, Collective Growth · Photography session
                    </div>
                    <div className="text-gray-600 text-sm">Main Garden Ballroom</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">10:00 – 10:30 AM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Coffee Break</div>
                    <div className="text-gray-600 text-sm">Foyer</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">10:30 – 11:00 AM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Special Topic Presentation 1</div>
                    <div className="text-gray-600 text-sm">Garden Ballroom</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">11:00 AM – 12:30 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Session 1</div>
                    <div className="text-gray-600 text-sm">
                      <strong>Forum 1.1:</strong> Cross-Border Partnerships for Innovation (Main Garden Ballroom)
                    </div>
                    <div className="text-gray-600 text-sm">
                      <strong>Forum 1.2:</strong> Mobility and Exchange in the New Era (Garden III)
                    </div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">12:30 – 2:00 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Networking Lunch</div>
                    <div className="text-gray-600 text-sm">Marriott Café (Zest)</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">2:00 – 2:30 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Special Topic Presentation 2</div>
                    <div className="text-gray-600 text-sm">Garden Ballroom</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">2:30 – 4:00 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Session 2</div>
                    <div className="text-gray-600 text-sm">
                      <strong>Forum 2.1:</strong> Technology as a Bridge for Global Learning (Main Garden Ballroom)
                    </div>
                    <div className="text-gray-600 text-sm">
                      <strong>Forum 2.2:</strong> Global Competencies and Inclusive Growth (Garden III)
                    </div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">4:00 – 4:30 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Coffee Break</div>
                    <div className="text-gray-600 text-sm">Foyer</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">4:30 – 6:00 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Session 3</div>
                    <div className="text-gray-600 text-sm">
                      <strong>Forum 3.1:</strong> Shared Research, Shared Impact (Main Garden Ballroom)
                    </div>
                    <div className="text-gray-600 text-sm">
                      <strong>Forum 3.2:</strong> Global Capital Flows and Higher Education Futures (Garden III)
                    </div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">7:00 – 9:30 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Gala Dinner & Cultural Night Performances</div>
                    <div className="text-gray-600 text-sm">Main Garden Ballroom</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6">
                <h2 className="text-2xl font-bold">Day 3 · Wednesday · 14 January 2026</h2>
                <p className="text-sm mt-1 text-white/90">Marriott Hotel Putrajaya</p>
              </div>
              <div className="p-6 divide-y divide-gray-100">
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">9:00 – 9:30 AM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Keynote Address 2</div>
                    <div className="text-gray-600 text-sm">Future of Higher Education in Asia Pacific</div>
                    <div className="text-gray-600 text-sm">Main Garden Ballroom</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">9:30 – 10:00 AM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Special Topic Presentation 3</div>
                    <div className="text-gray-600 text-sm">Main Garden Ballroom</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">10:00 – 10:15 AM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Coffee Break</div>
                    <div className="text-gray-600 text-sm">Foyer</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">10:15 – 11:45 AM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Session 4</div>
                    <div className="text-gray-600 text-sm">
                      <strong>Forum 4.1:</strong> Resilient & Sustainable Education Ecosystems (Main Garden Ballroom)
                    </div>
                    <div className="text-gray-600 text-sm">
                      <strong>Forum 4.2:</strong> The Role of Associations in Global Higher Education (Garden III)
                    </div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">11:45 AM – 12:00 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Closing Ceremony</div>
                    <div className="text-gray-600 text-sm">Summary of Outcomes · IAUP Regional Declaration</div>
                    <div className="text-gray-600 text-sm">Garden Ballroom</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">12:00 – 2:00 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Networking Lunch</div>
                    <div className="text-gray-600 text-sm">Marriott Café</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">2:00 – 6:00 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Educational & Cultural Tour</div>
                    <div className="text-gray-600 text-sm">Kolej Tuanku Ja'afar, Tunku Ja'afar Gallery</div>
                  </div>
                </div>
                <div className="py-4 flex flex-col sm:flex-row sm:items-start gap-3">
                  <div className="sm:w-32 font-semibold text-pink-600">6:00 – 7:00 PM</div>
                  <div>
                    <div className="font-semibold text-gray-900">Dinner</div>
                    <div className="text-gray-600 text-sm">INTI International University</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tracks overview */}
          <h2 className="mt-12 text-2xl font-bold text-gray-900">Conference Tracks</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Cross-Border Partnerships for Innovation",
              "Mobility and Exchange in the New Era",
              "Technology as a Bridge for Global Learning",
              "Global Competencies and Inclusive Growth",
              "Shared Research, Shared Impact",
              "Global Capital Flows and Higher Education Futures",
              "Resilient & Sustainable Education Ecosystems",
              "The Role of Associations in Global Higher Education",
            ].map((t) => (
              <div key={t} className="rounded-xl border bg-white p-4 hover:shadow-md transition">
                <div className="font-semibold text-gray-900 text-sm">{t}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
