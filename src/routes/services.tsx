import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services')({
  component: ServicesPage,
})

const services = [
  {
    icon: '🏗️',
    title: 'Infrastructure Planning',
    description:
      'We provide end-to-end infrastructure planning services for municipalities, organizations, and private developers. Our team conducts site assessments, feasibility studies, and detailed project scoping to ensure your infrastructure investments are well-grounded and sustainable.',
    features: ['Site assessments', 'Feasibility studies', 'Project scoping', 'Long-term planning'],
  },
  {
    icon: '📋',
    title: 'Permit & Compliance',
    description:
      'Navigating permits and regulatory requirements can be complex. Our specialists guide you through local, state, and federal requirements so your project stays on schedule and fully compliant with applicable laws and codes.',
    features: ['Permit applications', 'Code compliance reviews', 'Environmental clearances', 'Regulatory liaison'],
  },
  {
    icon: '🤝',
    title: 'Community Programs',
    description:
      'We connect individuals and organizations with community development programs, grants, and resources. From housing assistance to small business support, our community programs team ensures resources reach those who need them.',
    features: ['Grant navigation', 'Housing assistance', 'Small business support', 'Youth programs'],
  },
  {
    icon: '🔍',
    title: 'Research & Analysis',
    description:
      'Data-driven insights to support decision-making. We conduct comprehensive research, surveys, and impact assessments to help organizations understand community needs and measure program effectiveness.',
    features: ['Community surveys', 'Impact assessments', 'Policy research', 'Data reporting'],
  },
  {
    icon: '📣',
    title: 'Public Engagement',
    description:
      'Meaningful community engagement is essential to successful projects. We facilitate public meetings, stakeholder consultations, and feedback sessions that build consensus and ensure diverse voices are heard.',
    features: ['Public meetings', 'Stakeholder outreach', 'Feedback facilitation', 'Communications planning'],
  },
  {
    icon: '🎓',
    title: 'Training & Workshops',
    description:
      'Capacity-building programs for organizations and individuals. Our workshops cover grant writing, project management, compliance training, and leadership development tailored to your context.',
    features: ['Grant writing workshops', 'Project management', 'Compliance training', 'Leadership development'],
  },
]

function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From planning to compliance to community engagement — comprehensive support at every stage.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-6 flex-1">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Service Not Listed Here?</h2>
          <p className="text-gray-500 mb-8">
            Reach out directly — we may be able to help or connect you with the right resource.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  )
}
