import { useEffect, useRef, useState } from 'react';
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

// Keep in sync with the menu breakpoint in site.css
const COLLAPSED = '(width < 980px)';

export default function SiteHeader() {
  const { pathname, hash } = useLocation();
  const onHome = pathname === '/';
  const section = useActiveSection(onHome);
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  const isActive = (item) => (item.id ? onHome && section === item.id : pathname === item.to);

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    const mq = window.matchMedia(COLLAPSED);
    const onChange = () => !mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (!headerRef.current?.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header ref={headerRef} className={'site-header' + (open ? ' is-open' : '')}>
      <div className="site-header__inner">
        <Link
          to="/"
          aria-label="JOA Spa & Salon home"
          className="site-header__logo"
          onClick={() => onHome && window.scrollTo({ top: 0 })}
        >
          <img src={asset('images/logo.png')} alt="JOA Spa & Salon" />
        </Link>
        <nav id="site-nav" aria-label="Main" className="site-nav">
          {NAV.map((item) => {
            const on = isActive(item);
            return (
              <Link
                key={item.label}
                to={item.to}
                className={'site-nav__link' + (on ? ' is-active' : '')}
                aria-current={on ? (item.id ? 'location' : 'page') : undefined}
                onClick={() => {
                  setOpen(false);
                  // Clicking the link for the hash already in the URL wouldn't scroll on its own
                  if (onHome && item.id) document.getElementById(item.id)?.scrollIntoView();
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/book"
          className={'site-nav__cta' + (pathname === '/book' ? ' is-active' : '')}
          aria-current={pathname === '/book' ? 'page' : undefined}
        >
          Book now
        </Link>
        <button
          ref={buttonRef}
          type="button"
          className="site-header__menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
}
