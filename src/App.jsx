import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Book from './pages/Book.jsx';
import MobileHome from './pages/MobileHome.jsx';
import Screens from './pages/Screens.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import AdminBookings from './pages/AdminBookings.jsx';
import AdminCalendar from './pages/AdminCalendar.jsx';
import AdminCustomers from './pages/AdminCustomers.jsx';
import AdminPos from './pages/AdminPos.jsx';
import AdminExpenses from './pages/AdminExpenses.jsx';
import AdminPromos from './pages/AdminPromos.jsx';
import AdminReports from './pages/AdminReports.jsx';
import AdminServices from './pages/AdminServices.jsx';
import AdminBranches from './pages/AdminBranches.jsx';
import AdminStaff from './pages/AdminStaff.jsx';
import AdminSettings from './pages/AdminSettings.jsx';
import AdminCommission from './pages/AdminCommission.jsx';
import { useReveal } from './lib/reveal.js';

const ROUTES = [
  { path: '/', title: 'JOA Spa & Salon — Home', Page: Home },
  { path: '/services', title: 'JOA Spa & Salon — Services & prices', Page: Services },
  { path: '/book', title: 'JOA Spa & Salon — Book an appointment', Page: Book },
  { path: '/mobile', title: 'JOA Spa & Salon — Home (mobile)', Page: MobileHome, bodyClass: 'mobile-preview' },
  { path: '/screens', title: 'JOA Spa & Salon — Prototype screens', Page: Screens },
  { path: '/admin-dashboard', title: 'JOA Admin — Dashboard', Page: AdminDashboard },
  { path: '/admin-bookings', title: 'JOA Admin — Bookings', Page: AdminBookings },
  { path: '/admin-calendar', title: 'JOA Admin — Calendar', Page: AdminCalendar },
  { path: '/admin-customers', title: 'JOA Admin — Customers', Page: AdminCustomers },
  { path: '/admin-pos', title: 'JOA Admin — Sales tracking', Page: AdminPos },
  { path: '/admin-commission', title: 'JOA Admin — Staff commission', Page: AdminCommission },
  { path: '/admin-expenses', title: 'JOA Admin — Expenses', Page: AdminExpenses },
  { path: '/admin-promos', title: 'JOA Admin — Promos', Page: AdminPromos },
  { path: '/admin-reports', title: 'JOA Admin — Reports', Page: AdminReports },
  { path: '/admin-services', title: 'JOA Admin — Services & prices', Page: AdminServices },
  { path: '/admin-branches', title: 'JOA Admin — Branches & hours', Page: AdminBranches },
  { path: '/admin-staff', title: 'JOA Admin — Staff & schedules', Page: AdminStaff },
  { path: '/admin-settings', title: 'JOA Admin — Settings', Page: AdminSettings },
];

// Sets the tab title and body class, scrolls like a normal page load on navigation, and fades content in
function PageShell({ title, bodyClass, children }) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = title;
  }, [title]);
  useEffect(() => {
    if (!bodyClass) return undefined;
    document.body.classList.add(bodyClass);
    return () => document.body.classList.remove(bodyClass);
  }, [bodyClass]);
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  useReveal(pathname);
  return <div id="app">{children}</div>;
}

export default function App() {
  return (
    <Routes>
      {ROUTES.map(({ path, title, bodyClass, Page }) => (
        <Route
          key={path}
          path={path}
          element={
            <PageShell title={title} bodyClass={bodyClass}>
              <Page />
            </PageShell>
          }
        />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
