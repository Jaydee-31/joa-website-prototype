import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default function AdminPromos() {
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
          gap: '24px',
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
              Discounts, banners and limited offers{' '}
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
              Promos
            </h1>
          </div>
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
            + New promo
          </button>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
          <section
            aria-label="Promo list"
            style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <a
              href="#"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                padding: '16px 18px',
                borderRadius: '14px',
                background: '#FFFDFB',
                border: '2px solid #D6246E',
                textDecoration: 'none',
                color: '#2A2627',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                <strong>50% OFF All Services</strong>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '2px 10px',
                    borderRadius: '999px',
                    background: '#E3EDF8',
                    color: '#1D4F8C',
                  }}
                >
                  LIVE
                </span>
              </div>
              <span style={{ fontSize: '13px', color: '#665859' }}>All categories · 4 branches · until [end date]</span>
              <span style={{ fontSize: '12px', color: '#665859' }}>Used in 112 bookings</span>
            </a>
            <a
              href="#"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                padding: '16px 18px',
                borderRadius: '14px',
                background: '#FFFDFB',
                border: '1px solid #EFE1E4',
                textDecoration: 'none',
                color: '#2A2627',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                <strong>Nails Salon — Limited Offer</strong>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '2px 10px',
                    borderRadius: '999px',
                    background: '#E3EDF8',
                    color: '#1D4F8C',
                  }}
                >
                  LIVE
                </span>
              </div>
              <span style={{ fontSize: '13px', color: '#665859' }}>Gel and extensions only · 4 branches</span>
              <span style={{ fontSize: '12px', color: '#665859' }}>Used in 38 bookings</span>
            </a>
            <a
              href="#"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                padding: '16px 18px',
                borderRadius: '14px',
                background: '#FFFDFB',
                border: '1px solid #EFE1E4',
                textDecoration: 'none',
                color: '#2A2627',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                <strong>Protein Straight Bond Promo</strong>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '2px 10px',
                    borderRadius: '999px',
                    background: '#FCEFD9',
                    color: '#8A5100',
                  }}
                >
                  SCHEDULED
                </span>
              </div>
              <span style={{ fontSize: '13px', color: '#665859' }}>Fixed prices by hair length · starts [date]</span>
            </a>
            <a
              href="#"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                padding: '16px 18px',
                borderRadius: '14px',
                background: '#FFFDFB',
                border: '1px solid #EFE1E4',
                textDecoration: 'none',
                color: '#2A2627',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                <strong>We Are Open</strong>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '2px 10px',
                    borderRadius: '999px',
                    background: '#F1E8EA',
                    color: '#2A2627',
                  }}
                >
                  ENDED
                </span>
              </div>
              <span style={{ fontSize: '13px', color: '#665859' }}>Announcement banner only · no discount</span>
            </a>
          </section>
          <section
            aria-label="Edit promo"
            style={{
              flex: '999 1 520px',
              minWidth: '0',
              background: '#FFFDFB',
              borderRadius: '16px',
              border: '1px solid #EFE1E4',
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 22px',
                borderBottom: '1px solid #EFE1E4',
              }}
            >
              <h2 style={{ margin: '0', fontSize: '17px' }}>Edit · 50% OFF All Services</h2>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  style={{
                    minHeight: '40px',
                    padding: '0 16px',
                    borderRadius: '10px',
                    border: '1.5px solid #E6CBD5',
                    background: '#FFFDFB',
                    fontFamily: 'inherit',
                    fontWeight: '600',
                    cursor: 'pointer',
                  }}
                >
                  Pause
                </button>
                <button
                  type="button"
                  style={{
                    minHeight: '40px',
                    padding: '0 16px',
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
            <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}
              >
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
                >
                  Promo name
                  <input
                    type="text"
                    defaultValue="50% OFF All Services"
                    style={{
                      minHeight: '42px',
                      padding: '0 12px',
                      borderRadius: '10px',
                      border: '1.5px solid #E6CBD5',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                    }}
                  />
                </label>
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
                >
                  Badge text on website
                  <input
                    type="text"
                    defaultValue="Limited time offer"
                    style={{
                      minHeight: '42px',
                      padding: '0 12px',
                      borderRadius: '10px',
                      border: '1.5px solid #E6CBD5',
                      fontFamily: 'inherit',
                      fontSize: '14px',
                    }}
                  />
                </label>
              </div>
              <fieldset
                style={{ margin: '0', padding: '0', border: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
                <legend style={{ fontSize: '12px', fontWeight: '700', marginBottom: '8px' }}>Discount</legend>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
                  <div
                    style={{
                      display: 'flex',
                      border: '1.5px solid #E6CBD5',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      fontSize: '13px',
                      fontWeight: '600',
                    }}
                  >
                    <span style={{ padding: '10px 14px', background: '#D6246E', color: '#FFFFFF' }}>% off</span>
                    <span style={{ padding: '10px 14px' }}>₱ off</span>
                    <span style={{ padding: '10px 14px' }}>Fixed price</span>
                  </div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                    Value
                    <input
                      type="text"
                      defaultValue="50"
                      style={{
                        width: '64px',
                        minHeight: '40px',
                        padding: '0 10px',
                        borderRadius: '10px',
                        border: '1.5px solid #E6CBD5',
                        fontFamily: 'inherit',
                        fontSize: '14px',
                      }}
                    />
                    %
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                    Rounding
                    <select
                      style={{
                        minHeight: '40px',
                        padding: '0 10px',
                        borderRadius: '10px',
                        border: '1.5px solid #E6CBD5',
                        background: '#FFFDFB',
                        fontFamily: 'inherit',
                        fontSize: '13px',
                      }}
                    >
                      <option>Round down to ₱…9</option>
                      <option>No rounding</option>
                    </select>
                  </label>
                </div>
                <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>
                  Example: Hair Cut ₱399 → ₱199 · Balayage ₱4,999 → ₱2,499. A fixed promo price set on a service always
                  wins.
                </p>
              </fieldset>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}
              >
                <fieldset
                  style={{
                    margin: '0',
                    padding: '0',
                    border: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <legend style={{ fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>Applies to</legend>
                  <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                    />
                    Hair (21)
                  </label>
                  <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                    />
                    Lashes & Brows (19)
                  </label>
                  <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                    />
                    Nails (8)
                  </label>
                  <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                    />
                    Facial & Skin (15)
                  </label>
                  <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                    />
                    Aesthetics (20)
                  </label>
                  <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                    />
                    Fillers & PRP (8)
                  </label>
                  <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                    />
                    Spa & Wellness (7)
                  </label>
                </fieldset>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <fieldset
                    style={{
                      margin: '0',
                      padding: '0',
                      border: '0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                    }}
                  >
                    <legend style={{ fontSize: '12px', fontWeight: '700', marginBottom: '6px' }}>Branches</legend>
                    <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                      <input
                        type="checkbox"
                        defaultChecked
                        style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                      />
                      Malaybalay — Poblacion
                    </label>
                    <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                      <input
                        type="checkbox"
                        defaultChecked
                        style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                      />
                      Malaybalay — Purok 4B
                    </label>
                    <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                      <input
                        type="checkbox"
                        defaultChecked
                        style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                      />
                      Valencia City
                    </label>
                    <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                      <input
                        type="checkbox"
                        defaultChecked
                        style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                      />
                      Maramag
                    </label>
                  </fieldset>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
                    <label
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '700',
                      }}
                    >
                      Starts
                      <input
                        type="date"
                        defaultValue="2026-10-01"
                        style={{
                          minHeight: '40px',
                          padding: '0 8px',
                          borderRadius: '10px',
                          border: '1.5px solid #E6CBD5',
                          fontFamily: 'inherit',
                        }}
                      />
                    </label>
                    <label
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '700',
                      }}
                    >
                      Ends
                      <input
                        type="date"
                        style={{
                          minHeight: '40px',
                          padding: '0 8px',
                          borderRadius: '10px',
                          border: '1.5px solid #E6CBD5',
                          fontFamily: 'inherit',
                        }}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: '700' }}>
                  Excluded services <span style={{ fontWeight: '500', color: '#665859' }}>— keep regular price</span>
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <span style={{ fontSize: '13px', padding: '6px 12px', borderRadius: '999px', background: '#F8EDF0' }}>
                    Classic Manicure ✕
                  </span>
                  <span style={{ fontSize: '13px', padding: '6px 12px', borderRadius: '999px', background: '#F8EDF0' }}>
                    Classic Pedicure ✕
                  </span>
                  <span style={{ fontSize: '13px', padding: '6px 12px', borderRadius: '999px', background: '#F8EDF0' }}>
                    Simple Design ✕
                  </span>
                  <span style={{ fontSize: '13px', padding: '6px 12px', borderRadius: '999px', background: '#F8EDF0' }}>
                    Nail Removal ✕
                  </span>
                  <span style={{ fontSize: '13px', padding: '6px 12px', borderRadius: '999px', background: '#F8EDF0' }}>
                    Nail Extension Removal ✕
                  </span>
                  <button
                    type="button"
                    style={{
                      fontSize: '13px',
                      minHeight: '32px',
                      padding: '0 12px',
                      borderRadius: '999px',
                      border: '1.5px dashed #C9B6B2',
                      background: '#FFFDFB',
                      fontFamily: 'inherit',
                      cursor: 'pointer',
                    }}
                  >
                    + Add
                  </button>
                </div>
              </div>
              <fieldset
                style={{
                  margin: '0',
                  padding: '16px',
                  border: '1px solid #EFE1E4',
                  borderRadius: '12px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                  alignItems: 'center',
                }}
              >
                <legend style={{ fontSize: '12px', fontWeight: '700', padding: '0 6px' }}>Show on website</legend>
                <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                  <input
                    type="checkbox"
                    defaultChecked
                    style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                  />
                  Top announcement bar
                </label>
                <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                  <input
                    type="checkbox"
                    defaultChecked
                    style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                  />
                  Homepage “50% OFF” badge
                </label>
                <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                  <input
                    type="checkbox"
                    defaultChecked
                    style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                  />
                  Strike-through prices
                </label>
                <label style={{ display: 'flex', gap: '8px', alignItems: 'center', minHeight: '32px' }}>
                  <input type="checkbox" style={{ accentColor: '#D6246E', width: '18px', height: '18px' }} />
                  Post to Facebook page
                </label>
              </fieldset>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #EFE1E4' }}>
                <p
                  style={{
                    margin: '0',
                    padding: '8px 14px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    color: '#665859',
                    background: '#FFF5F7',
                  }}
                >
                  LIVE PREVIEW
                </p>
                <div
                  style={{
                    background: '#D6246E',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    padding: '9px',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                >
                  50% OFF ALL SERVICES · Limited time offer · Book now →
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '14px 18px',
                    background: '#FFF8F4',
                  }}
                >
                  <span style={{ fontWeight: '600' }}>Hair Cut / Blowdry / Iron</span>
                  <span>
                    <s style={{ color: '#665859', fontSize: '13px' }}>₱399</s>{' '}
                    <strong style={{ color: '#D6246E', fontSize: '18px' }}>₱199</strong>
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
