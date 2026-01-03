import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center">Professional Experience</h2>

        <div className="group relative pl-8 pb-0 border-l-2 border-blue-300 hover:border-blue-600 transition-colors">
          <div className="absolute -left-3 top-0 w-4 h-4 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>

          <div className="bg-white p-8 rounded-xl border border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Bank of New York</h3>
                  <p className="text-blue-600 font-medium mt-1">Post-Trade Compliance Intern</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold px-4 py-2 bg-blue-600 text-white rounded-full">Apr - Jun 2025</span>
                <p className="text-gray-600 text-sm mt-2">Pune</p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Post-Trade Investment Compliance:</strong> Conducted timely scheduling of reports to flow into the system, extracted reports from in-house applications, and conducted trade verifications per client guidelines
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>Breach Validation & Documentation:</strong> Validated breaches according to SOP and created final reports for compliance auditing
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">
                  <strong>AI Chatbot Development:</strong> Created an AI Chatbot leveraging BNY's proprietary AI agent to assist 30+ employees in PTIM team with client SOPs and BAU processes
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-sm text-gray-700">
                <strong>Key Achievement:</strong> Successfully implemented AI-driven support system that improved operational efficiency and employee onboarding
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Positions of Responsibility</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">1</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Security Operations Lead - BML Munjal University</h4>
                <p className="text-gray-700 mt-1">Spearheaded Security Operations Team, ensuring smooth event execution and safety compliance for Annual Fest (2025)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">2</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Sponsorship Coordinator - BML Munjal University</h4>
                <p className="text-gray-700 mt-1">Co-Ordinated Sponsorship Team during Annual Fest, successfully engaging external partners (2025)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">3</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Marketing & Content Strategy - ieOM Society</h4>
                <p className="text-gray-700 mt-1">Associate member contributing to marketing initiatives and content strategy (2024)</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">4</div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Company Sergeant Major - National Cadet Corps</h4>
                <p className="text-gray-700 mt-1">Led and mentored cadets for 5 years, recognized for leadership, discipline, and operational excellence (2015-2020)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
