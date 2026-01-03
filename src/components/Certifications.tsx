import { Award, Star } from 'lucide-react';

const certifications = [
  {
    title: 'Financial Derivatives, Futures, and Options',
    issuer: 'Udemy',
    year: '2025',
  },
  {
    title: 'Introduction to Business Analytics',
    issuer: 'Coursera',
    year: '2025',
  },
  {
    title: 'Private Equity and Venture Capital',
    issuer: 'Coursera',
    year: '2023',
  },
];

const achievements = [
  {
    title: 'Film Industry Recognition',
    description: 'Worked as leading actress in "Junoon" featured at 9th Dada Saheb Phalke Film Festival, Delhi',
    award: 'Honorable Jury Mention',
  },
  {
    title: 'National Competition',
    description: 'Competed at 13th Macfair International Conclave in Drama & Speech categories',
  },
  {
    title: 'Military Training Excellence',
    description: 'Awarded NCC A, B, and C Certificates demonstrating advanced leadership and tactical proficiency',
    period: '2015-2020',
  },
];

export default function Certifications() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center">Certifications & Achievements</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-slate-900">{cert.title}</h4>
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-100 text-blue-700 rounded-full whitespace-nowrap">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Star className="w-8 h-8 text-blue-600" />
              Special Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <h4 className="font-semibold text-slate-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-700 mb-2">{achievement.description}</p>
                  {achievement.award && (
                    <span className="inline-block text-xs font-semibold px-3 py-1 bg-amber-100 text-amber-700 rounded-full">
                      {achievement.award}
                    </span>
                  )}
                  {achievement.period && (
                    <span className="text-xs text-gray-600">{achievement.period}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
