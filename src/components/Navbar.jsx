import { Menu, X } from 'lucide-react';
import { useState } from 'react';

function NavLink({ href, label, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md"
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-white font-semibold text-lg">TechVersity</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <NavLink href="#home" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#courses" label="Courses" />
          <NavLink href="#blog" label="Blog" />
          <NavLink href="#contact" label="Contact" />
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-md transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 flex flex-col gap-2">
            {[
              { href: '#home', label: 'Home' },
              { href: '#about', label: 'About' },
              { href: '#courses', label: 'Courses' },
              { href: '#blog', label: 'Blog' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-gray-200 py-2" onClick={close}>
                {l.label}
              </a>
            ))}
            <div className="pt-2">
              <a href="#contact" onClick={close} className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-4 py-2 rounded-md transition-colors">Contact</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
