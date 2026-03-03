import styles from "./about.module.css"

export default function About() {
	return (
		<div className='container'>
			<header className={styles.header}>
				<h1>About Atlas Educational Society</h1>
				<p className={styles.lead}>Dedicated to providing free educational and social benefit through technology.</p>
			</header>

			<div className={styles.content}>
				<section>
					<h2>Our Purpose</h2>
					<p>
						Atlas Educational Society is established with a clear and singular focus: to create and distribute software that serves the public good. Our primary object is to publish, maintain, and
						promote free educational, recreational, and socially beneficial software applications and games for the general public, and to make such applications freely available without charge
						through digital distribution platforms.
					</p>
					<p>We believe that technology should be a tool for empowerment and learning, accessible to everyone regardless of their financial situation.</p>
				</section>

				<section>
					<h2>Legal Structure & Status</h2>
					<p>
						The Atlas Educational Society is an Alberta society incorporated under the <strong>Societies Act</strong> of Alberta, Canada.
					</p>
					<ul>
						<li>
							<strong>Official Name:</strong> 2794788 ALBERTA SOCIETY
						</li>
						<li>
							<strong>Operating Name:</strong> Atlas Educational Society
						</li>
						<li>
							<strong>Type:</strong> Nonprofit, Non-charitable Organization
						</li>
						<li>
							<strong>Headquarters:</strong> Fort Saskatchewan, Alberta
						</li>
					</ul>
				</section>

				<section>
					<h2>Our Commitment to Free Software</h2>
					<p>
						A core pillar of our organization is that <strong>all applications and games published by the society are provided completely free of charge.</strong>
					</p>
					<p>To ensure our mission remains focused on social benefit rather than profit:</p>
					<ul>
						<li>We do not charge for app downloads.</li>
						<li>We do not include in-app purchases or subscriptions.</li>
						<li>We do not display advertisements in our software.</li>
						<li>We do not sell user data.</li>
						<li>We do not sell any products or services.</li>
					</ul>
				</section>

				<section>
					<h2>Educational & Social Focus</h2>
					<p>
						Our development efforts prioritize projects that have clear educational value or provide specific social benefits. Whether it's a tool for learning a new skill or a recreational game
						designed for positive social interaction, every project is evaluated against our mission to serve the general public.
					</p>
				</section>
			</div>
		</div>
	)
}
