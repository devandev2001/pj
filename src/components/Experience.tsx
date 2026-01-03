import { Briefcase, CheckCircle2, MapPin, Award } from 'lucide-react';

export default function Experience() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">Professional </span>
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          <div className="relative p-10 rounded-3xl bg-dark-800 border-2 border-dark-700 shadow-elegant hover:shadow-elegant-lg hover:border-primary-500/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl shadow-elegant">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Bank of New York</h3>
                  <p className="text-xl text-primary-400 font-semibold">Post-Trade Compliance Intern</p>
                  <div className="flex items-center gap-2 mt-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Pune</span>
                  </div>
                </div>
              </div>
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-sm font-semibold shadow-elegant">Apr - Jun 2025</span>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex gap-4 p-4 bg-dark-900 rounded-xl border-l-4 border-primary-500 shadow-elegant">
                <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Post-Trade Investment Compliance:</strong> Conducted timely scheduling of reports to flow into the system, extracted reports from in-house applications, and conducted trade verifications per client guidelines
                </p>
              </div>
              <div className="flex gap-4 p-4 bg-dark-900 rounded-xl border-l-4 border-accent-500 shadow-elegant">
                <CheckCircle2 className="w-6 h-6 text-accent-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Breach Validation & Documentation:</strong> Validated breaches according to SOP and created final reports for compliance auditing
                </p>
              </div>
              <div className="flex gap-4 p-4 bg-dark-900 rounded-xl border-l-4 border-primary-500 shadow-elegant">
                <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">AI Chatbot Development:</strong> Created an AI Chatbot leveraging BNY's proprietary AI agent to assist 30+ employees in PTIM team with client SOPs and BAU processes
                </p>
              </div>
            </div>

            <div className="mt-6 p-5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl shadow-elegant">
              <p className="font-semibold text-lg">
                <strong>Key Achievement:</strong> Successfully implemented AI-driven support system that improved operational efficiency and employee onboarding
              </p>
            </div>
          </div>

          <div className="relative p-10 rounded-3xl bg-dark-800 border-2 border-dark-700 shadow-elegant">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-accent-600 to-primary-600 rounded-2xl shadow-elegant">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Positions of Responsibility</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Security Operations Lead - BML Munjal University', desc: 'Spearheaded Security Operations Team, ensuring smooth event execution and safety compliance for Annual Fest (2025)' },
                { title: 'Sponsorship Coordinator - BML Munjal University', desc: 'Co-Ordinated Sponsorship Team during Annual Fest, successfully engaging external partners (2025)' },
                { title: 'Marketing & Content Strategy - ieOM Society', desc: 'Associate member contributing to marketing initiatives and content strategy (2024)' },
                { title: 'Company Sergeant Major - National Cadet Corps', desc: 'Led and mentored cadets for 5 years, recognized for leadership, discipline, and operational excellence (2015-2020)' },
              ].map((pos, idx) => (
                <div key={idx} className="p-6 bg-dark-900 rounded-xl border-2 border-dark-700 hover:border-primary-500/50 hover:shadow-elegant transition-all duration-300">
                  <h4 className="font-bold text-white text-lg mb-2">{pos.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{pos.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
