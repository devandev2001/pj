import { Mail, Phone, Linkedin, ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 rounded-full shadow-elegant border border-primary-500/30">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-semibold text-primary-400">MBA Aspirant | Finance & Business Analytics</span>
              </div>
              
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <span className="text-gradient">Priyanjali</span>
                <span className="text-white"> S Kadam</span>
              </h1>
              
              <p className="text-2xl text-gray-300 font-medium leading-relaxed max-w-2xl">
                Versatile finance professional blending <span className="text-primary-400 font-semibold">technical expertise</span> with <span className="text-accent-400 font-semibold">creative leadership</span>
              </p>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Experienced in post-trade compliance, financial modelling, and driving innovative solutions. Passionate about transforming data into strategic insights.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:priyanjalikadam1@gmail.com"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl font-semibold transition-all duration-300 shadow-elegant hover:shadow-elegant-lg transform hover:-translate-y-1"
              >
                <Mail size={20} />
                Get In Touch
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanjali-kadam"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-dark-800 border-2 border-primary-500/50 hover:border-primary-500 text-primary-400 hover:text-primary-300 rounded-xl font-semibold transition-all duration-300 shadow-elegant hover:shadow-elegant-lg"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <a href="tel:7067614411" className="group flex items-center gap-3 p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-primary-500/50 hover:shadow-elegant transition-all duration-300">
                <div className="p-2 bg-primary-500/20 rounded-lg group-hover:bg-primary-500/30 transition-colors">
                  <Phone size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Phone</p>
                  <p className="text-sm font-semibold text-white">7067614411</p>
                </div>
              </a>
              <a href="mailto:priyanjalikadam1@gmail.com" className="group flex items-center gap-3 p-4 bg-dark-800 rounded-xl border border-dark-700 hover:border-primary-500/50 hover:shadow-elegant transition-all duration-300">
                <div className="p-2 bg-accent-500/20 rounded-lg group-hover:bg-accent-500/30 transition-colors">
                  <Mail size={18} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Email</p>
                  <p className="text-sm font-semibold text-white truncate">priyanjalikadam1@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative w-80 h-96 rounded-3xl overflow-hidden shadow-elegant-lg border-4 border-dark-700 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/whatsapp_image_2026-01-04_at_00.34.36.jpeg"
                  alt="Priyanjali S Kadam"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
