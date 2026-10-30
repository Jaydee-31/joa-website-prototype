import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NAV } from './AdminSidebar.jsx';

// Sample signed-in user for the prototype
const USER = { name: '[Admin name]', email: 'owner@example.com', phone: '', role: 'Owner' };

const sentenceCase = (s) => s.charAt(0) + s.slice(1).toLowerCase();

// Walks the sidebar nav to find the current page and the section heading above it
function crumbsFor(pathname) {
  let section = null;
  for (const item of NAV) {
    if (item.section) section = sentenceCase(item.section);
    else if (item.to === pathname) return section ? [section, item.label] : [item.label];
  }
  return [];
}

const initials = (name) =>
  name
    .replace(/[^\p{L}\s]/gu, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('') || '?';

export default function AdminTopbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(USER);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const dialogRef = useRef(null);
  const crumbs = crumbsFor(pathname);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onPointer = (e) => {
      if (!menuRef.current?.contains(e.target)) setOpen(false);
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

  const editProfile = () => {
    setOpen(false);
    dialogRef.current?.showModal();
  };

  const logout = () => {
    setOpen(false);
    navigate('/');
  };

  const saveProfile = (e) => {
    const data = new FormData(e.currentTarget);
    setUser((u) => ({
      ...u,
      name: data.get('name').trim() || u.name,
      email: data.get('email').trim(),
      phone: data.get('phone').trim(),
    }));
  };

  return (
    <header className="admin-topbar">
      <nav aria-label="Breadcrumb">
        <ol className="admin-crumbs">
          <li>
            <Link to="/admin-dashboard">Admin</Link>
          </li>
          {crumbs.map((c, i) => (
            <li key={c} aria-current={i === crumbs.length - 1 ? 'page' : undefined}>
              {c}
            </li>
          ))}
        </ol>
      </nav>

      <div className="admin-user" ref={menuRef}>
        <button
          ref={buttonRef}
          type="button"
          className="admin-user__btn"
          aria-expanded={open}
          aria-controls="admin-user-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="admin-user__avatar" aria-hidden="true">
            {initials(user.name)}
          </span>
          <span className="admin-user__who">
            <strong>{user.name}</strong>
            <span>{user.role}</span>
          </span>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d={open ? 'M6 15l6-6 6 6' : 'M6 9l6 6 6-6'} />
          </svg>
        </button>
        <div id="admin-user-menu" className="admin-user__menu" hidden={!open}>
          <p className="admin-user__email">{user.email || 'No email set'}</p>
          <button type="button" onClick={editProfile}>
            Edit profile
          </button>
          <button type="button" className="admin-user__logout" onClick={logout}>
            Log out
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="admin-dialog"
        aria-labelledby="admin-profile-title"
        onClose={(e) => e.currentTarget.querySelector('form').reset()}
      >
        <form method="dialog" onSubmit={saveProfile} key={user.name + user.email + user.phone}>
          <h2 id="admin-profile-title">Edit profile</h2>
          <label>
            Name
            <input name="name" defaultValue={user.name} required autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" defaultValue={user.email} autoComplete="email" />
          </label>
          <label>
            Mobile number
            <input name="phone" type="tel" defaultValue={user.phone} placeholder="09XX XXX XXXX" autoComplete="tel" />
          </label>
          <label>
            New password
            <input name="password" type="password" placeholder="Leave blank to keep current" autoComplete="new-password" />
          </label>
          <div className="admin-dialog__actions">
            <button type="button" className="admin-btn" onClick={() => dialogRef.current?.close()}>
              Cancel
            </button>
            <button type="submit" className="admin-btn admin-btn--primary">
              Save changes
            </button>
          </div>
        </form>
      </dialog>
    </header>
  );
}
