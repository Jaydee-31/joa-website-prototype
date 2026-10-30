import { Component as ReactComponent } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default class AdminServices extends ReactComponent {
  renderVals() {
    const peso = (n) => '₱' + n.toLocaleString('en-US');
    const H = [
      ['Hair Cut / Blowdry / Iron', 399, 199, 45],
      ['Hair Setting', 499, 249, 60],
      ['Wash / Blowdry / Iron', 499, 249, 45],
      ['Dandruff Treatment', 1499, 749, 60],
      ['Leidi Hair Color', 999, 499, 90],
      ['Organic Hair Color', 1999, 999, 120],
      ['Natural Hair Color', 1499, 749, 120],
      ['No-Ammonia Hair Color', 2999, 1499, 120],
      ['Highlights Alone', 1499, 749, 120],
      ['Permanent Curl', 2499, 1249, 150],
      ['Natural Rebond', 3499, 1749, 180],
      ['L’Oréal Rebond', 3499, 1749, 180],
      ['Organic Natural Rebond', 2999, 1499, 180],
      ['Leidi Rebond', 1999, 999, 180],
      ['Balayage / Brazilian Treatment', 4999, 2499, 180],
      ['iCure Keratin Blowout Treatment', 2499, 1249, 120],
      ['Procare Keratin Treatment', 1499, 749, 90],
      ['Silky Straight Protein Treatment', 2999, 1499, 150],
      ['Protein Straight Bond — Short', 5999, 2499, 180, 'Fixed price'],
      ['Protein Straight Bond — Medium', 6999, 3499, 210, 'Fixed price'],
      ['Protein Straight Bond — Long', 7999, 3999, 240, 'Fixed price'],
    ];
    const rows = H.map((r) => ({
      name: r[0],
      reg: peso(r[1]),
      promo: peso(r[2]),
      dur: r[3] + ' min',
      rule: r[4] || '50% OFF',
    }));
    return { rows };
  }

  render() {
    const v = this.renderVals();
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
            gap: '20px',
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
                98 services in 7 categories{' '}
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
                Services & prices
              </h1>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                style={{
                  minHeight: '42px',
                  padding: '0 18px',
                  borderRadius: '10px',
                  border: '1.5px solid #D6246E',
                  background: '#FFFDFB',
                  color: '#D6246E',
                  fontFamily: 'inherit',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                Import CSV
              </button>
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
                + Add service
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
            <nav
              aria-label="Categories"
              style={{
                flex: '1 1 200px',
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                fontWeight: '600',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              }}
            >
              <a
                href="#"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  background: '#2A2627',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                Hair<span style={{ fontWeight: '500' }}>21</span>
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  color: '#2A2627',
                  textDecoration: 'none',
                }}
              >
                Lashes & Brows<span style={{ fontWeight: '500', color: '#665859' }}>19</span>
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  color: '#2A2627',
                  textDecoration: 'none',
                }}
              >
                Nails<span style={{ fontWeight: '500', color: '#665859' }}>8</span>
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  color: '#2A2627',
                  textDecoration: 'none',
                }}
              >
                Facial & Skin<span style={{ fontWeight: '500', color: '#665859' }}>15</span>
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  color: '#2A2627',
                  textDecoration: 'none',
                }}
              >
                Aesthetics<span style={{ fontWeight: '500', color: '#665859' }}>20</span>
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  color: '#2A2627',
                  textDecoration: 'none',
                }}
              >
                Fillers & PRP<span style={{ fontWeight: '500', color: '#665859' }}>8</span>
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  color: '#2A2627',
                  textDecoration: 'none',
                }}
              >
                Spa & Wellness<span style={{ fontWeight: '500', color: '#665859' }}>7</span>
              </a>
            </nav>
            <section
              style={{
                flex: '999 1 640px',
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
                  padding: '14px 20px',
                  borderBottom: '1px solid #EFE1E4',
                }}
              >
                <h2 style={{ margin: '0', fontSize: '16px' }}>Hair</h2>
                <label
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600' }}
                >
                  Search
                  <input
                    type="search"
                    placeholder="Service name"
                    style={{
                      minHeight: '38px',
                      padding: '0 12px',
                      borderRadius: '10px',
                      border: '1.5px solid #E6CBD5',
                      fontFamily: 'inherit',
                      fontSize: '13px',
                    }}
                  />
                </label>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <div style={{ minWidth: '820px' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 2.4fr) 80px 96px 120px minmax(0, 1.3fr) 70px',
                      gap: '12px',
                      padding: '10px 20px',
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      color: '#665859',
                      background: '#FFF5F7',
                    }}
                  >
                    <span>SERVICE</span>
                    <span>DURATION</span>
                    <span style={{ textAlign: 'right' }}>REGULAR</span>
                    <span style={{ textAlign: 'right' }}>PROMO PRICE</span>
                    <span>BRANCHES</span>
                    <span>ONLINE</span>
                  </div>
                  {(v.rows || []).map((r, i0) => (
                    <div
                      key={i0}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 2.4fr) 80px 96px 120px minmax(0, 1.3fr) 70px',
                        gap: '12px',
                        padding: '9px 20px',
                        alignItems: 'center',
                        borderTop: '1px solid #F8EDF0',
                      }}
                    >
                      <span style={{ fontWeight: '600' }}>{r.name}</span>
                      <span style={{ color: '#665859' }}>{r.dur}</span>
                      <span style={{ textAlign: 'right' }}>{r.reg}</span>
                      <span style={{ textAlign: 'right' }}>
                        <strong style={{ color: '#D6246E' }}>{r.promo}</strong>
                        <span style={{ display: 'block', fontSize: '11px', color: '#665859' }}>{r.rule}</span>
                      </span>
                      <span style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            padding: '2px 7px',
                            borderRadius: '6px',
                            background: '#F8EDF0',
                          }}
                        >
                          MP
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            padding: '2px 7px',
                            borderRadius: '6px',
                            background: '#F8EDF0',
                          }}
                        >
                          P4B
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            padding: '2px 7px',
                            borderRadius: '6px',
                            background: '#F8EDF0',
                          }}
                        >
                          VAL
                        </span>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            padding: '2px 7px',
                            borderRadius: '6px',
                            background: '#F8EDF0',
                          }}
                        >
                          MAR
                        </span>
                      </span>
                      <label
                        style={{ display: 'flex', alignItems: 'center', minHeight: '36px' }}
                        aria-label="Bookable online"
                      >
                        <input
                          type="checkbox"
                          defaultChecked
                          style={{ accentColor: '#D6246E', width: '20px', height: '20px' }}
                        />
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}
