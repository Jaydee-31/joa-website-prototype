import { Component as ReactComponent } from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../lib/asset.js';
import SiteHeader from '../components/SiteHeader.jsx';

export default class Services extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = { tab: 'hair' };
  }
  renderVals() {
    const peso = (n) => '₱' + n.toLocaleString('en-US');
    const C = [
      {
        id: 'hair',
        label: 'Hair',
        img: 'images/hair.jpg',
        blurb: 'Cuts, color, rebond, keratin and the organic, vegan, formaldehyde-free Protein Straight Bond.',
        items: [
          ['Hair Cut / Blowdry / Iron', 399, 199],
          ['Hair Setting', 499, 249],
          ['Wash / Blowdry / Iron', 499, 249],
          ['Dandruff Treatment', 1499, 749],
          ['Leidi Hair Color', 999, 499],
          ['Organic Hair Color', 1999, 999],
          ['Natural Hair Color', 1499, 749],
          ['No-Ammonia Hair Color', 2999, 1499],
          ['Highlights Alone', 1499, 749],
          ['Permanent Curl', 2499, 1249],
          ['Natural Rebond', 3499, 1749],
          ['L’Oréal Rebond', 3499, 1749],
          ['Organic Natural Rebond', 2999, 1499],
          ['Leidi Rebond', 1999, 999],
          ['Balayage / Brazilian Treatment', 4999, 2499],
          ['iCure Keratin Blowout Treatment', 2499, 1249],
          ['Procare Keratin Treatment', 1499, 749],
          ['Silky Straight Protein Treatment', 2999, 1499],
          ['Protein Straight Bond — Short', 5999, 2499],
          ['Protein Straight Bond — Medium', 6999, 3499],
          ['Protein Straight Bond — Long', 7999, 3999],
        ],
      },
      {
        id: 'lash',
        label: 'Lashes & Brows',
        img: 'images/lashes.jpg',
        blurb: 'Classic and human-hair lash extensions, lash lift, brow lamination and JOA Kilay brows.',
        items: [
          ['Classic Lash — Natural', 999, 499],
          ['Classic Lash — Semi-Volume', 1499, 749],
          ['Classic Lash — Full Volume', 1999, 999],
          ['Human Hair — Natural Eye', 1999, 999],
          ['Human Hair — Open Eye', 2999, 1499],
          ['Human Hair — Cat Eye', 2999, 1499],
          ['Human Hair — Doll Eye', 2999, 1499],
          ['Lash Lift / Perming', 999, 499],
          ['Lash Lift / Perming with Tint', 1999, 999],
          ['Brow Lamination', 999, 499],
          ['Brow Lamination with Tint', 1999, 999],
          ['Microshading', 1999, 999, 'Soft, powdered brows for a natural look'],
          ['Ombre Microshading', 2500, 1250, 'Gradient brows for a soft finish'],
          ['Combrow', 2500, 1250, 'Microblading and shading combined'],
          ['Microblading', 3500, 1750, 'Hair-like strokes for defined brows'],
          ['Plain Eyeliner', 2999, 1499],
          ['Wing Eyeliner', 2999, 1499],
          ['Fox Eyeliner', 3999, 1999],
          ['Lip Tattoo', 5999, 2999],
        ],
      },
      {
        id: 'nails',
        label: 'Nails',
        img: 'images/nails.jpg',
        blurb: 'Classic and gel manicures and pedicures, nail art and extensions.',
        items: [
          ['Classic Manicure', 150, 150],
          ['Classic Pedicure', 200, 200],
          ['Gel Manicure', 649, 499],
          ['Gel Pedicure', 699, 549],
          ['Simple Design', 200, 200, 'Per piece'],
          ['Nail Extension (Plain)', 1499, 749],
          ['Nail Removal', 200, 200],
          ['Nail Extension Removal', 200, 200],
        ],
      },
      {
        id: 'facial',
        label: 'Facial & Skin',
        img: 'images/facial.jpg',
        blurb: 'Glow facials, laser treatments and skin correction.',
        items: [
          ['Bb Glow Glass Skin Facial', 1499, 749],
          ['Hydrating Glow Facial', 2499, 1249],
          ['Hollywood Laser Facial', 2499, 1249],
          ['Korean Signature Facial', 1499, 749],
          ['Microtox', 4999, 2499],
          ['Acne Treatment', 3999, 1999],
          ['Laser Warts Removal', 4999, 2499],
          ['Laser Mole Removal', 4999, 2499],
          ['Laser Milia Removal', 4999, 2499],
          ['CO2 Fractional Laser', 4999, 2499],
          ['RF Microneedling', 9999, 4999],
          ['RF Stretch Mark Treatment', 9999, 4999],
          ['Exilift', 2999, 1499],
          ['Diode Laser Underarm', 1599, 799],
          ['Vaginal Tightening', 9999, 4999],
        ],
      },
      {
        id: 'aesthetic',
        label: 'Aesthetics',
        img: 'images/aesthetics.jpg',
        blurb: 'Thread lifts and Botox treatments for face and body.',
        items: [
          ['Korean Nose Thread Lift', 15000, 7500],
          ['Meso Lipo', 500, 250, 'Per shot'],
          ['Botox Alartox', 3999, 1999],
          ['Crow’s Feet Botox', 5999, 3499],
          ['Eyelid Lift Botox', 5999, 2999],
          ['Gummy Smile Botox', 3999, 1999],
          ['Chin Botox', 6999, 1999],
          ['Jaw Botox', 11999, 5999],
          ['Marionette Botox', 3999, 1999],
          ['Nose Line Botox', 3999, 1999],
          ['Nose Tip Botox', 3999, 1999],
          ['Neck Lift Botox', 10999, 5499],
          ['Upper Face Botox', 12999, 6499],
          ['Micro Tox Anti-Aging', 4999, 2499],
          ['Migraine Botox', 12999, 6499],
          ['Teeth Clenching Botox', 11999, 5999],
          ['Arms Botox', 12999, 6499],
          ['Shoulders Botox', 12999, 6499],
          ['Legs Botox', 12999, 6499],
          ['Sweatox', 12999, 6499, 'Underarm, palms or feet'],
        ],
      },
      {
        id: 'fillers',
        label: 'Fillers & PRP',
        img: 'images/aesthetics.jpg',
        blurb: 'Dermal fillers and platelet-rich plasma treatments.',
        items: [
          ['Acne Treatment (PRP)', 11999, 5999],
          ['Dermal Filler', 13999, 6999],
          ['Cheeks / Chin / Lips / Undereye', 10999, 5499],
          ['Dermal Filler Correction', 4999, 2499],
          ['Hair Growth Activated PRP', 11999, 5999],
          ['Fillers Noselift', 12999, 6499, 'With free Alartox and tip lift'],
          ['P-Shot Activated PRP', 12999, 6499],
          ['Vampire Facial PRP Treatment', 4999, 2499],
        ],
      },
      {
        id: 'wellness',
        label: 'Spa & Wellness',
        img: 'images/salon.jpg',
        blurb: 'Glow drip therapies and body treatments.',
        items: [
          ['Premium Glow Therapy', 4999, 2499],
          ['White Glow Therapy', 1499, 749],
          ['White Glow Therapy Drip', 1999, 999],
          ['Crystal Glow Treatment', 999, 499],
          ['Ultimate Glow Treatment', 999, 499],
          ['K-Beauty Glow', 3999, 1999, 'Per session'],
          ['Varicose Veins Treatment', 9999, 4999],
        ],
      },
    ];
    const cat = C.find((c) => c.id === this.state.tab) || C[0];
    const tabs = C.map((c) => ({
      label: c.label,
      on: c.id === cat.id,
      bg: c.id === cat.id ? '#D6246E' : '#FFFDFB',
      fg: c.id === cat.id ? '#FFFFFF' : '#D6246E',
      pick: () => this.setState({ tab: c.id }),
    }));
    const items = cat.items.map((r, i) => {
      const unit = r[3] === 'Per shot' ? ' / shot' : '';
      const on = r[2] < r[1];
      return {
        name: r[0],
        note: r[3] || '',
        reg: peso(r[1]) + unit,
        promo: on ? peso(r[2]) + unit : 'Regular price',
        strike: on ? 'line-through' : 'none',
        promoColor: on ? '#D6246E' : '#665859',
        rowBg: i % 2 ? '#FFF4F6' : '#FFFDFB',
      };
    });
    return { tabs, items, cat };
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
          lineHeight: '1.6',
          minHeight: '100vh',
        }}
      >
        <Link
          to="/book"
          style={{
            display: 'block',
            background: '#D6246E',
            color: '#FFFFFF',
            textAlign: 'center',
            padding: '10px 24px',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.04em',
            textDecoration: 'none',
          }}
        >
          50% OFF ALL SERVICES · Limited time offer · Book now →
        </Link>
        <SiteHeader />
        <section
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '56px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <p
            style={{
              margin: '0',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: '400',
              fontSize: '27px',
              lineHeight: '1',
              color: '#D6246E',
            }}
          >
            Beauty begins with you
          </p>
          <h1
            style={{
              margin: '0',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: '700',
              fontSize: '56px',
              lineHeight: '1.1',
            }}
          >
            Services & price list
          </h1>
          <p style={{ margin: '0', color: '#665859', maxWidth: '40em' }}>
            Regular and promo prices for every JOA branch. Prices update automatically when a promo starts or ends.
          </p>
        </section>
        <div
          role="tablist"
          aria-label="Service categories"
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            gap: '10px',
          }}
        >
          {(v.tabs || []).map((t, i0) => (
            <button
              key={i0}
              type="button"
              role="tab"
              aria-selected={t.on}
              onClick={t.pick}
              style={{
                minHeight: '46px',
                padding: '0 22px',
                borderRadius: '999px',
                border: '1.5px solid #D6246E',
                background: t.bg,
                color: t.fg,
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
        <section
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '16px 24px 96px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '32px',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              flex: '999 1 600px',
              minWidth: '0',
              background: '#FFFDFB',
              borderRadius: '22px',
              overflow: 'hidden',
              border: '1px solid #F5D3DF',
              boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
            }}
          >
            <div
              className="price-row price-row--head"
              style={{
                background: '#D6246E',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                padding: '16px 24px',
                gap: '12px',
                alignItems: 'center',
              }}
            >
              <span>SERVICE</span>
              <span className="price-row__reg" style={{ textAlign: 'right' }}>
                <span className="price-row__wide">REGULAR</span>
                <span className="price-row__narrow">PRICE</span>
              </span>
              <span className="price-row__promo" style={{ textAlign: 'right' }}>PROMO</span>
              <span />
            </div>
            {(v.items || []).map((it, i0) => (
              <div
                key={i0}
                className="price-row"
                style={{
                  padding: '10px 24px',
                  gap: '12px',
                  alignItems: 'center',
                  borderBottom: '1px solid #F8E6EC',
                  background: it.rowBg,
                  fontSize: '15px',
                }}
              >
                <span>
                  {it.name}
                  <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>{it.note}</span>
                </span>
                <span className="price-row__reg" style={{ textAlign: 'right', color: '#665859', textDecoration: it.strike }}>{it.reg}</span>
                <span className="price-row__promo" style={{ textAlign: 'right', fontWeight: '700', color: it.promoColor }}>{it.promo}</span>
                <Link
                  to="/book"
                  style={{
                    justifySelf: 'end',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '40px',
                    padding: '0 16px',
                    borderRadius: '999px',
                    border: '1.5px solid #D6246E',
                    textDecoration: 'none',
                    fontSize: '13px',
                    fontWeight: '600',
                  }}
                >
                  Book
                </Link>
              </div>
            ))}
          </div>
          <aside style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                borderRadius: '22px',
                overflow: 'hidden',
                background: '#FFFDFB',
                border: '1px solid #F5D3DF',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <img
                src={asset(v.cat.img)}
                alt=""
                style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h2
                  style={{
                    margin: '0',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: '600',
                    fontSize: '28px',
                  }}
                >
                  {v.cat.label}
                </h2>
                <p style={{ margin: '0', color: '#665859', fontSize: '15px' }}>{v.cat.blurb}</p>
                <Link
                  to="/book"
                  style={{
                    marginTop: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '50px',
                    borderRadius: '999px',
                    background: '#D6246E',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: '600',
                    boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                  }}
                >
                  Book {v.cat.label}
                </Link>
              </div>
            </div>
            <div
              style={{
                borderRadius: '22px',
                background: '#FDE7EE',
                padding: '24px',
                display: 'flex',
                gap: '18px',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  width: '96px',
                  height: '96px',
                  flexShrink: '0',
                  borderRadius: '999px',
                  background: '#FFFDFB',
                  border: '2px solid #C8A96E',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 14px 30px -12px rgba(168,23,79,0.40)',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: '700',
                    fontSize: '30px',
                    lineHeight: '1',
                    color: '#D6246E',
                  }}
                >
                  50%
                </span>
                <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em' }}>OFF ALL</span>
              </div>
              <p style={{ margin: '0', fontSize: '14px', color: '#2A2627' }}>
                <strong>Limited time offer.</strong> Promo prices apply at all four branches while the promo runs.
              </p>
            </div>
          </aside>
        </section>
      </div>
    );
  }
}
