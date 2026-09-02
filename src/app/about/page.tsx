import styles from "./about.module.css"

const legalFacts = [
	{ label: "Official Name", value: "2794788 ALBERTA SOCIETY" },
	{ label: "Operating Name", value: "Atlas Educational Society" },
	{ label: "Type", value: "Nonprofit, Non-charitable Organization" },
	{ label: "Governing Act", value: "Societies Act (Alberta)" },
	{ label: "Headquarters", value: "Fort Saskatchewan, Alberta" },
]

const noList = ["Charge for app downloads", "Include in-app purchases or subscriptions", "Display advertisements in published software", "Sell user data", "Sell any products or services"]

export default function About() {
	return (
		<div className={styles.wrapper}>
			{/* Page header */}
			<div className='page-header'>
				<div className='container'>
					<h1>About Atlas Educational Society</h1>
					<p className='lead'>Dedicated to providing free educational and social benefit through technology.</p>
				</div>
			</div>

			<div className='container'>
				<div className={styles.content}>
					{/* Purpose */}
					<section className={styles.section}>
						<span className={styles.sectionLabel}>Our Purpose</span>
						<h2 className={styles.sectionTitle}>Promoting Accessible Education & Civic Tech</h2>
						<p>
							The Atlas Educational Society is established with a clear and singular focus: to promote accessible education, student tools, open educational resources, and civic technology. Our primary object is to develop, maintain, and freely distribute high-utility educational software applications, student utilities, and public data tools for learners, educators, and the general public.
						</p>
						<p>We believe that modern technology should empower learning and civic engagement, remaining freely accessible to everyone regardless of financial situation or background.</p>
					</section>

					{/* Legal */}
					<section className={styles.section}>
						<span className={styles.sectionLabel}>Legal Structure</span>
						<h2 className={styles.sectionTitle}>Registered Nonprofit · Alberta, Canada</h2>
						<p>
							The Atlas Educational Society is incorporated under the <strong>Societies Act</strong> of Alberta, Canada.
						</p>
						<div className={styles.factGrid}>
							{legalFacts.map(({ label, value }) => (
								<div key={label} className={styles.factItem}>
									<dt className={styles.factLabel}>{label}</dt>
									<dd className={styles.factValue}>{value}</dd>
								</div>
							))}
						</div>
					</section>

					{/* Free commitment */}
					<section className={styles.section}>
						<span className={styles.sectionLabel}>Our Commitment</span>
						<h2 className={styles.sectionTitle}>Software That Stays Free & Private</h2>
						<p>
							A core pillar of our organization is that <strong>all applications and resources published by the society are provided completely free of charge.</strong> To ensure our mission remains focused on public social benefit and accessible learning rather than commercial profit, we commit to never:
						</p>
						<ul className={styles.noList}>
							{noList.map((item) => (
								<li key={item} className={styles.noItem}>
									<span className={styles.noIcon} aria-hidden='true'>
										✕
									</span>
									{item}
								</li>
							))}
						</ul>
					</section>

					{/* Focus */}
					<section className={styles.section}>
						<span className={styles.sectionLabel}>Core Initiatives</span>
						<h2 className={styles.sectionTitle}>Educational Tools & Civic Technology</h2>
						<p>
							Our software initiatives center around four core areas:
						</p>
						<p>
							<strong>Student Tools & STEM Learning:</strong> Building intuitive calculation environments, mathematical scratchpads, and academic utilities that make complex problem solving accessible to students at all levels.
						</p>
						<p>
							<strong>Civic Technology & Open Data:</strong> Crafting high-fidelity vector cartography, heated pedestrian indoor route navigation, and community mapping utilities that enhance public transit and campus accessibility.
						</p>
						<p>
							<strong>Open Educational Resources:</strong> Providing interactive typing mastery tools, literature readers, and open educational modules that support foundational literacy and skill-building.
						</p>
						<p>
							<strong>Local-First & Privacy-Preserving Utilities:</strong> Engineering native software that operates entirely on-device, safeguarding student coursework and research notes without remote tracking or third-party telemetry.
						</p>
					</section>
				</div>
			</div>
		</div>
	)
}
