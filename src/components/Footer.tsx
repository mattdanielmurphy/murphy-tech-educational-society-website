import Image from "next/image"
import Link from "next/link"
import styles from "./Footer.module.css"

const quickLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About Us" },
	{ href: "/board", label: "Board of Directors" },
	{ href: "/projects", label: "Our Projects" },
	{ href: "/contact", label: "Contact" },
	{ href: "/legal", label: "Legal & Governance" },
]

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className={styles.footerGlow} aria-hidden='true' />
			<div className='container'>
				<div className={styles.footerTop}>
					{/* Brand column */}
					<div className={styles.brand}>
						<div className={styles.logoMark}>
							<Image src='/globe.svg' alt='Atlas globe logo' width={36} height={35} priority />
						</div>
						<h3 className={styles.brandName}>Atlas Educational Society</h3>
						<p className={styles.brandDesc}>A registered nonprofit society in Alberta, Canada — dedicated to publishing free educational software and games for the public good.</p>
						<div className={styles.chips}>
							<span className={styles.chip}>No Ads</span>
							<span className={styles.chip}>No Purchases</span>
							<span className={styles.chip}>Always Free</span>
						</div>
					</div>

					{/* Quick links */}
					<div className={styles.linksCol}>
						<h4 className={styles.colHeading}>Quick Links</h4>
						<ul className={styles.linkList}>
							{quickLinks.map(({ href, label }) => (
								<li key={href}>
									<Link href={href} className={styles.footerLink}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact info */}
					<div className={styles.contactCol}>
						<h4 className={styles.colHeading}>Location</h4>
						<address className={styles.address}>
							Fort Saskatchewan, Alberta
							<br />
							Canada
						</address>
						<div className={styles.contactAction}>
							<Link href='/contact' className={styles.contactBtn}>
								Send a Message →
							</Link>
						</div>
					</div>
				</div>

				<div className={styles.bottomBar}>
					<p>© {currentYear} Atlas Educational Society. All rights reserved.</p>
					<p className={styles.officialName}>Official name: 2794788 Alberta Society</p>
				</div>
			</div>
		</footer>
	)
}
