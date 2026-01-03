import { BarChart3, Database, Users, Presentation, Code2, TrendingUp } from 'lucide-react';

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center">Core Competencies</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{skill.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Languages</h3>
          <div className="flex gap-4 flex-wrap">
            <span className="px-6 py-3 bg-blue-100 text-blue-900 rounded-full font-medium">English - Professional Proficiency</span>
            <span className="px-6 py-3 bg-blue-100 text-blue-900 rounded-full font-medium">Hindi - Professional Proficiency</span>
          </div>
        </div>
      </div>
    </section>
  );
}
