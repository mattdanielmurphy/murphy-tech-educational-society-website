"use client"

import styles from "./ContactForm.module.css"
import { useState } from "react"

export default function ContactForm() {
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
	const [errorMessage, setErrorMessage] = useState("")

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setStatus("loading")
		setErrorMessage("")

		const formData = new FormData(event.currentTarget)
		const data = {
			name: formData.get("name") as string,
			email: (formData.get("email") as string).trim().replace(/\s/g, ""),
			message: (formData.get("message") as string).trim(),
			website_url: formData.get("website_url") as string, // Honeypot
		}

		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			})

			if (response.ok) {
				setStatus("success")
				;(event.target as HTMLFormElement).reset()
			} else {
				const errorData = await response.json()
				throw new Error(errorData.error || "Failed to send message")
			}
		} catch (error: any) {
			console.error("Contact form error:", error)
			setStatus("error")
			setErrorMessage(error.message || "An unexpected error occurred. Please try again later.")
		}
	}

	return (
		<div className={styles.container}>
			{status === "success" ?
				<div className={styles.successMessage}>
					<div className={styles.successIcon}>✓</div>
					<h3>Thank you for your message!</h3>
					<p>We have received your inquiry and will get back to you as soon as possible.</p>
					<button onClick={() => setStatus("idle")} className={styles.button}>
						Send another message
					</button>
				</div>
			:	<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.field}>
						<label htmlFor='name'>Full Name</label>
						<input type='text' id='name' name='name' required placeholder='John Doe' />
					</div>

					<div className={styles.field}>
						<label htmlFor='email'>Email Address</label>
						<input type='email' id='email' name='email' required placeholder='john@example.com' />
					</div>

					{/* Honeypot field - hidden from users */}
					<div className='visually-hidden'>
						<label htmlFor='website_url'>Website URL (leave blank)</label>
						<input type='text' id='website_url' name='website_url' tabIndex={-1} autoComplete='off' />
					</div>

					<div className={styles.field}>
						<label htmlFor='message'>Message</label>
						<textarea id='message' name='message' required rows={5} placeholder='How can we help you?'></textarea>
					</div>

					{status === "error" && <div className={styles.errorMessage}>{errorMessage}</div>}

					<button type='submit' className={styles.button} disabled={status === "loading"}>
						{status === "loading" ? "Sending..." : "Send Message"}
					</button>
				</form>
			}
		</div>
	)
}
