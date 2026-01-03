import { Target, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section className="section-padding bg-dark-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          <div className="relative p-10 rounded-3xl bg-dark-800 border-2 border-dark-700 shadow-elegant hover:shadow-elegant-lg hover:border-primary-500/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl shadow-elegant">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Professional Summary</h3>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                Versatile <span className="font-bold text-primary-400">MBA aspirant</span> with internship experience at the <span className="font-bold text-accent-400">Bank of New York</span> in post-trade compliance, enabling techno-functional skills across system workflows and operational controls. Backed by strong accounting and business fundamentals, further reinforced by <span className="font-bold text-primary-400">five years of rigorous NCC training</span>, which cultivated discipline, leadership, resilience and a strong sense of responsibility.
              </p>
              <p>
                Beyond academics, I pursue creative interests in <span className="font-bold text-accent-400">theatre, dance and marketing initiatives</span>. I blend creativity with structure to deliver fresh, well-rounded perspectives and effectively bridge business objectives with process efficiency, delivering structured, innovative, and technology-aligned solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold mb-3">5+</div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5" />
                  <p className="text-xl font-semibold">Years of Leadership</p>
                </div>
                <p className="text-primary-100 text-sm">NCC Training & University Roles</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-accent-600 to-accent-700 text-white shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold mb-3">97.64%</div>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <p className="text-xl font-semibold">CMAT Percentile</p>
                </div>
                <p className="text-accent-100 text-sm">Top Candidates Nationwide</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 text-white shadow-elegant hover:shadow-elegant-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative">
                <div className="text-5xl font-bold mb-3">₹3.28L+</div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5" />
                  <p className="text-xl font-semibold">Total Scholarships</p>
                </div>
                <p className="text-white/90 text-sm">Merit-Based Recognition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
