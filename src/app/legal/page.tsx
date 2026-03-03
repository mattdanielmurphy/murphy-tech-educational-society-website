import styles from "./legal.module.css"

export default function Legal() {
	return (
		<div className='container'>
			<header className={styles.header}>
				<h1>Legal & Governance</h1>
				<p className={styles.lead}>Official information regarding the Atlas Educational Society.</p>
			</header>

			<div className={styles.content}>
				<section>
					<h2>Corporate Registry Information</h2>
					<table className={styles.table}>
						<tbody>
							<tr>
								<th>Official Registered Name</th>
								<td>2794788 ALBERTA SOCIETY</td>
							</tr>
							<tr>
								<th>Operating Name</th>
								<td>Atlas Educational Society</td>
							</tr>
							<tr>
								<th>Jurisdiction</th>
								<td>Alberta, Canada</td>
							</tr>
							<tr>
								<th>Governing Legislation</th>
								<td>Societies Act (Alberta)</td>
							</tr>
							<tr>
								<th>Organization Type</th>
								<td>Nonprofit Society</td>
							</tr>
						</tbody>
					</table>
				</section>

				<section>
					<h2>Registered Office Address</h2>
					<p>
						221 Westbrook Wynd
						<br />
						Fort Saskatchewan, AB T8L 0L6
						<br />
						Canada
					</p>
				</section>

				<section>
					<h2>Nonprofit Status</h2>
					<p>
						The Atlas Educational Society is a nonprofit organization. We do not sell products or services, and we do not generate revenue from our software applications. All software developed by the
						society is provided free of charge to the public for educational and social benefit.
					</p>
				</section>

				<section>
					<h2>Privacy Policy (Contact Form)</h2>
					<p>When you contact us through our website, we collect your name, email address, and the content of your message. This information is used solely to respond to your inquiry.</p>
					<ul>
						<li>We do not share your contact information with third parties.</li>
						<li>We do not use your information for marketing purposes.</li>
						<li>All communications are handled with strict confidentiality.</li>
					</ul>
				</section>

				<section>
					<h2>Compliance</h2>
					<p>
						This website and the organization it represents are designed to be fully compliant with the requirements of the Alberta Societies Act and major digital distribution platform policies for
						nonprofit organizations.
					</p>
				</section>
			</div>
		</div>
	)
}
