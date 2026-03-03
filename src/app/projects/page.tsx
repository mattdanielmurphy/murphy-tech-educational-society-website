import styles from "./projects.module.css"

export default function Projects() {
	return (
		<div className='container'>
			<header className={styles.header}>
				<h1>Our Work</h1>
				<p className={styles.lead}>Free educational and social benefit software for everyone.</p>
			</header>

			<div className={styles.content}>
				<section className={styles.philosophy}>
					<h2>Software for the Public Good</h2>
					<p>
						The Atlas Educational Society develops and maintains software with the primary goal of providing educational and social benefit. All our applications are distributed for free on major
						digital platforms.
					</p>
					<div className={styles.badge}>
						<span>No Ads</span>
						<span>No Purchases</span>
						<span>No Tracking</span>
					</div>
				</section>

				<section className={styles.projectList}>
					<div className={styles.placeholderCard}>
						<h3>Coming Soon</h3>
						<p>We are currently in the development phase for our initial suite of educational applications. Check back soon for updates on our first releases!</p>
						<div className={styles.platforms}>
							<span>Available soon on:</span>
							<div className={styles.platformIcons}>
								<span className={styles.icon}>App Store</span>
								<span className={styles.icon}>Google Play</span>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
