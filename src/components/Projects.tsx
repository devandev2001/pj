import { TrendingDown, PieChart } from 'lucide-react';

const projects = [
  {
    title: 'Business Analysis Project - Automobile Loan Defaulters',
    year: '2025',
    icon: TrendingDown,
    description: 'Comprehensive diagnostic, predictive, and prescriptive analysis on a dataset of automobile loan defaulters',
    highlights: [
      'Identified key trends and root causes through multi-faceted analysis',
      'Reduced projected defaulters from 9% to 7%',
      'Achieved 3% ROI improvement through lower losses',
      'Supported strategic decision-making process',
    ],
  },
  {
    title: 'Business Valuation - SJVN Ltd.',
    year: '2025',
    icon: PieChart,
    description: 'Financial modelling and comprehensive business valuation using multiple methodologies',
    highlights: [
      'Applied Discounted Cash Flow (DCF) valuation method',
      'Performed relative valuation analysis',
      'Analyzed comprehensive financial statements',
      'Evaluated growth assumptions and capital structure',
      'Estimated intrinsic value for investment decision support',
    ],
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center">Academic Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group border border-slate-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-blue-100 mt-1">{project.description}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold px-3 py-1 bg-white/20 rounded-full whitespace-nowrap">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-700">
                        <span className="text-blue-600 font-bold">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
