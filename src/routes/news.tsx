import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/news')({
  component: NewsPage,
})

const articles = [
  {
    date: 'March 28, 2026',
    category: 'Announcement',
    title: 'New Grant Program Opens for Small Businesses',
    body: 'Applications are now open for the Spring 2026 Small Business Development Grant. Eligible businesses can receive up to $25,000 in funding to support operations, expansion, or workforce training. The program is available to businesses with fewer than 50 employees operating in the region for at least one year. Deadline to apply is May 15, 2026.',
  },
  {
    date: 'March 15, 2026',
    category: 'Update',
    title: 'Office Hours Extended Through April',
    body: 'We have extended our public office hours on Tuesdays and Thursdays from 9 AM to 6 PM to better serve our community. Walk-ins are welcome for general inquiries, permit questions, and program information. No appointment is required for visits under 30 minutes.',
  },
  {
    date: 'March 5, 2026',
    category: 'Event',
    title: 'Annual Community Forum — Save the Date',
    body: 'Join us on April 20, 2026 for our Annual Community Forum at the Civic Center, Main Hall, beginning at 10 AM. This open forum is an opportunity for residents, business owners, and stakeholders to share feedback on services, propose ideas, and hear updates on ongoing projects. Lunch will be provided. RSVP encouraged.',
  },
  {
    date: 'February 22, 2026',
    category: 'Program',
    title: 'Youth Leadership Initiative Launches Second Cohort',
    body: 'Following a successful inaugural cohort, our Youth Leadership Initiative is now accepting applications for the second cohort beginning June 2026. The eight-week program provides mentorship, community project experience, and professional development for residents aged 16–24.',
  },
  {
    date: 'February 10, 2026',
    category: 'Announcement',
    title: 'Infrastructure Assessment Project Begins',
    body: 'Our team has commenced the region-wide infrastructure assessment project funded through the Community Development Block Grant. The assessment will cover roads, utilities, and public facilities across 12 districts. Findings will be published in Q3 2026 and will inform the upcoming capital improvement plan.',
  },
  {
    date: 'January 30, 2026',
    category: 'Update',
    title: 'Online Permit Portal Now Accepting Applications',
    body: 'The new online permit portal is now live, allowing residents and developers to submit building, renovation, and event permit applications electronically. The portal provides real-time status updates and estimated processing timelines. Visit the Permit Lookup System link on our Links page to get started.',
  },
]

const categoryColors: Record<string, string> = {
  Announcement: 'bg-blue-100 text-blue-700',
  Update: 'bg-green-100 text-green-700',
  Event: 'bg-purple-100 text-purple-700',
  Program: 'bg-orange-100 text-orange-700',
}

function NewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">News & Updates</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            The latest announcements, events, and program updates from Nexus Services.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {articles.map((article) => (
            <article
              key={article.title}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-600'}`}
                >
                  {article.category}
                </span>
                <span className="text-sm text-gray-400">{article.date}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h2>
              <p className="text-gray-600 leading-relaxed">{article.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
