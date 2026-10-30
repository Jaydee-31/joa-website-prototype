import { Link } from 'react-router-dom';
import { asset } from '../lib/asset.js';

export default function Home() {
  return (
    <div
      id="top"
      style={{
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        color: '#2A2627',
        background: '#FFF8F4',
        fontSize: '16px',
        lineHeight: '1.6',
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
            padding: '14px 24px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <a href="#top" aria-label="JOA Spa & Salon home" style={{ display: 'block' }}>
            <img
              src={asset('images/logo.png')}
              alt="JOA Spa & Salon"
              style={{ height: '64px', width: 'auto', display: 'block' }}
            />
          </a>
          <nav
            aria-label="Main"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px 30px',
              alignItems: 'center',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            <Link to="/services" style={{ color: '#2A2627', textDecoration: 'none', padding: '10px 0' }}>
              Services
            </Link>
            <a href="#promos" style={{ color: '#2A2627', textDecoration: 'none', padding: '10px 0' }}>
              Promos
            </a>
            <a href="#branches" style={{ color: '#2A2627', textDecoration: 'none', padding: '10px 0' }}>
              Branches
            </a>
            <a href="#why" style={{ color: '#2A2627', textDecoration: 'none', padding: '10px 0' }}>
              About
            </a>
            <Link to="/admin-dashboard" style={{ color: '#2A2627', textDecoration: 'none', padding: '10px 0' }}>
              Sign in
            </Link>
            <Link
              to="/book"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '46px',
                padding: '0 26px',
                borderRadius: '999px',
                background: '#D6246E',
                color: '#FFFFFF',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
              }}
            >
              Book now
            </Link>
          </nav>
        </div>
      </header>
      <section style={{ background: 'radial-gradient(circle at 78% 45%, #FDE7EE 0, #FFF8F4 52%)' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '64px 24px 72px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', letterSpacing: '0.3em', color: '#665859' }}>
              BEAUTY · SKIN · HAIR · NAILS · WELLNESS
            </p>
            <div>
              <p
                style={{
                  margin: '0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  fontWeight: '400',
                  fontSize: '35px',
                  lineHeight: '1',
                  color: '#2A2627',
                }}
              >
                Come and pamper yourself
              </p>
              <h1
                style={{
                  margin: '8px 0 0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: '700',
                  fontSize: '64px',
                  lineHeight: '1.05',
                  color: '#D6246E',
                }}
              >
                Enhance your beauty, define your confidence.
              </h1>
            </div>
            <p style={{ margin: '0', fontSize: '18px', color: '#665859', maxWidth: '32em' }}>
              Hair, skin, lashes, nails and aesthetic treatments at four JOA branches in Malaybalay, Valencia and
              Maramag. Book online in under a minute.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Link
                to="/book"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '54px',
                  padding: '0 30px',
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '54px',
                  padding: '0 30px',
                  borderRadius: '999px',
                  border: '1.5px solid #D6246E',
                  color: '#D6246E',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
              >
                View price list
              </Link>
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 24px',
                borderRadius: '999px',
                background: '#D6246E',
                color: '#FFFFFF',
                boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
              }}
            >
              <svg
                aria-hidden="true"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1.8"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <span style={{ fontSize: '15px', fontWeight: '600', letterSpacing: '0.06em' }}>
                OPEN DAILY · 4 BRANCHES
              </span>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '440px',
                aspectRatio: '319 / 640',
                maxHeight: '620px',
                borderRadius: '240px 240px 24px 24px',
                overflow: 'hidden',
                border: '6px solid #FFFFFF',
                boxShadow: '0 0 0 1.5px #C8A96E, 0 34px 70px -28px rgba(168,23,79,0.55)',
              }}
            >
              <img
                src={asset('images/reception.jpg')}
                alt="JOA reception with gold logo and marble counter"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                left: '0',
                bottom: '40px',
                width: '150px',
                height: '150px',
                borderRadius: '999px',
                background: '#FFFDFB',
                border: '2px solid #C8A96E',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                boxShadow: '0 14px 30px -12px rgba(168,23,79,0.40)',
              }}
            >
              <span
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontWeight: '700',
                  fontSize: '48px',
                  lineHeight: '1',
                  color: '#D6246E',
                }}
              >
                50%
              </span>
              <span style={{ fontSize: '12px', fontWeight: '700', letterSpacing: '0.12em', color: 'rgb(42, 38, 39)' }}>
                OFF
              </span>
              <span style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '0.1em', color: 'rgb(102, 88, 89)' }}>
                LIMITED TIME
              </span>
            </div>
          </div>
        </div>
      </section>
      <section aria-label="Service categories" style={{ background: '#FFFDFB' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '56px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '24px',
          }}
        >
          <Link
            to="/services"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: '#2A2627',
              textAlign: 'center',
            }}
          >
            <img
              src={asset('images/hair.jpg')}
              alt=""
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '999px',
                objectFit: 'cover',
                border: '3px solid #FDE7EE',
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.14em' }}>HAIR SERVICES</span>
          </Link>
          <Link
            to="/services"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: '#2A2627',
              textAlign: 'center',
            }}
          >
            <img
              src={asset('images/facial.jpg')}
              alt=""
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '999px',
                objectFit: 'cover',
                border: '3px solid #FDE7EE',
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.14em' }}>FACIAL & SKIN CARE</span>
          </Link>
          <Link
            to="/services"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: '#2A2627',
              textAlign: 'center',
            }}
          >
            <img
              src={asset('images/lashes.jpg')}
              alt=""
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '999px',
                objectFit: 'cover',
                border: '3px solid #FDE7EE',
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.14em' }}>LASHES & BROWS</span>
          </Link>
          <Link
            to="/services"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: '#2A2627',
              textAlign: 'center',
            }}
          >
            <img
              src={asset('images/nails.jpg')}
              alt=""
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '999px',
                objectFit: 'cover',
                border: '3px solid #FDE7EE',
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.14em' }}>NAILS</span>
          </Link>
          <Link
            to="/services"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: '#2A2627',
              textAlign: 'center',
            }}
          >
            <img
              src={asset('images/salon.jpg')}
              alt=""
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '999px',
                objectFit: 'cover',
                border: '3px solid #FDE7EE',
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.14em' }}>SPA & WELLNESS</span>
          </Link>
          <Link
            to="/services"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: '#2A2627',
              textAlign: 'center',
            }}
          >
            <img
              src={asset('images/aesthetics.jpg')}
              alt=""
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '999px',
                objectFit: 'cover',
                border: '3px solid #FDE7EE',
              }}
            />
            <span style={{ fontSize: '13px', fontWeight: '600', letterSpacing: '0.14em' }}>AESTHETIC SERVICES</span>
          </Link>
        </div>
      </section>
      <section id="promos">
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '88px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
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
                Limited time offer
              </p>
              <h2
                style={{
                  margin: '6px 0 0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: '700',
                  fontSize: '46px',
                  lineHeight: '1.1',
                }}
              >
                50% off all services
              </h2>
            </div>
            <Link to="/services" style={{ fontWeight: '600', fontSize: '15px' }}>
              See every promo price →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <article
              style={{
                background: '#FFFDFB',
                borderRadius: '22px',
                overflow: 'hidden',
                border: '1px solid #F5D3DF',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <img
                src={asset('images/hair.jpg')}
                alt="Straight, glossy hair after treatment"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  padding: '22px 24px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  flexGrow: '1',
                }}
              >
                <p
                  style={{
                    margin: '0',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.16em',
                    color: '#665859',
                  }}
                >
                  HAIR · ORGANIC, VEGAN
                </p>
                <h3
                  style={{
                    margin: '0',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '24px',
                    fontWeight: '600',
                  }}
                >
                  Protein Straight Bond
                </h3>
                <p style={{ margin: '6px 0 14px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '26px', fontWeight: '700', color: '#D6246E' }}>from ₱2,499</span>
                  <s style={{ color: '#665859', fontSize: '15px' }}>₱5,999</s>
                </p>
                <Link
                  to="/book"
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '46px',
                    borderRadius: '999px',
                    background: '#D6246E',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                  }}
                >
                  Book this
                </Link>
              </div>
            </article>
            <article
              style={{
                background: '#FFFDFB',
                borderRadius: '22px',
                overflow: 'hidden',
                border: '1px solid #F5D3DF',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <img
                src={asset('images/lashes.jpg')}
                alt="Close-up of full lash extensions"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  padding: '22px 24px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  flexGrow: '1',
                }}
              >
                <p
                  style={{
                    margin: '0',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.16em',
                    color: '#665859',
                  }}
                >
                  LASHES
                </p>
                <h3
                  style={{
                    margin: '0',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '24px',
                    fontWeight: '600',
                  }}
                >
                  Classic Lash Extensions
                </h3>
                <p style={{ margin: '6px 0 14px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '26px', fontWeight: '700', color: '#D6246E' }}>from ₱499</span>
                  <s style={{ color: '#665859', fontSize: '15px' }}>₱999</s>
                </p>
                <Link
                  to="/book"
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '46px',
                    borderRadius: '999px',
                    background: '#D6246E',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                  }}
                >
                  Book this
                </Link>
              </div>
            </article>
            <article
              style={{
                background: '#FFFDFB',
                borderRadius: '22px',
                overflow: 'hidden',
                border: '1px solid #F5D3DF',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <img
                src={asset('images/brows.jpg')}
                alt="Soft, shaded eyebrows"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  padding: '22px 24px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  flexGrow: '1',
                }}
              >
                <p
                  style={{
                    margin: '0',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.16em',
                    color: '#665859',
                  }}
                >
                  JOA KILAY
                </p>
                <h3
                  style={{
                    margin: '0',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '24px',
                    fontWeight: '600',
                  }}
                >
                  Microshading
                </h3>
                <p style={{ margin: '6px 0 14px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '26px', fontWeight: '700', color: '#D6246E' }}>₱999</span>
                  <s style={{ color: '#665859', fontSize: '15px' }}>₱1,999</s>
                </p>
                <Link
                  to="/book"
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '46px',
                    borderRadius: '999px',
                    background: '#D6246E',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                  }}
                >
                  Book this
                </Link>
              </div>
            </article>
            <article
              style={{
                background: '#FFFDFB',
                borderRadius: '22px',
                overflow: 'hidden',
                border: '1px solid #F5D3DF',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <img
                src={asset('images/facial.jpg')}
                alt="Client receiving a facial"
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  padding: '22px 24px 26px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  flexGrow: '1',
                }}
              >
                <p
                  style={{
                    margin: '0',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.16em',
                    color: '#665859',
                  }}
                >
                  FACIAL
                </p>
                <h3
                  style={{
                    margin: '0',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '24px',
                    fontWeight: '600',
                  }}
                >
                  Korean Signature Facial
                </h3>
                <p style={{ margin: '6px 0 14px', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                  <span style={{ fontSize: '26px', fontWeight: '700', color: '#D6246E' }}>₱749</span>
                  <s style={{ color: '#665859', fontSize: '15px' }}>₱1,499</s>
                </p>
                <Link
                  to="/book"
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '46px',
                    borderRadius: '999px',
                    background: '#D6246E',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                  }}
                >
                  Book this
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section style={{ background: '#FFFDFB' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '88px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '56px',
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <p style={{ margin: '0', fontSize: '12px', fontWeight: '700', letterSpacing: '0.3em', color: '#D6246E' }}>
              BEAUTY BEGINS WITH YOU
            </p>
            <h2
              style={{
                margin: '0',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: '700',
                fontSize: '46px',
                lineHeight: '1.1',
              }}
            >
              Salon price list
            </h2>
            <p style={{ margin: '0', color: '#665859' }}>
              Every price on the site comes straight from the JOA system, so promos and branch changes show up the
              moment they go live.
            </p>
            <Link
              to="/services"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                minHeight: '50px',
                padding: '0 26px',
                borderRadius: '999px',
                border: '1.5px solid #D6246E',
                color: '#D6246E',
                fontWeight: '600',
                textDecoration: 'none',
              }}
            >
              Full price list — 7 categories
            </Link>
          </div>
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #F5D3DF' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
                background: '#D6246E',
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '0.12em',
                padding: '14px 22px',
                gap: '12px',
              }}
            >
              <span>SERVICE</span>
              <span style={{ textAlign: 'right' }}>REGULAR</span>
              <span style={{ textAlign: 'right' }}>PROMO</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
                padding: '13px 22px',
                gap: '12px',
                borderBottom: '1px solid #F8E6EC',
                fontSize: '15px',
              }}
            >
              <span>Hair Cut / Blowdry / Iron</span>
              <span style={{ textAlign: 'right', color: '#665859' }}>₱399</span>
              <span style={{ textAlign: 'right', fontWeight: '700', color: '#D6246E' }}>₱199</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
                padding: '13px 22px',
                gap: '12px',
                borderBottom: '1px solid #F8E6EC',
                fontSize: '15px',
                background: '#FFF4F6',
              }}
            >
              <span>Wash / Blowdry / Iron</span>
              <span style={{ textAlign: 'right', color: '#665859' }}>₱499</span>
              <span style={{ textAlign: 'right', fontWeight: '700', color: '#D6246E' }}>₱249</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
                padding: '13px 22px',
                gap: '12px',
                borderBottom: '1px solid #F8E6EC',
                fontSize: '15px',
              }}
            >
              <span>Organic Hair Color</span>
              <span style={{ textAlign: 'right', color: '#665859' }}>₱1,999</span>
              <span style={{ textAlign: 'right', fontWeight: '700', color: '#D6246E' }}>₱999</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
                padding: '13px 22px',
                gap: '12px',
                borderBottom: '1px solid #F8E6EC',
                fontSize: '15px',
                background: '#FFF4F6',
              }}
            >
              <span>L’Oréal Rebond</span>
              <span style={{ textAlign: 'right', color: '#665859' }}>₱3,499</span>
              <span style={{ textAlign: 'right', fontWeight: '700', color: '#D6246E' }}>₱1,749</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
                padding: '13px 22px',
                gap: '12px',
                borderBottom: '1px solid #F8E6EC',
                fontSize: '15px',
              }}
            >
              <span>Balayage / Brazilian Treatment</span>
              <span style={{ textAlign: 'right', color: '#665859' }}>₱4,999</span>
              <span style={{ textAlign: 'right', fontWeight: '700', color: '#D6246E' }}>₱2,499</span>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr) minmax(0, 1fr)',
                padding: '13px 22px',
                gap: '12px',
                fontSize: '15px',
                background: '#FFF4F6',
              }}
            >
              <span>iCure Keratin Blowout</span>
              <span style={{ textAlign: 'right', color: '#665859' }}>₱2,499</span>
              <span style={{ textAlign: 'right', fontWeight: '700', color: '#D6246E' }}>₱1,249</span>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: '#FDE7EE' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '80px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                margin: '0',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: '400',
                fontSize: '29px',
                lineHeight: '1',
                color: '#D6246E',
              }}
            >
              Book now
            </p>
            <h2
              style={{
                margin: '6px 0 0',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: '700',
                fontSize: '42px',
                lineHeight: '1.1',
              }}
            >
              and let us take care of you
            </h2>
          </div>
          <ol
            style={{
              listStyle: 'none',
              margin: '0',
              padding: '0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            <li
              style={{
                background: '#FFFDFB',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', color: '#D6246E' }}>
                01
              </span>
              <h3 style={{ margin: '0', fontSize: '18px' }}>Choose a branch</h3>
              <p style={{ margin: '0', color: '#665859', fontSize: '15px' }}>Malaybalay, Valencia City or Maramag.</p>
            </li>
            <li
              style={{
                background: '#FFFDFB',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', color: '#D6246E' }}>
                02
              </span>
              <h3 style={{ margin: '0', fontSize: '18px' }}>Pick your service</h3>
              <p style={{ margin: '0', color: '#665859', fontSize: '15px' }}>Promo prices apply automatically.</p>
            </li>
            <li
              style={{
                background: '#FFFDFB',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', color: '#D6246E' }}>
                03
              </span>
              <h3 style={{ margin: '0', fontSize: '18px' }}>Choose a time</h3>
              <p style={{ margin: '0', color: '#665859', fontSize: '15px' }}>
                Only open slots are shown — no double booking.
              </p>
            </li>
            <li
              style={{
                background: '#FFFDFB',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '36px', color: '#D6246E' }}>
                04
              </span>
              <h3 style={{ margin: '0', fontSize: '18px' }}>Get confirmed</h3>
              <p style={{ margin: '0', color: '#665859', fontSize: '15px' }}>The branch confirms your slot.</p>
            </li>
          </ol>
          <Link
            to="/book"
            style={{
              alignSelf: 'center',
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '56px',
              padding: '0 40px',
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
        </div>
      </section>
      <section id="why" style={{ background: '#FFFDFB' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '80px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
          }}
        >
          <h2
            style={{
              margin: '0',
              textAlign: 'center',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: '700',
              fontSize: '42px',
            }}
          >
            Why choose JOA?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              textAlign: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <svg
                aria-hidden="true"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D6246E"
                strokeWidth="1.3"
              >
                <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />
                <path d="M8.5 12l2.5 2.5 4.5-5" />
              </svg>
              <h3 style={{ margin: '0', fontSize: '14px', letterSpacing: '0.14em' }}>SAFE & HYGIENIC</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <svg
                aria-hidden="true"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D6246E"
                strokeWidth="1.3"
              >
                <path d="M6 4h12l3 5-9 11L3 9l3-5z" />
                <path d="M3 9h18M9 4l3 16 3-16" />
              </svg>
              <h3 style={{ margin: '0', fontSize: '14px', letterSpacing: '0.14em' }}>PREMIUM QUALITY SERVICE</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <svg
                aria-hidden="true"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D6246E"
                strokeWidth="1.3"
              >
                <path d="M3 8l4 4 5-7 5 7 4-4-2 10H5L3 8z" />
                <path d="M5 21h14" />
              </svg>
              <h3 style={{ margin: '0', fontSize: '14px', letterSpacing: '0.14em' }}>BEAUTY YOU CAN TRUST</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}>
              <svg
                aria-hidden="true"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D6246E"
                strokeWidth="1.3"
              >
                <path d="M12 9.5C10.5 6 6 6.5 6 10c0 3 6 6.5 6 6.5s6-3.5 6-6.5c0-3.5-4.5-4-6-.5z" />
                <path d="M3 19h4l3 1.5h5l4-3" />
              </svg>
              <h3 style={{ margin: '0', fontSize: '14px', letterSpacing: '0.14em' }}>EXPERT CARE YOU CAN TRUST</h3>
            </div>
          </div>
        </div>
      </section>
      <section id="branches">
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '88px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
          }}
        >
          <div>
            <p style={{ margin: '0', fontSize: '12px', fontWeight: '700', letterSpacing: '0.3em', color: '#D6246E' }}>
              BRANCHES
            </p>
            <h2
              style={{
                margin: '8px 0 0',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: '700',
                fontSize: '46px',
                lineHeight: '1.1',
              }}
            >
              Visit us in Bukidnon
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <article
              style={{
                background: '#FFFDFB',
                borderRadius: '20px',
                padding: '26px',
                border: '1px solid #F5D3DF',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '22px',
                  fontWeight: '600',
                }}
              >
                Malaybalay — Poblacion
              </h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#665859' }}>Claro M. Recto St, Barangay 2</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#665859' }}>Daily 8:00 AM – 5:00 PM</p>
              <Link
                to="/book"
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  borderRadius: '999px',
                  background: '#D6246E',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                }}
              >
                Book here
              </Link>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Directions
              </a>
            </article>
            <article
              style={{
                background: '#FFFDFB',
                borderRadius: '20px',
                padding: '26px',
                border: '1px solid #F5D3DF',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '22px',
                  fontWeight: '600',
                }}
              >
                Malaybalay — Purok 4B
              </h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#665859' }}>Purok 4B · 0969 607 9069</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#665859' }}>Daily 7:30 AM – 6:30 PM</p>
              <Link
                to="/book"
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  borderRadius: '999px',
                  background: '#D6246E',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                }}
              >
                Book here
              </Link>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Directions
              </a>
            </article>
            <article
              style={{
                background: '#FFFDFB',
                borderRadius: '20px',
                padding: '26px',
                border: '1px solid #F5D3DF',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '22px',
                  fontWeight: '600',
                }}
              >
                Valencia City
              </h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#665859' }}>11 Mabini St · 0936 240 0228</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#665859' }}>[Opening hours]</p>
              <Link
                to="/book"
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  borderRadius: '999px',
                  background: '#D6246E',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                }}
              >
                Book here
              </Link>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Directions
              </a>
            </article>
            <article
              style={{
                background: '#FFFDFB',
                borderRadius: '20px',
                padding: '26px',
                border: '1px solid #F5D3DF',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 16px 36px -16px rgba(214,36,110,0.30)',
              }}
            >
              <h3
                style={{
                  margin: '0',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '22px',
                  fontWeight: '600',
                }}
              >
                Maramag
              </h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#665859' }}>North Poblacion</p>
              <p style={{ margin: '0', fontSize: '14px', color: '#665859' }}>Daily 10:00 AM – 9:00 PM</p>
              <Link
                to="/book"
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  borderRadius: '999px',
                  background: '#D6246E',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  boxShadow: '0 10px 22px -10px rgba(214,36,110,0.65)',
                }}
              >
                Book here
              </Link>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '44px',
                  fontSize: '14px',
                  fontWeight: '600',
                }}
              >
                Directions
              </a>
            </article>
          </div>
        </div>
      </section>
      <footer style={{ background: '#FDE7EE', borderTop: '1px solid #F5D3DF' }}>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '56px 24px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '36px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <img
              src={asset('images/logo.png')}
              alt="JOA Spa & Salon"
              style={{ height: '72px', width: 'auto', alignSelf: 'flex-start' }}
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
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px' }}>
            <h3 style={{ margin: '0 0 6px', fontSize: '12px', letterSpacing: '0.2em' }}>EXPLORE</h3>
            <Link to="/services" style={{ color: '#2A2627', textDecoration: 'none', padding: '4px 0' }}>
              Services & prices
            </Link>
            <a href="#promos" style={{ color: '#2A2627', textDecoration: 'none', padding: '4px 0' }}>
              Promos
            </a>
            <Link to="/book" style={{ color: '#2A2627', textDecoration: 'none', padding: '4px 0' }}>
              Book an appointment
            </Link>
            <a href="#" style={{ color: '#2A2627', textDecoration: 'none', padding: '4px 0' }}>
              My bookings
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '14px' }}>
            <h3 style={{ margin: '0 0 6px', fontSize: '12px', letterSpacing: '0.2em' }}>CONNECT</h3>
            <a
              href="https://www.facebook.com/profile.php?id=61554751762826"
              style={{ color: '#2A2627', textDecoration: 'none', padding: '4px 0' }}
            >
              Facebook
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61554751762826"
              style={{ color: '#2A2627', textDecoration: 'none', padding: '4px 0' }}
            >
              Messenger
            </a>
            <Link to="/admin-dashboard" style={{ color: '#2A2627', textDecoration: 'none', padding: '4px 0' }}>
              Staff login
            </Link>
          </div>
        </div>
        <div
          style={{
            maxWidth: '1240px',
            margin: '0 auto',
            padding: '18px 24px 28px',
            borderTop: '1px solid #EFCBD8',
            fontSize: '13px',
            color: '#665859',
          }}
        >
          © 2026 JOA Spa & Salon · Your beauty. Your confidence. Your JOA experience.
        </div>
      </footer>
    </div>
  );
}
