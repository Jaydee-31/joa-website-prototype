import { Component as ReactComponent } from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/asset.js';

export default class Book extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = { b: 0, c: 0, s: 0, d: 0, t: 3, done: false };
  }
  renderVals() {
    const st = this.state;
    const peso = (n) => '₱' + n.toLocaleString('en-US');
    const B = [
      { name: 'Malaybalay — Poblacion', hours: 'Daily 8:00 AM – 5:00 PM', open: 8, close: 17 },
      { name: 'Malaybalay — Purok 4B', hours: 'Daily 7:30 AM – 6:30 PM', open: 7.5, close: 18.5 },
      { name: 'Valencia City', hours: 'Hours to confirm', open: 8, close: 17 },
      { name: 'Maramag', hours: 'Daily 10:00 AM – 9:00 PM', open: 10, close: 21 },
    ];
    const C = [
      [
        'Hair',
        [
          ['Hair Cut / Blowdry / Iron', 399, 199],
          ['Organic Hair Color', 1999, 999],
          ['L’Oréal Rebond', 3499, 1749],
          ['iCure Keratin Blowout', 2499, 1249],
          ['Protein Straight Bond — Medium', 6999, 3499],
        ],
      ],
      [
        'Lashes & Brows',
        [
          ['Classic Lash — Natural', 999, 499],
          ['Human Hair — Cat Eye', 2999, 1499],
          ['Lash Lift with Tint', 1999, 999],
          ['Microshading', 1999, 999],
          ['Microblading', 3500, 1750],
        ],
      ],
      [
        'Nails',
        [
          ['Gel Manicure', 649, 499],
          ['Gel Pedicure', 699, 549],
          ['Nail Extension (Plain)', 1499, 749],
        ],
      ],
      [
        'Facial & Skin',
        [
          ['Korean Signature Facial', 1499, 749],
          ['Bb Glow Glass Skin Facial', 1499, 749],
          ['Hydrating Glow Facial', 2499, 1249],
          ['RF Microneedling', 9999, 4999],
        ],
      ],
      [
        'Aesthetics',
        [
          ['Botox Alartox', 3999, 1999],
          ['Korean Nose Thread Lift', 15000, 7500],
          ['Dermal Filler', 13999, 6999],
        ],
      ],
      [
        'Spa & Wellness',
        [
          ['White Glow Therapy', 1499, 749],
          ['K-Beauty Glow', 3999, 1999],
        ],
      ],
    ];
    const DOW = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const sel = (on) => ({ border: on ? '#D6246E' : '#F5D3DF', bg: on ? '#FDE7EE' : '#FFFDFB' });
    const branches = B.map((b, i) => ({
      name: b.name,
      hours: b.hours,
      ...sel(i === st.b),
      pick: () => this.setState({ b: i, t: -1 }),
    }));
    const cats = C.map((c, i) => ({
      label: c[0],
      on: i === st.c,
      bg: i === st.c ? '#D6246E' : '#FFFDFB',
      fg: i === st.c ? '#FFFFFF' : '#D6246E',
      pick: () => this.setState({ c: i, s: 0 }),
    }));
    const list = C[st.c][1];
    const svcs = list.map((s, i) => ({
      name: s[0],
      reg: peso(s[1]),
      promo: peso(s[2]),
      ...sel(i === st.s),
      pick: () => this.setState({ s: i }),
    }));
    const dates = DOW.map((w, i) => ({
      dow: w,
      day: String(19 + i),
      border: i === st.d ? '#D6246E' : '#F5D3DF',
      bg: i === st.d ? '#D6246E' : '#FFFDFB',
      fg: i === st.d ? '#FFFFFF' : '#2A2627',
      pick: () => this.setState({ d: i, t: -1 }),
    }));
    const br = B[st.b];
    const fmt = (h) => {
      const hr = Math.floor(h),
        m = h % 1 ? '30' : '00';
      const ap = hr >= 12 ? 'PM' : 'AM';
      return ((hr + 11) % 12) + 1 + ':' + m + ' ' + ap;
    };
    const slots = [];
    for (let h = br.open, i = 0; h <= br.close - 1; h += 0.5, i++) {
      const taken = (i * 7 + st.d * 3 + st.b) % 5 === 0;
      const on = i === st.t;
      slots.push({
        label: fmt(h),
        disabled: taken,
        deco: taken ? 'line-through' : 'none',
        border: on ? '#D6246E' : '#F5D3DF',
        bg: on ? '#D6246E' : taken ? '#F8EEF1' : '#FFFDFB',
        fg: on ? '#FFFFFF' : taken ? '#A6999A' : '#2A2627',
        pick: () => {
          if (!taken) this.setState({ t: i });
        },
      });
    }
    const svc = list[st.s] || list[0];
    const time = st.t >= 0 && slots[st.t] ? slots[st.t].label : 'Choose a time';
    const sum = {
      branch: br.name,
      service: svc[0],
      when: DOW[st.d].charAt(0) + DOW[st.d].slice(1).toLowerCase() + ' ' + (19 + st.d) + ' Oct · ' + time,
      reg: peso(svc[1]),
      save: '−' + peso(svc[1] - svc[2]),
      promo: peso(svc[2]),
    };
    return {
      branches,
      cats,
      svcs,
      dates,
      slots,
      sum,
      notDone: !st.done,
      done: st.done,
      confirm: () => this.setState({ done: true }),
      reset: () => this.setState({ done: false, t: -1 }),
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <div
        style={{
          fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
          color: '#2A2627',
          background: '#FFF8F4',
          fontSize: '16px',
          lineHeight: '1.55',
          minHeight: '100vh',
        }}
      >
        <header
          style={{
            background: '#FFFDFB',
            borderBottom: '1px solid #F5D3DF',
            boxShadow: '0 8px 28px -14px rgba(42,38,39,0.22)',
            position: 'relative',
            zIndex: '2',
          }}
        >
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              padding: '12px 24px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link to="/" aria-label="JOA Spa & Salon home">
              <img
                src={asset('images/logo.png')}
                alt="JOA Spa & Salon"
                style={{ height: '56px', width: 'auto', display: 'block' }}
              />
            </Link>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              ← Back to site
            </Link>
          </div>
        </header>
        {v.notDone && (
          <div
            style={{
              maxWidth: '1240px',
              margin: '0 auto',
              padding: '40px 24px 96px',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            <div>
              <p
                style={{
                  margin: '0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: '400',
                  fontSize: '26px',
                  lineHeight: '1',
                  color: '#D6246E',
                }}
              >
                Book now
              </p>
              <h1
                style={{
                  margin: '4px 0 0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: '700',
                  fontSize: '44px',
                  lineHeight: '1.1',
                }}
              >
                and let us take care of you
              </h1>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start' }}>
              <div
                style={{ flex: '999 1 620px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px' }}
              >
                <section
                  style={{
                    background: '#FFFDFB',
                    borderRadius: '22px',
                    border: '1px solid #F5D3DF',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
                  }}
                >
                  <h2
                    style={{
                      margin: '0',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.18em',
                      color: '#D6246E',
                    }}
                  >
                    1 · CHOOSE A BRANCH
                  </h2>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '12px',
                    }}
                  >
                    {(v.branches || []).map((b, i0) => (
                      <button
                        key={i0}
                        type="button"
                        onClick={b.pick}
                        style={{
                          textAlign: 'left',
                          minHeight: '76px',
                          padding: '14px 18px',
                          borderRadius: '16px',
                          border: `2px solid ${b.border}`,
                          background: b.bg,
                          fontFamily: 'inherit',
                          color: '#2A2627',
                          cursor: 'pointer',
                        }}
                      >
                        <span style={{ display: 'block', fontWeight: '700', fontSize: '15px' }}>{b.name}</span>
                        <span style={{ display: 'block', fontSize: '13px', color: '#665859' }}>{b.hours}</span>
                      </button>
                    ))}
                  </div>
                </section>
                <section
                  style={{
                    background: '#FFFDFB',
                    borderRadius: '22px',
                    border: '1px solid #F5D3DF',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
                  }}
                >
                  <h2
                    style={{
                      margin: '0',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.18em',
                      color: '#D6246E',
                    }}
                  >
                    2 · PICK A SERVICE
                  </h2>
                  <div role="tablist" aria-label="Service categories" style={{ display: 'flex', gap: '8px' }}>
                    {(v.cats || []).map((c, i0) => (
                      <button
                        key={i0}
                        type="button"
                        role="tab"
                        aria-selected={c.on}
                        onClick={c.pick}
                        style={{
                          minHeight: '44px',
                          padding: '0 18px',
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {(v.svcs || []).map((s, i0) => (
                      <button
                        key={i0}
                        type="button"
                        onClick={s.pick}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '16px',
                          minHeight: '56px',
                          padding: '10px 18px',
                          borderRadius: '14px',
                          border: `2px solid ${s.border}`,
                          background: s.bg,
                          fontFamily: 'inherit',
                          color: '#2A2627',
                          textAlign: 'left',
                          cursor: 'pointer',
                        }}
                      >
                        <span style={{ fontSize: '15px', fontWeight: '600' }}>{s.name}</span>
                        <span style={{ display: 'flex', gap: '10px', alignItems: 'baseline', flexShrink: '0' }}>
                          <s style={{ fontSize: '13px', color: '#665859' }}>{s.reg}</s>
                          <span style={{ fontSize: '17px', fontWeight: '700', color: '#D6246E' }}>{s.promo}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
                <section
                  style={{
                    background: '#FFFDFB',
                    borderRadius: '22px',
                    border: '1px solid #F5D3DF',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
                  }}
                >
                  <h2
                    style={{
                      margin: '0',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.18em',
                      color: '#D6246E',
                    }}
                  >
                    3 · DATE & TIME
                  </h2>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: '8px' }}>
                    {(v.dates || []).map((d, i0) => (
                      <button
                        key={i0}
                        type="button"
                        onClick={d.pick}
                        style={{
                          minHeight: '72px',
                          borderRadius: '14px',
                          border: `2px solid ${d.border}`,
                          background: d.bg,
                          color: d.fg,
                          fontFamily: 'inherit',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em' }}>{d.dow}</span>
                        <span
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: '24px',
                            fontWeight: '700',
                            lineHeight: '1.1',
                          }}
                        >
                          {d.day}
                        </span>
                      </button>
                    ))}
                  </div>
                  <div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(96px, 1fr))', gap: '8px' }}
                  >
                    {(v.slots || []).map((t, i0) => (
                      <button
                        key={i0}
                        type="button"
                        onClick={t.pick}
                        disabled={t.disabled}
                        style={{
                          minHeight: '44px',
                          borderRadius: '10px',
                          border: `1.5px solid ${t.border}`,
                          background: t.bg,
                          color: t.fg,
                          textDecoration: t.deco,
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
                  <p style={{ margin: '0', fontSize: '13px', color: '#665859' }}>
                    Crossed-out times are already booked at this branch.
                  </p>
                </section>
                <section
                  style={{
                    background: '#FFFDFB',
                    borderRadius: '22px',
                    border: '1px solid #F5D3DF',
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
                  }}
                >
                  <h2
                    style={{
                      margin: '0',
                      fontSize: '13px',
                      fontWeight: '700',
                      letterSpacing: '0.18em',
                      color: '#D6246E',
                    }}
                  >
                    4 · YOUR DETAILS
                  </h2>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '14px',
                    }}
                  >
                    <label
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    >
                      Full name
                      <input
                        type="text"
                        placeholder="Juan dela Cruz"
                        style={{
                          minHeight: '46px',
                          padding: '0 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #E7C3D1',
                          fontFamily: 'inherit',
                          fontSize: '15px',
                        }}
                      />
                    </label>
                    <label
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        fontSize: '13px',
                        fontWeight: '600',
                      }}
                    >
                      Mobile number
                      <input
                        type="tel"
                        placeholder="09XX XXX XXXX"
                        style={{
                          minHeight: '46px',
                          padding: '0 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #E7C3D1',
                          fontFamily: 'inherit',
                          fontSize: '15px',
                        }}
                      />
                    </label>
                  </div>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                    }}
                  >
                    Notes for your therapist (optional)
                    <textarea
                      rows="3"
                      placeholder="Hair length, allergies, preferred staff…"
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #E7C3D1',
                        fontFamily: 'inherit',
                        fontSize: '15px',
                        resize: 'vertical',
                      }}
                    />
                  </label>
                </section>
              </div>
              <aside
                style={{
                  flex: '1 1 320px',
                  background: '#FFFDFB',
                  borderRadius: '22px',
                  border: '1px solid #F5D3DF',
                  overflow: 'hidden',
                  boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
                }}
              >
                <div style={{ background: '#D6246E', color: '#FFFFFF', padding: '20px 26px' }}>
                  <h2
                    style={{
                      margin: '0',
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '24px',
                      fontWeight: '600',
                    }}
                  >
                    Your booking
                  </h2>
                </div>
                <dl
                  style={{
                    margin: '0',
                    padding: '22px 26px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '14px',
                    fontSize: '15px',
                  }}
                >
                  <div>
                    <dt style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', color: '#665859' }}>
                      BRANCH
                    </dt>
                    <dd style={{ margin: '2px 0 0', fontWeight: '600' }}>{v.sum.branch}</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', color: '#665859' }}>
                      SERVICE
                    </dt>
                    <dd style={{ margin: '2px 0 0', fontWeight: '600' }}>{v.sum.service}</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.14em', color: '#665859' }}>
                      DATE & TIME
                    </dt>
                    <dd style={{ margin: '2px 0 0', fontWeight: '600' }}>{v.sum.when}</dd>
                  </div>
                </dl>
                <div
                  style={{
                    margin: '0 26px',
                    padding: '18px 0',
                    borderTop: '1px dashed #E7C3D1',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    fontSize: '14px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#665859' }}>Regular price</span>
                    <s style={{ color: '#665859' }}>{v.sum.reg}</s>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#665859' }}>50% OFF All Services</span>
                    <span style={{ color: '#665859' }}>{v.sum.save}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginTop: '6px',
                    }}
                  >
                    <span style={{ fontWeight: '700' }}>You pay at the branch</span>
                    <span
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '30px',
                        fontWeight: '700',
                        color: '#D6246E',
                      }}
                    >
                      {v.sum.promo}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '0 26px 26px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={v.confirm}
                    style={{
                      minHeight: '54px',
                      borderRadius: '999px',
                      border: '0',
                      background: '#D6246E',
                      color: '#FFFFFF',
                      fontFamily: 'inherit',
                      fontSize: '16px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                    }}
                  >
                    Confirm booking
                  </button>
                  <p style={{ margin: '0', fontSize: '12px', color: '#665859', textAlign: 'center' }}>
                    The branch confirms your slot shortly. Free to reschedule up to [X] hours before.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        )}
        {v.done && (
          <div
            style={{
              maxWidth: '640px',
              margin: '0 auto',
              padding: '96px 24px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            <div
              style={{
                width: '96px',
                height: '96px',
                borderRadius: '999px',
                background: '#FFFDFB',
                border: '2px solid #C8A96E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 14px 30px -12px rgba(168,23,79,0.40)',
              }}
            >
              <svg
                aria-hidden="true"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D6246E"
                strokeWidth="2"
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </div>
            <p
              style={{
                margin: '0',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: '400',
                fontSize: '30px',
                lineHeight: '1',
                color: '#D6246E',
              }}
            >
              See you!
            </p>
            <h1
              style={{
                margin: '0',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: '700',
                fontSize: '36px',
              }}
            >
              Booking request sent
            </h1>
            <p style={{ margin: '0', color: '#665859' }}>
              {v.sum.service} at {v.sum.branch}, {v.sum.when}. Reference{' '}
              <strong style={{ color: '#2A2627' }}>JOA-10482</strong>. You’ll see the confirmation under My bookings.
            </p>
            <button
              type="button"
              onClick={v.reset}
              style={{
                minHeight: '50px',
                padding: '0 28px',
                borderRadius: '999px',
                border: '1.5px solid #D6246E',
                background: '#FFFDFB',
                color: '#D6246E',
                fontFamily: 'inherit',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Book another service
            </button>
          </div>
        )}
      </div>
    );
  }
}
