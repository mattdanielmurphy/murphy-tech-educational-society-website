"use client"

import Link from "next/link"
import styles from "./Header.module.css"
import { usePathname } from "next/navigation"

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/board", label: "Board" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
]

export default function Header() {
	const pathname = usePathname()

	return (
		<header className={styles.header}>
			<div className={`container ${styles.headerContainer}`}>
				<div className={styles.logo}>
					<Link href='/' className={styles.logoLink}>
						<div className={styles.logoMark}>
							<span>A</span>
						</div>
						<div className={styles.logoText}>
							<span className={styles.logoName}>Atlas Educational Society</span>
							<span className={styles.logoSub}>2794788 Alberta Society</span>
						</div>
					</Link>
				</div>

				<nav className={styles.nav} aria-label='Main navigation'>
					<ul className={styles.navList}>
						{navLinks.map(({ href, label }) => (
							<li key={href}>
								<Link href={href} className={`${styles.navLink} ${pathname === href ? styles.active : ""}`}>
									{label}
									{pathname === href && <span className={styles.activeDot} aria-hidden='true' />}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link href='/contact' className={styles.ctaButton}>
					Get in Touch
				</Link>
			</div>
		</header>
	)
}
