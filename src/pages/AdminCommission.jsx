import { Component as ReactComponent } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

// "Today" for the prototype's sample data, matching the dashboard
const TODAY = '2026-10-19';

const BRANCHES = [
  ['All branches', null],
  ['Malaybalay — Poblacion', 'Malaybalay Pob.'],
  ['Malaybalay — Purok 4B', 'Purok 4B'],
  ['Valencia City', 'Valencia City'],
  ['Maramag', 'Maramag'],
];

// Promo prices, as charged at the register
const MENU = {
  hair: [
    ['Hair Cut / Blowdry / Iron', 199],
    ['Wash / Blowdry / Iron', 249],
    ['Organic Hair Color', 999],
    ['L’Oréal Rebond', 1749],
    ['iCure Keratin Blowout', 1249],
    ['Protein Straight Bond — Long', 3999],
  ],
  nails: [
    ['Classic Manicure', 150],
    ['Classic Pedicure', 200],
    ['Gel Manicure', 499],
    ['Gel Pedicure', 549],
    ['Nail Extension (Plain)', 749],
  ],
  lashes: [
    ['Classic Lash — Natural', 499],
    ['Human Hair — Cat Eye', 1499],
    ['Lash Lift with Tint', 999],
    ['Brow Lamination', 499],
    ['Microshading', 999],
  ],
  facial: [
    ['Korean Signature Facial', 749],
    ['Bb Glow Glass Skin Facial', 749],
    ['Hydrating Glow Facial', 1249],
    ['Diode Laser Underarm', 799],
  ],
  aesthetics: [
    ['Botox Alartox', 1999],
    ['Micro Tox Anti-Aging', 2499],
    ['Dermal Filler', 6999],
  ],
};

// Name, role, branch, menu, commission rate (null = not set), weekly shifts Mon–Sun (from Staff & schedules)
const STAFF = [
  ['Ana', 'Senior stylist', 'Malaybalay Pob.', 'hair', 0.1, ['8–5', '8–5', 'Off', '8–5', '8–5', '8–5', 'Off']],
  ['Bea', 'Stylist', 'Malaybalay Pob.', 'hair', 0.1, ['8–5', 'Off', '8–5', '8–5', 'Off', '8–5', '8–5']],
  ['Liza', 'Nail technician', 'Purok 4B', 'nails', 0.1, ['7:30–4', '7:30–4', '7:30–4', 'Off', '7:30–4', '10–6:30', '10–6']],
  ['Jun', 'Stylist', 'Purok 4B', 'hair', 0.1, ['10–6:30', 'Off', '10–6:30', '10–6:30', '10–6:30', '7:30–4', 'Off']],
  ['Mae', 'Lash & brow artist', 'Valencia City', 'lashes', 0.12, ['9–6', '9–6', '9–6', 'Off', '9–6', '9–6', 'Off']],
  ['Grace', 'Esthetician · Branch lead', 'Maramag', 'facial', 0.1, ['10–9', '10–9', 'Off', '10–9', '10–9', '10–9', '12–9']],
  [
    '[Doctor]',
    'Aesthetic physician',
    null,
    'aesthetics',
    null,
    ['Off', 'Maramag 1–5', 'Off', 'Malaybalay 9–1', 'Off', 'Valencia 1–5', 'Off'],
  ],
];

const CLIENTS = [
  'Maria S.', 'Jessa L.', 'Kristine D.', 'Rhea M.', 'Joy P.', 'Carlo B.', 'Angel T.', 'Lovely R.', 'Nica F.',
  'Rose V.', 'Lyn A.', 'Mika G.', 'Trish O.', 'Hannah C.', 'Bianca E.', 'Paolo N.', 'Cheska U.', 'Dianne Q.',
];

