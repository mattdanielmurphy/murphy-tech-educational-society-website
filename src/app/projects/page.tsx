import styles from "./projects.module.css"

const principles = [
	{
		icon: "🎓",
		label: "Educational Value",
		desc: "Every project must provide genuine educational or skill-building benefit.",
	},
	{
		icon: "🤝",
		label: "Social Benefit",
		desc: "Software focused on positive social impact and public good.",
	},
	{
		icon: "🔓",
		label: "Open Access",
		desc: "Distributed freely on major platforms — App Store, Google Play, and beyond.",
	},
]

const platforms = ["App Store", "Google Play"]

export default function Projects() {
	return (
		<div className={styles.wrapper}>
			<div className='page-header'>
				<div className='container'>
					<h1>Our Work</h1>
					<p className='lead'>Free educational and socially beneficial software for everyone.</p>
				</div>
			</div>

			<div className='container'>
				<div className={styles.content}>
					{/* Philosophy */}
					<section className={styles.philosophySection}>
						<div className={styles.philosophyChips}>
							<span className='chip'>No Ads</span>
							<span className='chip'>No Purchases</span>
							<span className='chip'>No Tracking</span>
						</div>
						<h2 className={styles.philosophyTitle}>Software for the Public Good</h2>
						<p className={styles.philosophyDesc}>
							The Atlas Educational Society onboards and publishes software with the primary goal of providing educational and social benefit. All applications in our suite are distributed for free on
							major digital platforms.
						</p>
					</section>

					{/* Principles grid */}
					<div className={styles.principlesGrid}>
						{principles.map((p) => (
							<div key={p.label} className={styles.principleCard}>
								<span className={styles.principleIcon}>{p.icon}</span>
								<h3 className={styles.principleLabel}>{p.label}</h3>
								<p className={styles.principleDesc}>{p.desc}</p>
							</div>
						))}
					</div>

					{/* Coming soon */}
					<div className={styles.comingSoonCard}>
						<div className={styles.comingSoonGlow} aria-hidden='true' />
						<div className={styles.comingSoonBadge}>In Pipeline</div>
						<h2 className={styles.comingSoonTitle}>Coming Soon</h2>
						<p className={styles.comingSoonDesc}>
							We are currently onboarding a suite of educational applications licensed for free public distribution. Our mission is to ensure these high-impact tools are maintained and delivered to
							the community at no cost.
						</p>
						<div className={styles.platformsRow}>
							<span className={styles.platformsLabel}>Available soon on</span>
							<div className={styles.platformPills}>
								{platforms.map((p) => (
									<span key={p} className={styles.platformPill}>
										{p}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
