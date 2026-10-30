import { Component as ReactComponent } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar.jsx";
import AdminTopbar from "../components/AdminTopbar.jsx";

export default class AdminDashboard extends ReactComponent {
	renderVals() {
		const S = {
			Completed: ["#F1E8EA", "#2A2627"],
			Confirmed: ["#E3EDF8", "#1D4F8C"],
			Pending: ["#FCEFD9", "#8A5100"],
			"No-show": ["#FDE7EE", "#D6246E"],
		};
		const R = [
			["8:00", "Maria S.", "Website", "Hair Cut / Blowdry / Iron", "Malaybalay Pob.", "Ana", "Completed", "₱199"],
			["8:30", "Jessa L.", "Walk-in", "Gel Manicure", "Purok 4B", "Liza", "Completed", "₱499"],
			["9:00", "Kristine D.", "Website", "Classic Lash — Natural", "Valencia", "Mae", "Confirmed", "₱499"],
			["10:00", "Rhea M.", "Messenger", "Protein Straight Bond — Long", "Malaybalay Pob.", "Ana", "Confirmed", "₱3,999"],
			["10:30", "Joy P.", "Website", "Korean Signature Facial", "Maramag", "Grace", "Pending", "₱749"],
			["11:00", "Carlo B.", "Phone", "Hair Cut / Blowdry / Iron", "Purok 4B", "Jun", "Confirmed", "₱199"],
			["13:00", "Angel T.", "Website", "Microshading", "Valencia", "Mae", "Pending", "₱999"],
			["14:00", "Lovely R.", "Website", "Botox Alartox", "Maramag", "[Doctor]", "Pending", "₱1,999"],
			["15:30", "Nica F.", "Website", "Organic Hair Color", "Malaybalay Pob.", "Ana", "Confirmed", "₱999"],
		];
		const rows = R.map((r) => ({
			time: r[0],
			client: r[1],
			src: r[2],
			service: r[3],
			branch: r[4],
			staff: r[5],
			status: r[6],
			price: r[7],
			sbg: S[r[6]][0],
			sfg: S[r[6]][1],
		}));
		const pending = R.filter((r) => r[6] === "Pending").map((r) => ({
			client: r[1],
			time: "Today " + r[0],
			service: r[3],
			branch: r[4],
		}));
		const B = [
			["Malaybalay — Poblacion", 6],
			["Malaybalay — Purok 4B", 5],
			["Valencia City", 4],
			["Maramag", 3],
		];
		const byBranch = B.map((b) => ({ name: b[0], n: b[1], w: Math.round((b[1] / 6) * 100) + "%" }));
		return { rows, pending, byBranch };
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
						gap: "24px",
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
								Monday, 19 October 2026{" "}
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
								Good morning, [Admin name]
							</h1>
						</div>
						<div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
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
									}}>
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
								+ Walk-in
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
								+ New booking
							</button>
						</div>
					</div>
					<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
						<div
							style={{
								background: "#FFFDFB",
								borderRadius: "16px",
								padding: "18px 20px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
							}}>
							<p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#665859" }}>Bookings today</p>
							<p
								style={{
									margin: "4px 0 0",
									fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
									fontSize: "30px",
									fontWeight: "700",
									letterSpacing: "-0.01em",
								}}>
								18
							</p>
							<p style={{ margin: "0", fontSize: "12px", color: "#665859" }}>11 booked online · 7 walk-in / phone</p>
						</div>
						<div
							style={{
								background: "#FFFDFB",
								borderRadius: "16px",
								padding: "18px 20px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
							}}>
							<p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#665859" }}>Awaiting confirmation</p>
							<p
								style={{
									margin: "4px 0 0",
									fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
									fontSize: "30px",
									fontWeight: "700",
									letterSpacing: "-0.01em",
									color: "#9A5B00",
								}}>
								3
							</p>
							<p style={{ margin: "0", fontSize: "12px", color: "#665859" }}>Oldest request 42 min ago</p>
						</div>
						<div
							style={{
								background: "#FFFDFB",
								borderRadius: "16px",
								padding: "18px 20px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
							}}>
							<p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#665859" }}>Expected sales today </p>
							<p
								style={{
									margin: "4px 0 0",
									fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
									fontSize: "30px",
									fontWeight: "700",
									letterSpacing: "-0.01em",
								}}>
								₱21,450
							</p>
							<p style={{ margin: "0", fontSize: "12px", color: "#665859" }}>At promo prices</p>
						</div>
						<div
							style={{
								background: "#FFFDFB",
								borderRadius: "16px",
								padding: "18px 20px",
								border: "1px solid #EFE1E4",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
							}}>
							<p style={{ margin: "0", fontSize: "12px", fontWeight: "600", color: "#665859" }}>Chairs free now</p>
							<p
								style={{
									margin: "4px 0 0",
									fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
									fontSize: "30px",
									fontWeight: "700",
									letterSpacing: "-0.01em",
								}}>
								5 of 14
							</p>
							<p style={{ margin: "0", fontSize: "12px", color: "#665859" }}>Across 4 branches</p>
						</div>
					</div>
					<div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start" }}>
						<section
							style={{
								flex: "999 1 560px",
								minWidth: "0",
								background: "#FFFDFB",
								borderRadius: "16px",
								border: "1px solid #EFE1E4",
								overflow: "hidden",
								boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
							}}>
							<div
								style={{
									display: "flex",
									flexWrap: "wrap",
									gap: "10px",
									justifyContent: "space-between",
									alignItems: "center",
									padding: "16px 20px",
									borderBottom: "1px solid #EFE1E4",
								}}>
								<h2 style={{ margin: "0", fontSize: "16px" }}>Today’s schedule</h2>
								<div style={{ display: "flex", gap: "6px", fontSize: "12px", fontWeight: "600" }}>
									<span style={{ padding: "6px 12px", borderRadius: "999px", background: "#2A2627", color: "#FFFFFF" }}>All</span>
									<span style={{ padding: "6px 12px", borderRadius: "999px", background: "#F8EDF0" }}>Pending</span>
									<span style={{ padding: "6px 12px", borderRadius: "999px", background: "#F8EDF0" }}>Confirmed</span>
									<span style={{ padding: "6px 12px", borderRadius: "999px", background: "#F8EDF0" }}>Completed</span>
								</div>
							</div>
							<div style={{ overflowX: "auto" }}>
								<div style={{ minWidth: "760px" }}>
									<div
										style={{
											display: "grid",
											gridTemplateColumns: "70px minmax(0, 1.2fr) minmax(0, 1.8fr) minmax(0, 1.3fr) 80px 110px 90px",
											gap: "10px",
											padding: "10px 20px",
											fontSize: "11px",
											fontWeight: "700",
											letterSpacing: "0.08em",
											color: "#665859",
											background: "#FFF5F7",
										}}>
										<span>TIME</span>
										<span>CLIENT</span>
										<span>SERVICE</span>
										<span>BRANCH</span>
										<span>STAFF</span>
										<span>STATUS</span>
										<span style={{ textAlign: "right" }}>PRICE</span>
									</div>
									{(v.rows || []).map((r, i0) => (
										<div
											key={i0}
											style={{
												display: "grid",
												gridTemplateColumns: "70px minmax(0, 1.2fr) minmax(0, 1.8fr) minmax(0, 1.3fr) 80px 110px 90px",
												gap: "10px",
												padding: "12px 20px",
												alignItems: "center",
												borderTop: "1px solid #F8EDF0",
											}}>
											<span style={{ fontWeight: "700" }}>{r.time}</span>
											<span>
												{r.client}
												<span style={{ display: "block", fontSize: "11px", color: "#665859" }}>{r.src}</span>
											</span>
											<span>{r.service}</span>
											<span style={{ color: "#665859" }}>{r.branch}</span>
											<span>{r.staff}</span>
											<span
												style={{
													justifySelf: "start",
													fontSize: "12px",
													fontWeight: "700",
													padding: "3px 10px",
													borderRadius: "999px",
													background: r.sbg,
													color: r.sfg,
												}}>
												{r.status}
											</span>
											<span style={{ textAlign: "right", fontWeight: "600" }}>{r.price}</span>
										</div>
									))}
								</div>
							</div>
						</section>
						<div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "20px" }}>
							<section
								style={{
									background: "#FFFDFB",
									borderRadius: "16px",
									border: "1px solid #EFE1E4",
									padding: "18px 20px",
									display: "flex",
									flexDirection: "column",
									gap: "12px",
									boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
								}}>
								<h2 style={{ margin: "0", fontSize: "16px" }}>Booking requests</h2>
								{(v.pending || []).map((p, i0) => (
									<div
										key={i0}
										style={{
											border: "1px solid #F0D9A9",
											background: "#FFFAF0",
											borderRadius: "12px",
											padding: "12px 14px",
											display: "flex",
											flexDirection: "column",
											gap: "8px",
										}}>
										<div style={{ display: "flex", justifyContent: "space-between", gap: "8px" }}>
											<strong>{p.client}</strong>
											<span style={{ fontSize: "12px", color: "#665859" }}>{p.time}</span>
										</div>
										<span style={{ fontSize: "13px" }}>
											{p.service} · {p.branch}
										</span>
										<div style={{ display: "flex", gap: "8px" }}>
											<button
												type="button"
												style={{
													flex: "1",
													minHeight: "40px",
													borderRadius: "8px",
													border: "0",
													background: "#D6246E",
													color: "#FFFFFF",
													fontFamily: "inherit",
													fontWeight: "600",
													cursor: "pointer",
												}}>
												Confirm
											</button>
											<button
												type="button"
												style={{
													flex: "1",
													minHeight: "40px",
													borderRadius: "8px",
													border: "1.5px solid #E6CBD5",
													background: "#FFFDFB",
													fontFamily: "inherit",
													fontWeight: "600",
													cursor: "pointer",
												}}>
												Suggest time
											</button>
										</div>
									</div>
								))}
							</section>
							<section
								style={{
									background: "#FFFDFB",
									borderRadius: "16px",
									border: "1px solid #EFE1E4",
									padding: "18px 20px",
									display: "flex",
									flexDirection: "column",
									gap: "10px",
									boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
								}}>
								<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
									<h2 style={{ margin: "0", fontSize: "16px" }}>Live promo</h2>
									<Link to="/admin-promos" style={{ fontSize: "13px", fontWeight: "600" }}>
										Manage
									</Link>
								</div>
								<div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
									<div
										style={{
											width: "64px",
											height: "64px",
											flexShrink: "0",
											borderRadius: "999px",
											border: "2px solid #C8A96E",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											fontFamily: "'Playfair Display', Georgia, serif",
											fontWeight: "700",
											fontSize: "20px",
											color: "#D6246E",
										}}>
										50%
									</div>
									<div>
										<strong>50% OFF All Services</strong>
										<p style={{ margin: "0", fontSize: "12px", color: "#665859" }}>All 4 branches · ends [end date] · 112 bookings used it</p>
									</div>
								</div>
							</section>
							<section
								style={{
									background: "#FFFDFB",
									borderRadius: "16px",
									border: "1px solid #EFE1E4",
									padding: "18px 20px",
									display: "flex",
									flexDirection: "column",
									gap: "12px",
									boxShadow: "0 1px 2px rgba(42,38,39,0.05), 0 10px 28px -14px rgba(42,38,39,0.18)",
								}}>
								<h2 style={{ margin: "0", fontSize: "16px" }}>Bookings by branch, today</h2>
								{(v.byBranch || []).map((b, i0) => (
									<div key={i0} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
										<div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
											<span>{b.name}</span>
											<strong>{b.n}</strong>
										</div>
										<div style={{ height: "8px", borderRadius: "999px", background: "#F8EDF0" }}>
											<div style={{ height: "8px", borderRadius: "999px", background: "#F28BB0", width: b.w }} />
										</div>
									</div>
								))}
							</section>
						</div>
					</div>
				</main>
			</div>
		);
	}
}