const peso = (n) =>
  '₱' + n.toLocaleString('en-US', Number.isInteger(n) ? {} : { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const toDate = (s) => {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
};
const toKey = (d) =>
  [d.getFullYear(), String(d.getMonth() + 1).padStart(2, '0'), String(d.getDate()).padStart(2, '0')].join('-');
const addDays = (s, n) => {
  const d = toDate(s);
  d.setDate(d.getDate() + n);
  return toKey(d);
};

// Small seeded PRNG so each day's sample data is stable between visits
function rng(seedText) {
  let h = 1779033703;
  for (let i = 0; i < seedText.length; i++) h = Math.imul(h ^ seedText.charCodeAt(i), 3432918353);
  return () => {
    h = Math.imul(h ^ (h >>> 15), h | 1);
    h ^= h + Math.imul(h ^ (h >>> 7), h | 61);
    return ((h ^ (h >>> 14)) >>> 0) / 4294967296;
  };
}

// Shift text like "7:30–4" or "Maramag 1–5" → [start, end] in minutes; hours before 7 are pm
const shiftWindow = (shift) => {
  const m = shift.match(/(\d+)(?::(\d+))?–(\d+)(?::(\d+))?/);
  if (!m) return [8 * 60, 17 * 60];
  const mins = (h, mm) => (Number(h) < 7 ? Number(h) + 12 : Number(h)) * 60 + Number(mm || 0);
  const start = mins(m[1], m[2]);
  let end = mins(m[3], m[4]);
  if (end <= start) end += 12 * 60;
  return [start, end];
};
const clock = (mins) => Math.floor(mins / 60) + ':' + String(mins % 60).padStart(2, '0');
const doctorBranch = (shift) =>
  shift.startsWith('Malaybalay') ? 'Malaybalay Pob.' : shift.startsWith('Valencia') ? 'Valencia City' : 'Maramag';

// Every staff member's completed services and commission for one day
function dayData(date) {
  const weekday = (toDate(date).getDay() + 6) % 7;
  return STAFF.map(([name, role, home, menu, rate, week]) => {
    const shift = week[weekday];
    const off = shift === 'Off';
    const branch = home || (off ? 'Visiting' : doctorBranch(shift));
    const r = rng(date + name);
    const count = off ? 0 : menu === 'aesthetics' ? 1 + Math.floor(r() * 3) : 3 + Math.floor(r() * 6);
    const [start, end] = shiftWindow(shift);
    let t = start;
    const lines = [];
    for (let i = 0; i < count && t <= end - 30; i++) {
      const [service, price] = MENU[menu][Math.floor(r() * MENU[menu].length)];
      lines.push({
        time: clock(t),
        client: CLIENTS[Math.floor(r() * CLIENTS.length)],
        service,
        price,
        com: rate == null ? null : Math.round(price * rate * 100) / 100,
      });
      t += 30 + Math.floor(r() * 4) * 30;
    }
    const sales = lines.reduce((a, l) => a + l.price, 0);
    return {
      name,
      role,
      branch,
      shift,
      off,
      rate,
      lines,
      sales,
      com: rate == null ? null : Math.round(sales * rate * 100) / 100,
    };
  });
}

const fmtLong = (s) =>
  toDate(s).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

const card = {
  background: '#FFFDFB',
  borderRadius: '16px',
  border: '1px solid #EFE1E4',
  boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
};
const control = {
  minHeight: '42px',
  padding: '0 12px',
  borderRadius: '10px',
  border: '1.5px solid #E6CBD5',
  background: '#FFFDFB',
  fontFamily: 'inherit',
  fontSize: '14px',
  color: '#2A2627',
};
const COLS = 'minmax(150px, 1.6fr) minmax(0, 1.2fr) 80px 110px 70px 120px 110px 120px';

export default class AdminCommission extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = { date: TODAY, branch: 0, open: null, paid: {} };
  }

  // Earlier days are already paid out; today starts unpaid
  isPaid(date, name) {
    const k = date + '|' + name;
    return k in this.state.paid ? this.state.paid[k] : date < TODAY;
  }

  renderVals() {
    const st = this.state;
    const branchName = BRANCHES[st.branch][1];
    const inBranch = (row) => !branchName || row.branch === branchName;

    const rows = dayData(st.date)
      .filter(inBranch)
      .map((row) => {
        const paid = this.isPaid(st.date, row.name);
        const payable = row.com != null && row.com > 0;
        return {
          ...row,
          paid,
          payable,
          isOpen: st.open === row.name,
          services: row.off ? '—' : row.lines.length,
          salesTxt: row.off ? '—' : peso(row.sales),
          rateTxt: row.rate == null ? 'Not set' : Math.round(row.rate * 100) + '%',
          comTxt: row.off ? '—' : row.com == null ? 'Set rate' : peso(row.com),
          status: row.off ? 'Off' : !payable ? (row.rate == null ? 'Rate needed' : 'Nothing due') : paid ? 'Paid' : 'Unpaid',
          toggle: () => this.setState({ open: st.open === row.name ? null : row.name }),
          markPaid: () => this.setState({ paid: { ...st.paid, [st.date + '|' + row.name]: !paid } }),
          lineRows: row.lines.map((l) => ({ ...l, priceTxt: peso(l.price), comTxt: l.com == null ? '—' : peso(l.com) })),
        };
      })
      .sort((a, b) => (b.com || 0) - (a.com || 0) || Number(a.off) - Number(b.off));

    const working = rows.filter((r) => !r.off);
    const totalCom = rows.reduce((a, r) => a + (r.com || 0), 0);
    const totalSales = working.reduce((a, r) => a + r.sales, 0);
    const totalServices = working.reduce((a, r) => a + r.lines.length, 0);
    const unpaid = rows.filter((r) => r.payable && !r.paid);
    const unpaidAmt = unpaid.reduce((a, r) => a + r.com, 0);
    const top = rows.find((r) => r.com > 0);
    const noRate = working.filter((r) => r.rate == null && r.lines.length);

    // Last 7 days ending on the selected day, for quick switching and comparison
    const strip = [];
    for (let i = 6; i >= 0; i--) {
      const date = addDays(st.date, -i);
      const amt = dayData(date)
        .filter(inBranch)
        .reduce((a, r) => a + (r.com || 0), 0);
      strip.push({ date, amt });
    }
    const max = Math.max(...strip.map((d) => d.amt), 1);
    const days = strip.map((d) => {
      const on = d.date === st.date;
      const dt = toDate(d.date);
      return {
        key: d.date,
        dow: d.date === TODAY ? 'Today' : dt.toLocaleDateString('en-GB', { weekday: 'short' }),
        day: dt.getDate() + ' ' + dt.toLocaleDateString('en-GB', { month: 'short' }),
        amt: '₱' + (d.amt / 1000).toFixed(1) + 'k',
        h: Math.max(4, Math.round((d.amt / max) * 44)) + 'px',
        on,
        bg: on ? '#D6246E' : '#FFFDFB',
        fg: on ? '#FFFFFF' : '#2A2627',
        sub: on ? '#FDE7EE' : '#665859',
        bar: on ? '#FFFFFF' : '#F7A8C4',
        pick: () => this.setState({ date: d.date, open: null }),
      };
    });

    return {
      rows,
      days,
      dateLong: fmtLong(st.date),
      isToday: st.date === TODAY,
      branchLabel: st.branch ? BRANCHES[st.branch][0] : 'all branches',
      kpis: [
        ['Commission earned', peso(totalCom), working.length + ' staff working'],
        ['Commissionable sales', peso(totalSales), 'At promo prices, after discounts'],
        ['Services done', String(totalServices), top ? 'Top earner: ' + top.name + ' · ' + peso(top.com) : 'No services'],
        [
          'Still to pay out',
          peso(unpaidAmt),
          unpaid.length ? unpaid.length + ' staff unpaid' : 'Everyone is paid for this day',
        ],
      ].map((k) => ({ label: k[0], value: k[1], note: k[2] })),
      unpaidCount: unpaid.length,
      noRate: noRate.map((r) => r.name).join(', '),
      totalCom: peso(totalCom),
      totalSales: peso(totalSales),
      totalServices,
      prev: () => this.setState({ date: addDays(st.date, -1), open: null }),
      next: () => this.setState({ date: addDays(st.date, 1), open: null }),
      today: () => this.setState({ date: TODAY, open: null }),
      setDate: (e) => e.target.value && this.setState({ date: e.target.value > TODAY ? TODAY : e.target.value, open: null }),
      setBranch: (e) => this.setState({ branch: Number(e.target.value), open: null }),
      payAll: () => {
        const paid = { ...st.paid };
        unpaid.forEach((r) => {
          paid[st.date + '|' + r.name] = true;
        });
        this.setState({ paid });
      },
    };
  }

  render() {
    const v = this.renderVals();
    const S = {
      Paid: ['#E3EDF8', '#1D4F8C'],
      Unpaid: ['#FCEFD9', '#8A5100'],
      'Rate needed': ['#FDE7EE', '#A8174F'],
      'Nothing due': ['#F1E8EA', '#665859'],
      Off: ['#F4ECE8', '#665859'],
    };
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
                {v.dateLong} · {v.branchLabel}{' '}
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
                Staff commission
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={v.prev}
                  aria-label="Previous day"
                  style={{ ...control, width: '42px', padding: '0', cursor: 'pointer', fontSize: '18px' }}
                >
                  ‹
                </button>
                <input
                  type="date"
                  aria-label="Day"
                  value={this.state.date}
                  max={TODAY}
                  onChange={v.setDate}
                  style={control}
                />
                <button
                  type="button"
                  onClick={v.next}
                  disabled={v.isToday}
                  aria-label="Next day"
                  style={{
                    ...control,
                    width: '42px',
                    padding: '0',
                    cursor: 'pointer',
                    fontSize: '18px',
                    opacity: v.isToday ? '0.45' : '1',
                  }}
                >
                  ›
                </button>
                {!v.isToday && (
                  <button
                    type="button"
                    onClick={v.today}
                    style={{ ...control, padding: '0 14px', fontWeight: '600', cursor: 'pointer' }}
                  >
                    Today
                  </button>
                )}
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600' }}>
                Branch{' '}
                <select value={this.state.branch} onChange={v.setBranch} style={control}>
                  {BRANCHES.map((b, i) => (
                    <option key={b[0]} value={i}>
                      {b[0]}
                    </option>
                  ))}
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
                Export Excel
              </button>
            </div>
          </div>

          <div role="group" aria-label="Last 7 days" style={{ overflowX: 'auto', margin: '-6px -32px', padding: '6px 32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(88px, 1fr))', gap: '8px' }}>
              {v.days.map((d) => (
                <button
                  key={d.key}
                  type="button"
                  onClick={d.pick}
                  aria-pressed={d.on}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '2px',
                    padding: '10px 12px',
                    borderRadius: '12px',
                    border: `1.5px solid ${d.on ? '#D6246E' : '#EFE1E4'}`,
                    background: d.bg,
                    color: d.fg,
                    fontFamily: 'inherit',
                    textAlign: 'left',
                    cursor: 'pointer',
                    boxShadow: d.on ? '0 10px 22px -10px rgba(214,36,110,0.65)' : 'none',
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: '700' }}>{d.dow}</span>
                  <span style={{ fontSize: '11px', color: d.sub }}>{d.day}</span>
                  <span style={{ display: 'flex', alignItems: 'flex-end', height: '44px', marginTop: '4px' }}>
                    <span style={{ width: '18px', height: d.h, borderRadius: '4px', background: d.bar }} />
                  </span>
                  <strong style={{ fontSize: '13px' }}>{d.amt}</strong>
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {v.kpis.map((k) => (
              <div key={k.label} style={{ ...card, padding: '18px 20px' }}>
                <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>{k.label}</p>
                <p style={{ margin: '4px 0 0', fontSize: '30px', fontWeight: '700', letterSpacing: '-0.01em' }}>
                  {k.value}
                </p>
                <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>{k.note}</p>
              </div>
            ))}
          </div>

          <section style={{ ...card, overflow: 'hidden' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
              }}
            >
              <div>
                <h2 style={{ margin: '0', fontSize: '16px' }}>Commission by staff</h2>
                <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#665859' }}>
                  Rate × amount paid for each completed service. Select a staff member to see their services.
                </p>
              </div>
              <button
                type="button"
                onClick={v.payAll}
                disabled={!v.unpaidCount}
                style={{
                  minHeight: '42px',
                  padding: '0 18px',
                  borderRadius: '10px',
                  border: '0',
                  background: v.unpaidCount ? '#D6246E' : '#E7C3D1',
                  color: '#FFFFFF',
                  fontFamily: 'inherit',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: v.unpaidCount ? '0 10px 22px -10px rgba(214,36,110,0.65)' : 'none',
                }}
              >
                {v.unpaidCount ? `Mark all paid (${v.unpaidCount})` : 'All paid'}
              </button>
            </div>
            {v.noRate && (
              <p
                style={{
                  margin: '0 20px 14px',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  background: '#FDE7EE',
                  color: '#A8174F',
                  fontSize: '13px',
                }}
              >
                No commission rate is set for {v.noRate}, so their services aren’t counted.{' '}
                <Link to="/admin-staff" style={{ fontWeight: '600' }}>
                  Set a rate in Staff & schedules
                </Link>
              </p>
            )}
            <div style={{ overflowX: 'auto' }}>
              <div style={{ minWidth: '900px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: COLS,
                    gap: '10px',
                    padding: '11px 20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    color: '#665859',
                    background: '#FFF5F7',
                  }}
                >
                  <span>STAFF</span>
                  <span>BRANCH</span>
                  <span style={{ textAlign: 'right' }}>SERVICES</span>
                  <span style={{ textAlign: 'right' }}>SALES</span>
                  <span style={{ textAlign: 'right' }}>RATE</span>
                  <span style={{ textAlign: 'right' }}>COMMISSION</span>
                  <span>STATUS</span>
                  <span />
                </div>
                {v.rows.map((r) => (
                  <div key={r.name} style={{ borderTop: '1px solid #F8EDF0' }}>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: COLS,
                        gap: '10px',
                        padding: '11px 20px',
                        alignItems: 'center',
                        background: r.isOpen ? '#FFF8FA' : 'transparent',
                        color: r.off ? '#665859' : '#2A2627',
                      }}
                    >
                      <button
                        type="button"
                        onClick={r.toggle}
                        disabled={r.off}
                        aria-expanded={r.off ? undefined : r.isOpen}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '0',
                          border: '0',
                          background: 'transparent',
                          fontFamily: 'inherit',
                          fontSize: '14px',
                          color: 'inherit',
                          textAlign: 'left',
                          cursor: r.off ? 'default' : 'pointer',
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          style={{
                            flexShrink: '0',
                            opacity: r.off ? '0' : '0.7',
                            transform: r.isOpen ? 'rotate(90deg)' : 'none',
                            transition: 'transform .15s',
                          }}
                        >
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                        <span>
                          <strong>{r.name}</strong>
                          <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>
                            {r.role} · {r.off ? 'Off' : r.shift}
                          </span>
                        </span>
                      </button>
                      <span style={{ color: '#665859' }}>{r.branch}</span>
                      <span style={{ textAlign: 'right' }}>{r.services}</span>
                      <span style={{ textAlign: 'right' }}>{r.salesTxt}</span>
                      <span style={{ textAlign: 'right', color: r.rate == null ? '#A8174F' : 'inherit' }}>{r.rateTxt}</span>
                      <strong style={{ textAlign: 'right', fontSize: '15px' }}>{r.comTxt}</strong>
                      <span
                        style={{
                          justifySelf: 'start',
                          fontSize: '12px',
                          fontWeight: '700',
                          padding: '3px 10px',
                          borderRadius: '999px',
                          background: S[r.status][0],
                          color: S[r.status][1],
                        }}
                      >
                        {r.status}
                      </span>
                      <span style={{ textAlign: 'right' }}>
                        {r.payable && (
                          <button
                            type="button"
                            onClick={r.markPaid}
                            style={{
                              minHeight: '36px',
                              padding: '0 12px',
                              borderRadius: '9px',
                              border: `1.5px solid ${r.paid ? '#E6CBD5' : '#D6246E'}`,
                              background: '#FFFDFB',
                              color: r.paid ? '#665859' : '#D6246E',
                              fontFamily: 'inherit',
                              fontSize: '13px',
                              fontWeight: '600',
                              cursor: 'pointer',
                            }}
                          >
                            {r.paid ? 'Undo' : 'Mark paid'}
                          </button>
                        )}
                      </span>
                    </div>
                    {r.isOpen && (
                      <div style={{ padding: '4px 20px 14px 42px', background: '#FFF8FA' }}>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '60px minmax(0, 1fr) minmax(0, 2fr) 100px 100px',
                            gap: '10px',
                            padding: '8px 0',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            color: '#665859',
                          }}
                        >
                          <span>TIME</span>
                          <span>CLIENT</span>
                          <span>SERVICE</span>
                          <span style={{ textAlign: 'right' }}>PAID</span>
                          <span style={{ textAlign: 'right' }}>COMMISSION</span>
                        </div>
                        {r.lineRows.map((l, i0) => (
                          <div
                            key={i0}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '60px minmax(0, 1fr) minmax(0, 2fr) 100px 100px',
                              gap: '10px',
                              padding: '7px 0',
                              borderTop: '1px solid #F5E3E8',
                              fontSize: '13px',
                            }}
                          >
                            <span style={{ color: '#665859' }}>{l.time}</span>
                            <span>{l.client}</span>
                            <span>{l.service}</span>
                            <span style={{ textAlign: 'right' }}>{l.priceTxt}</span>
                            <strong style={{ textAlign: 'right' }}>{l.comTxt}</strong>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: COLS,
                    gap: '10px',
                    padding: '13px 20px',
                    borderTop: '1.5px solid #EFE1E4',
                    background: '#FFF5F7',
                    fontWeight: '700',
                  }}
                >
                  <span>Total</span>
                  <span />
                  <span style={{ textAlign: 'right' }}>{v.totalServices}</span>
                  <span style={{ textAlign: 'right' }}>{v.totalSales}</span>
                  <span />
                  <span style={{ textAlign: 'right', fontSize: '15px', color: '#D6246E' }}>{v.totalCom}</span>
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
