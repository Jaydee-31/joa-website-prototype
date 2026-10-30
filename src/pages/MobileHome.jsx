import { Link } from 'react-router-dom';
import { asset } from '../lib/asset.js';

export default function MobileHome() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '390px',
        margin: '0 auto',
        minHeight: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        color: '#2A2627',
        background: '#FFF8F4',
        fontSize: '15px',
        lineHeight: '1.55',
      }}
    >
      <Link
        to="/book"
        style={{
          display: 'block',
          background: '#D6246E',
          color: '#FFFFFF',
          textAlign: 'center',
          padding: '9px 16px',
          fontSize: '12px',
          fontWeight: '600',
          textDecoration: 'none',
        }}
      >
        50% OFF ALL SERVICES · Book now →
      </Link>
      <header
        style={{
          background: '#FFFDFB',
          borderBottom: '1px solid #F5D3DF',
          padding: '10px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 8px 28px -14px rgba(42,38,39,0.22)',
          position: 'relative',
          zIndex: '2',
        }}
      >
        <img src={asset('images/logo.png')} alt="JOA Spa & Salon" style={{ height: '48px', width: 'auto' }} />
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Link
            to="/book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
              padding: '0 18px',
              borderRadius: '999px',
              background: '#D6246E',
              color: '#FFFFFF',
              fontSize: '13px',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
            }}
          >
            Book
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '999px',
              border: '1.5px solid #F5D3DF',
              background: '#FFFDFB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0',
            }}
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2A2627"
              strokeWidth="1.8"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </header>
      <section style={{ padding: '28px 20px 36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p style={{ margin: '0', fontSize: '10px', fontWeight: '600', letterSpacing: '0.24em', color: '#665859' }}>
          BEAUTY · SKIN · HAIR · NAILS · WELLNESS
        </p>
        <p
          style={{
            margin: '0',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: '400',
            fontSize: '25px',
            lineHeight: '1',
          }}
        >
          Come and pamper yourself
        </p>
        <h1
          style={{
            margin: '0',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: '700',
            fontSize: '38px',
            lineHeight: '1.08',
            color: '#D6246E',
          }}
        >
          Enhance your beauty, define your confidence.
        </h1>
        <p style={{ margin: '0', color: '#665859' }}>Four JOA branches in Malaybalay, Valencia and Maramag.</p>
        <Link
          to="/book"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '52px',
            borderRadius: '999px',
            background: '#D6246E',
            color: '#FFFFFF',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
          }}
        >
          Book an appointment
        </Link>
        <Link
          to="/services"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '52px',
            borderRadius: '999px',
            border: '1.5px solid #D6246E',
            color: '#D6246E',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          View price list
        </Link>
        <div style={{ position: 'relative', marginTop: '8px' }}>
          <div
            style={{
              height: '380px',
              borderRadius: '180px 180px 20px 20px',
              overflow: 'hidden',
              border: '5px solid #FFFFFF',
              boxShadow: '0 0 0 1.5px #C8A96E, 0 34px 70px -28px rgba(168,23,79,0.55)',
            }}
          >
            <img
              src={asset('images/reception.jpg')}
              alt="JOA reception with gold logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              right: '-6px',
              bottom: '24px',
              width: '108px',
              height: '108px',
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
                fontSize: '34px',
                lineHeight: '1',
                color: '#D6246E',
              }}
            >
              50%
            </span>
            <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.12em' }}>OFF ALL</span>
          </div>
        </div>
      </section>
      <section
        aria-label="Service categories"
        style={{
          background: '#FFFDFB',
          padding: '32px 16px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          gap: '22px 10px',
        }}
      >
        <Link
          to="/services"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#2A2627',
            textAlign: 'center',
          }}
        >
          <img
            src={asset('images/hair.jpg')}
            alt=""
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '999px',
              objectFit: 'cover',
              border: '3px solid #FDE7EE',
            }}
          />
          <span style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em' }}>HAIR</span>
        </Link>
        <Link
          to="/services"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#2A2627',
            textAlign: 'center',
          }}
        >
          <img
            src={asset('images/facial.jpg')}
            alt=""
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '999px',
              objectFit: 'cover',
              border: '3px solid #FDE7EE',
            }}
          />
          <span style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em' }}>FACIAL & SKIN</span>
        </Link>
        <Link
          to="/services"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#2A2627',
            textAlign: 'center',
          }}
        >
          <img
            src={asset('images/lashes.jpg')}
            alt=""
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '999px',
              objectFit: 'cover',
              border: '3px solid #FDE7EE',
            }}
          />
          <span style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em' }}>LASHES & BROWS</span>
        </Link>
        <Link
          to="/services"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#2A2627',
            textAlign: 'center',
          }}
        >
          <img
            src={asset('images/nails.jpg')}
            alt=""
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '999px',
              objectFit: 'cover',
              border: '3px solid #FDE7EE',
            }}
          />
          <span style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em' }}>NAILS</span>
        </Link>
        <Link
          to="/services"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#2A2627',
            textAlign: 'center',
          }}
        >
          <img
            src={asset('images/salon.jpg')}
            alt=""
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '999px',
              objectFit: 'cover',
              border: '3px solid #FDE7EE',
            }}
          />
          <span style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em' }}>SPA & WELLNESS</span>
        </Link>
        <Link
          to="/services"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: '#2A2627',
            textAlign: 'center',
          }}
        >
          <img
            src={asset('images/aesthetics.jpg')}
            alt=""
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '999px',
              objectFit: 'cover',
              border: '3px solid #FDE7EE',
            }}
          />
          <span style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em' }}>AESTHETICS</span>
        </Link>
      </section>
      <section style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p
          style={{
            margin: '0',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: '400',
            fontSize: '21px',
            lineHeight: '1',
            color: '#D6246E',
          }}
        >
          Limited time offer
        </p>
        <h2
          style={{
            margin: '0',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: '700',
            fontSize: '30px',
            lineHeight: '1.1',
          }}
        >
          50% off all services
        </h2>
        <article
          style={{
            background: '#FFFDFB',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #F5D3DF',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <img
            src={asset('images/hair.jpg')}
            alt="Straight, glossy hair"
            style={{ width: '100%', height: '190px', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              padding: '18px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div>
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '20px',
                  fontWeight: '600',
                }}
              >
                Protein Straight Bond
              </h3>
              <p style={{ margin: '2px 0 0', display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                <span style={{ fontSize: '20px', fontWeight: '700', color: '#D6246E' }}>from ₱2,499</span>
                <s style={{ color: '#665859', fontSize: '13px' }}>₱5,999</s>
              </p>
            </div>
            <Link
              to="/book"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                padding: '0 16px',
                borderRadius: '999px',
                background: '#D6246E',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '13px',
                flexShrink: '0',
                boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
              }}
            >
              Book
            </Link>
          </div>
        </article>
        <article
          style={{
            background: '#FFFDFB',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid #F5D3DF',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <img
            src={asset('images/brows.jpg')}
            alt="Soft, shaded eyebrows"
            style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
          />
          <div
            style={{
              padding: '18px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div>
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '20px',
                  fontWeight: '600',
                }}
              >
                Microshading
              </h3>
              <p style={{ margin: '2px 0 0', display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                <span style={{ fontSize: '20px', fontWeight: '700', color: '#D6246E' }}>₱999</span>
                <s style={{ color: '#665859', fontSize: '13px' }}>₱1,999</s>
              </p>
            </div>
            <Link
              to="/book"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '44px',
                padding: '0 16px',
                borderRadius: '999px',
                background: '#D6246E',
                color: '#FFFFFF',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '13px',
                flexShrink: '0',
                boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
              }}
            >
              Book
            </Link>
          </div>
        </article>
      </section>
      <section
        style={{ background: '#FFFDFB', padding: '40px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}
      >
        <h2
          style={{ margin: '0', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: '700', fontSize: '30px' }}
        >
          Salon price list
        </h2>
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #F5D3DF', fontSize: '14px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderBottom: '1px solid #F8E6EC',
            }}
          >
            <span>Hair Cut / Blowdry / Iron</span>
            <span>
              <s style={{ color: '#665859', fontSize: '12px' }}>₱399</s>{' '}
              <strong style={{ color: '#D6246E' }}>₱199</strong>
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderBottom: '1px solid #F8E6EC',
              background: '#FFF4F6',
            }}
          >
            <span>Organic Hair Color</span>
            <span>
              <s style={{ color: '#665859', fontSize: '12px' }}>₱1,999</s>{' '}
              <strong style={{ color: '#D6246E' }}>₱999</strong>
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderBottom: '1px solid #F8E6EC',
            }}
          >
            <span>L’Oréal Rebond</span>
            <span>
              <s style={{ color: '#665859', fontSize: '12px' }}>₱3,499</s>{' '}
              <strong style={{ color: '#D6246E' }}>₱1,749</strong>
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '12px 16px',
              borderBottom: '1px solid #F8E6EC',
              background: '#FFF4F6',
            }}
          >
            <span>Gel Manicure</span>
            <span>
              <s style={{ color: '#665859', fontSize: '12px' }}>₱649</s>{' '}
              <strong style={{ color: '#D6246E' }}>₱499</strong>
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px' }}>
            <span>Classic Lash — Natural</span>
            <span>
              <s style={{ color: '#665859', fontSize: '12px' }}>₱999</s>{' '}
              <strong style={{ color: '#D6246E' }}>₱499</strong>
            </span>
          </div>
        </div>
        <Link
          to="/services"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50px',
            borderRadius: '999px',
            border: '1.5px solid #D6246E',
            color: '#D6246E',
            fontWeight: '600',
            textDecoration: 'none',
          }}
        >
          Full price list
        </Link>
      </section>
      <section
        style={{ background: '#FDE7EE', padding: '40px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}
      >
        <p
          style={{
            margin: '0',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: '400',
            fontSize: '23px',
            lineHeight: '1',
            color: '#D6246E',
          }}
        >
          Book now
        </p>
        <h2
          style={{
            margin: '0 0 6px',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: '700',
            fontSize: '26px',
            lineHeight: '1.15',
          }}
        >
          and let us take care of you
        </h2>
        <div
          style={{
            background: '#FFFDFB',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', color: '#D6246E' }}>
            01
          </span>
          <span style={{ fontWeight: '600' }}>Choose a branch</span>
        </div>
        <div
          style={{
            background: '#FFFDFB',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', color: '#D6246E' }}>
            02
          </span>
          <span style={{ fontWeight: '600' }}>Pick your service</span>
        </div>
        <div
          style={{
            background: '#FFFDFB',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', color: '#D6246E' }}>
            03
          </span>
          <span style={{ fontWeight: '600' }}>Choose an open time</span>
        </div>
        <div
          style={{
            background: '#FFFDFB',
            borderRadius: '14px',
            padding: '14px 16px',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '24px', color: '#D6246E' }}>
            04
          </span>
          <span style={{ fontWeight: '600' }}>Get confirmed</span>
        </div>
        <Link
          to="/book"
          style={{
            marginTop: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '52px',
            borderRadius: '999px',
            background: '#D6246E',
            color: '#FFFFFF',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
          }}
        >
          Book an appointment
        </Link>
      </section>
      <section
        style={{
          background: '#FFFDFB',
          padding: '36px 20px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '22px 12px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            gridColumn: '1 / -1',
            margin: '0',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: '700',
            fontSize: '26px',
          }}
        >
          Why choose JOA?
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <svg
            aria-hidden="true"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D6246E"
            strokeWidth="1.4"
          >
            <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />
            <path d="M8.5 12l2.5 2.5 4.5-5" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em' }}>SAFE & HYGIENIC</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <svg
            aria-hidden="true"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D6246E"
            strokeWidth="1.4"
          >
            <path d="M6 4h12l3 5-9 11L3 9l3-5z" />
            <path d="M3 9h18M9 4l3 16 3-16" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em' }}>PREMIUM SERVICE</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <svg
            aria-hidden="true"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D6246E"
            strokeWidth="1.4"
          >
            <path d="M3 8l4 4 5-7 5 7 4-4-2 10H5L3 8z" />
            <path d="M5 21h14" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em' }}>BEAUTY YOU CAN TRUST</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <svg
            aria-hidden="true"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D6246E"
            strokeWidth="1.4"
          >
            <path d="M12 9.5C10.5 6 6 6.5 6 10c0 3 6 6.5 6 6.5s6-3.5 6-6.5c0-3.5-4.5-4-6-.5z" />
            <path d="M3 19h4l3 1.5h5l4-3" />
          </svg>
          <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em' }}>EXPERT CARE</span>
        </div>
      </section>
      <section style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h2
          style={{
            margin: '0 0 4px',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: '700',
            fontSize: '28px',
          }}
        >
          Visit us in Bukidnon
        </h2>
        <article
          style={{
            background: '#FFFDFB',
            borderRadius: '16px',
            border: '1px solid #F5D3DF',
            padding: '16px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <div>
            <h3 style={{ margin: '0', fontSize: '15px' }}>Malaybalay — Poblacion</h3>
            <p style={{ margin: '0', fontSize: '13px', color: '#665859' }}>Claro M. Recto St · 8 AM – 5 PM</p>
          </div>
          <Link
            to="/book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
              padding: '0 16px',
              borderRadius: '999px',
              border: '1.5px solid #D6246E',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              flexShrink: '0',
            }}
          >
            Book
          </Link>
        </article>
        <article
          style={{
            background: '#FFFDFB',
            borderRadius: '16px',
            border: '1px solid #F5D3DF',
            padding: '16px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <div>
            <h3 style={{ margin: '0', fontSize: '15px' }}>Malaybalay — Purok 4B</h3>
            <p style={{ margin: '0', fontSize: '13px', color: '#665859' }}>7:30 AM – 6:30 PM</p>
          </div>
          <Link
            to="/book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
              padding: '0 16px',
              borderRadius: '999px',
              border: '1.5px solid #D6246E',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              flexShrink: '0',
            }}
          >
            Book
          </Link>
        </article>
        <article
          style={{
            background: '#FFFDFB',
            borderRadius: '16px',
            border: '1px solid #F5D3DF',
            padding: '16px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <div>
            <h3 style={{ margin: '0', fontSize: '15px' }}>Valencia City</h3>
            <p style={{ margin: '0', fontSize: '13px', color: '#665859' }}>11 Mabini St · [Hours]</p>
          </div>
          <Link
            to="/book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
              padding: '0 16px',
              borderRadius: '999px',
              border: '1.5px solid #D6246E',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              flexShrink: '0',
            }}
          >
            Book
          </Link>
        </article>
        <article
          style={{
            background: '#FFFDFB',
            borderRadius: '16px',
            border: '1px solid #F5D3DF',
            padding: '16px 18px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '12px',
            boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
          }}
        >
          <div>
            <h3 style={{ margin: '0', fontSize: '15px' }}>Maramag</h3>
            <p style={{ margin: '0', fontSize: '13px', color: '#665859' }}>North Poblacion · 10 AM – 9 PM</p>
          </div>
          <Link
            to="/book"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
              padding: '0 16px',
              borderRadius: '999px',
              border: '1.5px solid #D6246E',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '600',
              flexShrink: '0',
            }}
          >
            Book
          </Link>
        </article>
      </section>
      <footer
        style={{
          marginTop: 'auto',
          background: '#FDE7EE',
          padding: '32px 20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <img
          src={asset('images/logo.png')}
          alt="JOA Spa & Salon"
          style={{ height: '60px', width: 'auto', alignSelf: 'flex-start' }}
        />
        <p
          style={{
            margin: '0',
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: 'italic',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '1.1',
            color: '#D6246E',
          }}
        >
          Because you deserve to feel beautiful.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 20px', fontSize: '13px', fontWeight: '600' }}>
          <Link to="/services" style={{ color: '#2A2627', textDecoration: 'none', padding: '10px 0' }}>
            Services
          </Link>
          <a href="#" style={{ color: '#2A2627', textDecoration: 'none', padding: '10px 0' }}>
            My bookings
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61554751762826"
            style={{ color: '#2A2627', textDecoration: 'none', padding: '10px 0' }}
          >
            Facebook
          </a>
        </div>
        <div style={{ fontSize: '11px', color: '#665859', paddingTop: '12px', borderTop: '1px solid #EFCBD8' }}>
          © 2026 JOA Spa & Salon
        </div>
      </footer>
    </div>
  );
}
