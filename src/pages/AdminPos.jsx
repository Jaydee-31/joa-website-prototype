import { Component as ReactComponent } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default class AdminPos extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = { tab: 'reg', cat: 0, cart: [], cust: 'Walk-in customer', pay: 'Cash', cashIn: '', done: false };
  }
  renderVals() {
    const st = this.state;
    const peso = (n) => (n < 0 ? '−' : '') + '₱' + Math.abs(n).toLocaleString('en-US', { maximumFractionDigits: 2 });
    const C = [
      [
        'Hair',
        [
          ['Hair Cut / Blowdry / Iron', 399, 199],
          ['Wash / Blowdry / Iron', 499, 249],
          ['Organic Hair Color', 1999, 999],
          ['L’Oréal Rebond', 3499, 1749],
          ['iCure Keratin Blowout', 2499, 1249],
          ['Protein Straight Bond — Long', 7999, 3999],
        ],
      ],
      [
        'Lashes & Brows',
        [
          ['Classic Lash — Natural', 999, 499],
          ['Human Hair — Cat Eye', 2999, 1499],
          ['Lash Lift with Tint', 1999, 999],
          ['Brow Lamination', 999, 499],
          ['Microshading', 1999, 999],
          ['Microblading', 3500, 1750],
        ],
      ],
      [
        'Nails',
        [
          ['Classic Manicure', 150, 150],
          ['Classic Pedicure', 200, 200],
          ['Gel Manicure', 649, 499],
          ['Gel Pedicure', 699, 549],
          ['Simple Design (per piece)', 200, 200],
          ['Nail Extension (Plain)', 1499, 749],
        ],
      ],
      [
        'Facial & Skin',
        [
          ['Korean Signature Facial', 1499, 749],
          ['Bb Glow Glass Skin Facial', 1499, 749],
          ['Hydrating Glow Facial', 2499, 1249],
          ['Diode Laser Underarm', 1599, 799],
        ],
      ],
      [
        'Aesthetics',
        [
          ['Botox Alartox', 3999, 1999],
          ['Micro Tox Anti-Aging', 4999, 2499],
          ['Dermal Filler', 13999, 6999],
        ],
      ],
      [
        'Wellness',
        [
          ['White Glow Therapy', 1499, 749],
          ['K-Beauty Glow', 3999, 1999],
        ],
      ],
    ];
    const ALL = {};
    C.forEach((c) =>
      c[1].forEach((s) => {
        ALL[s[0]] = s;
      }),
    );
    const add = (name, cust) => {
      const cart = st.cart.slice();
      const f = cart.find((x) => x.k === name);
      if (f) f.qty++;
      else cart.push({ k: name, qty: 1 });
      this.setState(cust ? { cart, cust, done: false, tab: 'reg' } : { cart, done: false });
    };
    const setQty = (name, d) => {
      const cart = st.cart.map((x) => (x.k === name ? { k: x.k, qty: x.qty + d } : x)).filter((x) => x.qty > 0);
      this.setState({ cart });
    };
    const tabs = [
      ['reg', 'Register'],
      ['hist', 'Sales history'],
    ].map((t) => {
      const on = st.tab === t[0];
      return {
        label: t[1],
        bg: on ? '#FFFDFB' : 'transparent',
        fg: on ? '#D6246E' : '#665859',
        shadow: on ? '0 4px 12px -4px rgba(42,38,39,0.2)' : 'none',
        pick: () => this.setState({ tab: t[0] }),
      };
    });
    const cats = C.map((c, i) => ({
      label: c[0],
      on: i === st.cat,
      bg: i === st.cat ? '#D6246E' : '#FFFDFB',
      fg: i === st.cat ? '#FFFFFF' : '#D6246E',
      pick: () => this.setState({ cat: i }),
    }));
    const tiles = C[st.cat][1].map((s) => ({
      name: s[0],
      reg: s[2] < s[1] ? peso(s[1]) : '',
      promo: peso(s[2]),
      add: () => add(s[0]),
    }));
    const bookings = [
      ['10:00', 'Rhea M.', 'Protein Straight Bond — Long'],
      ['11:00', 'Carlo B.', 'Hair Cut / Blowdry / Iron'],
      ['13:00', 'Angel T.', 'Microshading'],
      ['15:30', 'Nica F.', 'Organic Hair Color'],
    ].map((b) => ({
      time: b[0],
      client: b[1],
      service: b[2],
      pick: () => {
        this.setState({ cart: [{ k: b[2], qty: 1 }], cust: b[1] + ' · booking ' + b[0], done: false });
      },
    }));
    let reg = 0,
      tot = 0;
    const lines = st.cart.map((x) => {
      const s = ALL[x.k];
      reg += s[1] * x.qty;
      tot += s[2] * x.qty;
      return {
        name: s[0],
        qty: x.qty,
        unit: peso(s[2]),
        total: peso(s[2] * x.qty),
        inc: () => setQty(s[0], 1),
        dec: () => setQty(s[0], -1),
      };
    });
    const empty = st.cart.length === 0;
    // Blank cash field means the customer paid the exact total
    const received = st.cashIn === '' ? tot : Number(st.cashIn);
    const tenders = [
      ['Exact', 0],
      ['₱500', 500],
      ['₱1,000', 1000],
      ['₱5,000', 5000],
    ].map((x) => {
      const on = x[1] ? st.cashIn !== '' && received === x[1] : st.cashIn === '';
      return {
        label: x[0],
        border: on ? '#D6246E' : '#E6CBD5',
        bg: on ? '#FDE7EE' : '#FFFDFB',
        pick: () => this.setState({ cashIn: x[1] ? String(x[1]) : '' }),
      };
    });
    const pays = ['Cash', 'GCash', 'Maya', 'Card'].map((p) => {
      const on = st.pay === p;
      return {
        label: p,
        border: on ? '#D6246E' : '#E6CBD5',
        bg: on ? '#D6246E' : '#FFFDFB',
        fg: on ? '#FFFFFF' : '#2A2627',
        pick: () => this.setState({ pay: p }),
      };
    });
    const change = Math.round((received - tot) * 100) / 100;
    const short = st.pay === 'Cash' && !empty && change < 0;
    const t = {
      reg: peso(reg),
      disc: peso(tot - reg),
      discAbs: peso(reg - tot),
      total: peso(tot),
      change: change >= 0 ? peso(change) : 'Short ' + peso(-change),
      received: peso(received),
    };
    const W = [
      ['Tue', 14200],
      ['Wed', 12850],
      ['Thu', 15900],
      ['Fri', 21300],
      ['Sat', 26750],
      ['Sun', 19400],
      ['Today', 18640],
    ];
    const week = W.map((w, i) => ({
      day: w[0],
      amt: '₱' + (w[1] / 1000).toFixed(1) + 'k',
      h: Math.round((w[1] / 26750) * 150) + 'px',
      bg: i === 6 ? '#D6246E' : '#F7A8C4',
    }));
    const SS = { Paid: ['#E3EDF8', '#1D4F8C'], Refunded: ['#FCEFD9', '#8A5100'] };
    const tx = [
      ['JOA-MP-000230', '11:42', 'Carlo B.', 'Hair Cut / Blowdry / Iron', 'Jun', 'Cash', 199, 'Paid'],
      ['JOA-MP-000229', '10:55', 'Kristine D.', 'Classic Lash — Natural', 'Mae', 'GCash', 499, 'Paid'],
      ['JOA-MP-000228', '10:20', 'Joy P.', 'Korean Signature Facial', 'Grace', 'Maya', 749, 'Paid'],
      ['JOA-MP-000227', '09:48', 'Lyn A.', 'Microshading', 'Mae', 'Card', 999, 'Refunded'],
      ['JOA-MP-000226', '09:30', 'Jessa L.', 'Gel Manicure, Simple Design ×2', 'Liza', 'GCash', 899, 'Paid'],
      ['JOA-MP-000225', '09:05', 'Maria S.', 'Hair Cut / Blowdry / Iron', 'Ana', 'Cash', 199, 'Paid'],
      ['JOA-MP-000224', '08:40', 'Rose V.', 'Organic Hair Color, Procare Keratin', 'Ana', 'Cash', 1748, 'Paid'],
    ].map((r) => ({
      no: r[0],
      time: r[1],
      client: r[2],
      items: r[3],
      staff: r[4],
      pay: r[5],
      amt: peso(r[6]),
      status: r[7],
      deco: r[7] === 'Refunded' ? 'line-through' : 'none',
      sbg: SS[r[7]][0],
      sfg: SS[r[7]][1],
    }));
    const kpis = [
      ['Sales today', '₱18,640', '24 transactions · 4 branches'],
      ['Average spend per visit', '₱777', 'Up from ₱702 last Monday'],
      ['Promo discounts given', '₱17,900', '50% OFF All Services'],
      ['Refunds', '₱999', '1 transaction'],
    ].map((k) => ({ label: k[0], value: k[1], note: k[2] }));
    const methods = [
      ['Cash', 9690],
      ['GCash', 6340],
      ['Maya', 1490],
      ['Card', 1120],
    ].map((m) => ({ name: m[0], amt: peso(m[1]), w: Math.round((m[1] / 9690) * 100) + '%' }));
    const top = [
      ['Hair Cut / Blowdry / Iron', 6, 1194],
      ['Gel Manicure', 4, 1996],
      ['Classic Lash — Natural', 3, 1497],
      ['Korean Signature Facial', 3, 2247],
      ['Protein Straight Bond', 1, 3999],
    ].map((s) => ({ name: s[0], n: s[1] + '×', amt: peso(s[2]) }));
    return {
      tabs,
      isReg: st.tab === 'reg',
      isHist: st.tab === 'hist',
      cats,
      tiles,
      bookings,
      lines,
      empty,
      customer: st.cust,
      t,
      pays,
      tenders,
      isCash: st.pay === 'Cash',
      cashIn: st.cashIn,
      cashPlaceholder: tot.toLocaleString('en-US') + ' (exact)',
      setCash: (e) => {
        // Digits and one decimal point; commas and the peso sign are ignored
        const raw = e.target.value.replace(/[^\d.]/g, '');
        const [whole, ...rest] = raw.split('.');
        this.setState({ cashIn: rest.length ? whole + '.' + rest.join('').slice(0, 2) : whole });
      },
      short,
      changeFg: short ? '#A8174F' : '#2A2627',
      paidCash: st.done && st.pay === 'Cash',
      isRef: st.pay === 'GCash' || st.pay === 'Maya',
      showTicket: !st.done,
      done: st.done,
      payLabel: st.pay,
      chargeBg: empty || short ? '#E7C3D1' : '#D6246E',
      charge: () => {
        if (!empty && !short) this.setState({ done: true });
      },
      clear: () => this.setState({ cart: [], cust: 'Walk-in customer', done: false, cashIn: '' }),
      week,
      tx,
      kpis,
      methods,
      top,
    };
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
                Monday, 19 October 2026 · Malaybalay — Poblacion{' '}
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
                Sales tracking
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
                  }}
                >
                  <option>Malaybalay — Poblacion</option>
                  <option>Malaybalay — Purok 4B</option>
                  <option>Valencia City</option>
                  <option>Maramag</option>
                  <option>All branches</option>
                </select>
              </label>
              <div
                role="tablist"
                aria-label="POS views"
                style={{ display: 'flex', padding: '4px', borderRadius: '12px', background: '#F8EDF0', gap: '4px' }}
              >
                {(v.tabs || []).map((t, i0) => (
                  <button
                    key={i0}
                    type="button"
                    role="tab"
                    onClick={t.pick}
                    style={{
                      minHeight: '38px',
                      padding: '0 18px',
                      borderRadius: '9px',
                      border: '0',
                      background: t.bg,
                      color: t.fg,
                      boxShadow: t.shadow,
                      fontFamily: 'inherit',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {v.isReg && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
              <section
                aria-label="Catalog"
                style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div
                  style={{
                    background: '#FFFDFB',
                    borderRadius: '16px',
                    border: '1px solid #EFE1E4',
                    padding: '16px 18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                  }}
                >
                  <h2 style={{ margin: '0', fontSize: '14px' }}>Check out a booking</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {(v.bookings || []).map((b, i0) => (
                      <button
                        key={i0}
                        type="button"
                        onClick={b.pick}
                        style={{
                          minHeight: '44px',
                          padding: '6px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #F5D3DF',
                          background: '#FFF4F6',
                          fontFamily: 'inherit',
                          fontSize: '13px',
                          textAlign: 'left',
                          cursor: 'pointer',
                          color: '#2A2627',
                        }}
                      >
                        <strong>
                          {b.time} · {b.client}
                        </strong>
                        <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>{b.service}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div role="tablist" aria-label="Service categories" className="chip-row">
                  {(v.cats || []).map((c, i0) => (
                    <button
                      key={i0}
                      type="button"
                      role="tab"
                      aria-selected={c.on}
                      onClick={c.pick}
                      style={{
                        minHeight: '42px',
                        padding: '0 16px',
                        borderRadius: '999px',
                        border: '1.5px solid #D6246E',
                        background: c.bg,
                        color: c.fg,
                        fontFamily: 'inherit',
                        fontSize: '13px',
                        fontWeight: '600',
                        cursor: 'pointer',
                      }}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
                <div
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '12px' }}
                >
                  {(v.tiles || []).map((s, i0) => (
                    <button
                      key={i0}
                      type="button"
                      onClick={s.add}
                      style={{
                        minHeight: '112px',
                        padding: '14px 16px',
                        borderRadius: '14px',
                        border: '1px solid #EFE1E4',
                        background: '#FFFDFB',
                        fontFamily: 'inherit',
                        textAlign: 'left',
                        color: '#2A2627',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        gap: '8px',
                        boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 8px 20px -12px rgba(214,36,110,0.30)',
                      }}
                    >
                      <span style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.3' }}>{s.name}</span>
                      <span>
                        <s style={{ fontSize: '12px', color: '#665859' }}>{s.reg}</s>{' '}
                        <strong style={{ fontSize: '17px', color: '#D6246E' }}>{s.promo}</strong>
                      </span>
                    </button>
                  ))}
                </div>
              </section>
              <section
                aria-label="Current sale"
                style={{
                  flex: '1 1 360px',
                  background: '#FFFDFB',
                  borderRadius: '18px',
                  border: '1px solid #EFE1E4',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(42,38,39,0.05), 0 24px 48px -20px rgba(42,38,39,0.28)',
                }}
              >
                <div
                  style={{
                    background: '#2A2627',
                    color: '#FFFFFF',
                    padding: '16px 20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <div>
                    <p
                      style={{
                        margin: '0',
                        fontSize: '11px',
                        letterSpacing: '0.12em',
                        color: '#C8A96E',
                        fontWeight: '700',
                      }}
                    >
                      CURRENT SALE
                    </p>
                    <p style={{ margin: '0', fontWeight: '600' }}>{v.customer}</p>
                  </div>
                  <button
                    type="button"
                    onClick={v.clear}
                    style={{
                      minHeight: '40px',
                      padding: '0 14px',
                      borderRadius: '8px',
                      border: '1px solid #5A5354',
                      background: 'transparent',
                      color: '#E9E1DA',
                      fontFamily: 'inherit',
                      fontWeight: '600',
                      cursor: 'pointer',
                    }}
                  >
                    Clear
                  </button>
                </div>
                {v.showTicket && (
                  <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '10px',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    >
                      Staff{' '}
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
                        <option>Ana</option>
                        <option>Liza</option>
                        <option>Mae</option>
                        <option>Grace</option>
                        <option>Jun</option>
                      </select>
                    </label>
                    {v.empty && (
                      <p
                        style={{
                          margin: '0',
                          padding: '28px 0',
                          textAlign: 'center',
                          color: '#665859',
                          fontSize: '14px',
                        }}
                      >
                        Tap a service or a booking to start a sale.
                      </p>
                    )}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      {(v.lines || []).map((l, i0) => (
                        <div
                          key={i0}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '10px 0',
                            borderBottom: '1px solid #F8E6EC',
                          }}
                        >
                          <div style={{ flexGrow: '1', minWidth: '0' }}>
                            <div style={{ fontWeight: '600', fontSize: '14px' }}>{l.name}</div>
                            <div style={{ fontSize: '12px', color: '#665859' }}>{l.unit} each</div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={l.dec}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                border: '1px solid #E6CBD5',
                                background: '#FFFDFB',
                                fontFamily: 'inherit',
                                cursor: 'pointer',
                              }}
                            >
                              −
                            </button>
                            <span style={{ width: '22px', textAlign: 'center', fontWeight: '700' }}>{l.qty}</span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={l.inc}
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '8px',
                                border: '1px solid #E6CBD5',
                                background: '#FFFDFB',
                                fontFamily: 'inherit',
                                cursor: 'pointer',
                              }}
                            >
                              +
                            </button>
                          </div>
                          <strong style={{ width: '72px', textAlign: 'right' }}>{l.total}</strong>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#665859' }}>Regular price</span>
                        <span style={{ color: '#665859' }}>{v.t.reg}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#665859' }}>50% OFF All Services</span>
                        <span style={{ color: '#A8174F', fontWeight: '600' }}>{v.t.disc}</span>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          marginTop: '6px',
                        }}
                      >
                        <span style={{ fontWeight: '700' }}>Total</span>
                        <span
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: '32px',
                            fontWeight: '700',
                          }}
                        >
                          {v.t.total}
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: '6px' }}>
                      {(v.pays || []).map((p, i0) => (
                        <button
                          key={i0}
                          type="button"
                          onClick={p.pick}
                          style={{
                            minHeight: '44px',
                            borderRadius: '10px',
                            border: `1.5px solid ${p.border}`,
                            background: p.bg,
                            color: p.fg,
                            fontFamily: 'inherit',
                            fontSize: '13px',
                            fontWeight: '700',
                            cursor: 'pointer',
                          }}
                        >
                          {p.label}
                        </button>
                      ))}
                    </div>
                    {v.isCash && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '6px',
                            fontSize: '12px',
                            fontWeight: '700',
                          }}
                        >
                          Cash received
                          <span style={{ position: 'relative', display: 'flex' }}>
                            <span
                              aria-hidden="true"
                              style={{
                                position: 'absolute',
                                left: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#665859',
                              }}
                            >
                              ₱
                            </span>
                            <input
                              type="text"
                              inputMode="decimal"
                              autoComplete="off"
                              value={v.cashIn}
                              onChange={v.setCash}
                              onFocus={(e) => e.target.select()}
                              placeholder={v.cashPlaceholder}
                              aria-describedby="pos-change-due"
                              style={{
                                flex: '1',
                                minWidth: '0',
                                minHeight: '46px',
                                padding: '0 12px 0 30px',
                                borderRadius: '10px',
                                border: `1.5px solid ${v.short ? '#D6246E' : '#E6CBD5'}`,
                                background: '#FFFDFB',
                                fontFamily: 'inherit',
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#2A2627',
                              }}
                            />
                          </span>
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {(v.tenders || []).map((x, i0) => (
                            <button
                              key={i0}
                              type="button"
                              onClick={x.pick}
                              style={{
                                flex: '1',
                                minHeight: '40px',
                                borderRadius: '10px',
                                border: `1.5px solid ${x.border}`,
                                background: x.bg,
                                fontFamily: 'inherit',
                                fontSize: '13px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                color: '#2A2627',
                              }}
                            >
                              {x.label}
                            </button>
                          ))}
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '14px',
                            padding: '10px 12px',
                            borderRadius: '10px',
                            background: '#FFF4F6',
                            color: v.changeFg,
                          }}
                        >
                          <span>Change due</span>
                          <strong id="pos-change-due" aria-live="polite">
                            {v.t.change}
                          </strong>
                        </div>
                      </div>
                    )}
                    {v.isRef && (
                      <label
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          fontSize: '12px',
                          fontWeight: '700',
                        }}
                      >
                        Reference no.
                        <input
                          type="text"
                          placeholder="e.g. GCash ref 1029 384 5561"
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
                    )}
                    <button
                      type="button"
                      onClick={v.charge}
                      disabled={v.empty || v.short}
                      style={{
                        minHeight: '56px',
                        borderRadius: '12px',
                        border: '0',
                        background: v.chargeBg,
                        color: '#FFFFFF',
                        fontFamily: 'inherit',
                        fontSize: '17px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        boxShadow: '0 12px 24px -10px rgba(214,36,110,0.7)',
                      }}
                    >
                      Charge {v.t.total}
                    </button>
                  </div>
                )}
                {v.done && (
                  <div
                    style={{
                      padding: '28px 22px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '10px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '999px',
                        background: '#FDE7EE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 24px -10px rgba(214,36,110,0.5)',
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#D6246E"
                        strokeWidth="2.2"
                      >
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    </div>
                    <h2 style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px' }}>
                      Paid {v.t.total}
                    </h2>
                    <p style={{ margin: '0', color: '#665859', fontSize: '14px' }}>
                      {v.payLabel} · Receipt JOA-MP-000231 · Customer saved {v.t.discAbs}
                    </p>
                    {v.paidCash && (
                      <p style={{ margin: '0', fontSize: '15px' }}>
                        Received {v.t.received} · <strong>Change {v.t.change}</strong>
                      </p>
                    )}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px', width: '100%' }}>
                      <button
                        type="button"
                        style={{
                          flex: '1',
                          minHeight: '46px',
                          borderRadius: '10px',
                          border: '1.5px solid #E6CBD5',
                          background: '#FFFDFB',
                          fontFamily: 'inherit',
                          fontWeight: '600',
                          cursor: 'pointer',
                        }}
                      >
                        Print receipt
                      </button>
                      <button
                        type="button"
                        onClick={v.clear}
                        style={{
                          flex: '1',
                          minHeight: '46px',
                          borderRadius: '10px',
                          border: '0',
                          background: '#D6246E',
                          color: '#FFFFFF',
                          fontFamily: 'inherit',
                          fontWeight: '700',
                          cursor: 'pointer',
                        }}
                      >
                        New sale
                      </button>
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}
          {v.isHist && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}
              >
                {(v.kpis || []).map((k, i0) => (
                  <div
                    key={i0}
                    style={{
                      background: '#FFFDFB',
                      borderRadius: '16px',
                      padding: '18px 20px',
                      border: '1px solid #EFE1E4',
                      boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                    }}
                  >
                    <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>{k.label}</p>
                    <p
                      style={{
                        margin: '4px 0 0',
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '32px',
                        fontWeight: '700',
                      }}
                    >
                      {k.value}
                    </p>
                    <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>{k.note}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
                <div
                  style={{ flex: '999 1 560px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <section
                    style={{
                      background: '#FFFDFB',
                      borderRadius: '16px',
                      border: '1px solid #EFE1E4',
                      padding: '18px 20px',
                      boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                    }}
                  >
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}
                    >
                      <h2 style={{ margin: '0', fontSize: '16px' }}>Sales, last 7 days</h2>
                      <span style={{ fontSize: '12px', color: '#665859' }}>All branches</span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '14px',
                        height: '200px',
                        marginTop: '16px',
                      }}
                    >
                      {(v.week || []).map((w, i0) => (
                        <div
                          key={i0}
                          style={{
                            flex: '1',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            gap: '6px',
                            height: '100%',
                          }}
                        >
                          <span style={{ fontSize: '11px', fontWeight: '600', color: '#665859' }}>{w.amt}</span>
                          <div
                            style={{
                              width: '100%',
                              maxWidth: '56px',
                              borderRadius: '8px 8px 3px 3px',
                              background: w.bg,
                              height: w.h,
                              boxShadow: '0 8px 16px -10px rgba(214,36,110,0.6)',
                            }}
                          />
                          <span style={{ fontSize: '12px', fontWeight: '700' }}>{w.day}</span>
                        </div>
                      ))}
                    </div>
                  </section>
                  <section
                    style={{
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
                      <h2 style={{ margin: '0', fontSize: '16px' }}>Transactions today</h2>
                      <button
                        type="button"
                        style={{
                          minHeight: '38px',
                          padding: '0 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #E6CBD5',
                          background: '#FFFDFB',
                          fontFamily: 'inherit',
                          fontWeight: '600',
                          cursor: 'pointer',
                        }}
                      >
                        Export CSV
                      </button>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                      <div style={{ minWidth: '760px' }}>
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '120px 60px minmax(0, 1fr) minmax(0, 1.8fr) 70px 80px 90px 90px',
                            gap: '10px',
                            padding: '10px 20px',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            color: '#665859',
                            background: '#FFF5F7',
                          }}
                        >
                          <span>RECEIPT</span>
                          <span>TIME</span>
                          <span>CLIENT</span>
                          <span>ITEMS</span>
                          <span>STAFF</span>
                          <span>PAYMENT</span>
                          <span style={{ textAlign: 'right' }}>AMOUNT</span>
                          <span>STATUS</span>
                        </div>
                        {(v.tx || []).map((r, i0) => (
                          <div
                            key={i0}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '120px 60px minmax(0, 1fr) minmax(0, 1.8fr) 70px 80px 90px 90px',
                              gap: '10px',
                              padding: '11px 20px',
                              alignItems: 'center',
                              borderTop: '1px solid #F8EDF0',
                            }}
                          >
                            <span style={{ fontSize: '12px', color: '#665859' }}>{r.no}</span>
                            <strong>{r.time}</strong>
                            <span>{r.client}</span>
                            <span>{r.items}</span>
                            <span>{r.staff}</span>
                            <span>{r.pay}</span>
                            <strong style={{ textAlign: 'right', textDecoration: r.deco }}>{r.amt}</strong>
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
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
                <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <section
                    style={{
                      background: '#FFFDFB',
                      borderRadius: '16px',
                      border: '1px solid #EFE1E4',
                      padding: '18px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                    }}
                  >
                    <h2 style={{ margin: '0', fontSize: '16px' }}>Payment methods</h2>
                    {(v.methods || []).map((m, i0) => (
                      <div key={i0} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                          <span>{m.name}</span>
                          <strong>{m.amt}</strong>
                        </div>
                        <div style={{ height: '8px', borderRadius: '999px', background: '#F8EDF0' }}>
                          <div style={{ height: '8px', borderRadius: '999px', background: '#D6246E', width: m.w }} />
                        </div>
                      </div>
                    ))}
                  </section>
                  <section
                    style={{
                      background: '#FFFDFB',
                      borderRadius: '16px',
                      border: '1px solid #EFE1E4',
                      padding: '18px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                    }}
                  >
                    <h2 style={{ margin: '0', fontSize: '16px' }}>Top services today</h2>
                    {(v.top || []).map((s, i0) => (
                      <div
                        key={i0}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          gap: '10px',
                          fontSize: '13px',
                          padding: '4px 0',
                          borderBottom: '1px solid #F8EDF0',
                        }}
                      >
                        <span>{s.name}</span>
                        <span style={{ color: '#665859' }}>
                          {s.n} · <strong style={{ color: '#2A2627' }}>{s.amt}</strong>
                        </span>
                      </div>
                    ))}
                  </section>
                  <section
                    style={{
                      background: '#2A2627',
                      color: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '18px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      boxShadow: '0 18px 36px -18px rgba(42,38,39,0.6)',
                    }}
                  >
                    <h2 style={{ margin: '0', fontSize: '16px' }}>Cash drawer</h2>
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#E9E1DA' }}
                    >
                      <span>Opening float</span>
                      <span>₱2,000</span>
                    </div>
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#E9E1DA' }}
                    >
                      <span>Cash sales</span>
                      <span>₱9,690</span>
                    </div>
                    <div
                      style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '700' }}
                    >
                      <span>Expected in drawer</span>
                      <span style={{ color: '#F7B4CD' }}>₱11,690</span>
                    </div>
                    <button
                      type="button"
                      style={{
                        marginTop: '6px',
                        minHeight: '44px',
                        borderRadius: '10px',
                        border: '0',
                        background: '#D6246E',
                        color: '#FFFFFF',
                        fontFamily: 'inherit',
                        fontWeight: '700',
                        cursor: 'pointer',
                      }}
                    >
                      Close day & count cash
                    </button>
                  </section>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    );
  }
}
