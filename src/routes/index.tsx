import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const services = [
  {
    icon: '🏗️',
    title: 'Infrastructure Planning',
    description:
      'Comprehensive planning and design services for modern infrastructure projects, from concept to execution.',
  },
  {
    icon: '📋',
    title: 'Permit & Compliance',
    description:
      'Navigating regulatory requirements and securing necessary permits for your projects with expert guidance.',
  },
  {
    icon: '🤝',
    title: 'Community Programs',
    description:
      'Connecting residents and organizations with programs, grants, and opportunities that make a difference.',
  },
]

const news = [
  {
    date: 'March 28, 2026',
    category: 'Announcement',
    title: 'New Grant Program Opens for Small Businesses',
    summary:
      'Applications are now open for the Spring 2026 Small Business Development Grant. Eligible businesses can receive up to $25,000 in funding.',
  },
  {
    date: 'March 15, 2026',
    category: 'Update',
    title: 'Office Hours Extended Through April',
    summary:
      'We have extended our public office hours on Tuesdays and Thursdays from 9 AM to 6 PM to better serve our community.',
  },
  {
    date: 'March 5, 2026',
    category: 'Event',
    title: 'Annual Community Forum — Save the Date',
    summary:
      'Join us on April 20 for our Annual Community Forum at the Civic Center. Open to all residents and stakeholders.',
  },
]

const links = [
  { label: 'Federal Resources Portal', url: '#', description: 'Access federal grants and funding opportunities' },
  { label: 'State Services Directory', url: '#', description: 'Browse state-level programs and services' },
  { label: 'Permit Lookup System', url: '#', description: 'Check permit status and requirements online' },
  { label: 'Community Board', url: '#', description: 'Stay updated with local community announcements' },
]

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Empowering Communities Through Quality Services
          </h1>
          <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
            Nexus Services provides expert support for infrastructure, compliance, and community development. We're here to help you navigate every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply"
              className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Submit an Application
            </Link>
            <Link
              to="/services"
              className="border border-white text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-800 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Offer</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              A range of professional services designed to meet your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest News & Updates</h2>
              <p className="text-gray-500">Stay informed with the latest from Nexus Services.</p>
            </div>
            <Link to="/news" className="text-blue-600 font-semibold hover:text-blue-700 hidden sm:block">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Helpful Links</h2>
            <p className="text-gray-500 text-lg">Useful external resources and portals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="text-blue-600 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{link.label}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{link.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Submit a request or application today and our team will be in touch within 2 business days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/apply"
              className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
