import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={`container ${styles.headerContainer}`}>
				<div className={styles.logo}>
					<Link href='/'>
						<span className={styles.officialName}>2794788 ALBERTA SOCIETY</span>
						<span className={styles.operatingName}>Atlas Educational Society</span>
					</Link>
				</div>
				<nav className={styles.nav}>
					<ul>
						<li>
							<Link href='/'>Home</Link>
						</li>
						<li>
							<Link href='/about'>About</Link>
						</li>
						<li>
							<Link href='/board'>Board</Link>
						</li>
						<li>
							<Link href='/projects'>Projects</Link>
						</li>
						<li>
							<Link href='/contact'>Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}
