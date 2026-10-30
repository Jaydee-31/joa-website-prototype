import { Component as ReactComponent } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default class AdminStaff extends ReactComponent {
  renderVals() {
    const T = [
      ['Ana', 'Senior stylist', 'Malaybalay Pob.', 'Cuts, color, rebond, keratin, Protein Bond', '10%', 'Staff'],
      ['Bea', 'Stylist', 'Malaybalay Pob.', 'Cuts, color, treatments', '10%', 'Staff'],
      ['Liza', 'Nail technician', 'Purok 4B', 'Manicure, pedicure, gel, extensions', '10%', 'Staff'],
      ['Jun', 'Stylist', 'Purok 4B', 'Cuts, blowdry, rebond', '10%', 'Staff'],
      ['Mae', 'Lash & brow artist', 'Valencia City', 'Lash extensions, lift, Kilay, eyeliner, lip', '12%', 'Staff'],
      ['Grace', 'Esthetician · Branch lead', 'Maramag', 'Facials, laser, glow treatments', '10%', 'Manager'],
      [
        '[Doctor]',
        'Aesthetic physician',
        'Visiting · all',
        'Botox, fillers, PRP, thread lift, drips',
        '[Rate]',
        'Staff',
      ],
    ];
    const team = T.map((t) => ({
      name: t[0],
      role: t[1],
      branch: t[2],
      skills: t[3],
      com: t[4],
      access: t[5],
      ini: t[0].replace(/[^A-Za-z]/g, '').slice(0, 1) || 'D',
    }));
    const W = {
      Ana: ['8–5', '8–5', 'Off', '8–5', '8–5', '8–5', 'Off'],
      Bea: ['8–5', 'Off', '8–5', '8–5', 'Off', '8–5', '8–5'],
      Liza: ['7:30–4', '7:30–4', '7:30–4', 'Off', '7:30–4', '10–6:30', '10–6'],
      Jun: ['10–6:30', 'Off', '10–6:30', '10–6:30', '10–6:30', '7:30–4', 'Off'],
      Mae: ['9–6', '9–6', '9–6', 'Off', '9–6', '9–6', 'Off'],
      Grace: ['10–9', '10–9', 'Off', '10–9', '10–9', '10–9', '12–9'],
      '[Doctor]': ['Off', 'Maramag 1–5', 'Off', 'Malaybalay 9–1', 'Off', 'Valencia 1–5', 'Off'],
    };
    const shifts = Object.keys(W).map((k) => ({
      name: k,
      days: W[k].map((t) => ({ t, bg: t === 'Off' ? '#F4ECE8' : '#FDE7EE', fg: t === 'Off' ? '#665859' : '#A8174F' })),
    }));
    return { team, shifts };
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
                Team, roles and weekly shifts{' '}
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
                Staff & schedules
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
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
                Copy last week
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
                + Add staff
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
            <h2 style={{ margin: '0', padding: '16px 20px', fontSize: '16px', borderBottom: '1px solid #EFE1E4' }}>
              Team
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <div style={{ minWidth: '860px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(0, 2fr) 90px 90px',
                    gap: '10px',
                    padding: '10px 20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    color: '#665859',
                    background: '#FFF5F7',
                  }}
                >
                  <span>NAME</span>
                  <span>ROLE</span>
                  <span>BRANCH</span>
                  <span>SERVICES</span>
                  <span>COMMISSION</span>
                  <span>ACCESS</span>
                </div>
                {(v.team || []).map((t, i0) => (
                  <div
                    key={i0}
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        'minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(0, 1.2fr) minmax(0, 2fr) 90px 90px',
                      gap: '10px',
                      padding: '11px 20px',
                      alignItems: 'center',
                      borderTop: '1px solid #F8EDF0',
                      fontSize: '14px',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span
                        aria-hidden="true"
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '999px',
                          background: '#FDE7EE',
                          color: '#A8174F',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          fontSize: '13px',
                        }}
                      >
                        {t.ini}
                      </span>
                      <strong>{t.name}</strong>
                    </span>
                    <span>{t.role}</span>
                    <span style={{ color: '#665859' }}>{t.branch}</span>
                    <span style={{ color: '#665859', fontSize: '13px' }}>{t.skills}</span>
                    <span>{t.com}</span>
                    <span style={{ fontSize: '12px', fontWeight: '600' }}>{t.access}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section
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
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                borderBottom: '1px solid #EFE1E4',
              }}
            >
              <h2 style={{ margin: '0', fontSize: '16px' }}>Shifts · week of 19 October</h2>
              <span style={{ fontSize: '12px', color: '#665859' }}>
                Online booking only offers times when someone qualified is on shift
              </span>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <div style={{ minWidth: '900px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '140px repeat(7, minmax(0, 1fr))',
                    gap: '6px',
                    padding: '10px 20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    color: '#665859',
                    background: '#FFF5F7',
                  }}
                >
                  <span>STAFF</span>
                  <span>MON 19</span>
                  <span>TUE 20</span>
                  <span>WED 21</span>
                  <span>THU 22</span>
                  <span>FRI 23</span>
                  <span>SAT 24</span>
                  <span>SUN 25</span>
                </div>
                {(v.shifts || []).map((s, i0) => (
                  <div
                    key={i0}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '140px repeat(7, minmax(0, 1fr))',
                      gap: '6px',
                      padding: '8px 20px',
                      alignItems: 'center',
                      borderTop: '1px solid #F8EDF0',
                    }}
                  >
                    <strong style={{ fontSize: '14px' }}>{s.name}</strong>
                    {(s.days || []).map((d, i1) => (
                      <span
                        key={i1}
                        style={{
                          padding: '7px 4px',
                          borderRadius: '8px',
                          textAlign: 'center',
                          fontSize: '12px',
                          fontWeight: '600',
                          background: d.bg,
                          color: d.fg,
                        }}
                      >
                        {d.t}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
