import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footerGrid}>
					<div className={styles.orgInfo}>
						<h3>Atlas Educational Society</h3>
						<p>A registered nonprofit society in Alberta, Canada.</p>
						<p>
							221 Westbrook Wynd
							<br />
							Fort Saskatchewan, AB T8L 0L6
							<br />
							Canada
						</p>
					</div>
					<div className={styles.links}>
						<h4>Quick Links</h4>
						<ul>
							<li>
								<Link href='/'>Home</Link>
							</li>
							<li>
								<Link href='/about'>About Us</Link>
							</li>
							<li>
								<Link href='/board'>Board of Directors</Link>
							</li>
							<li>
								<Link href='/projects'>Our Projects</Link>
							</li>
							<li>
								<Link href='/contact'>Contact</Link>
							</li>
							<li>
								<Link href='/legal'>Legal & Governance</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.bottomBar}>
					<p>&copy; {currentYear} Atlas Educational Society. All rights reserved.</p>
					<p>Official Name: 2794788 ALBERTA SOCIETY</p>
				</div>
			</div>
		</footer>
	)
}
