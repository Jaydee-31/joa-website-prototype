import { Component as ReactComponent } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default class AdminBranches extends ReactComponent {
  renderVals() {
    const D = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const B = [
      [
        'Malaybalay — Poblacion',
        'Claro M. Recto St, Barangay 2',
        '[Phone]',
        ['8:00\n5:00', '8:00\n5:00', '8:00\n5:00', '8:00\n5:00', '8:00\n5:00', '8:00\n5:00', '8:00\n5:00'],
        '5 chairs · 2 treatment rooms',
        'Open',
      ],
      [
        'Malaybalay — Purok 4B',
        'Purok 4B, Malaybalay City',
        '0969 607 9069',
        ['7:30\n6:30', '7:30\n6:30', '7:30\n6:30', '7:30\n6:30', '7:30\n6:30', '7:30\n6:30', '7:30\n6:00'],
        '4 chairs · 1 nail station',
        'Open',
      ],
      [
        'Valencia City',
        '11 Mabini St',
        '0936 240 0228',
        ['—', '—', '—', '—', '—', '—', '—'],
        '[Chairs & rooms]',
        'Hours needed',
      ],
      [
        'Maramag',
        'North Poblacion',
        '[Phone]',
        ['10:00\n9:00', '10:00\n9:00', '10:00\n9:00', '10:00\n9:00', '10:00\n9:00', '10:00\n9:00', '10:00\n9:00'],
        '3 chairs · 1 treatment room',
        'Open',
      ],
    ];
    const branches = B.map((b) => ({
      name: b[0],
      addr: b[1],
      phone: b[2],
      chairs: b[4],
      status: b[5],
      sbg: b[5] === 'Open' ? '#E3EDF8' : '#FCEFD9',
      sfg: b[5] === 'Open' ? '#1D4F8C' : '#8A5100',
      days: D.map((d, i) => ({ day: d, hrs: b[3][i] })),
    }));
    return { branches };
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
                Locations, opening hours and closures{' '}
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
                Branches & hours
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
                + Add branch
              </button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '20px' }}>
            {(v.branches || []).map((b, i0) => (
              <section
                key={i0}
                style={{
                  background: '#FFFDFB',
                  borderRadius: '16px',
                  border: '1px solid #EFE1E4',
                  boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    padding: '16px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '10px',
                    borderBottom: '1px solid #EFE1E4',
                  }}
                >
                  <div>
                    <h2 style={{ margin: '0', fontSize: '17px' }}>{b.name}</h2>
                    <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#665859' }}>
                      {b.addr} · {b.phone}
                    </p>
                  </div>
                  <span
                    style={{
                      flexShrink: '0',
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      background: b.sbg,
                      color: b.sfg,
                    }}
                  >
                    {b.status}
                  </span>
                </div>
                <div
                  style={{
                    padding: '14px 20px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
                    gap: '6px',
                    textAlign: 'center',
                  }}
                >
                  {(b.days || []).map((d, i1) => (
                    <div key={i1} style={{ padding: '8px 4px', borderRadius: '10px', background: '#FFF4F6' }}>
                      <div style={{ fontSize: '11px', fontWeight: '700', color: '#665859' }}>{d.day}</div>
                      <div style={{ fontSize: '12px', fontWeight: '600', whiteSpace: 'pre-line' }}>{d.hrs}</div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    padding: '0 20px 16px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '16px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: '13px', color: '#665859' }}>{b.chairs}</span>
                  <label
                    style={{ display: 'flex', gap: '10px', alignItems: 'center', minHeight: '36px', fontSize: '14px' }}
                  >
                    <input
                      type="checkbox"
                      defaultChecked
                      style={{ accentColor: '#D6246E', width: '18px', height: '18px' }}
                    />
                    Accept online bookings
                  </label>
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
                    Edit
                  </button>
                </div>
              </section>
            ))}
          </div>
          <section
            style={{
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <h2 style={{ margin: '0', fontSize: '16px' }}>Closures & special hours</h2>
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
                + Add date
              </button>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '140px minmax(0, 1.4fr) minmax(0, 1fr) 140px',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '0.08em',
                color: '#665859',
                background: '#FFF5F7',
              }}
            >
              <span>DATE</span>
              <span>REASON</span>
              <span>BRANCHES</span>
              <span>HOURS</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '140px minmax(0, 1.4fr) minmax(0, 1fr) 140px',
                gap: '10px',
                padding: '4px 12px',
                fontSize: '14px',
              }}
            >
              <strong>Sun, 1 Nov</strong>
              <span>All Saints’ Day</span>
              <span style={{ color: '#665859' }}>All branches</span>
              <span>[Confirm hours]</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '140px minmax(0, 1.4fr) minmax(0, 1fr) 140px',
                gap: '10px',
                padding: '4px 12px',
                fontSize: '14px',
              }}
            >
              <strong>Thu, 24 Dec</strong>
              <span>Christmas Eve</span>
              <span style={{ color: '#665859' }}>All branches</span>
              <span>Close 3:00 PM</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '140px minmax(0, 1.4fr) minmax(0, 1fr) 140px',
                gap: '10px',
                padding: '4px 12px',
                fontSize: '14px',
              }}
            >
              <strong>Fri, 25 Dec</strong>
              <span>Christmas Day</span>
              <span style={{ color: '#665859' }}>All branches</span>
              <span>Closed</span>
            </div>
            <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>
              Closed dates and shorter hours are removed from online booking automatically.
            </p>
          </section>
        </main>
      </div>
    );
  }
}
