import styles from "./board.module.css"

export default function Board() {
	const directors = [
		{
			name: "Matthew Daniel Murphy",
			title: "President & Secretary-Treasurer",
			link: "https://mattmurphy.ca",
		},
		{
			name: "Darryl Lee Murphy",
			title: "Vice President",
			link: null,
		},
		{
			name: "Connie Rosalind Murphy",
			title: "Director",
			link: null,
		},
	]

	return (
		<div className='container'>
			<header className={styles.header}>
				<h1>Board of Directors</h1>
				<p className={styles.lead}>The leadership team dedicated to the mission of Atlas Educational Society.</p>
			</header>

			<div className={styles.content}>
				<div className={styles.directorsGrid}>
					{directors.map((director, index) => (
						<div key={index} className={styles.directorCard}>
							<h3>
								{director.link ?
									<a href={director.link} target='_blank' rel='noopener noreferrer'>
										{director.name}
									</a>
								:	director.name}
							</h3>
							<p className={styles.title}>{director.title}</p>
						</div>
					))}
				</div>

				<section className={styles.governance}>
					<h2>Governance Structure</h2>
					<p>
						The Atlas Educational Society is governed by a Board of Directors who serve to ensure the organization remains true to its mission and objects. The board is responsible for strategic
						oversight, financial accountability, and ensuring all activities align with the society's non-profit status in Alberta.
					</p>
					<p>All directors serve as volunteers, reflecting our commitment to maximizing the social benefit of our software initiatives.</p>
				</section>
			</div>
		</div>
	)
}
