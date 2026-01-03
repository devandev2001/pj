import { TrendingDown, PieChart, CheckCircle2, Sparkles } from 'lucide-react';

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
    <section className="section-padding bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">Academic </span>
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="relative rounded-3xl overflow-hidden border-2 border-dark-700 shadow-elegant hover:shadow-elegant-lg hover:border-primary-500/50 transition-all duration-300">
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 text-white">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                        <p className="text-white/90 text-lg">{project.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-semibold text-sm">{project.year}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-dark-800">
                  <h4 className="font-bold text-white text-xl mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-primary-400" />
                    Key Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-dark-900 rounded-xl border-2 border-dark-700 hover:border-primary-500/50 transition-all">
                        <CheckCircle2 className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-300 leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
