import styles from "./board.module.css"

const directors = [
	{
		name: "Matthew Daniel Murphy",
		title: "President & Secretary-Treasurer",
		link: "https://mattmurphy.ca",
		initials: "MM",
	},
	{
		name: "Darryl Lee Murphy",
		title: "Vice President",
		link: null,
		initials: "DM",
	},
	{
		name: "Connie Rosalind Murphy",
		title: "Director",
		link: null,
		initials: "CM",
	},
]

export default function Board() {
	return (
		<div className={styles.wrapper}>
			<div className='page-header'>
				<div className='container'>
					<h1>Board of Directors</h1>
					<p className='lead'>The leadership team dedicated to the mission of Atlas Educational Society.</p>
				</div>
			</div>

			<div className='container'>
				<div className={styles.content}>
					{/* Directors */}
					<div className={styles.directorsGrid}>
						{directors.map((director, index) => (
							<div key={index} className={styles.directorCard}>
								<div className={styles.avatar}>{director.initials}</div>
								<h3 className={styles.directorName}>
									{director.link ?
										<a href={director.link} target='_blank' rel='noopener noreferrer' className={styles.directorLink}>
											{director.name} ↗
										</a>
									:	director.name}
								</h3>
								<p className={styles.directorTitle}>{director.title}</p>
							</div>
						))}
					</div>

					{/* Governance */}
					<div className={styles.governanceCard}>
						<div className={styles.governanceIcon} aria-hidden='true'>
							⚖️
						</div>
						<div>
							<h2 className={styles.governanceTitle}>Governance Structure</h2>
							<p>
								The Atlas Educational Society is governed by a Board of Directors who serve to ensure the organization remains true to its mission and objects. The board is responsible for strategic
								oversight, financial accountability, and ensuring all activities align with the society's non-profit status in Alberta.
							</p>
							<p>
								All directors serve as <strong>volunteers</strong>, reflecting our commitment to maximizing the social benefit of our software initiatives.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
