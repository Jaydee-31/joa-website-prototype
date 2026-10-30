import { Component as ReactComponent } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminTopbar from "../components/AdminTopbar.jsx";

export default class AdminCustomers extends ReactComponent {
	constructor(props) {
		super(props);
		this.state = { sel: 0 };
	}
	renderVals() {
		const C = [
			[
				"Rhea M.",
				"0918 ··· 4471",
				"Malaybalay Pob.",
				9,
				"Today",
				14650,
				9800,
				"VIP · Promo",
				"Prefers Ana. Long, thick hair — book 4-hour slot for treatments.",
				[
					["19 Oct", "Protein Straight Bond — Long", "₱3,999"],
					["14 Sep", "Hair Cut / Blowdry / Iron", "₱199"],
					["02 Aug", "Balayage / Brazilian", "₱2,499"],
				],
			],
			[
				"Nica F.",
				"0916 ··· 3058",
				"Malaybalay Pob.",
				4,
				"Today",
				3196,
				2400,
				"Promo",
				"Likes a quiet chair near the window.",
				[
					["19 Oct", "Organic Hair Color", "₱999"],
					["30 Aug", "Bb Glow Glass Skin Facial", "₱749"],
				],
			],
			[
				"Kristine D.",
				"0927 ··· 5390",
				"Valencia City",
				6,
				"Today",
				4994,
				3800,
				"Lash regular",
				"Natural lash set, refill every 3 weeks.",
				[
					["19 Oct", "Classic Lash — Natural", "₱499"],
					["28 Sep", "Classic Lash — Natural", "₱499"],
				],
			],
			[
				"Joy P.",
				"0917 ··· 2231",
				"Maramag",
				2,
				"Today",
				1498,
				1500,
				"New",
				"First booked online in September.",
				[
					["19 Oct", "Korean Signature Facial", "₱749"],
					["21 Sep", "Korean Signature Facial", "₱749"],
				],
			],
			[
				"Jessa L.",
				"0935 ··· 6620",
				"Purok 4B",
				11,
				"Today",
				6340,
				3900,
				"VIP",
				"Gel colors: nudes and pinks.",
				[
					["19 Oct", "Gel Manicure, Simple Design ×2", "₱899"],
					["05 Oct", "Gel Pedicure", "₱549"],
				],
			],
			[
				"Carlo B.",
				"0995 ··· 7713",
				"Purok 4B",
				7,
				"Today",
				1393,
				1400,
				"",
				"Short fade, every 3–4 weeks.",
				[
					["19 Oct", "Hair Cut / Blowdry / Iron", "₱199"],
					["22 Sep", "Hair Cut / Blowdry / Iron", "₱199"],
				],
			],
			["Angel T.", "0926 ··· 8810", "Valencia City", 1, "Booked 19 Oct", 0, 0, "New", "Booked Microshading online — awaiting confirmation.", [["19 Oct", "Microshading (pending)", "₱999"]]],
			[
				"Mika S.",
				"0939 ··· 6624",
				"Purok 4B",
				3,
				"18 Oct",
				1098,
				1100,
				"1 no-show",
				"Missed Gel Pedicure on 18 Oct.",
				[
					["18 Oct", "Gel Pedicure (no-show)", "₱0"],
					["20 Sep", "Gel Manicure", "₱499"],
				],
			],
			[
				"Dianne C.",
				"0920 ··· 1187",
				"Maramag",
				5,
				"12 Oct",
				5245,
				4600,
				"Promo",
				"Hydrating facial every month.",
				[
					["12 Oct", "Hydrating Glow Facial", "₱1,249"],
					["13 Sep", "Hydrating Glow Facial", "₱1,249"],
				],
			],
		];
		const peso = (n) => "₱" + n.toLocaleString("en-US");
		const rows = C.map((c, i) => ({
			name: c[0],
			phone: c[1],
			branch: c[2],
			visits: c[3],
			last: c[4],
			spent: peso(c[5]),
			tags: c[7],
			bg: i === this.state.sel ? "#FDE7EE" : "#FFFDFB",
			pick: () => this.setState({ sel: i }),
		}));
		const s = C[this.state.sel];
		const c = {
			name: s[0],
			phone: s[1],
			branch: s[2],
			visits: s[3],
			spent: peso(s[5]),
			saved: peso(s[6]),
			note: s[8],
			initials: s[0]
				.split(" ")
				.map((w) => w[0])
				.join(""),
			history: s[9].map((h) => ({ date: h[0], service: h[1], amt: h[2] })),
		};
		return { rows, c };
	}

