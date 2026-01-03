import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Let's Connect</h2>
        <p className="text-gray-300 text-center text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, and conversations. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:priyanjalikadam1@gmail.com"
            className="group bg-white/10 hover:bg-blue-600 p-6 rounded-xl text-center transition-all duration-300 border border-white/20 hover:border-blue-400"
          >
            <Mail className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm text-gray-300 mb-1">Email</p>
            <p className="font-semibold text-sm break-all">priyanjalikadam1@gmail.com</p>
          </a>

          <a
            href="tel:7067614411"
            className="group bg-white/10 hover:bg-blue-600 p-6 rounded-xl text-center transition-all duration-300 border border-white/20 hover:border-blue-400"
          >
            <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm text-gray-300 mb-1">Phone</p>
            <p className="font-semibold text-sm">7067614411</p>
          </a>

          <a
            href="https://www.linkedin.com/in/priyanjali-kadam"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/10 hover:bg-blue-600 p-6 rounded-xl text-center transition-all duration-300 border border-white/20 hover:border-blue-400"
          >
            <Linkedin className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-sm text-gray-300 mb-1">LinkedIn</p>
            <p className="font-semibold text-sm">View Profile</p>
          </a>

          <div className="bg-white/10 p-6 rounded-xl text-center border border-white/20">
            <MapPin className="w-8 h-8 mx-auto mb-3" />
            <p className="text-sm text-gray-300 mb-1">Location</p>
            <p className="font-semibold text-sm">India</p>
          </div>
        </div>

        <div className="bg-white/10 border border-white/20 rounded-xl p-8 text-center">
          <p className="text-gray-300 mb-4">
            Open to opportunities in Finance, Business Analytics, and Strategic Consulting
          </p>
          <a
            href="mailto:priyanjalikadam1@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Mail size={20} />
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}
