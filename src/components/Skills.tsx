import { BarChart3, Database, Users, Presentation, Code2, TrendingUp, Globe } from 'lucide-react';

const skills = [
  {
    name: 'Business Valuation',
    icon: TrendingUp,
    description: 'DCF, Relative Valuation, Financial Analysis',
  },
  {
    name: 'Financial Modelling',
    icon: BarChart3,
    description: 'Excel, Forecasting, Scenario Analysis',
  },
  {
    name: 'Data Analytics',
    icon: Database,
    description: 'Power BI, Diagnostic & Predictive Analysis',
  },
  {
    name: 'Leadership',
    icon: Users,
    description: 'Team Management, NCC Military Training',
  },
  {
    name: 'Public Speaking',
    icon: Presentation,
    description: 'Presentations, Communication, Influence',
  },
  {
    name: 'Technical Tools',
    icon: Code2,
    description: 'Microsoft Office, Power BI, Business Applications',
  },
];

export default function Skills() {
  return (
    <section className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">Core </span>
            <span className="text-gradient">Competencies</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative p-8 rounded-2xl bg-dark-900 border-2 border-dark-700 hover:border-primary-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-elegant-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl shadow-elegant group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>

        <div className="relative p-10 rounded-3xl bg-dark-900 border-2 border-dark-700 shadow-elegant">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl shadow-elegant">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Languages</h3>
          </div>
          <div className="flex gap-4 flex-wrap">
            <span className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold shadow-elegant">English - Professional Proficiency</span>
            <span className="px-6 py-3 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl font-semibold shadow-elegant">Hindi - Professional Proficiency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
