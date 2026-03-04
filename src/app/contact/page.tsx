import ContactForm from "@/components/ContactForm"
import styles from "./contact.module.css"

const infoItems = [
	{
		icon: "📍",
		title: "Mailing Address",
		content: (
			<address>
				Atlas Educational Society
				<br />
				221 Westbrook Wynd
				<br />
				Fort Saskatchewan, AB T8L 0L6
				<br />
				Canada
			</address>
		),
	},
	{
		icon: "💬",
		title: "General Inquiries",
		content: <p>For questions regarding our mission, board, or upcoming projects, use the form. We respond to all legitimate inquiries within 2–3 business days.</p>,
	},
	{
		icon: "🛠️",
		title: "Software Support",
		content: <p>As all our software is free of charge, support is provided on a best-effort basis. Please include specific details regarding any technical issues.</p>,
	},
]

export default function Contact() {
	return (
		<div className={styles.wrapper}>
			<div className='page-header'>
				<div className='container'>
					<h1>Contact Us</h1>
					<p className='lead'>We value your feedback and inquiries. Reach out any time.</p>
				</div>
			</div>

			<div className='container'>
				<div className={styles.content}>
					{/* Info column */}
					<div className={styles.infoCol}>
						{infoItems.map((item) => (
							<div key={item.title} className={styles.infoItem}>
								<div className={styles.infoIcon}>{item.icon}</div>
								<div>
									<h2 className={styles.infoTitle}>{item.title}</h2>
									<div className={styles.infoContent}>{item.content}</div>
								</div>
							</div>
						))}
					</div>

					{/* Form column */}
					<div className={styles.formColumn}>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	)
}
