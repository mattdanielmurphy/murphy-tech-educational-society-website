import ContactForm from "@/components/ContactForm"
import styles from "./contact.module.css"

export default function Contact() {
	return (
		<div className='container'>
			<header className={styles.header}>
				<h1>Contact Us</h1>
				<p className={styles.lead}>We value your feedback and inquiries.</p>
			</header>

			<div className={styles.content}>
				<div className={styles.info}>
					<section>
						<h2>Mailing Address</h2>
						<p>
							Atlas Educational Society
							<br />
							221 Westbrook Wynd
							<br />
							Fort Saskatchewan, AB T8L 0L6
							<br />
							Canada
						</p>
					</section>

					<section>
						<h2>General Inquiries</h2>
						<p>For questions regarding our mission, board, or upcoming projects, please use the contact form. We strive to respond to all legitimate inquiries within 2-3 business days.</p>
					</section>

					<section>
						<h2>Support</h2>
						<p>As all our software is provided free of charge, support is provided on a best-effort basis. Please include specific details regarding any technical issues or feedback.</p>
					</section>
				</div>

				<div className={styles.formContainer}>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}
