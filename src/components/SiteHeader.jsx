import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../lib/asset.js';

// Links to sections on the homepage; `id` is the section the link scrolls to
const NAV = [
  { label: 'Services', to: '/services' },
  { label: 'Promos', to: '/#promos', id: 'promos' },
  { label: 'Branches', to: '/#branches', id: 'branches' },
  { label: 'About', to: '/#why', id: 'why' },
  { label: 'Sign in', to: '/admin-dashboard' },
];
const SECTION_IDS = NAV.filter((n) => n.id).map((n) => n.id);

// Tracks which homepage section sits under a thin band just below the header
function useActiveSection(enabled) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    setActive(null);
    if (!enabled) return undefined;
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
          else setActive((cur) => (cur === e.target.id ? null : cur));
        });
      },
      { rootMargin: '-30% 0px -65% 0px' },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [enabled]);
  return active;
}

export default function SiteHeader() {
  const { pathname } = useLocation();
  const onHome = pathname === '/';
  const section = useActiveSection(onHome);

  const isActive = (item) => (item.id ? onHome && section === item.id : pathname === item.to);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          to="/"
          aria-label="JOA Spa & Salon home"
          className="site-header__logo"
          onClick={() => onHome && window.scrollTo({ top: 0 })}
        >
          <img src={asset('images/logo.png')} alt="JOA Spa & Salon" />
        </Link>
        <nav aria-label="Main" className="site-nav">
          {NAV.map((item) => {
            const on = isActive(item);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={'site-nav__link' + (on ? ' is-active' : '')}
                aria-current={on ? (item.id ? 'location' : 'page') : undefined}
                // Clicking the link for the hash already in the URL wouldn't scroll on its own
                onClick={onHome && item.id ? () => document.getElementById(item.id)?.scrollIntoView() : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/book"
            className={'site-nav__cta' + (pathname === '/book' ? ' is-active' : '')}
            aria-current={pathname === '/book' ? 'page' : undefined}
          >
            Book now
          </Link>
        </nav>
      </div>
    </header>
  );
}
