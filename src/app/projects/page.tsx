import Image from "next/image"
import Link from "next/link"
import styles from "./projects.module.css"

interface ProjectItem {
	title: string
	category: string
	tagline: string
	description: string
	platforms: string[]
	highlights: string[]
	status: string
	imageSrc?: string
	fallbackGradient: string
	icon: string
}

const projects: ProjectItem[] = [
	{
		title: "Atlas Calculator",
		category: "STEM & Mathematics",
		tagline: "Natural language calculation environment & mathematical scratchpad",
		description:
			"An intuitive desktop and web calculation tool featuring live multi-line evaluation, natural language unit conversions, physical constants, WYSIWYG stacked fractions, and synchronized line references. Built to give students a high-productivity calculation workspace without subscriptions or paywalls.",
		platforms: ["Desktop (macOS / Linux / Windows)", "Web", "CLI"],
		highlights: ["Natural Language Units & SI Conversions", "WYSIWYG Fractions & Superscripts", "Physics Constants Scope", "Zero Telemetry & Private"],
		status: "Active Release",
		imageSrc: "/projects/atlas-calculator.png",
		fallbackGradient: "linear-gradient(135deg, #1e3a8a, #0ea5e9)",
		icon: "🧮",
	},
	{
		title: "UAlberta Campus Map Studio",
		category: "Civic Cartography",
		tagline: "Infinite-resolution vector campus navigation & heated pedway network",
		description:
			"A crisp SVG vector map and indoor navigation studio for the University of Alberta North Campus. Designed specifically for Edmonton winter conditions, featuring detailed indoor heated pedway corridors, building footprints, and instant building search without blurry raster tiles.",
		platforms: ["Web", "Mobile Web"],
		highlights: ["True SVG Vector Rendering", "Heated Pedway Corridors", "Sub-Zero Indoor Winter Routing", "Instant Building Search"],
		status: "Live Beta",
		imageSrc: "/projects/uofa-campus-map.png",
		fallbackGradient: "linear-gradient(135deg, #065f46, #10b981)",
		icon: "🗺️",
	},
	{
		title: "UAlberta Open Student Hub",
		category: "Student Utility & Accessibility",
		tagline: "Native mobile client with persistent Single Sign-On and digital OneCard",
		description:
			"A modern native iOS student client built to eliminate repetitive logins across university portals. Features a shared persistent SSO session engine, embedded offline vector campus mapping, live ETS LRT departure boards, and a high-contrast digital OneCard barcode for library and recreation scanning.",
		platforms: ["iOS (SwiftUI)"],
		highlights: ["Persistent Single Sign-On Engine", "Digital OneCard Barcode Scanner", "Offline Vector Map Integration", "Live Transit LRT Departures"],
		status: "In Development",
		imageSrc: "/projects/uofa-student-app.png",
		fallbackGradient: "linear-gradient(135deg, #047857, #f59e0b)",
		icon: "📱",
	},
	{
		title: "Typery",
		category: "Foundational Literacy",
		tagline: "Adaptive speed reading & touch typing tutor for students",
		description:
			"A distraction-free typing mastery platform supporting custom literature imports (EPUB, PDF, TXT) and real-time WPM metrics. Empowers students to build touch typing fluency using their own study materials and classic literature.",
		platforms: ["Web", "PWA"],
		highlights: ["EPUB & PDF Book Import", "Adaptive WPM Tracking", "Distraction-Free Reading Mode", "100% Offline Capable"],
		status: "Active",
		imageSrc: "/projects/typery.png",
		fallbackGradient: "linear-gradient(135deg, #4338ca, #8b5cf6)",
		icon: "⌨️",
	},
]

const principles = [
	{
		icon: "🎓",
		label: "Educational Value",
		desc: "Every project must provide genuine educational, academic, or skill-building benefit.",
	},
	{
		icon: "🤝",
		label: "Social Benefit",
		desc: "Software focused strictly on positive social impact, accessibility, and public good.",
	},
	{
		icon: "🔓",
		label: "Always Free & Open",
		desc: "Distributed freely on major platforms with no subscriptions, advertisements, or data harvesting.",
	},
]

