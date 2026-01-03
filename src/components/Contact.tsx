import { Mail, Phone, Linkedin, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6"></div>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:priyanjalikadam1@gmail.com"
            className="group relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center transition-all duration-300 border-2 border-white/20 hover:border-primary-400 hover:bg-primary-500/20 transform hover:-translate-y-2 hover:shadow-elegant-lg"
          >
            <div className="inline-flex p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-elegant">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-dark-400 mb-1 group-hover:text-white transition-colors">Email</p>
            <p className="font-semibold text-sm text-white break-all">priyanjalikadam1@gmail.com</p>
          </a>

          <a
            href="tel:7067614411"
            className="group relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center transition-all duration-300 border-2 border-white/20 hover:border-primary-400 hover:bg-primary-500/20 transform hover:-translate-y-2 hover:shadow-elegant-lg"
          >
            <div className="inline-flex p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-elegant">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-dark-400 mb-1 group-hover:text-white transition-colors">Phone</p>
            <p className="font-semibold text-sm text-white">7067614411</p>
          </a>

          <a
            href="https://www.linkedin.com/in/priyanjali-kadam"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center transition-all duration-300 border-2 border-white/20 hover:border-primary-400 hover:bg-primary-500/20 transform hover:-translate-y-2 hover:shadow-elegant-lg"
          >
            <div className="inline-flex p-3 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-elegant">
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-dark-400 mb-1 group-hover:text-white transition-colors">LinkedIn</p>
            <p className="font-semibold text-sm text-white">View Profile</p>
          </a>

          <div className="group relative bg-white/10 backdrop-blur-lg p-6 rounded-2xl text-center border-2 border-white/20">
            <div className="inline-flex p-3 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl mb-4 shadow-elegant">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-dark-400 mb-1">Location</p>
            <p className="font-semibold text-sm text-white">India</p>
          </div>
        </div>

        <div className="relative bg-white/10 backdrop-blur-lg border-2 border-white/20 rounded-3xl p-10 text-center shadow-elegant-lg">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-primary-400" />
            <p className="text-dark-300 text-lg font-medium">
              Open to opportunities in <span className="text-primary-400 font-semibold">Finance</span>, <span className="text-accent-400 font-semibold">Business Analytics</span>, and <span className="text-primary-400 font-semibold">Strategic Consulting</span>
            </p>
          </div>
          <a
            href="mailto:priyanjalikadam1@gmail.com"
            className="group/btn inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-elegant-lg"
          >
            <Mail size={20} />
            Send Me an Email
            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
