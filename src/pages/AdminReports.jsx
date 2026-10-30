import { Component as ReactComponent } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default class AdminReports extends ReactComponent {
  renderVals() {
    const peso = (n) => '₱' + n.toLocaleString('en-US');
    const M = [
      ['May', 286400],
      ['Jun', 301900],
      ['Jul', 295300],
      ['Aug', 318700],
      ['Sep', 344200],
      ['Oct', 412380],
    ];
    const mx = 412380;
    const months = M.map((m, i) => ({
      label: m[0],
      amt: '₱' + Math.round(m[1] / 1000) + 'k',
      h: Math.round((m[1] / mx) * 170) + 'px',
      bg: i === 5 ? '#D6246E' : '#F7A8C4',
    }));
    const B = [
      ['Malaybalay — Poblacion', 148200],
      ['Malaybalay — Purok 4B', 112600],
      ['Valencia City', 84900],
      ['Maramag', 66680],
    ];
    const branches = B.map((b) => ({ name: b[0], amt: peso(b[1]), w: Math.round((b[1] / 148200) * 100) + '%' }));
    const Cc = [
      ['Hair', 168400],
      ['Lashes & Brows', 79300],
      ['Facial & Skin', 61200],
      ['Aesthetics', 48900],
      ['Nails', 28700],
      ['Fillers & PRP', 17400],
      ['Spa & Wellness', 8480],
    ];
    const cats = Cc.map((c) => ({ name: c[0], amt: peso(c[1]), w: Math.round((c[1] / 168400) * 100) + '%' }));
    const St = [
      ['Ana', 'Malaybalay Pob.', 92, 71400],
      ['Mae', 'Valencia City', 74, 48300],
      ['Liza', 'Purok 4B', 88, 39800],
      ['Grace', 'Maramag', 51, 36900],
      ['Jun', 'Purok 4B', 63, 22100],
      ['[Doctor]', 'Visiting', 19, 41200],
    ];
    const staff = St.map((s) => ({
      name: s[0],
      branch: s[1],
      n: s[2],
      rev: peso(s[3]),
      com: peso(Math.round(s[3] * 0.1)),
    }));
    return { months, branches, cats, staff };
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
                October 2026 · all branches{' '}
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
                Reports
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600' }}>
                Period{' '}
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
                  <option>This month</option>
                  <option>Last month</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                  <option>Custom…</option>
                </select>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600' }}>
                Branch{' '}
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
                  <option>All branches</option>
                  <option>Malaybalay — Poblacion</option>
                  <option>Malaybalay — Purok 4B</option>
                  <option>Valencia City</option>
                  <option>Maramag</option>
                </select>
              </label>
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
                Download PDF
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
                Export Excel
              </button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            <div
              style={{
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
              }}
            >
              <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>Revenue</p>
              <p
                style={{
                  margin: '4px 0 0',
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '30px',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                }}
              >
                ₱412,380
              </p>
              <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>Oct 1–19 · at promo prices</p>
            </div>
            <div
              style={{
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
              }}
            >
              <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>Completed services</p>
              <p
                style={{
                  margin: '4px 0 0',
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '30px',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                }}
              >
                531
              </p>
              <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>+14% vs. same days in Sept</p>
            </div>
            <div
              style={{
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
              }}
            >
              <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>
                Average spend per visit
              </p>
              <p
                style={{
                  margin: '4px 0 0',
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '30px',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                }}
              >
                ₱777
              </p>
              <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>Up from ₱702</p>
            </div>
            <div
              style={{
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
              }}
            >
              <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>
                Promo discounts given
              </p>
              <p
                style={{
                  margin: '4px 0 0',
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '30px',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                }}
              >
                ₱398,900
              </p>
              <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>50% OFF All Services</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'stretch' }}>
            <section
              style={{
                flex: '999 1 520px',
                minWidth: '0',
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
              }}
            >
              <h2 style={{ margin: '0', fontSize: '16px' }}>Monthly revenue</h2>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '18px', height: '220px', marginTop: '16px' }}>
                {(v.months || []).map((m, i0) => (
                  <div
                    key={i0}
                    style={{
                      flex: '1',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#665859' }}>{m.amt}</span>
                    <div
                      style={{
                        width: '100%',
                        maxWidth: '64px',
                        height: m.h,
                        borderRadius: '8px 8px 3px 3px',
                        background: m.bg,
                        boxShadow: '0 8px 16px -10px rgba(214,36,110,0.6)',
                      }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: '700' }}>{m.label}</span>
                  </div>
                ))}
              </div>
              <p style={{ margin: '10px 0 0', fontSize: '12px', color: '#665859' }}>
                October is month-to-date. The 50% promo started 1 October.
              </p>
            </section>
            <section
              style={{
                flex: '1 1 320px',
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <h2 style={{ margin: '0', fontSize: '16px' }}>Revenue by branch</h2>
              {(v.branches || []).map((b, i0) => (
                <div key={i0} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span>{b.name}</span>
                    <strong>{b.amt}</strong>
                  </div>
                  <div style={{ height: '10px', borderRadius: '999px', background: '#F8EDF0' }}>
                    <div style={{ height: '10px', borderRadius: '999px', background: '#D6246E', width: b.w }} />
                  </div>
                </div>
              ))}
            </section>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
            <section
              style={{
                flex: '1 1 360px',
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <h2 style={{ margin: '0', fontSize: '16px' }}>Revenue by category</h2>
              {(v.cats || []).map((c, i0) => (
                <div
                  key={i0}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '130px minmax(0, 1fr) 90px',
                    gap: '10px',
                    alignItems: 'center',
                    fontSize: '13px',
                  }}
                >
                  <span>{c.name}</span>
                  <div style={{ height: '10px', borderRadius: '999px', background: '#F8EDF0' }}>
                    <div style={{ height: '10px', borderRadius: '999px', background: '#F28BB0', width: c.w }} />
                  </div>
                  <strong style={{ textAlign: 'right' }}>{c.amt}</strong>
                </div>
              ))}
            </section>
            <section
              style={{
                flex: '999 1 520px',
                minWidth: '0',
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                overflow: 'hidden',
              }}
            >
              <h2 style={{ margin: '0', padding: '16px 20px', fontSize: '16px', borderBottom: '1px solid #EFE1E4' }}>
                Staff performance
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <div style={{ minWidth: '560px' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.2fr) 80px 110px 110px',
                      gap: '10px',
                      padding: '10px 20px',
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      color: '#665859',
                      background: '#FFF5F7',
                    }}
                  >
                    <span>STAFF</span>
                    <span>BRANCH</span>
                    <span>SERVICES</span>
                    <span style={{ textAlign: 'right' }}>REVENUE</span>
                    <span style={{ textAlign: 'right' }}>COMMISSION</span>
                  </div>
                  {(v.staff || []).map((s, i0) => (
                    <div
                      key={i0}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.2fr) 80px 110px 110px',
                        gap: '10px',
                        padding: '11px 20px',
                        borderTop: '1px solid #F8EDF0',
                        fontSize: '14px',
                      }}
                    >
                      <strong>{s.name}</strong>
                      <span style={{ color: '#665859' }}>{s.branch}</span>
                      <span>{s.n}</span>
                      <span style={{ textAlign: 'right' }}>{s.rev}</span>
                      <span style={{ textAlign: 'right', color: '#665859' }}>{s.com}</span>
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
