import { Component as ReactComponent } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default class AdminCalendar extends ReactComponent {
  renderVals() {
    const C = {
      c: ['#FDE7EE', '#D6246E'],
      p: ['#FCEFD9', '#B97A10'],
      d: ['#F1E8EA', '#8A7E7F'],
      b: ['repeating-linear-gradient(45deg, #F1E8EA 0, #F1E8EA 6px, #FFFDFB 6px, #FFFDFB 12px)', '#C9B6B2'],
    };
    const fmt = (h) => {
      const hr = Math.floor(h);
      return ((hr + 11) % 12) + 1 + ':' + (h % 1 ? '30' : '00');
    };
    const S = [
      [
        'Ana',
        'Senior stylist',
        [
          [8, 0.75, 'Maria S.', 'Hair Cut / Blowdry / Iron', 'd'],
          [10, 4, 'Rhea M.', 'Protein Straight Bond — Long', 'c'],
          [14, 1, '', 'Lunch break', 'b'],
          [15.5, 2, 'Nica F.', 'Organic Hair Color', 'c'],
        ],
      ],
      [
        'Bea',
        'Stylist',
        [
          [9, 1, 'Walk-in', 'Wash / Blowdry / Iron', 'd'],
          [11, 3, 'Lea M.', 'L’Oréal Rebond', 'c'],
          [14.5, 1.5, 'Cora L.', 'Natural Hair Color', 'c'],
        ],
      ],
      [
        'Cel',
        'Nail technician',
        [
          [8.5, 1, 'Hazel B.', 'Gel Manicure', 'd'],
          [10.5, 1, 'Ivy N.', 'Gel Pedicure', 'c'],
          [12, 1, '', 'Lunch break', 'b'],
          [13.5, 1.5, 'Gwen A.', 'Nail Extension (Plain)', 'p'],
        ],
      ],
      [
        'Dina',
        'Lash & brow artist',
        [
          [9, 1.5, 'Marga T.', 'Classic Lash — Natural', 'd'],
          [13, 2, 'Jen V.', 'Microshading', 'p'],
          [15.5, 1, 'Sam R.', 'Lash Lift with Tint', 'c'],
        ],
      ],
      [
        'Ella',
        'Esthetician',
        [
          [10.5, 1, 'Abby D.', 'Korean Signature Facial', 'p'],
          [12.5, 1, '', 'Lunch break', 'b'],
          [14, 1.5, 'Rina E.', 'Hydrating Glow Facial', 'c'],
        ],
      ],
    ];
    const staff = S.map((s) => ({
      name: s[0],
      role: s[1],
      appts: s[2].map((a) => ({
        top: (a[0] - 8) * 64 + 2 + 'px',
        h: a[1] * 64 - 4 + 'px',
        time: fmt(a[0]),
        client: a[2] || 'Blocked',
        service: a[3],
        bg: C[a[4]][0],
        edge: C[a[4]][1],
      })),
    }));
    const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((h) => ({
      label: ((h + 11) % 12) + 1 + (h < 12 ? ' AM' : ' PM'),
    }));
    return { staff, hours };
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
                Malaybalay — Poblacion{' '}
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
                Calendar
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <button
                  type="button"
                  aria-label="Previous day"
                  style={{
                    minHeight: '42px',
                    borderRadius: '10px',
                    border: '1.5px solid #D6246E',
                    background: '#FFFDFB',
                    color: '#D6246E',
                    fontFamily: 'inherit',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '0 14px',
                  }}
                >
                  ‹
                </button>
                <strong style={{ minWidth: '150px', textAlign: 'center' }}>Mon, 19 Oct 2026</strong>
                <button
                  type="button"
                  aria-label="Next day"
                  style={{
                    minHeight: '42px',
                    borderRadius: '10px',
                    border: '1.5px solid #D6246E',
                    background: '#FFFDFB',
                    color: '#D6246E',
                    fontFamily: 'inherit',
                    fontWeight: '600',
                    cursor: 'pointer',
                    padding: '0 14px',
                  }}
                >
                  ›
                </button>
              </div>
              <div style={{ display: 'flex', padding: '4px', borderRadius: '12px', background: '#F8EDF0', gap: '4px' }}>
                <span
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9px',
                    background: '#FFFDFB',
                    color: '#D6246E',
                    fontWeight: '600',
                    boxShadow: '0 4px 12px -4px rgba(42,38,39,0.2)',
                  }}
                >
                  Day
                </span>
                <span style={{ padding: '8px 16px', fontWeight: '600', color: '#665859' }}>Week</span>
              </div>
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
                  border: '0',
                  background: '#D6246E',
                  color: '#FFFFFF',
                  fontFamily: 'inherit',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                }}
              >
                + Block time
              </button>
            </div>
          </div>
          <section
            style={{
              background: '#FFFDFB',
              borderRadius: '16px',
              border: '1px solid #EFE1E4',
              boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              overflow: 'hidden',
            }}
          >
            <div style={{ overflowX: 'auto' }}>
              <div style={{ minWidth: '900px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '70px repeat(5, minmax(0, 1fr))',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    color: '#665859',
                    background: '#FFF5F7',
                  }}
                >
                  <span style={{ padding: '12px 10px' }} />
                  {(v.staff || []).map((s, i0) => (
                    <span key={i0} style={{ padding: '12px 14px', borderLeft: '1px solid #F8EDF0' }}>
                      <strong style={{ color: '#2A2627', fontSize: '13px', letterSpacing: '0' }}>{s.name}</strong>
                      <span style={{ display: 'block', fontWeight: '500', letterSpacing: '0' }}>{s.role}</span>
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '70px repeat(5, minmax(0, 1fr))',
                    position: 'relative',
                  }}
                >
                  <div>
                    {(v.hours || []).map((h, i0) => (
                      <div
                        key={i0}
                        style={{
                          height: '64px',
                          padding: '4px 10px',
                          boxSizing: 'border-box',
                          fontSize: '12px',
                          color: '#665859',
                          borderTop: '1px solid #F8EDF0',
                        }}
                      >
                        {h.label}
                      </div>
                    ))}
                  </div>
                  {(v.staff || []).map((s, i0) => (
                    <div
                      key={i0}
                      style={{
                        position: 'relative',
                        height: '640px',
                        borderLeft: '1px solid #F8EDF0',
                        background:
                          'repeating-linear-gradient(to bottom, #FFFDFB 0, #FFFDFB 63px, #F8EDF0 63px, #F8EDF0 64px)',
                      }}
                    >
                      {(s.appts || []).map((a, i1) => (
                        <div
                          key={i1}
                          style={{
                            position: 'absolute',
                            left: '6px',
                            right: '6px',
                            top: a.top,
                            height: a.h,
                            boxSizing: 'border-box',
                            padding: '6px 8px',
                            borderRadius: '10px',
                            background: a.bg,
                            borderLeft: `3px solid ${a.edge}`,
                            overflow: 'hidden',
                            boxShadow: '0 6px 14px -8px rgba(42,38,39,0.3)',
                          }}
                        >
                          <strong style={{ display: 'block', fontSize: '12px' }}>
                            {a.time} · {a.client}
                          </strong>
                          <span style={{ fontSize: '12px', color: '#4A3F40' }}>{a.service}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: '70px',
                      right: '0',
                      top: '171px',
                      height: '2px',
                      background: '#D6246E',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '13px', color: '#665859' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '4px',
                  background: '#FDE7EE',
                  borderLeft: '3px solid #D6246E',
                }}
              />
              Confirmed
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '4px',
                  background: '#FCEFD9',
                  borderLeft: '3px solid #B97A10',
                }}
              />
              Pending
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '4px',
                  background: '#F1E8EA',
                  borderLeft: '3px solid #8A7E7F',
                }}
              />
              Completed
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '4px',
                  background: 'repeating-linear-gradient(45deg, #F1E8EA 0, #F1E8EA 4px, #FFFDFB 4px, #FFFDFB 8px)',
                }}
              />
              Blocked / break
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '14px', height: '2px', background: '#D6246E' }} />
              Now
            </span>
          </div>
        </main>
      </div>
    );
  }
}
