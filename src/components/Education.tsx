import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Business Administration',
    institution: 'BML Munjal University',
    year: '2026',
    details: 'CGPA: 7.57',
    status: 'In Progress',
  },
  {
    degree: 'B.Com (Hons.)',
    institution: 'Prestige Institute of Management and Research',
    year: '2023',
    details: 'Percentage: 84.3%',
    status: 'Completed',
  },
  {
    degree: '12th (Senior Secondary)',
    institution: 'Gwalior Glory High School',
    year: '2020',
    details: 'Percentage: 89.4%',
    status: 'Completed',
  },
  {
    degree: '10th (Secondary)',
    institution: 'Gwalior Glory High School',
    year: '2018',
    details: 'Percentage: 81.6%',
    status: 'Completed',
  },
];

export default function Education() {
  return (
    <section className="section-padding bg-dark-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative p-8 rounded-2xl bg-dark-900 border-2 border-dark-700 hover:border-primary-500/50 shadow-elegant hover:shadow-elegant-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-2xl shadow-elegant ${
                    edu.status === 'In Progress' 
                      ? 'bg-gradient-to-br from-primary-600 to-accent-600' 
                      : 'bg-gradient-to-br from-accent-600 to-primary-600'
                  }`}>
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg text-primary-400 font-semibold">{edu.institution}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className={`inline-block px-5 py-2 rounded-full text-sm font-semibold shadow-elegant ${
                    edu.status === 'In Progress'
                      ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                      : 'bg-gradient-to-r from-accent-600 to-primary-600 text-white'
                  }`}>
                    {edu.year}
                  </span>
                  {edu.status === 'In Progress' && (
                    <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 p-3 bg-dark-800 rounded-lg border border-dark-700">
                <Award className="w-5 h-5 text-primary-400" />
                <p className="text-gray-300 font-semibold">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative p-10 rounded-3xl bg-dark-900 border-2 border-dark-700 shadow-elegant">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl shadow-elegant">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Academic Excellence Awards</h3>
              <p className="text-gray-400">Recognitions and achievements throughout my academic journey</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: '25% MBA Merit Scholarship', amount: '₹1,68,750', year: '2025' },
              { title: '97.64 CMAT Percentile', desc: 'Top candidates nationwide', year: '2024' },
              { title: 'Undergraduate Scholarship', amount: '₹1,60,000', year: '2020' },
              { title: 'Academic Excellence Award', desc: 'Class XI', year: '2019' },
            ].map((award, idx) => (
              <div key={idx} className="p-5 bg-dark-800 rounded-xl border-2 border-dark-700 hover:border-primary-500/50 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h4 className="font-bold text-white">{award.title}</h4>
                  <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-xs font-semibold whitespace-nowrap shadow-elegant">
                    {award.year}
                  </span>
                </div>
                {award.amount && <p className="text-primary-400 font-semibold">{award.amount}</p>}
                {award.desc && <p className="text-sm text-gray-400">{award.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
