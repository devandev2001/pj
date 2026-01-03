import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Priyanjali S Kadam
              </h1>
              <p className="text-xl sm:text-2xl text-blue-300 font-medium">
                MBA Aspirant | Finance & Business Analytics
              </p>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Versatile finance professional blending technical expertise with creative leadership. Experienced in post-trade compliance, financial modelling, and driving innovative solutions.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="mailto:priyanjalikadam1@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/priyanjali-kadam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-slate-900 rounded-lg font-medium transition-all duration-300"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>

            <div className="space-y-3 pt-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-blue-400" />
                <span>7067614411</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-blue-400" />
                <span>priyanjalikadam1@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
              <img
                src="/whatsapp_image_2026-01-04_at_00.34.36.jpeg"
                alt="Priyanjali S Kadam"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
