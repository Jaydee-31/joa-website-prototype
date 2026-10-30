import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';
import { asset } from '../lib/asset.js';

export default function AdminSettings() {
  return (
    <div
        className="admin-layout"
      style={{
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        color: '#2A2627',
        background: '#FFF8F4',
        fontSize: '14px',
        lineHeight: '1.5',
        minHeight: '100vh',
        display: 'flex',
      }}
    >
      <AdminSidebar />
      <main
        style={{
          flex: '999 1 640px',
          minWidth: '0',
          padding: '24px 32px 48px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          gap: '22px',
        }}
      >
        <AdminTopbar />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{ margin: '0', fontSize: '13px', color: '#665859' }}>
              Business-wide preferences{' '}
              <span
                style={{
                  marginLeft: '8px',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  background: '#F1E8EA',
                }}
              >
                SAMPLE DATA
              </span>
            </p>
            <h1
              style={{
                margin: '2px 0 0',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '30px',
                fontWeight: '700',
              }}
            >
              Settings
            </h1>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <button
              type="button"
              style={{
                minHeight: '42px',
                padding: '0 18px',
                borderRadius: '10px',
                border: '0',
                background: '#D6246E',
                color: '#FFFFFF',
                fontFamily: 'inherit',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
              }}
            >
              Save changes
            </button>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
            gap: '20px',
            alignItems: 'start',
          }}
        >
          <section
            style={{
              background: '#FFFDFB',
              borderRadius: '16px',
              border: '1px solid #EFE1E4',
              boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div>
              <h2 style={{ margin: '0', fontSize: '16px' }}>Business profile</h2>
              <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#665859' }}>
                Shown on the website, receipts and booking pages.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div
                style={{
                  padding: '10px 14px',
                  borderRadius: '12px',
                  background: '#FFF4F6',
                  border: '1px solid #EFE1E4',
                }}
              >
                <img
                  src={asset('images/logo.png')}
                  alt="Current JOA logo"
                  style={{ height: '54px', width: 'auto', display: 'block' }}
                />
              </div>
              <button
                type="button"
                style={{
                  padding: '0 18px',
                  borderRadius: '10px',
                  border: '1.5px solid #D6246E',
                  background: '#FFFDFB',
                  color: '#D6246E',
                  fontFamily: 'inherit',
                  fontWeight: '600',
                  cursor: 'pointer',
                  minHeight: '38px',
                }}
              >
                Replace logo
              </button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              <label
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
              >
                Business name
                <input
                  type="text"
                  defaultValue="JOA Spa & Salon"
                  style={{
                    minHeight: '42px',
                    padding: '0 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #E6CBD5',
                    background: '#FFFDFB',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    color: '#2A2627',
                  }}
                />
              </label>
              <label
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
              >
                Tagline
                <input
                  type="text"
                  defaultValue="Your beauty, our priority"
                  style={{
                    minHeight: '42px',
                    padding: '0 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #E6CBD5',
                    background: '#FFFDFB',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    color: '#2A2627',
                  }}
                />
              </label>
            </div>
            <label
              style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
            >
              Facebook page
              <input
                type="url"
                defaultValue="https://www.facebook.com/profile.php?id=61554751762826"
                style={{
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #E6CBD5',
                  background: '#FFFDFB',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  color: '#2A2627',
                }}
              />
            </label>
          </section>
          <section
            style={{
              background: '#FFFDFB',
              borderRadius: '16px',
              border: '1px solid #EFE1E4',
              boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div>
              <h2 style={{ margin: '0', fontSize: '16px' }}>Online booking rules</h2>
              <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#665859' }}>How clients book on the website.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              <label
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
              >
                Slot length
                <select
                  style={{
                    minHeight: '42px',
                    padding: '0 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #E6CBD5',
                    background: '#FFFDFB',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    color: '#2A2627',
                  }}
                >
                  <option>30 minutes</option>
                  <option>15 minutes</option>
                  <option>60 minutes</option>
                </select>
              </label>
              <label
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
              >
                Earliest booking
                <select
                  style={{
                    minHeight: '42px',
                    padding: '0 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #E6CBD5',
                    background: '#FFFDFB',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    color: '#2A2627',
                  }}
                >
                  <option>2 hours from now</option>
                  <option>Same day</option>
                  <option>Next day</option>
                </select>
              </label>
              <label
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
              >
                Book up to
                <select
                  style={{
                    minHeight: '42px',
                    padding: '0 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #E6CBD5',
                    background: '#FFFDFB',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    color: '#2A2627',
                  }}
                >
                  <option>30 days ahead</option>
                  <option>14 days ahead</option>
                  <option>60 days ahead</option>
                </select>
              </label>
              <label
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
              >
                Free reschedule until
                <select
                  style={{
                    minHeight: '42px',
                    padding: '0 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #E6CBD5',
                    background: '#FFFDFB',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    color: '#2A2627',
                  }}
                >
                  <option>[X] hours before</option>
                  <option>24 hours before</option>
                  <option>12 hours before</option>
                </select>
              </label>
            </div>
            <label style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}>
              <input type="checkbox" style={{ accentColor: '#D6246E', width: '18px', height: '18px' }} />
              Auto-confirm bookings when a qualified staff member is free
            </label>
            <label style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: '#D6246E', width: '18px', height: '18px' }} />
              Require a doctor slot for aesthetic, filler and PRP services
            </label>
            <label style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}>
              <input type="checkbox" style={{ accentColor: '#D6246E', width: '18px', height: '18px' }} />
              Ask for a downpayment on services over ₱3,000
            </label>
          </section>
          <section
            style={{
              background: '#FFFDFB',
              borderRadius: '16px',
              border: '1px solid #EFE1E4',
              boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div>
              <h2 style={{ margin: '0', fontSize: '16px' }}>Payments & receipts</h2>
            </div>
            <fieldset
              style={{ margin: '0', padding: '0', border: '0', display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}
            >
              <legend style={{ fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>
                Accepted at the register
              </legend>
              <label
                style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}
              >
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                />
                Cash
              </label>
              <label
                style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}
              >
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                />
                GCash
              </label>
              <label
                style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}
              >
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                />
                Maya
              </label>
              <label
                style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}
              >
                <input
                  type="checkbox"
                  defaultChecked
                  style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                />
                Card
              </label>
            </fieldset>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              <label
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
              >
                Receipt number prefix
                <input
                  type="text"
                  defaultValue="JOA-[BRANCH]-"
                  style={{
                    minHeight: '42px',
                    padding: '0 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #E6CBD5',
                    background: '#FFFDFB',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    color: '#2A2627',
                  }}
                />
              </label>
              <label
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
              >
                Price rounding
                <select
                  style={{
                    minHeight: '42px',
                    padding: '0 12px',
                    borderRadius: '10px',
                    border: '1.5px solid #E6CBD5',
                    background: '#FFFDFB',
                    fontFamily: 'inherit',
                    fontSize: '14px',
                    color: '#2A2627',
                  }}
                >
                  <option>Round down to ₱…9</option>
                  <option>No rounding</option>
                </select>
              </label>
            </div>
            <label
              style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
            >
              Receipt footer
              <input
                type="text"
                defaultValue="Because you deserve to feel beautiful."
                style={{
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #E6CBD5',
                  background: '#FFFDFB',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  color: '#2A2627',
                }}
              />
            </label>
          </section>
          <section
            style={{
              background: '#FFFDFB',
              borderRadius: '16px',
              border: '1px solid #EFE1E4',
              boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div>
              <h2 style={{ margin: '0', fontSize: '16px' }}>Notifications</h2>
            </div>
            <label style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: '#D6246E', width: '18px', height: '18px' }} />
              Email the branch when a new online booking arrives
            </label>
            <label style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: '#D6246E', width: '18px', height: '18px' }} />
              Email clients their booking confirmation
            </label>
            <label style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}>
              <input type="checkbox" defaultChecked style={{ accentColor: '#D6246E', width: '18px', height: '18px' }} />
              Daily sales summary to the owner at closing
            </label>
            <label
              style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
            >
              Owner email
              <input
                type="email"
                placeholder="owner@example.com"
                style={{
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #E6CBD5',
                  background: '#FFFDFB',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  color: '#2A2627',
                }}
              />
            </label>
          </section>
          <section
            style={{
              background: '#FFFDFB',
              borderRadius: '16px',
              border: '1px solid #EFE1E4',
              boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div>
              <h2 style={{ margin: '0', fontSize: '16px' }}>Users & roles</h2>
              <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#665859' }}>Who can see and change what.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid #F8EDF0',
                  fontSize: '14px',
                }}
              >
                <span>
                  <strong>Owner</strong>
                  <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>
                    Everything, including reports and settings
                  </span>
                </span>
                <span style={{ color: '#665859' }}>1 user</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid #F8EDF0',
                  fontSize: '14px',
                }}
              >
                <span>
                  <strong>Branch manager</strong>
                  <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>
                    Bookings, sales, staff shifts for one branch
                  </span>
                </span>
                <span style={{ color: '#665859' }}>4 users</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid #F8EDF0',
                  fontSize: '14px',
                }}
              >
                <span>
                  <strong>Front desk</strong>
                  <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>
                    Bookings, register, customers
                  </span>
                </span>
                <span style={{ color: '#665859' }}>6 users</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid #F8EDF0',
                  fontSize: '14px',
                }}
              >
                <span>
                  <strong>Staff</strong>
                  <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>
                    Own schedule and appointments
                  </span>
                </span>
                <span style={{ color: '#665859' }}>9 users</span>
              </div>
            </div>
            <button
              type="button"
              style={{
                padding: '0 18px',
                borderRadius: '10px',
                border: '1.5px solid #D6246E',
                background: '#FFFDFB',
                color: '#D6246E',
                fontFamily: 'inherit',
                fontWeight: '600',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                minHeight: '38px',
              }}
            >
              Invite user
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
