import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const links = [
  { to: '/long-stays', label: 'Long Stays' },
  { to: '/hotels', label: 'Hotels' },
  { to: '/glass-igloos', label: 'Glass Igloos' },
  { to: '/wilderness', label: 'Wilderness' },
  { to: '/when-to-go', label: 'When to Go' },
  { to: '/booking-guide', label: 'Booking Guide' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-cream/85 backdrop-blur-md border-b border-charcoal/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="shrink-0" aria-label="StayInLapland home">
          <Logo size="sm" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map(({ to, label }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`text-[14px] font-medium transition-colors ${
                  active ? 'text-vibe-pink' : 'text-charcoal/75 hover:text-vibe-pink'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/long-stays"
            className="ml-2 px-5 py-2 bg-vibe-pink hover:bg-vibe-pink/90 text-white text-sm font-semibold rounded-full transition-colors shadow-sm shadow-vibe-pink/30"
          >
            Browse stays
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-charcoal/80"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-cream border-t border-charcoal/10 px-4 py-4 flex flex-col gap-1">
          {links.map(({ to, label }) => {
            const active = pathname === to;
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                  active
                    ? 'text-vibe-pink bg-charcoal/[0.04]'
                    : 'text-charcoal/85 hover:text-vibe-pink hover:bg-charcoal/[0.04]'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            to="/long-stays"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-3 bg-vibe-pink text-white text-base font-semibold rounded-full text-center"
          >
            Browse stays
          </Link>
        </nav>
      )}
    </header>
  );
}
