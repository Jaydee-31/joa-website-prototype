import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { asset } from '../lib/asset.js';

export const NAV = [
  { to: '/admin-dashboard', label: 'Dashboard' },
  { section: 'FRONT DESK' },
  { to: '/admin-bookings', label: 'Bookings', badge: 3 },
  { to: '/admin-calendar', label: 'Calendar' },
  { to: '/admin-customers', label: 'Customers' },
  { section: 'SALES & EXPENSES' },
  { to: '/admin-pos', label: 'Sales tracking' },
  { to: '/admin-commission', label: 'Staff commission' },
  { to: '/admin-expenses', label: 'Expenses' },
  { to: '/admin-promos', label: 'Promos' },
  { to: '/admin-reports', label: 'Reports' },
  { section: 'SETUP' },
  { to: '/admin-services', label: 'Services & prices' },
  { to: '/admin-branches', label: 'Branches & hours' },
  { to: '/admin-staff', label: 'Staff & schedules' },
  { to: '/admin-settings', label: 'Settings' },
];

// Keep in sync with the breakpoint in site.css
const MOBILE = '(width < 872px)';
const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

function MenuIcon({ close }) {
  return (
    <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d={close ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} />
    </svg>
  );
}

export default function AdminSidebar() {
  const isMobile = useMediaQuery(MOBILE);
  const [open, setOpen] = useState(false);
  const asideRef = useRef(null);
  const panelRef = useRef(null);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const drawerOpen = open && isMobile;

  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  // While the drawer is open it behaves as a modal: focus moves in, stays in, and the page behind is inert
  useEffect(() => {
    if (!drawerOpen) return undefined;
    const panel = panelRef.current;
    const page = [...asideRef.current.parentElement.children].filter((el) => el !== asideRef.current);
    page.forEach((el) => (el.inert = true));
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      } else if (e.key === 'Tab') {
        const items = [...panel.querySelectorAll(FOCUSABLE)];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      page.forEach((el) => (el.inert = false));
      root.style.overflow = prevOverflow;
    };
  }, [drawerOpen]);

  const closeAndRefocus = () => {
    setOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <aside ref={asideRef} className={'admin-sidebar' + (open ? ' is-open' : '')}>
      <div className="admin-sidebar__bar">
        <button
          ref={menuButtonRef}
          type="button"
          className="icon-btn admin-sidebar__menu-btn"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="admin-sidebar-panel"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
        <img className="admin-sidebar__logo" src={asset('images/logo-light.png')} alt="JOA Spa & Salon" />
      </div>
      <div className="admin-sidebar__scrim" aria-hidden="true" onClick={closeAndRefocus} />
      <div
        ref={panelRef}
        id="admin-sidebar-panel"
        className="admin-sidebar__panel"
        role={isMobile ? 'dialog' : undefined}
        aria-modal={isMobile ? true : undefined}
        aria-label={isMobile ? 'Admin menu' : undefined}
      >
        <div className="admin-sidebar__drawer-head">
          <img className="admin-sidebar__logo" src={asset('images/logo-light.png')} alt="" />
          <button ref={closeButtonRef} type="button" className="icon-btn" aria-label="Close menu" onClick={closeAndRefocus}>
            <MenuIcon close />
          </button>
        </div>
        <nav aria-label="Admin" className="admin-nav">
          {NAV.map((item) =>
            item.section ? (
              <p key={item.section} className="admin-nav__section">
                {item.section}
              </p>
            ) : (
              <NavLink key={item.to} to={item.to} className="admin-nav__link" onClick={closeAndRefocus}>
                {item.label}
                {item.badge ? <span className="admin-nav__badge">{item.badge}</span> : null}
              </NavLink>
            ),
          )}
        </nav>
        <Link to="/" className="admin-sidebar__site-link">
          View website ↗
        </Link>
      </div>
    </aside>
  );
}
