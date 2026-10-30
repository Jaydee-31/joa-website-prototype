import { Component as ReactComponent } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default class AdminBookings extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = { f: 'All' };
  }
  renderVals() {
    const S = {
      Pending: ['#FCEFD9', '#8A5100'],
      Confirmed: ['#E3EDF8', '#1D4F8C'],
      Completed: ['#F1E8EA', '#2A2627'],
      Cancelled: ['#F8EDF0', '#665859'],
      'No-show': ['#FDE7EE', '#A8174F'],
    };
    const R = [
      [
        'BK-10482',
        '10:30',
        'Mon 19 Oct',
        'Joy P.',
        '0917 ··· 2231',
        'Korean Signature Facial',
        'Maramag',
        'Grace',
        'Website',
        'Pending',
        '₱749',
      ],
      [
        'BK-10481',
        '13:00',
        'Mon 19 Oct',
        'Angel T.',
        '0926 ··· 8810',
        'Microshading',
        'Valencia City',
        'Mae',
        'Website',
        'Pending',
        '₱999',
      ],
      [
        'BK-10480',
        '14:00',
        'Mon 19 Oct',
        'Lovely R.',
        '0935 ··· 1102',
        'Botox Alartox',
        'Maramag',
        '[Doctor]',
        'Website',
        'Pending',
        '₱1,999',
      ],
      [
        'BK-10479',
        '10:00',
        'Mon 19 Oct',
        'Rhea M.',
        '0918 ··· 4471',
        'Protein Straight Bond — Long',
        'Malaybalay Pob.',
        'Ana',
        'Messenger',
        'Confirmed',
        '₱3,999',
      ],
      [
        'BK-10478',
        '09:00',
        'Mon 19 Oct',
        'Kristine D.',
        '0927 ··· 5390',
        'Classic Lash — Natural',
        'Valencia City',
        'Mae',
        'Website',
        'Completed',
        '₱499',
      ],
      [
        'BK-10477',
        '11:00',
        'Mon 19 Oct',
        'Carlo B.',
        '0995 ··· 7713',
        'Hair Cut / Blowdry / Iron',
        'Purok 4B',
        'Jun',
        'Phone',
        'Completed',
        '₱199',
      ],
      [
        'BK-10476',
        '15:30',
        'Mon 19 Oct',
        'Nica F.',
        '0916 ··· 3058',
        'Organic Hair Color',
        'Malaybalay Pob.',
        'Ana',
        'Website',
        'Confirmed',
        '₱999',
      ],
      [
        'BK-10471',
        '16:00',
        'Sun 18 Oct',
        'Mika S.',
        '0939 ··· 6624',
        'Gel Pedicure',
        'Purok 4B',
        'Liza',
        'Website',
        'No-show',
        '₱549',
      ],
      [
        'BK-10466',
        '13:30',
        'Sun 18 Oct',
        'Dianne C.',
        '0920 ··· 1187',
        'Hydrating Glow Facial',
        'Maramag',
        'Grace',
        'Website',
        'Cancelled',
        '₱1,249',
      ],
      [
        'BK-10463',
        '09:30',
        'Tue 20 Oct',
        'Paula G.',
        '0947 ··· 9021',
        'L’Oréal Rebond',
        'Malaybalay Pob.',
        'Ana',
        'Website',
        'Confirmed',
        '₱1,749',
      ],
      [
        'BK-10460',
        '14:30',
        'Tue 20 Oct',
        'Trish O.',
        '0910 ··· 4462',
        'Human Hair — Cat Eye',
        'Valencia City',
        'Mae',
        'Messenger',
        'Confirmed',
        '₱1,499',
      ],
    ];
    const all = R.map((r) => ({
      ref: r[0],
      time: r[1],
      date: r[2],
      client: r[3],
      phone: r[4],
      service: r[5],
      branch: r[6],
      staff: r[7],
      src: r[8],
      status: r[9],
      amt: r[10],
      sbg: S[r[9]][0],
      sfg: S[r[9]][1],
    }));
    const rows = this.state.f === 'All' ? all : all.filter((r) => r.status === this.state.f);
    const chips = ['All', 'Pending', 'Confirmed', 'Completed', 'Cancelled', 'No-show'].map((k) => {
      const on = this.state.f === k;
      return {
        label: k,
        n: k === 'All' ? all.length : all.filter((r) => r.status === k).length,
        border: on ? '#D6246E' : '#E6CBD5',
        bg: on ? '#D6246E' : '#FFFDFB',
        fg: on ? '#FFFFFF' : '#2A2627',
        pick: () => this.setState({ f: k }),
      };
    });
    return { rows, chips };
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
                All branches · this week{' '}
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
                Bookings
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
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
                Export CSV
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
                + New booking
              </button>
            </div>
          </div>
          <div
            style={{
              background: '#FFFDFB',
              borderRadius: '16px',
              border: '1px solid #EFE1E4',
              boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
              padding: '14px 18px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              alignItems: 'center',
            }}
          >
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600' }}>
              Search
              <input
                type="search"
                placeholder="Client, phone or reference"
                style={{
                  minHeight: '42px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  border: '1.5px solid #E6CBD5',
                  background: '#FFFDFB',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  color: '#2A2627',
                  width: '240px',
                }}
              />
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
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600' }}>
              From
              <input
                type="date"
                defaultValue="2026-10-19"
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
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600' }}>
              To
              <input
                type="date"
                defaultValue="2026-10-25"
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
          <div role="tablist" aria-label="Filter by status" className="chip-row">
            {(v.chips || []).map((c, i0) => (
              <button
                key={i0}
                type="button"
                role="tab"
                onClick={c.pick}
                style={{
                  minHeight: '40px',
                  padding: '0 16px',
                  borderRadius: '999px',
                  border: `1.5px solid ${c.border}`,
                  background: c.bg,
                  color: c.fg,
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                {c.label} <span style={{ opacity: '0.75' }}>{c.n}</span>
              </button>
            ))}
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
              <div style={{ minWidth: '980px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                      '110px 130px minmax(0, 1.3fr) minmax(0, 1.8fr) minmax(0, 1.2fr) 70px 90px 110px 80px 70px',
                    gap: '10px',
                    padding: '11px 20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    color: '#665859',
                    background: '#FFF5F7',
                  }}
                >
                  <span>REF</span>
                  <span>DATE & TIME</span>
                  <span>CLIENT</span>
                  <span>SERVICE</span>
                  <span>BRANCH</span>
                  <span>STAFF</span>
                  <span>SOURCE</span>
                  <span>STATUS</span>
                  <span style={{ textAlign: 'right' }}>AMOUNT</span>
                  <span />
                </div>
                {(v.rows || []).map((r, i0) => (
                  <div
                    key={i0}
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        '110px 130px minmax(0, 1.3fr) minmax(0, 1.8fr) minmax(0, 1.2fr) 70px 90px 110px 80px 70px',
                      gap: '10px',
                      padding: '11px 20px',
                      alignItems: 'center',
                      borderTop: '1px solid #F8EDF0',
                    }}
                  >
                    <span style={{ fontSize: '12px', color: '#665859' }}>{r.ref}</span>
                    <span>
                      <strong>{r.time}</strong>
                      <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>{r.date}</span>
                    </span>
                    <span>
                      {r.client}
                      <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>{r.phone}</span>
                    </span>
                    <span>{r.service}</span>
                    <span style={{ color: '#665859' }}>{r.branch}</span>
                    <span>{r.staff}</span>
                    <span style={{ color: '#665859' }}>{r.src}</span>
                    <span
                      style={{
                        justifySelf: 'start',
                        fontSize: '12px',
                        fontWeight: '700',
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: r.sbg,
                        color: r.sfg,
                      }}
                    >
                      {r.status}
                    </span>
                    <strong style={{ textAlign: 'right' }}>{r.amt}</strong>
                    <a href="#" style={{ justifySelf: 'end', fontSize: '13px', fontWeight: '600' }}>
                      Open
                    </a>
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
