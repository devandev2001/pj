export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-12 text-center">About Me</h2>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              Versatile MBA aspirant with internship experience at the Bank of New York in post-trade compliance, enabling techno-functional skills across system workflows and operational controls. Backed by strong accounting and business fundamentals, further reinforced by five years of rigorous NCC training, which cultivated discipline, leadership, resilience and a strong sense of responsibility.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Beyond academics, I pursue creative interests in theatre, dance and marketing initiatives. I blend creativity with structure to deliver fresh, well-rounded perspectives and effectively bridge business objectives with process efficiency, delivering structured, innovative, and technology-aligned solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-gray-700 font-medium">Years of Leadership</p>
              <p className="text-sm text-gray-600 mt-2">NCC Training & University Roles</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
              <div className="text-3xl font-bold text-blue-600 mb-2">97.64%</div>
              <p className="text-gray-700 font-medium">CMAT Percentile</p>
              <p className="text-sm text-gray-600 mt-2">Top Candidates Nationwide</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
              <div className="text-3xl font-bold text-blue-600 mb-2">₹3.28L+</div>
              <p className="text-gray-700 font-medium">Total Scholarships</p>
              <p className="text-sm text-gray-600 mt-2">Merit-Based Recognition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
