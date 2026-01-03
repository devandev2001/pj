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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative pl-8 pb-8 border-l-2 border-blue-300 hover:border-blue-600 transition-colors last:pb-0"
            >
              <div className="absolute -left-3 top-0 w-4 h-4 bg-blue-600 rounded-full group-hover:scale-150 transition-transform duration-300"></div>

              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl border border-blue-100 hover:border-blue-400 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium mt-1">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-semibold px-3 py-1 bg-blue-600 text-white rounded-full whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-700 font-medium">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl border border-blue-200">
          <div className="flex items-start gap-4">
            <Award className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Academic Excellence Awards</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>25% MBA Merit Scholarship</strong> (₹1,68,750) - 2025</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>97.64 CMAT Percentile</strong> - Top candidates nationwide - 2024</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Undergraduate Scholarship</strong> (₹1,60,000) - 2020</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Academic Excellence Award</strong> - Class XI - 2019</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
