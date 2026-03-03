import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend only if API key is present to avoid build errors
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: Request) {
	try {
		const { name, email, message, website_url } = await req.json()

		// Honeypot check
		if (website_url) {
			console.log("Honeypot filled, returning fake success")
			return NextResponse.json({ success: true })
		}

		if (!name || !email || !message) {
			return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
		}

		if (!resend) {
			console.error("RESEND_API_KEY is not set")
			return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
		}

		const senderEmail = process.env.CONTACT_FORM_SENDER_EMAIL || "onboarding@resend.dev"
		const recipientEmail = process.env.CONTACT_FORM_RECIPIENT_EMAIL

		if (!recipientEmail) {
			console.error("CONTACT_FORM_RECIPIENT_EMAIL is not set")
			return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
		}

		// Send both emails simultaneously
		const [adminResult, userResult] = await Promise.all([
			// 1. Admin alert email
			resend.emails.send({
				from: `Atlas Contact <${senderEmail}>`,
				to: recipientEmail,
				replyTo: email,
				subject: `New Contact Form Submission from ${name}`,
				text: `Name: ${name}
Email: ${email}

Message:
${message}`,
				html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
			}),
			// 2. Confirmation receipt to user
			resend.emails.send({
				from: `Atlas Educational Society <${senderEmail}>`,
				to: email,
				subject: "We received your message",
				text: `Hi ${name},

Thank you for contacting Atlas Educational Society. We have received your message and will get back to you soon.

Best regards,
Atlas Educational Society`,
				html: `
          <h3>Hello ${name},</h3>
          <p>Thank you for contacting <strong>Atlas Educational Society</strong>.</p>
          <p>We have received your inquiry and our team will get back to you as soon as possible.</p>
          <p>For your records, here is a copy of your message:</p>
          <blockquote style="border-left: 4px solid #004a99; padding-left: 1rem; color: #666;">
            ${message.replace(/\n/g, "<br>")}
          </blockquote>
          <p>Best regards,<br>Atlas Educational Society</p>
        `,
			}),
		])

		if (adminResult.error || userResult.error) {
			console.error("Resend error:", adminResult.error || userResult.error)
			return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
		}

		return NextResponse.json({ success: true })
	} catch (error: any) {
		console.error("API Error:", error)
		return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 })
	}
}
