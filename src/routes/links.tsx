import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/links')({
  component: LinksPage,
})

const linkGroups = [
  {
    group: 'Government Resources',
    links: [
      { label: 'Federal Resources Portal', url: '#', description: 'Access federal grants, programs, and funding opportunities across all agencies.' },
      { label: 'State Services Directory', url: '#', description: 'Browse state-level programs, benefits, and service listings.' },
      { label: 'Permits & Licensing', url: '#', description: 'Apply for and track permits and professional licenses online.' },
    ],
  },
  {
    group: 'Community & Housing',
    links: [
      { label: 'Community Board', url: '#', description: 'Stay updated with local community board announcements and meeting minutes.' },
      { label: 'Housing Assistance Portal', url: '#', description: 'Apply for rental assistance, housing vouchers, and emergency shelter support.' },
      { label: 'Neighborhood Resource Guide', url: '#', description: 'Comprehensive guide to services available by neighborhood.' },
    ],
  },
  {
    group: 'Business & Economic Development',
    links: [
      { label: 'Small Business Development Center', url: '#', description: 'Free counseling and resources for starting and growing a small business.' },
      { label: 'Grant Finder Tool', url: '#', description: 'Search and apply for grants available to businesses and nonprofits.' },
      { label: 'Workforce Development Office', url: '#', description: 'Job training, apprenticeships, and employer partnership programs.' },
    ],
  },
  {
    group: 'Research & Data',
    links: [
      { label: 'Regional Data Hub', url: '#', description: 'Open datasets, demographic reports, and research publications.' },
      { label: 'Capital Improvement Plan', url: '#', description: 'Review planned infrastructure investments and timelines.' },
      { label: 'Community Needs Assessment', url: '#', description: 'Read the most recent assessment of regional community needs and priorities.' },
    ],
  },
]

function LinksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Helpful Links</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Curated links to government portals, community resources, and external tools.
          </p>
        </div>
      </section>

      {/* Link groups */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-14">
          {linkGroups.map((group) => (
            <div key={group.group}>
              <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                {group.group}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="flex flex-col gap-2 bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                        {link.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{link.description}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
