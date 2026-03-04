import styles from "./legal.module.css"

const registryRows = [
	{ label: "Official Registered Name", value: "2794788 ALBERTA SOCIETY" },
	{ label: "Operating Name", value: "Atlas Educational Society" },
	{ label: "Jurisdiction", value: "Alberta, Canada" },
	{ label: "Governing Legislation", value: "Societies Act (Alberta)" },
	{ label: "Organization Type", value: "Nonprofit Society" },
]

const privacyPoints = [
	"We do not share your contact information with third parties.",
	"We do not use your information for marketing purposes.",
	"All communications are handled with strict confidentiality.",
]

export default function Legal() {
	return (
		<div className={styles.wrapper}>
			<div className='page-header'>
				<div className='container'>
					<h1>Legal & Governance</h1>
					<p className='lead'>Official information regarding the Atlas Educational Society.</p>
				</div>
			</div>

			<div className='container'>
				<div className={styles.content}>
					{/* Registry */}
					<section className={styles.section}>
						<span className={styles.sectionLabel}>Corporate Registry</span>
						<h2 className={styles.sectionTitle}>Registry Information</h2>
						<table className={styles.table}>
							<tbody>
								{registryRows.map(({ label, value }) => (
									<tr key={label}>
										<th>{label}</th>
										<td>{value}</td>
									</tr>
								))}
							</tbody>
						</table>
					</section>

					{/* Address */}
					<section className={styles.section}>
						<span className={styles.sectionLabel}>Office</span>
						<h2 className={styles.sectionTitle}>Registered Office Address</h2>
						<p>
							221 Westbrook Wynd
							<br />
							Fort Saskatchewan, AB T8L 0L6
							<br />
							Canada
						</p>
					</section>

					{/* Nonprofit status */}
					<section className={styles.section}>
						<span className={styles.sectionLabel}>Status</span>
						<h2 className={styles.sectionTitle}>Nonprofit Status</h2>
						<p>
							The Atlas Educational Society is a nonprofit organization. We do not sell products or services, and we do not generate revenue from our software applications. All software developed by
							the society is provided free of charge to the public for educational and social benefit.
						</p>
					</section>

					{/* Privacy */}
					<section className={styles.section}>
						<span className={styles.sectionLabel}>Privacy</span>
						<h2 className={styles.sectionTitle}>Privacy Policy (Contact Form)</h2>
						<p>When you contact us through our website, we collect your name, email address, and the content of your message. This information is used solely to respond to your inquiry.</p>
						<ul className={styles.privacyList}>
							{privacyPoints.map((point) => (
								<li key={point}>{point}</li>
							))}
						</ul>
					</section>

					{/* Compliance */}
					<section className={styles.section}>
						<span className={styles.sectionLabel}>Compliance</span>
						<h2 className={styles.sectionTitle}>Compliance</h2>
						<p>
							This website and the organization it represents are designed to be fully compliant with the requirements of the Alberta Societies Act and major digital distribution platform policies for
							nonprofit organizations.
						</p>
					</section>
				</div>
			</div>
		</div>
	)
}