	render() {
		const v = this.renderVals();
		return (
			<div
				className="admin-layout"
				style={{
					fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
					color: "#2A2627",
					background: "#FFF8F4",
					fontSize: "14px",
					lineHeight: "1.5",
					minHeight: "100vh",
					display: "flex",
				}}>
				<AdminSidebar />
				<main
					style={{
						flex: "999 1 640px",
						minWidth: "0",
						padding: "24px 32px 48px",
						boxSizing: "border-box",
						display: "flex",
						flexDirection: "column",
						gap: "22px",
					}}>
					<AdminTopbar />
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "14px",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<div>
							<p style={{ margin: "0", fontSize: "13px", color: "#665859" }}>
								Everyone who has booked or paid at JOA{" "}
								<span
									style={{
										marginLeft: "8px",
										fontSize: "11px",
										fontWeight: "700",
										letterSpacing: "0.08em",
										padding: "2px 8px",
										borderRadius: "6px",
										background: "#F1E8EA",
									}}>
									SAMPLE DATA
								</span>
							</p>
							<h1
								style={{
									margin: "2px 0 0",
									fontFamily: "'Playfair Display', Georgia, serif",
									fontSize: "30px",
									fontWeight: "700",
								}}>
								Customers
							</h1>
						</div>
						<div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
							<button
								type="button"
								style={{
									minHeight: "42px",
									padding: "0 18px",
									borderRadius: "10px",
									border: "1.5px solid #D6246E",
									background: "#FFFDFB",
									color: "#D6246E",
									fontFamily: "inherit",
									fontWeight: "600",
									cursor: "pointer",
								}}>
								Export Excel
							</button>
							<button
								type="button"
								style={{
									minHeight: "42px",
									padding: "0 18px",
									borderRadius: "10px",
									border: "0",
									background: "#D6246E",
									color: "#FFFFFF",
									fontFamily: "inherit",
									fontWeight: "600",
									cursor: "pointer",
									boxShadow: "0 10px 22px -10px rgba(214,36,110,0.65)",
								}}>
								+ Add customer
							</button>
						</div>
					</div>
					<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
						<div
							style={{
								background: "#FFFDFB",
								borderRadius: "16px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
								padding: "18px 20px",
							}}>
							<p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#665859" }}>Customers</p>
							<p
								style={{
									margin: "4px 0 0",
									fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
									fontSize: "30px",
									fontWeight: "700",
									letterSpacing: "-0.01em",
								}}>
								1,284
							</p>
							<p style={{ margin: "0", fontSize: "12px", color: "#665859" }}>Across 4 branches</p>
						</div>
						<div
							style={{
								background: "#FFFDFB",
								borderRadius: "16px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
								padding: "18px 20px",
							}}>
							<p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#665859" }}>New this month</p>
							<p
								style={{
									margin: "4px 0 0",
									fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
									fontSize: "30px",
									fontWeight: "700",
									letterSpacing: "-0.01em",
								}}>
								96
							</p>
							<p style={{ margin: "0", fontSize: "12px", color: "#665859" }}>68 from online booking</p>
						</div>
						<div
							style={{
								background: "#FFFDFB",
								borderRadius: "16px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
								padding: "18px 20px",
							}}>
							<p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#665859" }}>Came back within 60 days</p>
							<p
								style={{
									margin: "4px 0 0",
									fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
									fontSize: "30px",
									fontWeight: "700",
									letterSpacing: "-0.01em",
								}}>
								58%
							</p>
							<p style={{ margin: "0", fontSize: "12px", color: "#665859" }}>Of first-time clients</p>
						</div>
						<div
							style={{
								background: "#FFFDFB",
								borderRadius: "16px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
								padding: "18px 20px",
							}}>
							<p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#665859" }}>Average spend per visit</p>
							<p
								style={{
									margin: "4px 0 0",
									fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
									fontSize: "30px",
									fontWeight: "700",
									letterSpacing: "-0.01em",
								}}>
								₱812
							</p>
							<p style={{ margin: "0", fontSize: "12px", color: "#665859" }}>At promo prices</p>
						</div>
					</div>
					<div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start" }}>
						<section
							style={{
								flex: "999 1 560px",
								minWidth: "0",
								background: "#FFFDFB",
								borderRadius: "16px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
								overflow: "hidden",
							}}>
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
									gap: "10px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "14px 20px",
									borderBottom: "1px solid #EFE1E4",
								}}>
								<label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}>
									Search
									<input
										type="search"
										placeholder="Name or mobile number"
										style={{
											minHeight: "42px",
											padding: "0 12px",
											borderRadius: "10px",
											border: "1.5px solid #E6CBD5",
											background: "#FFFDFB",
											fontFamily: "inherit",
											fontSize: "14px",
											color: "#2A2627",
											width: "240px",
										}}
									/>
								</label>
								<label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: "600" }}>
									Branch{" "}
									<select
										style={{
											minHeight: "42px",
											padding: "0 12px",
											borderRadius: "10px",
											border: "1.5px solid #E6CBD5",
											background: "#FFFDFB",
											fontFamily: "inherit",
											fontSize: "14px",
											color: "#2A2627",
										}}>
										<option>All branches</option>
										<option>Malaybalay — Poblacion</option>
										<option>Malaybalay — Purok 4B</option>
										<option>Valencia City</option>
										<option>Maramag</option>
									</select>
								</label>
							</div>
							<div style={{ overflowX: "auto" }}>
								<div style={{ minWidth: "700px" }}>
									<div
										style={{
											display: "grid",
											gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1.2fr) 70px 110px 100px minmax(0, 1fr)",
											gap: "10px",
											padding: "11px 20px",
											fontSize: "11px",
											fontWeight: "700",
											letterSpacing: "0.08em",
											color: "#665859",
											background: "#FFF5F7",
										}}>
										<span>CLIENT</span>
										<span>HOME BRANCH</span>
										<span>VISITS</span>
										<span>LAST VISIT</span>
										<span style={{ textAlign: "right" }}>TOTAL SPENT</span>
										<span>TAGS</span>
									</div>
									{(v.rows || []).map((r, i0) => (
										<button
											key={i0}
											type="button"
											onClick={r.pick}
											style={{
												width: "100%",
												display: "grid",
												gridTemplateColumns: "minmax(0, 1.4fr) minmax(0, 1.2fr) 70px 110px 100px minmax(0, 1fr)",
												gap: "10px",
												padding: "11px 20px",
												alignItems: "center",
												border: "0",
												borderTop: "1px solid #F8EDF0",
												background: r.bg,
												fontFamily: "inherit",
												fontSize: "14px",
												color: "#2A2627",
												textAlign: "left",
												cursor: "pointer",
											}}>
											<span>
												<strong>{r.name}</strong>
												<span style={{ display: "block", fontSize: "12px", color: "#665859" }}>{r.phone}</span>
											</span>
											<span style={{ color: "#665859" }}>{r.branch}</span>
											<span>{r.visits}</span>
											<span style={{ color: "#665859" }}>{r.last}</span>
											<strong style={{ textAlign: "right" }}>{r.spent}</strong>
											<span style={{ fontSize: "12px", fontWeight: "600", color: "#A8174F" }}>{r.tags}</span>
										</button>
									))}
								</div>
							</div>
						</section>
						<aside
							aria-label="Customer profile"
							style={{
								flex: "1 1 320px",
								background: "#FFFDFB",
								borderRadius: "16px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
								overflow: "hidden",
							}}>
							<div
								style={{
									background: "#2A2627",
									color: "#FFFFFF",
									padding: "20px 22px",
									display: "flex",
									gap: "14px",
									alignItems: "center",
								}}>
								<div
									aria-hidden="true"
									style={{
										width: "52px",
										height: "52px",
										borderRadius: "999px",
										background: "#D6246E",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										fontWeight: "700",
										fontSize: "18px",
									}}>
									{v.c.initials}
								</div>
								<div>
									<p style={{ margin: "0", fontSize: "18px", fontWeight: "700" }}>{v.c.name}</p>
									<p style={{ margin: "0", fontSize: "13px", color: "#E9E1DA" }}>
										{v.c.phone} · {v.c.branch}
									</p>
								</div>
							</div>
							<div style={{ padding: "18px 22px", display: "flex", flexDirection: "column", gap: "16px" }}>
								<div
									style={{
										display: "grid",
										gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
										gap: "10px",
										textAlign: "center",
									}}>
									<div style={{ padding: "10px", borderRadius: "12px", background: "#FFF4F6" }}>
										<div style={{ fontWeight: "700", fontSize: "18px" }}>{v.c.visits}</div>
										<div style={{ fontSize: "11px", color: "#665859" }}>Visits</div>
									</div>
									<div style={{ padding: "10px", borderRadius: "12px", background: "#FFF4F6" }}>
										<div style={{ fontWeight: "700", fontSize: "18px" }}>{v.c.spent}</div>
										<div style={{ fontSize: "11px", color: "#665859" }}>Spent</div>
									</div>
									<div style={{ padding: "10px", borderRadius: "12px", background: "#FFF4F6" }}>
										<div style={{ fontWeight: "700", fontSize: "18px" }}>{v.c.saved}</div>
										<div style={{ fontSize: "11px", color: "#665859" }}>Promo savings</div>
									</div>
								</div>
								<div>
									<h2 style={{ margin: "0 0 6px", fontSize: "13px" }}>Notes</h2>
									<p style={{ margin: "0", fontSize: "14px", color: "#4A3F40" }}>{v.c.note}</p>
								</div>
								<div>
									<h2 style={{ margin: "0 0 6px", fontSize: "13px" }}>Visit history</h2>
									{(v.c.history || []).map((v, i0) => (
										<div
											key={i0}
											style={{
												display: "flex",
												justifyContent: "space-between",
												gap: "10px",
												padding: "8px 0",
												borderBottom: "1px solid #F8EDF0",
												fontSize: "13px",
											}}>
											<span>
												<strong>{v.date}</strong> · {v.service}
											</span>
											<span>{v.amt}</span>
										</div>
									))}
								</div>
								<div style={{ display: "flex", gap: "8px" }}>
									<Link
										to="/admin-bookings"
										style={{
											flex: "1",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											minHeight: "44px",
											borderRadius: "10px",
											background: "#D6246E",
											color: "#FFFFFF",
											fontWeight: "600",
											textDecoration: "none",
											boxShadow: "0 10px 22px -10px rgba(214,36,110,0.65)",
										}}>
										Book again
									</Link>
									<button
										type="button"
										style={{
											flex: "1",
											minHeight: "44px",
											borderRadius: "10px",
											border: "1.5px solid #E6CBD5",
											background: "#FFFDFB",
											fontFamily: "inherit",
											fontWeight: "600",
											cursor: "pointer",
										}}>
										Edit
									</button>
								</div>
							</div>
						</aside>
					</div>
				</main>
			</div>
		);
	}
}
