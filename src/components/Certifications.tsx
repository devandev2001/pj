import { Award, Star, Film, Trophy, Shield } from 'lucide-react';

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
    icon: Film,
  },
  {
    title: 'National Competition',
    description: 'Competed at 13th Macfair International Conclave in Drama & Speech categories',
    icon: Trophy,
  },
  {
    title: 'Military Training Excellence',
    description: 'Awarded NCC A, B, and C Certificates demonstrating advanced leadership and tactical proficiency',
    period: '2015-2020',
    icon: Shield,
  },
];

export default function Certifications() {
  return (
    <section className="section-padding bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">Certifications & </span>
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative p-10 rounded-3xl bg-dark-900 border-2 border-dark-700 shadow-elegant">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl shadow-elegant">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative p-6 bg-dark-800 rounded-xl border-2 border-dark-700 hover:border-primary-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="font-bold text-white text-lg flex-1">{cert.title}</h4>
                    <span className="px-4 py-1.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full text-xs font-semibold whitespace-nowrap shadow-elegant">
                      {cert.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    <p className="text-sm text-gray-400 font-medium">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-10 rounded-3xl bg-dark-900 border-2 border-dark-700 shadow-elegant">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gradient-to-br from-accent-600 to-primary-600 rounded-2xl shadow-elegant">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Special Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-6 bg-dark-800 rounded-xl border-2 border-dark-700 hover:border-accent-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-elegant"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-accent-600 to-primary-600 rounded-lg shadow-elegant group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg mb-2">{achievement.title}</h4>
                        <p className="text-sm text-gray-300 leading-relaxed mb-3">{achievement.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {achievement.award && (
                            <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-xs font-semibold shadow-elegant">
                              {achievement.award}
                            </span>
                          )}
                          {achievement.period && (
                            <span className="inline-block px-3 py-1 bg-dark-700 text-gray-300 rounded-full text-xs font-medium">
                              {achievement.period}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
