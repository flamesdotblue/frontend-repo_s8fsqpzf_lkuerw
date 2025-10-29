import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-white font-semibold text-lg">TechVersity</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            TechVersity is an online academy focused on practical tech education. We help learners build portfolio-ready projects and land meaningful roles.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#courses" className="hover:text-white">Courses</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#careers" className="hover:text-white">Careers</a></li>
            <li><a href="#partners" className="hover:text-white">Partners</a></li>
            <li><a href="#help" className="hover:text-white">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Get weekly insights on learning, productivity, and career growth.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks for subscribing!');
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="you@example.com"
              className="w-full px-3 py-2 rounded-md bg-black border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="px-4 py-2 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400">
              Join
            </button>
          </form>
          <div className="flex items-center gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="#" aria-label="Email" className="hover:text-white"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TechVersity. All rights reserved.
      </div>
    </footer>
  );
}
