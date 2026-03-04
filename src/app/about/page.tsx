import styles from "./about.module.css"

const legalFacts = [
	{ label: "Official Name", value: "2794788 ALBERTA SOCIETY" },
	{ label: "Operating Name", value: "Atlas Educational Society" },
	{ label: "Type", value: "Nonprofit, Non-charitable Organization" },
	{ label: "Governing Act", value: "Societies Act (Alberta)" },
	{ label: "Headquarters", value: "Fort Saskatchewan, Alberta" },
]

const noList = ["Charge for app downloads", "Include in-app purchases or subscriptions", "Display advertisements in our software", "Sell user data", "Sell any products or services"]

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
						<h2 className={styles.sectionTitle}>Why We Exist</h2>
						<p>
							Atlas Educational Society is established with a clear and singular focus: to create and distribute software that serves the public good. Our primary object is to publish, maintain, and
							promote free educational, recreational, and socially beneficial software applications and games for the general public.
						</p>
						<p>We believe that technology should be a tool for empowerment and learning, accessible to everyone regardless of their financial situation.</p>
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
						<h2 className={styles.sectionTitle}>Software That Stays Free</h2>
						<p>
							A core pillar of our organization is that <strong>all applications and games published by the society are provided completely free of charge.</strong> To ensure our mission remains
							focused on social benefit rather than profit, we commit to never:
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
						<span className={styles.sectionLabel}>What We Build</span>
						<h2 className={styles.sectionTitle}>Educational & Social Focus</h2>
						<p>
							Our development efforts prioritize projects that have clear educational value or provide specific social benefits. Whether it's a tool for learning a new skill or a recreational game
							designed for positive social interaction, every project is evaluated against our mission to serve the general public.
						</p>
					</section>
				</div>
			</div>
		</div>
	)
}
