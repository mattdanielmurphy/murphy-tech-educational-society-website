import GlobeCanvas from "@/components/GlobeCanvas"
import Link from "next/link"
import styles from "./page.module.css"

const pillars = [
	{
		icon: "📚",
		title: "Educational Software",
		description: "We distribute applications designed to enhance learning and provide genuine educational value to users of all ages.",
	},
	{
		icon: "🤝",
		title: "Social Benefit",
		description: "Every project is evaluated against our mission to serve the general public — tools that create positive impact.",
	},
	{
		icon: "🔓",
		title: "Always Free",
		description: "All applications published by the society are provided completely free of charge. No ads, no in-app purchases, no tracking.",
	},
]

const commitments = ["No app download fees", "No in-app purchases or subscriptions", "No advertisements", "No user data sold", "No products or services sold"]

export default function Home() {
	return (
		<div className={styles.wrapper}>
			{/* Hero */}
			<section className={styles.hero}>
				<div className={`container ${styles.heroInner}`}>
					{/* Canvas-rendered 3D globe */}
					<div className={styles.heroGlobeWrap} aria-hidden='true'>
						<GlobeCanvas size={140} />
					</div>

					<div className={styles.heroBadge}>
						<span className={styles.badgeDot} />
						Nonprofit Society · Alberta, Canada
					</div>
					<h1 className={styles.heroTitle}>
						Free Software for <br />a <span className={styles.highlight}>Better World</span>
					</h1>
					<p className={styles.heroSubtitle}>The Atlas Educational Society publishes free educational, recreational, and socially beneficial software — no ads, no purchases, no strings attached.</p>
					<div className={styles.heroCta}>
						<Link href='/projects' className='btn-primary'>
							Explore Our Work
						</Link>
						<Link href='/about' className='btn-ghost'>
							Learn More
						</Link>
					</div>
				</div>

				{/* Decorative elements */}
				<div className={styles.heroOrb1} aria-hidden='true' />
				<div className={styles.heroOrb2} aria-hidden='true' />
				<div className={styles.heroGrid} aria-hidden='true' />
			</section>

			{/* Mission Statement */}
			<section className={styles.missionSection}>
				<div className='container'>
					<div className={styles.missionCard}>
						<div className={styles.missionIcon} aria-hidden='true'>
							&ldquo;
						</div>
						<blockquote className={styles.missionText}>
							To publish, maintain, and promote free educational, recreational, and socially beneficial software applications and games for the general public, and to make such applications freely
							available without charge through digital distribution platforms.
						</blockquote>
						<cite className={styles.missionCite}>— Official Mission of the Atlas Educational Society</cite>
					</div>
				</div>
			</section>

			{/* Pillars */}
			<section className={styles.pillarsSection}>
				<div className='container'>
					<div className={styles.sectionHeader}>
						<span className='chip'>What We Do</span>
						<h2 className={styles.sectionTitle}>Published to Serve, Not to Sell</h2>
						<p className={styles.sectionDesc}>Every decision we make is guided by one principle: deliver software that genuinely helps people.</p>
					</div>
					<div className={styles.pillarsGrid}>
						{pillars.map((p) => (
							<div key={p.title} className={styles.pillarCard}>
								<div className={styles.pillarIcon} aria-hidden='true'>
									{p.icon}
								</div>
								<h3 className={styles.pillarTitle}>{p.title}</h3>
								<p className={styles.pillarDesc}>{p.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Commitments banner */}
			<section className={styles.commitSection}>
				<div className='container'>
					<div className={styles.commitCard}>
						<div className={styles.commitLeft}>
							<span className='chip'>Our Commitments</span>
							<h2 className={styles.commitTitle}>Technology as a public resource</h2>
							<p className={styles.commitDesc}>We believe software should be a tool for empowerment, accessible to everyone regardless of their financial situation.</p>
							<Link href='/about' className='btn-primary'>
								About Our Mission
							</Link>
						</div>
						<ul className={styles.commitList}>
							{commitments.map((item) => (
								<li key={item} className={styles.commitItem}>
									<span className={styles.commitCheck} aria-hidden='true'>
										✓
									</span>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* CTA Banner */}
			<section className={styles.ctaSection}>
				<div className='container'>
					<div className={styles.ctaBanner}>
						<div className={styles.ctaOrb} aria-hidden='true' />
						<h2 className={styles.ctaBannerTitle}>Have a question or want to get involved?</h2>
						<p className={styles.ctaBannerDesc}>We&apos;re a small team of volunteers. We appreciate every message and respond to all legitimate inquiries.</p>
						<Link href='/contact' className='btn-primary'>
							Get in Touch →
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}
