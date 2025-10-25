"use client"

import { SiteHeader } from "@/components/site-header"

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="pt-20 sm:pt-24">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Registration</h1>
          <p className="mt-2 text-gray-600">Secure your spot at this landmark event.</p>

          {/* Pricing tiers */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-6 border shadow-sm bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
              <h3 className="text-lg font-semibold text-amber-900">Member Rate</h3>
              <p className="text-xs text-amber-700 mt-1">IAUP, AUAP, VCCPU Members</p>
              <div className="mt-3 text-4xl font-bold text-amber-600">$150</div>
              <ul className="mt-4 text-gray-700 space-y-2 list-disc pl-5">
                <li>Access to all sessions</li>
                <li>Conference kit & materials</li>
                <li>Welcome reception</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 border shadow-sm">
              <h3 className="text-lg font-semibold">Early Bird</h3>
              <div className="mt-2 text-4xl font-bold text-pink-600">$150</div>
              <ul className="mt-4 text-gray-700 space-y-2 list-disc pl-5">
                <li>Access to all sessions</li>
                <li>Conference kit & materials</li>
                <li>Welcome reception</li>
              </ul>
            </div>
            <div className="rounded-2xl p-6 border shadow-sm">
              <h3 className="text-lg font-semibold">Standard</h3>
              <div className="mt-2 text-4xl font-bold text-pink-600">$200</div>
              <ul className="mt-4 text-gray-700 space-y-2 list-disc pl-5">
                <li>All Early Bird benefits</li>
                <li>IAUP Conference Dinner</li>
                <li>Priority seating for plenaries</li>
              </ul>
            </div>
          </div>

          {/* What's Included */}
          <h2 className="mt-10 text-2xl font-bold text-gray-900">What's Included</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Sessions & Materials", d: "Keynotes, plenaries, track sessions, and digital resources." },
              { t: "Meals & Networking", d: "Welcome reception, coffee breaks, conference dinner." },
              { t: "Support", d: "On‑site concierge and invitation letters (on request)." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border p-5 bg-white hover:shadow-md transition">
                <div className="font-semibold text-gray-900">{x.t}</div>
                <p className="text-gray-700 mt-1">{x.d}</p>
              </div>
            ))}
          </div>

          {/* At-a-glance stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-10">
            <div className="rounded-2xl p-6 text-white text-center bg-gradient-to-br from-pink-600 to-rose-400">
              <div className="text-4xl font-bold mb-2">$150–200</div>
              <div className="text-sm">Registration (USD)</div>
            </div>
            <div className="rounded-2xl p-6 text-white text-center bg-gradient-to-br from-rose-500 to-orange-500">
              <div className="text-4xl font-bold mb-2">3 Days</div>
              <div className="text-sm">Event Duration</div>
            </div>
          </div>

          {/* Registration form */}
          <form className="bg-gray-50 rounded-2xl p-8 shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title *</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300">
                  <option value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                  <option value="Prof">Prof</option>
                </select>
              </div>
              <div></div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="px-4 py-3 rounded-lg border" placeholder="First Name *" />
              <input className="px-4 py-3 rounded-lg border" placeholder="Last Name *" />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="px-4 py-3 rounded-lg border" placeholder="Email *" type="email" />
              <input className="px-4 py-3 rounded-lg border" placeholder="Mobile Number *" type="tel" />
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input className="px-4 py-3 rounded-lg border" placeholder="Institution *" />
              <input className="px-4 py-3 rounded-lg border" placeholder="Position *" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Photo Upload</label>
              <input type="file" accept="image/*" className="w-full px-4 py-3 rounded-lg border" />
            </div>
            <textarea className="mt-4 w-full px-4 py-3 rounded-lg border" rows={4} placeholder="About Me *" />
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdTm6YEFugEDfgIpdGKldhPHQstG0TKsLCkWAH245dRvVCMEA/viewform",
                  "_blank",
                )
              }
              className="mt-6 w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold"
            >
              Submit Registration
            </button>
          </form>
        </section>
      </main>
    </div>
  )
}
