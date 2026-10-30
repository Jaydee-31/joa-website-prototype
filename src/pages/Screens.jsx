import { Link } from 'react-router-dom';
import { asset } from '../lib/asset.js';

export default function Screens() {
  return (
    <main className="screens">
      <header>
        <div>
          <img
            src={asset('images/logo.png')}
            alt="JOA Spa & Salon"
            style={{ height: '64px', width: 'auto', display: 'block' }}
          />
          <h1>Website & booking system prototype</h1>
          <p className="lead">
            Clickable concept for the public website and the staff backend. All figures and bookings are sample data.
          </p>
        </div>
      </header>
      <h2>PUBLIC WEBSITE</h2>
      <ul>
        <li>
          <Link to="/">
            Home<span>Hero, promo, services, branches</span>
          </Link>
        </li>
        <li>
          <Link to="/services">
            Services & prices<span>Full price list, 7 categories</span>
          </Link>
        </li>
        <li>
          <Link to="/book">
            Online booking<span>Branch, service, time, details</span>
          </Link>
        </li>
        <li>
          <Link to="/mobile">
            Home on mobile<span>Phone-width layout</span>
          </Link>
        </li>
      </ul>
      <h2>STAFF BACKEND</h2>
      <ul>
        <li>
          <Link to="/admin-dashboard">
            Dashboard<span>Today’s schedule and requests</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-bookings">
            Bookings<span>Filter by status and branch</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-calendar">
            Calendar<span>Day view per branch</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-customers">
            Customers<span>Profiles, visits and spend</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-pos">
            Sales tracking<span>Checkout by Cash, GCash, Maya or Card</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-commission">
            Staff commission<span>Daily commission per staff, payouts</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-expenses">
            Expenses<span>Costs per branch</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-promos">
            Promos<span>Discounts by date and branch</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-reports">
            Reports<span>Revenue, expenses and profit</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-services">
            Services & prices<span>Master price list</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-branches">
            Branches & hours<span>Hours, closures, holidays</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-staff">
            Staff & schedules<span>Roles, skills, shifts</span>
          </Link>
        </li>
        <li>
          <Link to="/admin-settings">
            Settings<span>Booking rules, receipts, roles</span>
          </Link>
        </li>
      </ul>
    </main>
  );
}