export default function Projects() {
	return (
		<div className={styles.wrapper}>
			<div className='page-header'>
				<div className='container'>
					<h1>Software Initiatives</h1>
					<p className='lead'>Free, accessible, and high-utility software engineered for students, educators, and the public.</p>
				</div>
			</div>

			<div className='container'>
				<div className={styles.content}>
					{/* Philosophy Banner */}
					<section className={styles.philosophySection}>
						<div className={styles.philosophyChips}>
							<span className='chip'>100% Free</span>
							<span className='chip'>No Ads</span>
							<span className='chip'>No In-App Purchases</span>
							<span className='chip'>No Data Harvesting</span>
						</div>
						<h2 className={styles.philosophyTitle}>Software Engineered for Public Good</h2>
						<p className={styles.philosophyDesc}>
							The Atlas Educational Society develops and publishes software with a singular objective: providing accessible educational and civic benefit. Every tool in our portfolio is distributed completely free of charge.
						</p>
					</section>

					{/* Project Showcase List */}
					<section className={styles.projectsSection}>
						<div className={styles.projectsGrid}>
							{projects.map((proj) => (
								<article key={proj.title} className={styles.projectCard}>
									{/* Media Frame */}
									<div className={styles.mediaFrame}>
										{proj.imageSrc === "/projects/atlas-calculator.png" ? (
											<div className={styles.imageContainer}>
												<Image
													src={proj.imageSrc}
													alt={proj.title}
													fill
													sizes='(max-width: 900px) 100vw, 900px'
													className={styles.projectImage}
													priority
												/>
											</div>
										) : (
											<div className={styles.placeholderMockup} style={{ background: proj.fallbackGradient }}>
												<span className={styles.mockupIcon}>{proj.icon}</span>
												<span className={styles.mockupTitle}>{proj.title}</span>
												<span className={styles.mockupTag}>{proj.category}</span>
											</div>
										)}
										<div className={styles.statusBadge}>{proj.status}</div>
									</div>

									{/* Project Info */}
									<div className={styles.projectBody}>
										<div className={styles.projectMeta}>
											<span className={styles.projectCategory}>{proj.category}</span>
										</div>
										<h2 className={styles.projectTitle}>{proj.title}</h2>
										<p className={styles.projectTagline}>{proj.tagline}</p>
										<p className={styles.projectDesc}>{proj.description}</p>

										{/* Key Highlights */}
										<div className={styles.highlightsWrap}>
											<span className={styles.highlightsHeading}>Key Capabilities:</span>
											<ul className={styles.highlightsList}>
												{proj.highlights.map((item) => (
													<li key={item} className={styles.highlightItem}>
														<span className={styles.checkIcon} aria-hidden='true'>✓</span>
														{item}
													</li>
												))}
											</ul>
										</div>

										{/* Platforms */}
										<div className={styles.platformsFooter}>
											<span className={styles.platformsLabel}>Platforms:</span>
											<div className={styles.platformPills}>
												{proj.platforms.map((plat) => (
													<span key={plat} className={styles.platformPill}>
														{plat}
													</span>
												))}
											</div>
										</div>
									</div>
								</article>
							))}
						</div>
					</section>

					{/* Principles Grid */}
					<section className={styles.principlesSection}>
						<div className={styles.sectionHeader}>
							<span className='chip'>Our Standards</span>
							<h2 className={styles.principlesTitle}>The Atlas Software Standard</h2>
						</div>
						<div className={styles.principlesGrid}>
							{principles.map((p) => (
								<div key={p.label} className={styles.principleCard}>
									<span className={styles.principleIcon}>{p.icon}</span>
									<h3 className={styles.principleLabel}>{p.label}</h3>
									<p className={styles.principleDesc}>{p.desc}</p>
								</div>
							))}
						</div>
					</section>

					{/* Contact CTA */}
					<div className={styles.bottomCta}>
						<h2>Have an educational tool or idea?</h2>
						<p>We welcome collaborations, student feedback, and proposals for civic technology initiatives.</p>
						<Link href='/contact' className='btn-primary'>
							Connect With Us →
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
