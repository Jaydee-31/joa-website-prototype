import { Component as ReactComponent } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
import AdminTopbar from '../components/AdminTopbar.jsx';

export default class AdminExpenses extends ReactComponent {
  constructor(props) {
    super(props);
    this.state = { f: 'All' };
  }
  renderVals() {
    const peso = (n) => '₱' + n.toLocaleString('en-US');
    const R = [
      ['19 Oct', 'Malaybalay Pob.', 'Supplies & products', 'L’Oréal rebond kits ×6', 'GCash', 5400, true, 'Ana'],
      ['18 Oct', 'Maramag', 'Utilities', 'Electricity — September bill', 'Cash', 4120, true, 'Grace'],
      ['17 Oct', 'Purok 4B', 'Supplies & products', 'Gel polish restock, 12 colors', 'Cash', 2880, true, 'Liza'],
      ['16 Oct', 'Valencia City', 'Equipment & repairs', 'Lash bed cushion repair', 'Cash', 1500, false, 'Mae'],
      [
        '15 Oct',
        'All branches',
        'Staff payouts & commission',
        'Mid-month commission payout',
        'Bank transfer',
        20620,
        true,
        'Owner',
      ],
      ['15 Oct', 'Malaybalay Pob.', 'Utilities', 'Water — September bill', 'GCash', 1260, true, 'Ana'],
      ['12 Oct', 'All branches', 'Marketing', 'Facebook boosted posts, 50% OFF promo', 'Card', 2600, true, 'Owner'],
      ['09 Oct', 'Purok 4B', 'Other', 'Drinking water and cups', 'Cash', 380, false, 'Jun'],
      ['05 Oct', 'Malaybalay Pob.', 'Rent', 'October rent', 'Bank transfer', 15000, true, 'Owner'],
      ['05 Oct', 'Purok 4B', 'Rent', 'October rent', 'Bank transfer', 12000, true, 'Owner'],
      ['03 Oct', 'Valencia City', 'Supplies & products', 'Lash trays and adhesive', 'GCash', 3450, false, 'Mae'],
    ];
    const CATS = [
      'All',
      'Supplies & products',
      'Rent',
      'Utilities',
      'Staff payouts & commission',
      'Equipment & repairs',
      'Marketing',
      'Other',
    ];
    const list = this.state.f === 'All' ? R : R.filter((r) => r[2] === this.state.f);
    const rows = list.map((r) => ({
      date: r[0],
      branch: r[1],
      cat: r[2],
      desc: r[3],
      via: r[4],
      amt: peso(r[5]),
      by: r[7],
      receipt: r[6] ? 'Attached' : 'Missing',
      rbg: r[6] ? '#E3EDF8' : '#FCEFD9',
      rfg: r[6] ? '#1D4F8C' : '#8A5100',
    }));
    const sum = list.reduce((a, r) => a + r[5], 0);
    const chips = CATS.map((k) => {
      const on = this.state.f === k;
      return {
        label: k,
        border: on ? '#D6246E' : '#E6CBD5',
        bg: on ? '#D6246E' : '#FFFDFB',
        fg: on ? '#FFFFFF' : '#2A2627',
        pick: () => this.setState({ f: k }),
      };
    });
    const C = [
      ['Rent', 48000],
      ['Staff payouts & commission', 41240],
      ['Supplies & products', 21860],
      ['Utilities', 9850],
      ['Equipment & repairs', 3900],
      ['Marketing', 2600],
      ['Other', 1000],
    ];
    const cats = C.map((c) => ({ name: c[0], amt: peso(c[1]), w: Math.round((c[1] / 48000) * 100) + '%' }));
    const B = [
      ['Malaybalay — Poblacion', 148200, 42300],
      ['Malaybalay — Purok 4B', 112600, 33150],
      ['Valencia City', 84900, 29600],
      ['Maramag', 66680, 23400],
    ];
    const profit = B.map((b) => ({
      name: b[0],
      rev: peso(b[1]),
      exp: peso(b[2]),
      profit: peso(b[1] - b[2]),
      margin: Math.round(((b[1] - b[2]) / b[1]) * 100) + '%',
    }));
    return {
      rows,
      chips,
      cats,
      profit,
      shown: 'Showing ' + list.length + ' of 46 entries this month',
      total: peso(sum),
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
                Costs by branch · October 1–19, 2026{' '}
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
                Expenses
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
                + Add expense
              </button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            <div
              style={{
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
              }}
            >
              <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>Expenses</p>
              <p
                style={{
                  margin: '4px 0 0',
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '30px',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                }}
              >
                ₱128,450
              </p>
              <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>4 branches · 46 entries</p>
            </div>
            <div
              style={{
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
              }}
            >
              <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>Revenue</p>
              <p
                style={{
                  margin: '4px 0 0',
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '30px',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                }}
              >
                ₱412,380
              </p>
              <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>From Sales tracking</p>
            </div>
            <div
              style={{
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
              }}
            >
              <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>Profit</p>
              <p
                style={{
                  margin: '4px 0 0',
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '30px',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                }}
              >
                ₱283,930
              </p>
              <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>69% of revenue</p>
            </div>
            <div
              style={{
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                padding: '18px 20px',
              }}
            >
              <p style={{ margin: '0', fontSize: '12px', fontWeight: '600', color: '#665859' }}>Missing receipts</p>
              <p
                style={{
                  margin: '4px 0 0',
                  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: '30px',
                  fontWeight: '700',
                  letterSpacing: '-0.01em',
                }}
              >
                3
              </p>
              <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>Entries without a photo</p>
            </div>
          </div>
          <div role="tablist" aria-label="Filter by category" className="chip-row">
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
                {c.label}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'flex-start' }}>
            <section
              style={{
                flex: '999 1 600px',
                minWidth: '0',
                background: '#FFFDFB',
                borderRadius: '16px',
                border: '1px solid #EFE1E4',
                boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                overflow: 'hidden',
              }}
            >
              <h2 style={{ margin: '0', padding: '16px 20px', fontSize: '16px', borderBottom: '1px solid #EFE1E4' }}>
                Expense log
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <div style={{ minWidth: '860px' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '70px minmax(0, 1.1fr) minmax(0, 1.3fr) minmax(0, 2fr) 110px 100px 90px',
                      gap: '10px',
                      padding: '11px 20px',
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      color: '#665859',
                      background: '#FFF5F7',
                    }}
                  >
                    <span>DATE</span>
                    <span>BRANCH</span>
                    <span>CATEGORY</span>
                    <span>DESCRIPTION</span>
                    <span>PAID VIA</span>
                    <span style={{ textAlign: 'right' }}>AMOUNT</span>
                    <span>RECEIPT</span>
                  </div>
                  {(v.rows || []).map((r, i0) => (
                    <div
                      key={i0}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '70px minmax(0, 1.1fr) minmax(0, 1.3fr) minmax(0, 2fr) 110px 100px 90px',
                        gap: '10px',
                        padding: '11px 20px',
                        alignItems: 'center',
                        borderTop: '1px solid #F8EDF0',
                        fontSize: '14px',
                      }}
                    >
                      <strong>{r.date}</strong>
                      <span style={{ color: '#665859' }}>{r.branch}</span>
                      <span>{r.cat}</span>
                      <span>
                        {r.desc}
                        <span style={{ display: 'block', fontSize: '12px', color: '#665859' }}>by {r.by}</span>
                      </span>
                      <span style={{ color: '#665859' }}>{r.via}</span>
                      <strong style={{ textAlign: 'right' }}>{r.amt}</strong>
                      <span
                        style={{
                          justifySelf: 'start',
                          fontSize: '12px',
                          fontWeight: '700',
                          padding: '3px 10px',
                          borderRadius: '999px',
                          background: r.rbg,
                          color: r.rfg,
                        }}
                      >
                        {r.receipt}
                      </span>
                    </div>
                  ))}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '14px 20px',
                      borderTop: '1px solid #EFE1E4',
                      background: '#FFF5F7',
                      fontSize: '14px',
                    }}
                  >
                    <span style={{ color: '#665859' }}>{v.shown}</span>
                    <strong>{v.total}</strong>
                  </div>
                </div>
              </div>
            </section>
            <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <section
                style={{
                  background: '#FFFDFB',
                  borderRadius: '16px',
                  border: '1px solid #EFE1E4',
                  boxShadow: '0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)',
                  padding: '18px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                <h2 style={{ margin: '0', fontSize: '16px' }}>Add expense</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '12px' }}>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: '700',
                    }}
                  >
                    Date
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
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: '700',
                    }}
                  >
                    Amount (₱)
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="0.00"
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
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: '700',
                    }}
                  >
                    Branch
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
                      <option>Malaybalay — Poblacion</option>
                      <option>Malaybalay — Purok 4B</option>
                      <option>Valencia City</option>
                      <option>Maramag</option>
                      <option>All branches (shared)</option>
                    </select>
                  </label>
                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      fontSize: '12px',
                      fontWeight: '700',
                    }}
                  >
                    Category
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
                      <option>Supplies & products</option>
                      <option>Rent</option>
                      <option>Utilities</option>
                      <option>Staff payouts & commission</option>
                      <option>Equipment & repairs</option>
                      <option>Marketing</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
                >
                  Description
                  <input
                    type="text"
                    placeholder="e.g. Gel polish restock"
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
                <label
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', fontWeight: '700' }}
                >
                  Paid via
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
                    <option>Cash (from drawer)</option>
                    <option>GCash</option>
                    <option>Maya</option>
                    <option>Bank transfer</option>
                    <option>Card</option>
                  </select>
                </label>
                <button
                  type="button"
                  style={{
                    minHeight: '72px',
                    borderRadius: '12px',
                    border: '1.5px dashed #E6CBD5',
                    background: '#FFF5F7',
                    fontFamily: 'inherit',
                    fontSize: '13px',
                    color: '#665859',
                    cursor: 'pointer',
                  }}
                >
                  Attach receipt photo
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
                  Save expense
                </button>
                <p style={{ margin: '0', fontSize: '12px', color: '#665859' }}>
                  Cash taken from the drawer is subtracted from that day’s expected cash count.
                </p>
              </section>
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
                <h2 style={{ margin: '0', fontSize: '16px' }}>By category</h2>
                {(v.cats || []).map((c, i0) => (
                  <div
                    key={i0}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '150px minmax(0, 1fr) 80px',
                      gap: '10px',
                      alignItems: 'center',
                      fontSize: '13px',
                    }}
                  >
                    <span>{c.name}</span>
                    <div style={{ height: '10px', borderRadius: '999px', background: '#F8EDF0' }}>
                      <div style={{ height: '10px', borderRadius: '999px', background: '#F28BB0', width: c.w }} />
                    </div>
                    <strong style={{ textAlign: 'right' }}>{c.amt}</strong>
                  </div>
                ))}
              </section>
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
              Profit by branch
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <div style={{ minWidth: '640px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1.6fr) repeat(3, minmax(0, 1fr)) 90px',
                    gap: '10px',
                    padding: '10px 20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.08em',
                    color: '#665859',
                    background: '#FFF5F7',
                  }}
                >
                  <span>BRANCH</span>
                  <span style={{ textAlign: 'right' }}>REVENUE</span>
                  <span style={{ textAlign: 'right' }}>EXPENSES</span>
                  <span style={{ textAlign: 'right' }}>PROFIT</span>
                  <span style={{ textAlign: 'right' }}>MARGIN</span>
                </div>
                {(v.profit || []).map((p, i0) => (
                  <div
                    key={i0}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(0, 1.6fr) repeat(3, minmax(0, 1fr)) 90px',
                      gap: '10px',
                      padding: '12px 20px',
                      borderTop: '1px solid #F8EDF0',
                      fontSize: '14px',
                    }}
                  >
                    <strong>{p.name}</strong>
                    <span style={{ textAlign: 'right' }}>{p.rev}</span>
                    <span style={{ textAlign: 'right', color: '#665859' }}>{p.exp}</span>
                    <strong style={{ textAlign: 'right', color: '#A8174F' }}>{p.profit}</strong>
                    <span style={{ textAlign: 'right' }}>{p.margin}</span>
                  </div>
                ))}
              </div>
            </div>
            <p
              style={{
                margin: '0',
                padding: '12px 20px',
                fontSize: '12px',
                color: '#665859',
                borderTop: '1px solid #EFE1E4',
              }}
            >
              Shared costs (“All branches”) are split across branches by their share of revenue.
            </p>
          </section>
        </main>
      </div>
    );
  }
}
